'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Message = {
  role: 'user' | 'coach'
  text: string
  step?: number
}

const coachingQuestions = [
  {
    question: "¿Qué te lleva a buscar este espacio de transformación en este momento de tu vida, y qué observas sobre la urgencia que sientes?",
    hint: "Tómate un momento. Respira. Escribe desde la honestidad, no desde lo que crees que deberías decir.",
  },
  {
    question: "Si imaginas que ya has alcanzado ese cambio que buscas... ¿quién serías tú, siendo diferente a quien eres hoy?",
    hint: "No describas lo que tendrías. Describe quién serías siendo. La diferencia es esencial.",
  },
  {
    question: "¿Qué estarías dispuesta a soltar o a confrontar de ti misma para que esa transformación sea real y sostenible en el tiempo?",
    hint: "El cambio sostenible siempre exige soltar algo. Identificar aquello es el primer acto de poder.",
  },
]

const WHATSAPP_NUMBER = "13217329993"

export default function DiagnosticoPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'coach',
      text: "Bienvenida a ReEmpoderate. Este es un espacio de indagación consciente.\n\nEscribe un mensaje inicial sobre lo que te trae aquí. Te acompañaré con tres preguntas, una a la vez.",
    },
  ])
  const [input, setInput] = useState('')
  const [step, setStep] = useState(0) // 0 = waiting for initial message, 1-3 = waiting for answer to question 1-3
  const [isTyping, setIsTyping] = useState(false)
  const [completed, setCompleted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const buildWhatsAppMessage = (allMessages: Message[]) => {
    let msg = "🌸 *Diagnóstico ReEmpoderate* 🌸\n\n"
    msg += "Una persona ha completado su proceso de indagación inicial.\n\n"
    msg += "--- *Mensaje inicial* ---\n"
    const initialMsg = allMessages.find((m, i) => m.role === 'user' && i === 1)
    if (initialMsg) msg += initialMsg.text + "\n\n"
    
    let qNum = 1
    let userResponses: string[] = []
    
    for (let i = 2; i < allMessages.length; i++) {
      const m = allMessages[i]
      if (m.role === 'coach' && m.step) {
        if (userResponses.length > 0) {
          msg += `--- *Pregunta ${qNum}* ---\n`
          msg += coachingQuestions[qNum - 1].question + "\n"
          msg += `*Respuesta:* ${userResponses[userResponses.length - 1]}\n\n`
          qNum++
        }
      }
      if (m.role === 'user') {
        userResponses.push(m.text)
      }
    }
    
    // Handle last response
    if (userResponses.length >= 3) {
      msg += `--- *Pregunta 3* ---\n`
      msg += coachingQuestions[2].question + "\n"
      msg += `*Respuesta:* ${userResponses[2]}\n\n`
    }
    
    msg += "Esta persona está lista para una sesión de coaching ontológico."
    return encodeURIComponent(msg)
  }

  const handleSend = () => {
    if (!input.trim() || input.trim().length < 10) return

    const userMsg: Message = { role: 'user', text: input.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setIsTyping(true)

    // Determine next step
    const currentStep = step

    if (currentStep === 0) {
      // User sent initial message → send question 1
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: 'coach',
          text: coachingQuestions[0].question + "\n\n_" + coachingQuestions[0].hint + "_",
          step: 1,
        }])
        setIsTyping(false)
        setStep(1)
      }, 1800)
    } else if (currentStep >= 1 && currentStep <= 2) {
      // User answered question N → send question N+1
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: 'coach',
          text: coachingQuestions[currentStep].question + "\n\n_" + coachingQuestions[currentStep].hint + "_",
          step: currentStep + 1,
        }])
        setIsTyping(false)
        setStep(currentStep + 1)
      }, 1800)
    } else if (currentStep === 3) {
      // User answered question 3 → completion
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: 'coach',
          text: "Gracias por tu honestidad y tu valentía al responder estas tres preguntas.\n\nLo que has escrito revela una disposición al cambio que vale la pena honrar.\n\nTe invito a dar el siguiente paso: una sesión de coaching ontológico donde podamos profundizar en lo que has compartido.\n\nToca el botón de abajo para conectar directamente con Mariela y agendar tu sesión.",
        }])
        setIsTyping(false)
        setCompleted(true)
      }, 2200)
    }
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage(messages)}`

  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-cream via-cream-light to-bloom/5 pt-20">
      {/* Header */}
      <div className="max-w-2xl mx-auto w-full px-6 py-6 text-center">
        <Link href="/" className="inline-block">
          <Image
            src="/logo.png"
            alt="ReEmpoderate"
            width={80}
            height={80}
            className="w-16 h-16 object-contain mx-auto mb-3"
          />
        </Link>
        <h1 className="font-playfair text-2xl md:text-3xl text-ink font-bold mb-2">
          Indagación Inicial
        </h1>
        <p className="text-sm text-ink/50">
          Un espacio de reflexión consciente · 3 preguntas poderosas
        </p>
      </div>

      {/* Chat container */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-4 pb-4 flex flex-col">
        <div className="flex-1 bg-white/70 backdrop-blur-sm rounded-3xl border border-bloom/15 shadow-lg shadow-bloom/5 overflow-hidden flex flex-col" style={{ minHeight: '400px', maxHeight: '60vh' }}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-bloom-deep text-white rounded-br-md'
                      : 'bg-cream-light text-ink rounded-bl-md border border-bloom/10'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-cream-light rounded-2xl rounded-bl-md px-5 py-4 border border-bloom/10">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-bloom/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-bloom/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-bloom/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input or CTA */}
          <div className="border-t border-bloom/10 p-4">
            {completed ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-medium hover:bg-[#1da851] transition flex items-center justify-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.001-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.001 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Enviar a Mariela y agendar mi sesión
              </a>
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleSend() }}
                  placeholder={
                    step === 0
                      ? "Escribe tu mensaje inicial..."
                      : "Tu respuesta..."
                  }
                  className="flex-1 bg-cream-light border border-bloom/15 rounded-2xl px-5 py-3 text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-bloom/40 transition"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || input.trim().length < 10 || isTyping}
                  className="bg-bloom-deep text-white px-5 py-3 rounded-2xl font-medium hover:bg-bloom transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" transform="rotate(90 12 12)" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Hint */}
          {!completed && input.trim().length > 0 && input.trim().length < 10 && (
            <p className="text-xs text-ink/30 px-4 pb-2">Escribe al menos 10 caracteres para enviar</p>
          )}
        </div>

        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {[0, 1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                step >= s ? 'bg-bloom-deep w-8' : 'bg-bloom/20 w-4'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-xs text-ink/40 mt-2">
          {step === 0 ? 'Mensaje inicial' : step === 1 ? 'Pregunta 1 de 3' : step === 2 ? 'Pregunta 2 de 3' : step === 3 ? 'Pregunta 3 de 3' : 'Proceso completado'}
        </p>

        {/* Footer */}
        <div className="text-center mt-6">
          <Link href="/" className="text-xs text-ink/40 hover:text-ink/60 transition">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  )
}
