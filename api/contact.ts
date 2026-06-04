import { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { nom, name, email, societe, company, message, telephone } =
      req.body;

    // Support both French and English field names
    const finalName = nom || name;
    const finalEmail = email;
    const finalCompany = societe || company;
    const finalPhone = telephone || "";
    const finalMessage = message;

    if (!finalName || !finalEmail || !finalMessage) {
      return res.status(400).json({
        error:
          "Missing required fields: nom/name, email, and message are required.",
      });
    }

    // Get API key from environment
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error:
          "RESEND_API_KEY is not configured. Please add it to your environment variables.",
      });
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: "SMP France <contact@smpwood.fr>",
      to: "sarah.b@agence-radiance.fr",
      replyTo: finalEmail,
      subject: `[SMP France] Nouveau message de contact de ${finalName}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${finalName}</p>
        <p><strong>Email :</strong> ${finalEmail}</p>
        ${finalCompany ? `<p><strong>Entreprise :</strong> ${finalCompany}</p>` : ""}
        ${finalPhone ? `<p><strong>Téléphone :</strong> ${finalPhone}</p>` : ""}
        <hr />
        <h3>Message :</h3>
        <p>${finalMessage.replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.json({ success: true, data });
  } catch (error: any) {
    console.error("Error sending contact email with Resend:", error);
    return res.status(500).json({
      error:
        error.message ||
        "Failed to send email. Please verify if RESEND_API_KEY is properly set up.",
    });
  }
}
