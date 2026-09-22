'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useAdminGuard } from '@/lib/auth/useAdminGuard'

const AREAS = [
  'Familia',
  'Amor y pareja',
  'Amistades',
  'Salud y bienestar',
  'Trabajo y propósito',
  'Finanzas',
  'Crecimiento personal',
  'SER · Espiritualidad',
  'Diversión y descanso',
  'Hogar y entorno',
]

type Objective = {
  area: string
  desiredChange: string
  verifiedFacts: string
  judgments: string
  breakdown: string
  emotionNow: string
  bodySignal: string
  emotionalLearning: string
  emotionalChoice: string
  actionPossibilities: string
  why: string
  strength: string
  contribution: string
  goal90: string
  evidence: string
  conversation: string
  learning: string
  firstStep: string
  when: string
  support: string
}

const emptyObjective = (area: string): Objective => ({
  area,
  desiredChange: '',
  verifiedFacts: '',
  judgments: '',
  breakdown: '',
  emotionNow: '',
  bodySignal: '',
  emotionalLearning: '',
  emotionalChoice: '',
  actionPossibilities: '',
  why: '',
  strength: '',
  contribution: '',
  goal90: '',
  evidence: '',
  conversation: '',
  learning: '',
  firstStep: '',
  when: '',
  support: '',
})

export default function GpsObjetivosPage() {
  const { status } = useAdminGuard()
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const [objectives, setObjectives] = useState<Record<string, Objective>>({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('re_gps_objetivos')
      if (saved) {
        const data = JSON.parse(saved)
        setSelected(Array.isArray(data.selected) ? data.selected : [])
        setObjectives(data.objectives || {})
        setStep(Number.isInteger(data.step) ? data.step : 0)
      }
    } catch {}
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    localStorage.setItem('re_gps_objetivos', JSON.stringify({ selected, objectives, step }))
  }, [selected, objectives, step, loaded])

  const currentArea = step > 0 && step <= selected.length ? selected[step - 1] : null
  const current = currentArea ? objectives[currentArea] || emptyObjective(currentArea) : null
  const completed = useMemo(
    () => selected.filter((area) => {
      const item = objectives[area]
      return item?.goal90 && item?.firstStep
    }).length,
    [selected, objectives]
  )

  if (status === 'loading' || !loaded) {
    return <main className="min-h-screen bg-light-bg flex items-center justify-center"><p className="text-gray-400">Cargando...</p></main>
  }
  if (status !== 'authenticated') return null

  const toggleArea = (area: string) => {
    setSelected((prev) => {
      if (prev.includes(area)) return prev.filter((item) => item !== area)
      if (prev.length >= 3) return prev
      setObjectives((old) => ({ ...old, [area]: old[area] || emptyObjective(area) }))
      return [...prev, area]
    })
  }

  const update = (field: keyof Objective, value: string) => {
    if (!currentArea) return
    setObjectives((prev) => ({
      ...prev,
      [currentArea]: { ...(prev[currentArea] || emptyObjective(currentArea)), [field]: value },
    }))
  }

  const reset = () => {
    if (!window.confirm('¿Quieres comenzar un nuevo GPS de Objetivos?')) return
    setSelected([])
    setObjectives({})
    setStep(0)
    localStorage.removeItem('re_gps_objetivos')
  }

  const finalStep = selected.length + 1

  return (
    <main className="min-h-screen bg-[#FEFAFC] px-4 py-8 sm:px-8 print:bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
          <Link href="/dashboard" className="text-sm font-medium text-[#D17BA8] hover:underline">← Volver al panel</Link>
          <button onClick={reset} className="text-sm text-gray-400 hover:text-[#5D4E5C]">Comenzar de nuevo</button>
        </div>

        <header className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D17BA8]">ReEmpodérate</p>
          <h1 className="font-playfair text-4xl text-[#5D4E5C] sm:text-5xl">GPS de Objetivos</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Transforma cada área de tu vida en una dirección clara, un objetivo posible y una decisión que puedas comenzar hoy.
          </p>
        </header>

        <div className="mb-8 h-2 overflow-hidden rounded-full bg-[#F5D0E0] print:hidden">
          <div className="h-full rounded-full bg-[#D17BA8] transition-all" style={{ width: `${Math.min(100, (step / Math.max(1, finalStep)) * 100)}%` }} />
        </div>

        {step === 0 && (
          <section className="rounded-3xl border border-[#F5D0E0] bg-white p-6 shadow-sm sm:p-10">
            <h2 className="font-playfair text-2xl text-[#5D4E5C]">Elige tu dirección</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Selecciona hasta tres áreas que hoy sean importantes para ti. El GPS te acompañará a convertirlas en objetivos para los próximos 90 días.
            </p>
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {AREAS.map((area) => {
                const active = selected.includes(area)
                return (
                  <button
                    key={area}
                    onClick={() => toggleArea(area)}
                    className={`rounded-2xl border p-4 text-left transition ${active ? 'border-[#D17BA8] bg-[#FCECF4] text-[#5D4E5C]' : 'border-gray-200 bg-white text-gray-600 hover:border-[#E8A5C7]'}`}
                  >
                    <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-current text-xs">{active ? '✓' : ''}</span>
                    {area}
                  </button>
                )
              })}
            </div>
            <div className="mt-7 flex items-center justify-between gap-4">
              <p className="text-xs text-gray-400">{selected.length} de 3 áreas seleccionadas</p>
              <button disabled={!selected.length} onClick={() => setStep(1)} className="rounded-full bg-[#D17BA8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#C56D9D] disabled:cursor-not-allowed disabled:opacity-40">Comenzar mi recorrido</button>
            </div>
          </section>
        )}

        {currentArea && current && (
          <section className="rounded-3xl border border-[#F5D0E0] bg-white p-6 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D17BA8]">Área {step} de {selected.length}</p>
            <h2 className="mt-2 font-playfair text-3xl text-[#5D4E5C]">{currentArea}</h2>
            <p className="mt-2 text-sm text-gray-500">Observa, declara y convierte una posibilidad en acción y aprendizaje.</p>

            <div className="mt-8 space-y-7">
              <div className="rounded-3xl border border-[#F5D0E0] bg-[#FEFAFC] p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D17BA8]">1 · Tu observación</p>
                <p className="mt-2 text-sm leading-6 text-gray-500">Distingue lo ocurrido de la interpretación que has construido.</p>
                <div className="mt-6 space-y-6">
                  <Field label="¿Qué situación concreta quieres atender en esta área?" value={current.desiredChange || ''} onChange={(v) => update('desiredChange', v)} placeholder="Describe la situación que hoy requiere tu atención..." />
                  <Field label="¿Qué hechos puedes verificar acerca de esta situación?" value={current.verifiedFacts || ''} onChange={(v) => update('verifiedFacts', v)} placeholder="Registra aquello que podría comprobar otra persona..." />
                  <Field label="¿Qué juicios o interpretaciones has construido sobre esos hechos?" value={current.judgments || ''} onChange={(v) => update('judgments', v)} placeholder="Observa lo que tú has concluido acerca de lo ocurrido..." />
                  <Field label="¿Qué se interrumpió, cambió o dejó de suceder como esperabas?" value={current.breakdown || ''} onChange={(v) => update('breakdown', v)} placeholder="Nombra aquello que hizo visible la necesidad de actuar..." />
                </div>
              </div>

              <div className="rounded-3xl border border-[#F5D0E0] bg-[#FEFAFC] p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D17BA8]">2 · Tu dimensión emocional</p>
                <p className="mt-2 text-sm leading-6 text-gray-500">Reconoce cómo estás viviendo esta situación y qué acciones se vuelven posibles.</p>
                <div className="mt-6 space-y-6">
                  <Field label="¿Qué emociones y estados de ánimo reconoces al observar esta situación?" value={current.emotionNow || ''} onChange={(v) => update('emotionNow', v)} placeholder="Nombra libremente lo que se hace presente en ti..." />
                  <Field label="¿Cómo se expresan en tu cuerpo?" value={current.bodySignal || ''} onChange={(v) => update('bodySignal', v)} placeholder="Observa sensaciones, posturas, movimientos o cambios..." />
                  <Field label="¿Qué juicios sostienen ese estado de ánimo?" value={current.emotionalLearning || ''} onChange={(v) => update('emotionalLearning', v)} placeholder="Explora las interpretaciones que acompañan tu sentir..." />
                  <Field label="¿Qué posibilidades de acción se abren o se cierran desde ese estado de ánimo?" value={current.actionPossibilities || ''} onChange={(v) => update('actionPossibilities', v)} placeholder="Observa su relación con aquello que hoy consideras posible..." />
                  <Field label="¿Desde qué disposición emocional eliges avanzar?" value={current.emotionalChoice || ''} onChange={(v) => update('emotionalChoice', v)} placeholder="Expresa cómo eliges disponerte para tu próximo paso..." />
                </div>
              </div>

              <div className="rounded-3xl border border-[#F5D0E0] bg-white p-1 sm:p-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D17BA8]">3 · La posibilidad</p>
                <div className="mt-5 space-y-7">
                  <Field label="¿Qué te gustaría que fuera diferente en esta área?" value={current.why} onChange={(v) => update('why', v)} placeholder="Expresa la posibilidad que quieres abrir..." />
                  <Field label="¿Qué hace que esta posibilidad sea significativa para ti?" value={current.strength} onChange={(v) => update('strength', v)} placeholder="Conecta con aquello que le da sentido..." />
                  <Field label="¿Qué recursos, capacidades y aprendizajes reconoces en ti para avanzar?" value={current.contribution} onChange={(v) => update('contribution', v)} placeholder="Observa aquello con lo que ya cuentas..." />
                </div>
              </div>

              <div className="rounded-3xl border border-[#F5D0E0] bg-[#FEFAFC] p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D17BA8]">4 · Tu declaración</p>
                <div className="mt-6 space-y-6">
                  <Field label="¿Qué declaras como tu compromiso para los próximos 90 días?" value={current.goal90} onChange={(v) => update('goal90', v)} placeholder="Expresa el compromiso que eliges asumir contigo..." />
                  <Field label="¿Qué observarás para reconocer tu avance?" value={current.evidence} onChange={(v) => update('evidence', v)} placeholder="Describe hechos concretos que podrás verificar..." />
                  <Field label="¿Qué conversación, petición u oferta podría contribuir a este compromiso?" value={current.conversation || ''} onChange={(v) => update('conversation', v)} placeholder="Reconoce la conversación que quieres abrir o completar..." />
                </div>
              </div>

              <div className="rounded-3xl border border-[#F5D0E0] bg-white p-1 sm:p-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D17BA8]">5 · Acción y aprendizaje</p>
                <div className="mt-5 space-y-7">
                  <Field label="¿Qué necesitas aprender, indagar o practicar para ampliar tu capacidad de acción?" value={current.learning || ''} onChange={(v) => update('learning', v)} placeholder="Expresa el aprendizaje que podría abrir nuevas posibilidades..." />
                  <Field label="¿Qué primera acción eliges realizar?" value={current.firstStep} onChange={(v) => update('firstStep', v)} placeholder="Escribe el paso que hoy tiene sentido para ti..." />
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="¿Cuándo eliges comenzar?" value={current.when} onChange={(v) => update('when', v)} placeholder="Define el momento que eliges..." />
                <Field label="¿Qué podría acompañarte o sostenerte en este recorrido?" value={current.support} onChange={(v) => update('support', v)} placeholder="Expresa lo que reconoces como valioso..." />
              </div>
            </div>

            <div className="mt-9 flex flex-wrap justify-between gap-3 print:hidden">
              <button onClick={() => setStep(step - 1)} className="rounded-full border border-[#D17BA8] px-6 py-3 text-sm font-semibold text-[#D17BA8]">Anterior</button>
              <button
                disabled={!current.goal90.trim() || !current.firstStep.trim()}
                onClick={() => setStep(step + 1)}
                className="rounded-full bg-[#D17BA8] px-6 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                {step === selected.length ? 'Ver mi GPS' : 'Siguiente área'}
              </button>
            </div>
          </section>
        )}

        {step === finalStep && (
          <section>
            <div className="mb-7 rounded-3xl bg-[#5D4E5C] p-7 text-white sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5D0E0]">Tu dirección para los próximos 90 días</p>
              <h2 className="mt-3 font-playfair text-3xl">De la observación al compromiso</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80">Tu GPS reúne la observación que hoy sostienes, la posibilidad que declaras y las acciones con las que eliges avanzar.</p>
            </div>

            <div className="space-y-5">
              {selected.map((area, index) => {
                const item = objectives[area] || emptyObjective(area)
                return (
                  <article key={area} className="break-inside-avoid rounded-3xl border border-[#F5D0E0] bg-white p-6 shadow-sm sm:p-8">
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5D0E0] font-semibold text-[#D17BA8]">{index + 1}</span>
                      <div>
                        <h3 className="font-playfair text-2xl text-[#5D4E5C]">{area}</h3>
                        <p className="mt-1 text-sm italic text-gray-500">{item.why}</p>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <Summary label="Mi quiebre" value={item.breakdown} />
                      <Summary label="Mi declaración de 90 días" value={item.goal90} />
                      <Summary label="Mi evidencia de avance" value={item.evidence} />
                      <Summary label="Mi conversación pendiente" value={item.conversation} />
                      <Summary label="Mi aprendizaje" value={item.learning} />
                      <Summary label="Mi primera acción" value={item.firstStep} />
                      <Summary label="Cuándo comienzo" value={item.when} />
                      <Summary label="Mi disposición emocional" value={item.emotionalChoice} />
                      <Summary label="Lo que da sentido" value={item.strength} />
                      <Summary label="Mi apoyo" value={item.support} />
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 print:hidden">
              <button onClick={() => setStep(selected.length)} className="rounded-full border border-[#D17BA8] px-6 py-3 text-sm font-semibold text-[#D17BA8]">Editar objetivos</button>
              <button onClick={() => window.print()} className="rounded-full bg-[#D17BA8] px-6 py-3 text-sm font-semibold text-white">Guardar como PDF</button>
            </div>
            <p className="mt-5 text-center text-xs text-gray-400 print:hidden">{completed} de {selected.length} objetivos listos</p>
          </section>
        )}
      </div>
    </main>
  )
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (value: string) => void; placeholder: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[#5D4E5C]">{label}</span>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={3} className="w-full resize-y rounded-2xl border border-gray-200 bg-[#FEFAFC] px-4 py-3 text-sm text-[#5D4E5C] outline-none transition placeholder:text-gray-300 focus:border-[#D17BA8] focus:ring-2 focus:ring-[#F5D0E0]" />
    </label>
  )
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-[#D17BA8]">{label}</p>
      <p className="mt-1 text-sm leading-6 text-[#5D4E5C]">{value || 'Por definir'}</p>
    </div>
  )
}
