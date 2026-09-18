'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'
import { LangToggle } from '@/components/shared/LangToggle'

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

const monthNamesEs = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
const dayNamesEs = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
const monthNamesEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const dayNamesEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default function AgendarPage() {
  const { lang, t } = useI18n()
  const monthNames = lang === 'en' ? monthNamesEn : monthNamesEs
  const dayNames = lang === 'en' ? dayNamesEn : dayNamesEs
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [confirmed, setConfirmed] = useState(false)
  const availableDays = getAvailableDays()

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return

    const dateStr = lang === 'en'
      ? `${dayNames[selectedDate.getDay()]}, ${monthNames[selectedDate.getMonth()]} ${selectedDate.getDate()}`
      : `${dayNames[selectedDate.getDay()]} ${selectedDate.getDate()} de ${monthNames[selectedDate.getMonth()]}`
    
    const message = t('agendar.waMsg').replace('{date}', dateStr).replace('{time}', selectedTime)
    
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
            {t('agendar.confH')}
          </h1>
          <p className="text-ink/60 mb-8">
            {t('agendar.confP')}
          </p>
          <Link href="/" className="text-bloom-deep hover:underline text-sm">
            {t('agendar.volver')}
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
          <div className="flex justify-center mb-3">
            <LangToggle />
          </div>
          <Image
            src="/logo.png"
            alt="ReEmpodérate"
            width={80}
            height={80}
            className="w-16 h-16 object-contain mx-auto mb-4"
          />
          <h1 className="font-playfair text-3xl text-ink font-bold mb-2">
            {t('agendar.h1')}
          </h1>
          <p className="text-ink/50 text-sm">
            {t('agendar.p')}
          </p>
        </div>

        {/* Calendar */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 mb-6 border border-bloom/15 shadow-lg shadow-bloom/5">
          <h2 className="text-sm font-semibold text-ink/70 mb-4 uppercase tracking-wider">
            {t('agendar.selDia')}
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
              {t('agendar.horarios')}
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
            disabled={!selectedDate || !selectedTime}
            className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-medium hover:bg-[#1da851] transition disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            {t('agendar.confirmar')}
          </button>
          <p className="text-xs text-ink/40 mt-4">
            {t('agendar.nota')}
          </p>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-xs text-ink/40 hover:text-ink/60 transition">
            {t('agendar.volver')}
          </Link>
        </div>
      </div>
    </section>
  )
}
