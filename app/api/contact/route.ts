import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { nom, name, email, societe, company, message, telephone } =
      await req.json();

    // Support both French and English field names
    const finalName = nom || name;
    const finalEmail = email;
    const finalCompany = societe || company;
    const finalPhone = telephone || "";
    const finalMessage = message;

    if (!finalName || !finalEmail || !finalMessage) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: nom/name, email, and message are required.",
        },
        { status: 400 }
      );
    }

    // Get API key from environment
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "RESEND_API_KEY is not configured. Please add it to your environment variables.",
        },
        { status: 500 }
      );
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

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Error sending contact email with Resend:", error);
    return NextResponse.json(
      {
        error:
          error.message ||
          "Failed to send email. Please verify if RESEND_API_KEY is properly set up.",
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
