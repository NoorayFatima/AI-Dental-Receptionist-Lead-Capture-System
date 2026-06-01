export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {

    const lead = req.body;

    console.log("NEW LEAD:", lead);

    return res.status(200).json({
      success: true,
      message: "Lead received",
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
    });

  }

}