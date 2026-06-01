const processedLeads = new Set();
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {

    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const formattedHistory = history
      .map(
        (msg) =>
          `${msg.sender === "user" ? "Patient" : "Assistant"}: ${msg.text}`
      )
      .join("\n");

    const prompt = `
You are the AI receptionist for SmileCare Dental Clinic.

ROLE:
You help patients inquire about services and request appointments professionally.

PERSONALITY:
- Warm
- Human
- Calm
- Professional
- Short responses

RULES:
- Keep responses under 2 short paragraphs.
- Never sound robotic.
- Never over-explain.
- Ask only ONE missing detail at a time.
- Never ask for already collected info.
- Never guarantee appointment availability.
- Say:
"Our team will confirm your requested slot shortly."
- Convert vague dates into real dates.
- Convert vague times into proper format.
- Today current date is: ${new Date().toDateString()}
- Example:
  "tomorrow" → "14 May 2026"
  "next monday" → actual next monday date
  "10am" → "10:00 AM"

COLLECT:
1. Full Name
2. Phone Number
3. Service
4. Preferred Date
5. Preferred Time

SERVICES:
- General Checkup
- Teeth Whitening
- Dental Implants
- Root Canal Treatment
- Braces / Orthodontics
- Cosmetic Dentistry
- Tooth Extraction
- Emergency Dental Care

BOOKING FLOW:
- Understand patient need
- Ask missing details one by one
- Once all details are collected:
  - summarize shortly
  - confirm request submitted
  - output lead tag

IMPORTANT RULE:

You MUST ALWAYS output this format when ALL 5 fields are present:

LEAD_CAPTURED|FULL_NAME|PHONE|SERVICE|DATE|TIME

No exceptions.
No extra text after it.
No formatting changes.
If even 1 field is missing → DO NOT output LEAD_CAPTURED.

Conversation History:
${formattedHistory}

Current Patient Message:
${message}
`;

    const result = await model.generateContent(prompt);

    const reply = result.response.text();

    let leadData = null;

   if (reply.includes("LEAD_CAPTURED|")) {

  const leadMatch = reply
    .replace(/\n/g, "")
    .match(/LEAD_CAPTURED\|([^|]*)\|([^|]*)\|([^|]*)\|([^|]*)\|([^|]*)/);

  if (leadMatch) {

    const leadData = {
      name: leadMatch[1].trim(),
      phone: leadMatch[2].trim(),
      service: leadMatch[3].trim(),
      date: leadMatch[4].trim(),
      time: leadMatch[5].trim(),
    };

    // 🔥 DEDUP KEY (VERY IMPORTANT)
    const leadKey = `${leadData.phone}-${leadData.date}-${leadData.time}`;

    if (!processedLeads.has(leadKey)) {

      processedLeads.add(leadKey);

      console.log("✅ LEAD CAPTURED:", leadData);

      try {
        await fetch(process.env.MAKE_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(leadData),
        });

        console.log("✅ Sent to Make.com");

      } catch (err) {
        console.log("❌ Webhook Error:", err);
      }

    } else {
      console.log("⚠️ Duplicate lead ignored");
    }
  }
}

    const cleanedReply = reply.replace(
      /LEAD_CAPTURED\|.*$/s,
      ""
    ).trim();

    return res.status(200).json({
      success: true,
      reply: cleanedReply,
      leadCaptured: !!leadData,
      leadData,
    });

  }
  catch (error) {

    console.error("Gemini Error:", error);

    if (error.status === 429) {

      return res.status(429).json({
        success: false,
        reply:
          "Our AI assistant is currently experiencing high traffic. Please try again in a few moments. In the meantime, if you have an urgent inquiry, please call us directly at (123) 456-7890. We apologize for the inconvenience.",
      });

    }

    return res.status(500).json({
      success: false,
      reply:
        "Sorry, something went wrong. Please try again shortly.",
    });

  }

}