import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const PORT = 3000;

// Lazy initialization helper for Resend client to prevent startup crashes
let resendClient: Resend | null = null;
function getResend() {
  if (!resendClient) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error("RESEND_API_KEY is not configured in the environment variables.");
    }
    resendClient = new Resend(key);
  }
  return resendClient;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // Check configuration status endpoint
  app.get("/api/config-status", (req, res) => {
    const isResendConfigured = !!process.env.RESEND_API_KEY;
    res.json({
      status: "ok",
      resendConfigured: isResendConfigured,
      message: isResendConfigured
        ? "Resend is successfully configured with an API key."
        : "Resend API key is missing. Please add RESEND_API_KEY to your environment variables or secrets.",
    });
  });

  // Contact form API route
  app.post("/api/contact", async (req, res) => {
    try {
      const { nom, name, email, societe, company, message, telephone } = req.body;

      // Support both French forms fields and original API fields
      const finalName = nom || name;
      const finalEmail = email;
      const finalCompany = societe || company;
      const finalPhone = telephone || "";
      const finalMessage = message;

      if (!finalName || !finalEmail || !finalMessage) {
        return res.status(400).json({ error: "Missing required fields: nom/name, email, and message are required." });
      }

      const resend = getResend();

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

      res.json({ success: true, data });
    } catch (error: any) {
      console.error("Error sending contact email with Resend:", error);
      res.status(500).json({
        error: error.message || "Failed to send email. Please verify if RESEND_API_KEY is properly set up.",
      });
    }
  });

  // Quote demand API route
  app.post("/api/quote", async (req, res) => {
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
      } = req.body;

      const finalCompany = societe || company;
      const finalContact = nom || contact;
      const finalEmail = email;
      const finalPhone = telephone || phone;
      const finalProduct = produit || product;
      const finalLocation = localisation || delivery;
      const finalMessage = message;

      if (!finalCompany || !finalContact || !finalEmail || !finalProduct) {
        return res.status(400).json({
          error: "Missing required fields: societe, nom/contact, email, and produit are required.",
        });
      }

      const resend = getResend();

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

      res.json({ success: true, data });
    } catch (error: any) {
      console.error("Error sending quote request email with Resend:", error);
      res.status(500).json({
        error: error.message || "Failed to send email. Please verify if RESEND_API_KEY is properly set up.",
      });
    }
  });

  // Vite middleware & Static asset serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Start Server on Port 3000
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start backend server:", error);
});
