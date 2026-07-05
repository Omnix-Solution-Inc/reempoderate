'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const WHATSAPP_NUMBER = "13217329993"

// Generate next 14 days
function getAvailableDays() {
  const days = []
  const today = new Date()
  for (let i = 1; i <= 14; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    // Skip Sundays (0)
    if (date.getDay() === 0) continue
    days.push(date)
  }
  return days
}

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "01:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM", "06:00 PM",
]

const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]

export default function AgendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [selectedType, setSelectedType] = useState<string>('')
  const [confirmed, setConfirmed] = useState(false)
  const availableDays = getAvailableDays()

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return

    const dateStr = `${dayNames[selectedDate.getDay()]} ${selectedDate.getDate()} de ${monthNames[selectedDate.getMonth()]}`
    const typeLabel = selectedType === 'ontologico' ? 'Coaching Ontológico' : 'Coaching Laboral'
    
    const message = `Hola Mariela, agendé mi sesión de ${typeLabel}.\n\nFecha: ${dateStr}\nHora: ${selectedTime}\n\n¿Cuándo quieres comenzar? — ¡Ya elegí mi fecha! 🌸`
    
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank'
    )
    
    setConfirmed(true)
  }

  if (confirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream via-cream-light to-bloom/5 flex items-center justify-center px-6 pt-24 pb-16">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-5xl mb-6">🌸</div>
          <h1 className="font-playfair text-3xl text-ink font-bold mb-4">
            ¡Tu sesión está agendada!
          </h1>
          <p className="text-ink/60 mb-8">
            Hemos abierto WhatsApp para confirmar tu cita. Mariela te contactará pronto para los detalles.
          </p>
          <Link href="/" className="text-bloom-deep hover:underline text-sm">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-cream via-cream-light to-bloom/5 pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <Image
            src="/logo.png"
            alt="ReEmpoderate"
            width={80}
            height={80}
            className="w-16 h-16 object-contain mx-auto mb-4"
          />
          <h1 className="font-playfair text-3xl text-ink font-bold mb-2">
            Agenda tu sesión
          </h1>
          <p className="text-ink/50 text-sm">
            ¿Cuándo quieres comenzar? Elige el día y hora que mejor te funcione.
          </p>
        </div>

        {/* Type selection */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 mb-6 border border-bloom/15 shadow-lg shadow-bloom/5">
          <h2 className="text-sm font-semibold text-ink/70 mb-4 uppercase tracking-wider">
            Tipo de acompañamiento
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setSelectedType('ontologico')}
              className={`p-4 rounded-2xl border-2 text-sm font-medium transition ${
                selectedType === 'ontologico'
                  ? 'border-bloom-deep bg-bloom/10 text-bloom-deep'
                  : 'border-bloom/15 text-ink/60 hover:border-bloom/30'
              }`}
            >
              🪞 Ontológico
            </button>
            <button
              onClick={() => setSelectedType('laboral')}
              className={`p-4 rounded-2xl border-2 text-sm font-medium transition ${
                selectedType === 'laboral'
                  ? 'border-bloom-deep bg-bloom/10 text-bloom-deep'
                  : 'border-bloom/15 text-ink/60 hover:border-bloom/30'
              }`}
            >
              💼 Laboral
            </button>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 mb-6 border border-bloom/15 shadow-lg shadow-bloom/5">
          <h2 className="text-sm font-semibold text-ink/70 mb-4 uppercase tracking-wider">
            Selecciona un día
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {availableDays.map((date, i) => {
              const isSelected = selectedDate?.toDateString() === date.toDateString()
              return (
                <button
                  key={i}
                  onClick={() => setSelectedDate(date)}
                  className={`p-3 rounded-xl text-center transition ${
                    isSelected
                      ? 'bg-bloom-deep text-white'
                      : 'bg-cream/50 text-ink/70 hover:bg-bloom/10'
                  }`}
                >
                  <div className="text-xs opacity-70">{dayNames[date.getDay()]}</div>
                  <div className="text-lg font-bold">{date.getDate()}</div>
                  <div className="text-xs opacity-70">{monthNames[date.getMonth()]}</div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Time slots */}
        {selectedDate && (
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 mb-6 border border-bloom/15 shadow-lg shadow-bloom/5 animate-in fade-in duration-300">
            <h2 className="text-sm font-semibold text-ink/70 mb-4 uppercase tracking-wider">
              Horarios disponibles
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-xl text-sm font-medium transition ${
                    selectedTime === time
                      ? 'bg-bloom-deep text-white'
                      : 'bg-cream/50 text-ink/70 hover:bg-bloom/10'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Confirm button */}
        <div className="text-center">
          <button
            onClick={handleConfirm}
            disabled={!selectedDate || !selectedTime || !selectedType}
            className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-medium hover:bg-[#1da851] transition disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.001-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.001 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Confirmar por WhatsApp
          </button>
          <p className="text-xs text-ink/40 mt-4">
            Al confirmar, abrirás WhatsApp para finalizar tu agendamiento con Mariela.
          </p>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-xs text-ink/40 hover:text-ink/60 transition">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  )
}
