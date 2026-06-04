import { Resend } from "resend";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { nom, name, email, societe, company, message, telephone } = req.body;

    const finalName = nom || name;
    const finalEmail = email;
    const finalCompany = societe || company;
    const finalPhone = telephone || "";
    const finalMessage = message;

    console.log("[v0] Contact form received:", { finalName, finalEmail, finalCompany, finalPhone });

    if (!finalName || !finalEmail || !finalMessage) {
      return res.status(400).json({ error: "Missing required fields: nom/name, email, and message are required." });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[v0] RESEND_API_KEY not configured");
      return res.status(500).json({ error: "Email service not configured" });
    }

    const resend = new Resend(apiKey);
    console.log("[v0] Resend client initialized, attempting to send email...");

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

    console.log("[v0] Email sent successfully:", data);
    res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error("[v0] Error sending contact email with Resend:", error.message);
    console.error("[v0] Full error:", error);
    res.status(500).json({
      error: error.message || "Failed to send email. Please verify if RESEND_API_KEY is properly set up.",
    });
  }
}
