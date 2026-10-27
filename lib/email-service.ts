import nodemailer from 'nodemailer'
import { SITE } from '@/lib/site-config'

export type SendContactEmailParams = {
  name: string
  email: string
  message: string
}

export type SendContactEmailResult = {
  success: boolean
  provider: 'resend' | 'smtp' | 'web3forms' | 'simulated'
  messageId?: string
  error?: string
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function buildHtmlTemplate(name: string, email: string, message: string): string {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')
  const dateStr = new Date().toLocaleString('pl-PL', {
    timeZone: 'Europe/Warsaw',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return `
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="utf-8">
  <title>Nowa wiadomość z formularza kontaktowego</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; padding: 24px; margin: 0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-collapse: collapse;">
    <tr>
      <td style="padding: 24px 32px; background-color: #0f172a; color: #ffffff;">
        <p style="margin: 0; font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #818cf8;">rafalkamieniarz.com</p>
        <h1 style="margin: 8px 0 0; font-size: 20px; font-weight: 600;">Nowa wiadomość z formularza kontaktowego</h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px; border-bottom: 1px solid #e2e8f0; padding-bottom: 20px;">
          <tr>
            <td style="padding-bottom: 8px; width: 140px; font-size: 13px; font-weight: 600; color: #64748b;">Nadawca:</td>
            <td style="padding-bottom: 8px; font-size: 14px; font-weight: 600; color: #0f172a;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding-bottom: 8px; width: 140px; font-size: 13px; font-weight: 600; color: #64748b;">Adres e-mail:</td>
            <td style="padding-bottom: 8px; font-size: 14px; color: #4f46e5;"><a href="mailto:${safeEmail}" style="color: #4f46e5; text-decoration: none;">${safeEmail}</a></td>
          </tr>
          <tr>
            <td style="width: 140px; font-size: 13px; font-weight: 600; color: #64748b;">Data wysłania:</td>
            <td style="font-size: 13px; color: #64748b;">${dateStr}</td>
          </tr>
        </table>

        <div style="margin-bottom: 28px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; margin: 0 0 12px;">Treść wiadomości:</h2>
          <div style="background-color: #f8fafc; border-left: 4px solid #4f46e5; padding: 16px 20px; font-size: 14px; line-height: 1.6; color: #1e293b;">
            ${safeMessage}
          </div>
        </div>

        <div style="text-align: center; margin-top: 32px;">
          <a href="mailto:${safeEmail}?subject=Re:%20Wiadomo%C5%9B%C4%87%20z%20rafalkamieniarz.com" style="display: inline-block; background-color: #4f46e5; color: #ffffff; font-size: 13px; font-weight: 600; text-decoration: none; padding: 12px 24px;">
            Odpowiedz nadawcy (${safeName})
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding: 16px 32px; background-color: #f1f5f9; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">
        Wiadomość wysłana za pośrednictwem formularza na stronie <a href="${SITE.url}" style="color: #64748b;">${SITE.domain}</a>. Nadawca wyraził zgodę na kontakt.
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

function buildTextTemplate(name: string, email: string, message: string): string {
  const dateStr = new Date().toLocaleString('pl-PL', {
    timeZone: 'Europe/Warsaw',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return [
    `Nowa wiadomość z formularza kontaktowego na ${SITE.domain}`,
    `----------------------------------------------------`,
    `Nadawca: ${name}`,
    `E-mail: ${email}`,
    `Data: ${dateStr}`,
    ``,
    `Treść wiadomości:`,
    message,
    ``,
    `----------------------------------------------------`,
    `Odpowiedz na: ${email}`,
  ].join('\n')
}

export async function sendContactEmail({
  name,
  email,
  message,
}: SendContactEmailParams): Promise<SendContactEmailResult> {
  const recipient = process.env.CONTACT_EMAIL_TO || SITE.email
  const subject = `[${SITE.domain}] Wiadomość od ${name}`
  const htmlContent = buildHtmlTemplate(name, email, message)
  const textContent = buildTextTemplate(name, email, message)

  // 1. Sprawdzenie Resend API (jeśli jest skonfigurowany RESEND_API_KEY)
  const resendApiKey = process.env.RESEND_API_KEY
  if (resendApiKey) {
    try {
      const fromEmail = process.env.EMAIL_FROM || `Formularz ${SITE.domain} <onboarding@resend.dev>`
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [recipient],
          reply_to: email,
          subject,
          text: textContent,
          html: htmlContent,
        }),
      })

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}))
        const errMsg = errJson?.message || response.statusText
        console.error('[Resend Error]', errMsg)
        throw new Error(`Błąd Resend: ${errMsg}`)
      }

      const data = await response.json()
      console.log('[Resend Success]', data?.id)
      return { success: true, provider: 'resend', messageId: data?.id }
    } catch (err) {
      console.error('[Email Service] Błąd wysyłki przez Resend:', err)
      return {
        success: false,
        provider: 'resend',
        error: err instanceof Error ? err.message : 'Błąd wysyłki Resend',
      }
    }
  }

  // 2. Sprawdzenie SMTP / Nodemailer (jeśli jest skonfigurowany SMTP_HOST oraz SMTP_USER)
  const smtpHost = process.env.SMTP_HOST
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  if (smtpHost && smtpUser && smtpPass) {
    try {
      const port = Number(process.env.SMTP_PORT || 587)
      const secure = process.env.SMTP_SECURE === 'true' || port === 465
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port,
        secure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })

      const fromAddress = process.env.EMAIL_FROM || `"${name} (kontakt)" <${smtpUser}>`
      const info = await transporter.sendMail({
        from: fromAddress,
        to: recipient,
        replyTo: `"${name}" <${email}>`,
        subject,
        text: textContent,
        html: htmlContent,
      })

      console.log('[SMTP Success]', info.messageId)
      return { success: true, provider: 'smtp', messageId: info.messageId }
    } catch (err) {
      console.error('[Email Service] Błąd wysyłki przez SMTP:', err)
      return {
        success: false,
        provider: 'smtp',
        error: err instanceof Error ? err.message : 'Błąd połączenia SMTP',
      }
    }
  }

  // 3. Sprawdzenie Web3Forms (jeśli jest skonfigurowany klucz WEB3FORMS_ACCESS_KEY)
  const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY
  if (web3FormsKey) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name,
          email,
          message,
          subject,
          from_name: `Formularz ${SITE.domain}`,
          replyto: email,
        }),
      })

      const data = await response.json()
      if (!data.success) {
        throw new Error(data.message || 'Błąd Web3Forms')
      }

      console.log('[Web3Forms Success]')
      return { success: true, provider: 'web3forms' }
    } catch (err) {
      console.error('[Email Service] Błąd wysyłki przez Web3Forms:', err)
      return {
        success: false,
        provider: 'web3forms',
        error: err instanceof Error ? err.message : 'Błąd Web3Forms',
      }
    }
  }

  // 4. Tryb lokalny / Symulacja (gdy brak kluczy w .env)
  // Pozwala na bezpieczne przetestowanie formularza w środowisku dev
  console.log(`
================================================================================
[FORMULARZ KONTAKTOWY — SYMULACJA WYSYŁKI E-MAIL]
Do: ${recipient}
Od: ${name} <${email}>
Temat: ${subject}
Data: ${new Date().toISOString()}

Treść wiadomości:
--------------------------------------------------------------------------------
${message}
--------------------------------------------------------------------------------
UWAGA: Aby wiadomość trafiła na prawdziwą skrzynkę pocztową (${recipient}),
skonfiguruj dane w pliku .env.local (np. RESEND_API_KEY lub dane SMTP).
Szczegóły konfiguracji znajdziesz w pliku .env.example.
================================================================================
  `.trim())

  return {
    success: true,
    provider: 'simulated',
  }
}
