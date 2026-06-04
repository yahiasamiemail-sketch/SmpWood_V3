export default function handler(req: any, res: any) {
  const isResendConfigured = !!process.env.RESEND_API_KEY;
  res.json({
    status: "ok",
    resendConfigured: isResendConfigured,
    message: isResendConfigured
      ? "Resend is successfully configured with an API key."
      : "Resend API key is missing. Please add RESEND_API_KEY to your environment variables.",
  });
}
