# 🔑 **SmileCare API Keys Setup Guide**

## **⏱️ Time Needed: ~30 minutes**

This guide walks you through getting EVERY key you need. Follow in order.

---

## **STEP 1: OpenAI API Key** ⭐ (MOST IMPORTANT - 5 MIN)

### Why You Need It
Your chatbot needs to talk to real AI. Right now it's just pattern matching. This makes it actually smart.

### How to Get

1. **Open:** https://platform.openai.com/account/api-keys
2. **Sign up/Login** with email
3. **Click:** "Create new secret key"
4. **Copy:** The full key (looks like `sk-proj-abc123...`)
5. **Paste** into `.env.local`:
   ```
   VITE_OPENAI_API_KEY=sk-proj-your_key_here
   ```

### Add Payment (Required)
- Go to https://platform.openai.com/account/billing/overview
- Click "Add to paid account"
- Add credit card
- Set usage limit to $10/month (to avoid surprises)

### Cost
- ~$0.0015 per message
- 100 bookings = $0.15 (basically free)

---

## **STEP 2: Twilio WhatsApp** 📱 (10 MIN)

### Why You Need It
Owner needs instant WhatsApp notification when someone books an appointment.

### How to Get

1. **Open:** https://www.twilio.com/console
2. **Sign up** (free account)
3. **Copy these TWO things:**
   - **Account SID** (looks like: `ACxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)
   - **Auth Token** (looks like: `xxxxxxxxxxxxxxxxxxxxxxxxxxxx`)

4. **Paste into `.env.local`:**
   ```
   VITE_TWILIO_ACCOUNT_SID=ACxxxx...
   VITE_TWILIO_AUTH_TOKEN=xxxx...
   ```

### Set Up WhatsApp Sandbox (For Testing - FREE)
1. In Twilio console, find **"Messaging" → "Try it out" → "Send a WhatsApp message"**
2. Click **"Start with Sandbox for WhatsApp"**
3. You'll see a sandbox number and a **join code** (e.g., "join forest")
4. **Owner must text** this join code to the sandbox number to start receiving messages

### For Owner's Phone
- Get owner's WhatsApp number (e.g., +923001234567)
- Paste into `.env.local`:
  ```
  VITE_OWNER_WHATSAPP=whatsapp:+923001234567
  ```

### Cost
- **FREE in sandbox** (for testing, no charges)
- Later: $0.079 per WhatsApp message (very cheap)

---

## **STEP 3: Make.com Webhook** 🔗 (10 MIN)

### Why You Need It
Automatically sends appointment data to Google Sheets. Owner gets a CRM spreadsheet for free.

### How to Get

1. **Open:** https://www.make.com
2. **Sign up** (free)
3. **Create New Scenario:**
   - Click "Create a new scenario"
   - Add trigger: **"Webhook"** (search for it)
   - Copy the webhook URL (looks like: `https://hook.make.com/abc123...`)
   - Click "Save"

4. **Paste into `.env.local`:**
   ```
   VITE_MAKE_WEBHOOK_URL=https://hook.make.com/abc123...
   ```

### Connect to Google Sheets (Optional for Now)
- Add action: **"Google Sheets" → "Add a row"**
- Connect your Google account
- Select/create a spreadsheet: "SmileCare Appointments"
- Map fields: Name, Service, Date, Time

### Cost
- FREE tier: 1,000 operations/month (you won't exceed this)

---

## **STEP 4: Google Sheets** 📊 (5 MIN)

### Why You Need It
Permanent storage for all appointment data. Owner can generate reports, see trends.

### How to Get

1. **Create new sheet:** https://sheets.google.com
2. **Name it:** "SmileCare Appointments"
3. **Add columns:**
   - A: Name
   - B: Service
   - C: Preferred Time
   - D: Date Booked
   - E: Phone Number

4. **Get the Sheet ID:**
   - Look at URL: `https://docs.google.com/spreadsheets/d/ABC123DEF456.../edit`
   - Copy the ID part: `ABC123DEF456...`

5. **Paste into `.env.local`:**
   ```
   VITE_GOOGLE_SHEET_ID=ABC123DEF456...
   ```

### Cost
- FREE

---

## **STEP 5: Google Analytics** 📈 (5 MIN - DO LATER)

### Why You Need It
Track conversions: "5 people booked appointments today" - good for your portfolio.

### How to Get (Later)

1. **Open:** https://analytics.google.com
2. **Create new property:**
   - Add your website domain
   - Get Measurement ID (looks like: `G-XXXXXXXXXX`)

3. **Paste into `.env.local`:**
   ```
   VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```

### Cost
- FREE

---

## **✅ YOUR .env.local Should Look Like**

```
VITE_OPENAI_API_KEY=sk-proj-abc123def456...
VITE_TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_TWILIO_PHONE_NUMBER=whatsapp:+14155238886
VITE_OWNER_WHATSAPP=whatsapp:+923001234567
VITE_MAKE_WEBHOOK_URL=https://hook.make.com/abc123...
VITE_GOOGLE_SHEET_ID=1a2b3c4d5e6f7g8h9i0j
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

---

## **🚨 SECURITY CHECKLIST**

- ✅ `.env.local` is in `.gitignore` (won't commit to GitHub)
- ✅ Keys are secret (never share them)
- ✅ Set billing limits on OpenAI (to avoid surprises)
- ✅ Owner has joined Twilio sandbox for WhatsApp

---

## **⚠️ WHAT NOT TO DO**

❌ Don't post `.env.local` on GitHub  
❌ Don't share keys in Slack/email  
❌ Don't commit keys to version control  
❌ Don't leave billing limits unset  

---

## **NEXT STEPS**

Once you have all keys:
1. Fill in `.env.local`
2. Restart dev server: `npm run dev`
3. Test chatbot with real OpenAI responses
4. We'll integrate WhatsApp notifications next

---

## **TROUBLESHOOTING**

| Problem | Solution |
|---------|----------|
| "Invalid API key" | Copy entire key from OpenAI dashboard |
| "Twilio auth failed" | Make sure Account SID & Auth Token are correct |
| "Webhook not working" | Verify webhook URL from Make.com console |
| "No WhatsApp messages" | Owner must text "join code" to sandbox number first |

---

**Total Setup Time: ~30 minutes**  
**Cost: FREE (except OpenAI which you control)**

Let me know when you've filled in the keys! 🚀
