import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const {
      nom,
      contact,
      societe,
      company,
      email,
      phone,
      telephone,
      produit,
      product,
      quantite,
      quantity,
      frequency,
      delivery,
      localisation,
      message,
    } = await req.json();

    const finalCompany = societe || company;
    const finalContact = nom || contact;
    const finalEmail = email;
    const finalPhone = telephone || phone;
    const finalProduct = produit || product;
    const finalLocation = localisation || delivery;
    const finalMessage = message;

    if (!finalCompany || !finalContact || !finalEmail || !finalProduct) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: societe, nom/contact, email, and produit are required.",
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
      subject: `[SMP France] Nouvelle demande de devis - ${finalCompany}`,
      html: `
        <h2>Nouvelle demande de devis</h2>
        
        <h3>Informations entreprise</h3>
        <p><strong>Entreprise :</strong> ${finalCompany}</p>
        <p><strong>Contact :</strong> ${finalContact}</p>
        <p><strong>Email :</strong> ${finalEmail}</p>
        ${finalPhone ? `<p><strong>Téléphone :</strong> ${finalPhone}</p>` : ""}
        
        <hr />
        
        <h3>Détails de la demande</h3>
        <p><strong>Produit :</strong> ${finalProduct}</p>
        ${quantite || quantity ? `<p><strong>Quantité estimée :</strong> ${quantite || quantity}</p>` : ""}
        ${frequency ? `<p><strong>Fréquence :</strong> ${frequency}</p>` : ""}
        ${finalLocation ? `<p><strong>Lieu de livraison :</strong> ${finalLocation}</p>` : ""}
        
        ${finalMessage ? `
        <hr />
        <h3>Message complémentaire :</h3>
        <p>${finalMessage.replace(/\n/g, "<br />")}</p>
        ` : ""}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Error sending quote request email with Resend:", error);
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
