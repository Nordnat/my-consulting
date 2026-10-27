import { NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email-service'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message, consent, company } = body

    // 1. Ochrona antyspamowa Honeypot (pole "company" ukryte przed ludźmi)
    // Jeśli bot wypełni to pole, zwracamy symulację sukcesu, ale ignorujemy wiadomość
    if (company && typeof company === 'string' && company.trim().length > 0) {
      console.warn('[Honeypot Triggered] Zablokowano bota próbującego wysłać spam.')
      return NextResponse.json({ ok: true })
    }

    // 2. Walidacja obecności wymaganych pól
    if (!name?.trim() || !email?.trim() || !message?.trim() || !consent) {
      return NextResponse.json(
        { error: 'Wszystkie wymagane pola oraz zgoda muszą zostać uzupełnione.' },
        { status: 400 }
      )
    }

    const trimmedName = name.trim().slice(0, 100)
    const trimmedEmail = email.trim().slice(0, 150)
    const trimmedMessage = message.trim().slice(0, 5000)

    // 3. Walidacja formatu e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Podano niepoprawny adres e-mail.' },
        { status: 400 }
      )
    }

    // 4. Minimalna długość wiadomości
    if (trimmedMessage.length < 5) {
      return NextResponse.json(
        { error: 'Wiadomość jest zbyt krótka (minimum 5 znaków).' },
        { status: 400 }
      )
    }

    // 5. Wysłanie e-maila przez skonfigurowany serwis (Resend / SMTP / Web3Forms / Symulacja)
    const result = await sendContactEmail({
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    })

    if (!result.success) {
      return NextResponse.json(
        {
          error:
            result.error ||
            'Nie udało się wysłać wiadomości przez serwer pocztowy. Spróbuj ponownie za chwilę lub skorzystaj z alternatywnego kontaktu.',
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      ok: true,
      provider: result.provider,
    })
  } catch (error) {
    console.error('Błąd w API formularza kontaktowego:', error)
    return NextResponse.json(
      { error: 'Wystąpił nieoczekiwany błąd podczas przetwarzania wiadomości. Spróbuj ponownie.' },
      { status: 500 }
    )
  }
}
