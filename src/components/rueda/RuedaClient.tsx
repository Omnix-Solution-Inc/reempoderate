'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

type Area = { id: string; name: string; now: number; goal: number }

const DEFAULT_AREAS: { name: string }[] = [
  { name: 'Familia' },
  { name: 'Amor y pareja' },
  { name: 'Amistades' },
  { name: 'Salud y bienestar' },
  { name: 'Trabajo y propósito' },
  { name: 'Finanzas' },
  { name: 'Crecimiento personal' },
  { name: 'SER · Espiritualidad' },
  { name: 'Diversión y descanso' },
  { name: 'Hogar y entorno' },
]

const C = {
  ink: '#5D4E5C',
  cream: '#FEFAFC',
  pink: '#E8A5C7',
  deep: '#D17BA8',
  gold: '#C9A227',
  soft: '#F5D0E0',
}

const WA = 'https://wa.me/13217329993?text=' + encodeURIComponent(
  'Hola, completé la Rueda de mi Vida en el sitio de ReEmpodérate y quiero conversar mis resultados'
)

function makeAreas(): Area[] {
  return DEFAULT_AREAS.map((a, i) => ({
    id: `a${i}`,
    name: a.name,
    now: 5,
    goal: 10,
  }))
}

function wrapLabel(name: string): string[] {
  if (name.length <= 14) return [name]
  const parts = name.split(' ')
  const lines: string[] = []
  let cur = ''
  for (const p of parts) {
    if ((cur + ' ' + p).trim().length > 14 && cur) {
      lines.push(cur.trim())
      cur = p
    } else {
      cur = (cur + ' ' + p).trim()
    }
  }
  if (cur) lines.push(cur)
  return lines.slice(0, 2)
}

function drawWheel(
  ctx: CanvasRenderingContext2D,
  size: number,
  areas: Area[],
  opts: { hiRes?: boolean } = {}
) {
  const s = size
  ctx.clearRect(0, 0, s, s)
  ctx.fillStyle = C.cream
  ctx.fillRect(0, 0, s, s)

  const cx = s / 2
  const cy = s / 2
  const R = s / 2 - (opts.hiRes ? 90 : 62)
  const n = areas.length
  const step = (Math.PI * 2) / n
  const start = -Math.PI / 2

  // anillos
  for (let v = 2; v <= 10; v += 2) {
    ctx.beginPath()
    ctx.arc(cx, cy, (R * v) / 10, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(93, 78, 92, 0.15)'
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.fillStyle = 'rgba(93, 78, 92, 0.35)'
    ctx.font = `${opts.hiRes ? 20 : 12}px Arimo, sans-serif`
    ctx.textAlign = 'center'
    ctx.fillText(String(v), cx, cy - (R * v) / 10 - 5)
  }
  // ejes + etiquetas
  areas.forEach((a, i) => {
    const ang = start + i * step
    const x = cx + R * Math.cos(ang)
    const y = cy + R * Math.sin(ang)
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(x, y)
    ctx.strokeStyle = 'rgba(93, 78, 92, 0.15)'
    ctx.lineWidth = 1
    ctx.stroke()

    const lx = cx + (R + (opts.hiRes ? 46 : 30)) * Math.cos(ang)
    const ly = cy + (R + (opts.hiRes ? 46 : 30)) * Math.sin(ang)
    ctx.fillStyle = C.ink
    ctx.font = `${opts.hiRes ? 600 : 500} ${opts.hiRes ? 24 : 11.5}px Arimo, sans-serif`
    ctx.textAlign = 'center'
    const lines = wrapLabel(a.name)
    lines.forEach((ln, li) => {
      ctx.fillText(ln, lx, ly + (li - (lines.length - 1) / 2) * (opts.hiRes ? 30 : 14))
    })
  })

  const poly = (key: 'now' | 'goal') => {
    ctx.beginPath()
    areas.forEach((a, i) => {
      const ang = start + i * step
      const r = (R * a[key]) / 10
      const x = cx + r * Math.cos(ang)
      const y = cy + r * Math.sin(ang)
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })
    ctx.closePath()
  }

  // AHORA (relleno)
  poly('now')
  ctx.fillStyle = 'rgba(232, 165, 199, 0.55)'
  ctx.fill()
  ctx.strokeStyle = C.deep
  ctx.lineWidth = opts.hiRes ? 5 : 3
  ctx.stroke()
  areas.forEach((a, i) => {
    const ang = start + i * step
    const r = (R * a.now) / 10
    ctx.beginPath()
    ctx.arc(cx + r * Math.cos(ang), cy + r * Math.sin(ang), opts.hiRes ? 7 : 4, 0, Math.PI * 2)
    ctx.fillStyle = C.deep
    ctx.fill()
  })

  // META (línea punteada)
  poly('goal')
  ctx.setLineDash(opts.hiRes ? [14, 10] : [7, 6])
  ctx.strokeStyle = C.gold
  ctx.lineWidth = opts.hiRes ? 6 : 3
  ctx.stroke()
  ctx.setLineDash([])
  areas.forEach((a, i) => {
    const ang = start + i * step
    const r = (R * a.goal) / 10
    ctx.beginPath()
    ctx.arc(cx + r * Math.cos(ang), cy + r * Math.sin(ang), opts.hiRes ? 7 : 4, 0, Math.PI * 2)
    ctx.fillStyle = C.gold
    ctx.fill()
  })
}

export default function RuedaClient() {
  const [areas, setAreas] = useState<Area[]>(makeAreas)
  const [showModal, setShowModal] = useState(false)
  const [leadSaved, setLeadSaved] = useState(false)
  const [sending, setSending] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [pendingAction, setPendingAction] = useState<'png' | 'pdf' | null>(null)
  const [error, setError] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [avg, setAvg] = useState({ now: 5, goal: 10 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const size = 620
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = '100%'
    canvas.style.aspectRatio = '1'
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)
    drawWheel(ctx, size, areas)
    const now = areas.reduce((s, a) => s + a.now, 0) / areas.length
    const goal = areas.reduce((s, a) => s + a.goal, 0) / areas.length
    setAvg({ now: Math.round(now * 10) / 10, goal: Math.round(goal * 10) / 10 })
  }, [areas])

  const update = (id: string, key: 'now' | 'goal' | 'name', value: number | string) =>
    setAreas((prev) => prev.map((a) => (a.id === id ? { ...a, [key]: value } : a)))

  const addArea = () =>
    setAreas((prev) => [
      ...prev,
      { id: `a${Date.now()}`, name: 'Nueva área', now: 5, goal: 10 },
    ])

  const removeArea = (id: string) =>
    setAreas((prev) => (prev.length > 4 ? prev.filter((a) => a.id !== id) : prev))

  const buildExportCanvas = useCallback((): string => {
    const s = 1400
    const H = 1980
    const cv = document.createElement('canvas')
    cv.width = s
    cv.height = H
    const ctx = cv.getContext('2d')!
    ctx.fillStyle = C.cream
    ctx.fillRect(0, 0, s, H)

    // marca
    ctx.textAlign = 'center'
    ctx.fillStyle = C.deep
    ctx.font = '600 26px Arimo, sans-serif'
    ctx.fillText('R E E M P O D É R A T E', s / 2, 90)
    ctx.fillStyle = C.ink
    ctx.font = '700 68px "Playfair Display", Georgia, serif'
    ctx.fillText('Mi Rueda de la Vida', s / 2, 190)
    ctx.fillStyle = 'rgba(93, 78, 92, 0.6)'
    ctx.font = '400 30px Arimo, sans-serif'
    ctx.fillText('Dónde estoy hoy — y hacia dónde decido ir', s / 2, 245)

    // rueda
    const wheel = document.createElement('canvas')
    wheel.width = 1200
    wheel.height = 1200
    const wctx = wheel.getContext('2d')!
    drawWheel(wctx, 1200, areas, { hiRes: true })
    ctx.drawImage(wheel, (s - 1200) / 2, 300)

    // leyenda
    const ly = 1560
    ctx.textAlign = 'left'
    ctx.fillStyle = 'rgba(232, 165, 199, 0.7)'
    ctx.fillRect(s / 2 - 250, ly, 34, 34)
    ctx.fillStyle = C.ink
    ctx.font = '500 28px Arimo, sans-serif'
    ctx.fillText('Ahora', s / 2 - 200, ly + 25)
    ctx.strokeStyle = C.gold
    ctx.lineWidth = 5
    ctx.setLineDash([12, 8])
    ctx.beginPath()
    ctx.moveTo(s / 2 + 60, ly + 17)
    ctx.lineTo(s / 2 + 120, ly + 17)
    ctx.stroke()
    ctx.setLineDash([])
    ctx.fillText('Meta', s / 2 + 140, ly + 25)

    // resultados
    const perCol = Math.ceil(areas.length / 2)
    areas.forEach((a, i) => {
      const col = i < perCol ? 0 : 1
      const y = 1660 + (i % perCol) * 56
      const x = 120 + col * (s / 2)
      ctx.textAlign = 'left'
      ctx.fillStyle = C.ink
      ctx.font = '500 28px Arimo, sans-serif'
      ctx.fillText(a.name, x, y)
      ctx.fillStyle = C.deep
      ctx.fillText(`${a.now} → ${a.goal}`, x + 240, y)
    })

    // pie
    ctx.textAlign = 'center'
    ctx.fillStyle = 'rgba(93, 78, 92, 0.5)'
    ctx.font = '400 24px Arimo, sans-serif'
    ctx.fillText('Tu vida empieza cuando decides quién quieres ser · reempoderate.com', s / 2, H - 40)

    return cv.toDataURL('image/png')
  }, [areas])

  const downloadPdf = async (png: string) => {
    const { jsPDF } = await import('jspdf')
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
    pdf.addImage(png, 'PNG', 5, 5, 200, 283)
    pdf.save('mi-rueda-de-la-vida.pdf')
  }

  const downloadPng = (png: string) => {
    const link = document.createElement('a')
    link.href = png
    link.download = 'mi-rueda-de-la-vida.png'
    link.click()
  }

  const submitLead = async (action: 'png' | 'pdf') => {
    setError('')
    if (!form.name.trim()) {
      setError('Ingresa tu nombre')
      return
    }
    if (!form.email.includes('@')) {
      setError('Ingresa un correo válido para recibir tu rueda')
      return
    }
    setSending(true)
    try {
      const png = buildExportCanvas()
      await fetch('https://witmakers-1a5946c3.base44.app/functions/saveRuedaLead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          areas: areas.map((a) => ({ name: a.name, now: a.now, goal: a.goal })),
          png,
        }),
      })
      setLeadSaved(true)
      setShowModal(false)
      if (action === 'png') downloadPng(png)
      else await downloadPdf(png)
    } catch {
      setError('Algo no salió bien. Inténtalo de nuevo.')
    } finally {
      setSending(false)
    }
  }

  const onDownload = (action: 'png' | 'pdf') => {
    if (leadSaved) {
      const png = buildExportCanvas()
      if (action === 'png') downloadPng(png)
      else void downloadPdf(png)
    } else {
      setPendingAction(action)
      setShowModal(true)
    }
  }

  return (
    <div className="min-h-screen" style={{ background: C.cream }}>
      {/* Encabezado */}
      <header className="border-b border-[#F5D0E0]/60">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="font-serif text-xl" style={{ color: C.deep }}>
            ReEmpodérate
          </Link>
          <Link
            href="/"
            className="text-sm underline underline-offset-4"
            style={{ color: C.ink }}
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Presentación */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: C.deep }}>
            Herramienta de coaching
          </p>
          <h1 className="font-serif text-4xl md:text-5xl mb-5" style={{ color: C.ink }}>
            La Rueda de tu Vida
          </h1>
          <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: C.ink }}>
            Un espejo honesto de dónde estás hoy y hacia dónde decides ir. Califica cada área
            del 1 al 10 — primero cómo la vives <strong>ahora</strong>, luego dónde te gustaría
            estar. Observa tu rueda dibujarse en tiempo real.
          </p>
        </div>

        {/* Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {[
            ['1', 'Renombra o agrega áreas', 'Tu rueda, tus palabras.'],
            ['2', 'Califica tu HOY', 'Del 1 al 10, con honestidad.'],
            ['3', 'Marca tu META', 'El puntaje al que decides llegar.'],
            ['4', 'Descárgala', 'En PNG o PDF, y recíbela en tu correo.'],
          ].map(([n, t, d]) => (
            <div
              key={n}
              className="card-hover rounded-2xl p-5 border border-[#F5D0E0]"
              style={{ background: '#fff' }}
            >
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mb-3"
                style={{ background: C.soft, color: C.deep }}
              >
                {n}
              </span>
              <p className="font-semibold text-sm mb-1" style={{ color: C.ink }}>{t}</p>
              <p className="text-xs" style={{ color: 'rgba(93,78,92,0.7)' }}>{d}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Rueda */}
          <div className="lg:sticky lg:top-8">
            <div className="rounded-3xl p-4 border border-[#F5D0E0] bg-white shadow-sm">
              <canvas ref={canvasRef} className="w-full" />
              <div className="flex items-center justify-center gap-6 text-sm py-3" style={{ color: C.ink }}>
                <span className="inline-flex items-center gap-2">
                  <span className="w-4 h-4 rounded" style={{ background: 'rgba(232,165,199,0.7)' }} />
                  Ahora
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-6 border-t-2 border-dashed" style={{ borderColor: C.gold }} />
                  Meta
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="rounded-2xl p-4 text-center" style={{ background: C.soft }}>
                <p className="text-xs uppercase tracking-wider" style={{ color: C.deep }}>Promedio ahora</p>
                <p className="font-serif text-3xl" style={{ color: C.ink }}>{avg.now} <span className="text-base" style={{ color: 'rgba(93,78,92,0.5)' }}>/ 10</span></p>
              </div>
              <div className="rounded-2xl p-4 text-center" style={{ background: 'rgba(201,162,39,0.14)' }}>
                <p className="text-xs uppercase tracking-wider" style={{ color: C.gold }}>Promedio meta</p>
                <p className="font-serif text-3xl" style={{ color: C.ink }}>{avg.goal} <span className="text-base" style={{ color: 'rgba(93,78,92,0.5)' }}>/ 10</span></p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <button
                onClick={() => onDownload('png')}
                className="rounded-full px-7 py-3 font-semibold text-sm text-white transition hover:opacity-90"
                style={{ background: C.deep }}
              >
                Descargar PNG
              </button>
              <button
                onClick={() => onDownload('pdf')}
                className="rounded-full px-7 py-3 font-semibold text-sm border transition hover:bg-[#F5D0E0]"
                style={{ borderColor: C.deep, color: C.deep }}
              >
                Descargar PDF
              </button>
              <button
                onClick={() => setAreas(makeAreas())}
                className="rounded-full px-7 py-3 text-sm underline underline-offset-4"
                style={{ color: C.ink }}
              >
                Reiniciar
              </button>
            </div>
          </div>

          {/* Áreas */}
          <div>
            <div className="space-y-4">
              {areas.map((a) => (
                <div key={a.id} className="rounded-2xl border border-[#F5D0E0] bg-white p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <input
                      value={a.name}
                      onChange={(e) => update(a.id, 'name', e.target.value)}
                      className="flex-1 bg-transparent font-serif text-lg outline-none border-b border-transparent focus:border-[#E8A5C7] transition"
                      style={{ color: C.ink }}
                    />
                    {areas.length > 4 && (
                      <button
                        onClick={() => removeArea(a.id)}
                        className="text-xs px-2 py-1 rounded-full border border-[#F5D0E0] hover:bg-[#F5D0E0]"
                        style={{ color: C.ink }}
                      >
                        Quitar
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-1" style={{ color: C.deep }}>
                        Ahora · {a.now}
                      </p>
                      <input
                        type="range" min={1} max={10} value={a.now}
                        onChange={(e) => update(a.id, 'now', Number(e.target.value))}
                        className="w-full" style={{ accentColor: C.deep }}
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-1" style={{ color: C.gold }}>
                        Meta · {a.goal}
                      </p>
                      <input
                        type="range" min={1} max={10} value={a.goal}
                        onChange={(e) => update(a.id, 'goal', Number(e.target.value))}
                        className="w-full" style={{ accentColor: C.gold }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={addArea}
              disabled={areas.length >= 12}
              className="w-full mt-4 rounded-2xl py-3 text-sm font-semibold border border-dashed transition disabled:opacity-40"
              style={{ borderColor: C.deep, color: C.deep }}
            >
              + Agregar área
            </button>
          </div>
        </div>

        {/* CTA post-descarga */}
        {leadSaved && (
          <div className="mt-16 rounded-3xl p-10 text-center" style={{ background: C.soft }}>
            <h2 className="font-serif text-3xl mb-4" style={{ color: C.ink }}>
              Tu rueda está en camino 🌸
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-sm leading-relaxed" style={{ color: C.ink }}>
              Enviamos tu rueda a tu correo. Las ruedas más valiosas son las que se conversan:
              ¿qué conversación quieres abrir con la tuya?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={WA}
                target="_blank" rel="noopener noreferrer"
                className="rounded-full px-8 py-4 font-semibold text-sm text-white"
                style={{ background: '#25D366' }}
              >
                Conversar mis resultados por WhatsApp
              </a>
              <Link
                href="/agendar"
                className="rounded-full px-8 py-4 font-semibold text-sm"
                style={{ background: C.deep, color: '#fff' }}
              >
                Agendar mi sesión de coaching
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(93,78,92,0.45)' }}>
          <div className="rounded-3xl bg-white max-w-md w-full p-8">
            <h3 className="font-serif text-2xl mb-2" style={{ color: C.ink }}>
              Recibe tu rueda
            </h3>
            <p className="text-sm mb-6" style={{ color: 'rgba(93,78,92,0.75)' }}>
              Déjanos tu nombre y correo: te enviamos tu rueda para que la conserves y la
              compartas.
            </p>
            <div className="space-y-3">
              <input
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-[#F5D0E0] px-4 py-3 text-sm outline-none focus:border-[#D17BA8]"
                style={{ color: C.ink }}
              />
              <input
                placeholder="Tu correo"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-[#F5D0E0] px-4 py-3 text-sm outline-none focus:border-[#D17BA8]"
                style={{ color: C.ink }}
              />
              <input
                placeholder="WhatsApp (opcional)"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-xl border border-[#F5D0E0] px-4 py-3 text-sm outline-none focus:border-[#D17BA8]"
                style={{ color: C.ink }}
              />
            </div>
            {error && <p className="text-xs mt-3" style={{ color: '#C0392B' }}>{error}</p>}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => submitLead(pendingAction || 'png')}
                disabled={sending}
                className="flex-1 rounded-full px-6 py-3 font-semibold text-sm text-white disabled:opacity-60"
                style={{ background: C.deep }}
              >
                {sending ? 'Enviando…' : 'Recibir mi rueda'}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-3 text-sm underline underline-offset-4"
                style={{ color: C.ink }}
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-[#F5D0E0]/60 mt-12">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center text-xs" style={{ color: 'rgba(93,78,92,0.6)' }}>
          ReEmpodérate · Tu vida empieza cuando decides quién quieres ser
        </div>
      </footer>
    </div>
  )
}
