import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured in the environment variables.');
  }
  return new Resend(apiKey);
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { nom, societe, email, telephone, produit, quantite, localisation, message } = req.body;

    if (!nom || !email || !societe) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const resend = getResend();

    const data = await resend.emails.send({
      from: 'SMP France <contact@smpwood.fr>',
      to: 'sarah.b@agence-radiance.fr',
      replyTo: email,
      subject: `[SMP France] Devis - ${produit || 'Non spécifié'} de ${nom}`,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Entreprise :</strong> ${societe}</p>
        <p><strong>Téléphone :</strong> ${telephone || 'Non fourni'}</p>
        <p><strong>Produit :</strong> ${produit || 'Non spécifié'}</p>
        ${quantite ? `<p><strong>Quantité :</strong> ${quantite}</p>` : ''}
        ${localisation ? `<p><strong>Secteur géographique :</strong> ${localisation}</p>` : ''}
        <hr />
        <h3>Message :</h3>
        <p>${message ? message.replace(/\n/g, '<br />') : 'Aucun message'}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('Error sending quote email:', error);
    return res.status(500).json({
      error: error.message || 'Failed to send email',
    });
  }
}
