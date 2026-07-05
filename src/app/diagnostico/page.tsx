'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const questions = [
  {
    id: 1,
    category: 'Observador',
    icon: '🪞',
    question: '¿Qué situación, hábito o patrón recurrente en tu vida sabes que necesita transformarse — y por qué has postergado esa transformación?',
    placeholder: 'Describe con honestidad lo que ves en ti misma...',
    hint: 'No busques la respuesta "correcta". Busca la respuesta verdadera.'
  },
  {
    id: 2,
    category: 'Sistema',
    icon: '⏳',
    question: 'Si continúas exactamente como estás hoy, ¿qué costo emocional, relacional o profesional estarás pagando en los próximos 12 meses?',
    placeholder: 'Visualiza tu vida dentro de un año si nada cambia...',
    hint: 'El costo de la inacción casi siempre es mayor de lo que admitimos.'
  },
  {
    id: 3,
    category: 'Consciencia',
    icon: '🔍',
    question: 'Recuerda una decisión reciente importante: ¿actuaste desde la automática o desde la consciencia? ¿Qué observas sobre tu forma de responder?',
    placeholder: 'Trae aquí esa decisión específica y cómo la tomaste...',
    hint: 'La diferencia entre reaccionar y elegir es donde nace el cambio.'
  },
  {
    id: 4,
    category: 'Compromiso',
    icon: '🌿',
    question: '¿Qué estás dispuesta a soltar, desaprender o confrontar sobre ti misma para que el cambio sea real y sostenible?',
    placeholder: 'Nombra aquello que tendrías que dejar ir...',
    hint: 'El cambio no exige hacer más. Exige soltar lo que ya no sirve.'
  },
  {
    id: 5,
    category: 'Acción',
    icon: '🌸',
    question: 'Si este espacio te ofrece la oportunidad de rediseñar tu observador y abrir futuros alternativos, ¿qué te impediría comprometerte hoy con ese proceso?',
    placeholder: 'Reconoce honestamente tu barrera real...',
    hint: 'Lo que se interpone rara vez es externo. Casi siempre es una conversación interna.'
  }
]

export default function DiagnosticoPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>(Array(5).fill(''))
  const [submitted, setSubmitted] = useState(false)

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = () => {
    setSubmitted(true)
    
    // Build WhatsApp message with all answers
    const message = questions.map((q, i) => {
      return `${q.icon} *Pregunta ${i + 1} — ${q.category}*\n\n${q.question}\n\n_R: ${answers[i] || 'Sin respuesta'}_`
    }).join('\n\n━━━━━━━━━━━\n\n')

    const waMessage = `Hola Mariela, completé el diagnóstico de ReEmpoderate. Estas son mis respuestas:\n\n${message}`
    
    // Open WhatsApp with the answers
    window.open(
      `https://wa.me/13217329993?text=${encodeURIComponent(waMessage)}`,
      '_blank'
    )
  }

  const canProceed = answers[currentStep]?.trim().length >= 20
  const progress = ((currentStep + 1) / 5) * 100

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream via-cream-light to-bloom/5 flex items-center justify-center px-6 pt-24 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="text-6xl">🌸</div>
          </div>
          <h1 className="font-playfair text-3xl md:text-4xl text-ink font-bold mb-6">
            Tu reflexión ya está en camino
          </h1>
          <p className="text-lg text-ink/70 leading-relaxed mb-8">
            Hemos abierto WhatsApp con tus respuestas. Este primer ejercicio de observación es el inicio de un proceso profundo de transformación consciente.
          </p>
          <p className="text-base text-ink/60 italic mb-10">
            "El cambio no comienza cuando actúas diferente. Comienza cuando te ves diferente."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="bg-bloom-deep text-white px-8 py-4 rounded-2xl font-medium hover:bg-bloom transition shadow-lg shadow-bloom/25"
            >
              Volver al inicio
            </Link>
            <button
              onClick={() => {
                setSubmitted(false)
                setCurrentStep(0)
                setAnswers(Array(5).fill(''))
              }}
              className="border border-ink text-ink px-8 py-4 rounded-2xl font-medium hover:bg-ink/5 transition"
            >
              Reintentar el diagnóstico
            </button>
          </div>
        </div>
      </div>
    )
  }

  const q = questions[currentStep]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream-light to-bloom/5 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="ReEmpoderate"
              width={120}
              height={120}
              className="w-24 h-24 object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="font-playfair text-3xl md:text-4xl text-ink font-bold mb-3">
            Diagnóstico de Autotransformación
          </h1>
          <p className="text-ink/60 text-base max-w-xl mx-auto">
            5 preguntas para observar tu observador. Responde con honestidad — no hay respuestas correctas, solo respuestas verdaderas.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-ink/50 font-medium">
              Pregunta {currentStep + 1} de 5
            </span>
            <span className="text-sm text-bloom-deep font-medium">
              {Math.round(progress)}% completado
            </span>
          </div>
          <div className="h-2 bg-cream-dark rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-bloom to-bloom-deep rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg shadow-bloom/5 border border-bloom/10">
          {/* Category badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">{q.icon}</span>
            <span className="inline-block bg-bloom/10 text-bloom-deep text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full">
              {q.category}
            </span>
          </div>

          {/* Question */}
          <h2 className="font-playfair text-xl md:text-2xl text-ink font-bold leading-relaxed mb-4">
            {q.question}
          </h2>

          {/* Hint */}
          <p className="text-sm text-bloom-deep/70 italic mb-6">
            {q.hint}
          </p>

          {/* Textarea */}
          <textarea
            value={answers[currentStep]}
            onChange={(e) => {
              const newAnswers = [...answers]
              newAnswers[currentStep] = e.target.value
              setAnswers(newAnswers)
            }}
            placeholder={q.placeholder}
            rows={5}
            className="w-full bg-cream/50 border border-bloom/15 rounded-2xl p-5 text-ink text-base leading-relaxed focus:outline-none focus:border-bloom-deep focus:ring-2 focus:ring-bloom/20 transition resize-none placeholder:text-ink/30"
          />

          {/* Character counter */}
          <div className="text-right mt-2">
            <span className={`text-xs ${canProceed ? 'text-mint' : 'text-ink/30'}`}>
              {answers[currentStep]?.trim().length || 0} caracteres (mínimo 20)
            </span>
          </div>

          {/* Step indicators */}
          <div className="flex items-center justify-center gap-2 mt-8 mb-6">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentStep
                    ? 'w-8 bg-bloom-deep'
                    : i < currentStep
                    ? 'bg-bloom'
                    : 'bg-cream-dark'
                }`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="text-ink/50 hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed transition text-sm font-medium px-4 py-2"
            >
              ← Anterior
            </button>

            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                disabled={!canProceed}
                className="bg-bloom-deep text-white px-8 py-3 rounded-2xl font-medium hover:bg-bloom transition disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-bloom/25"
              >
                Siguiente pregunta →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed}
                className="bg-bloom-deep text-white px-8 py-3 rounded-2xl font-medium hover:bg-bloom transition disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-bloom/25 inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar a Mariela
              </button>
            )}
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-ink/40 mt-8 max-w-md mx-auto">
          Al completar este diagnóstico, tus respuestas se enviarán directamente a Mariela vía WhatsApp para iniciar tu conversación de transformación.
        </p>
      </div>
    </div>
  )
}
