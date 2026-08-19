'use client'

import { useState } from 'react'

const API_URL = 'https://witmakers-1a5946c3.base44.app/functions/sendIcfGuide'
const PDF_URL = 'https://base44.app/api/apps/6a066d4f6fb4352d1a5946c3/files/mp/public/6a066d4f6fb4352d1a5946c3/9ac518e2b_5761e49c0_tabla_si_no_coaching_horizontal_1_pagina-v5.pdf'

const bullets = [
  'Acuerdos y Contratos — qué co-creamos desde el inicio de cada sesión.',
  'Confidencialidad y Privacidad — protegemos tu información en todos los canales.',
  'Relaciones — sostenemos límites claros y respetuosos en cada encuentro.',
  'Integridad, Competencia, Humanidad y Equidad — los pilares de nuestra práctica profesional.',
]

export function IcfGuideSection() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError('Ingresa un correo electrónico válido')
      return
    }
    setError('')
    setLoading(true)
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      })
      const data = await res.json()
      if (data.success) {
        setSuccess(true)
      } else {
        setError(data.error || 'Hubo un problema. Intenta de nuevo.')
      }
    } catch {
      setError('Error de conexión. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="guia-icf"
      style={{
        background: 'linear-gradient(135deg, #1a0f18 0%, #0D0D0D 60%)',
        borderTop: '1px solid #2a1a2a',
        padding: '5rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
          color: '#F5F0E8', fontWeight: 400, lineHeight: 1.3, marginBottom: '1rem',
        }}>
          Los <span style={{ color: '#E8A5C7' }}>Sí</span> y los{' '}
          <span style={{ color: '#E8A5C7' }}>No</span> de la<br />Práctica Profesional de Coaching
        </h2>

        <div style={{ background: '#111', border: '1px solid #2a1a2a', borderRadius: 16, padding: '2.5rem', textAlign: 'left' }}>
          {!success ? (
            <>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', color: '#F5F0E8', fontWeight: 400, margin: '0 0 0.25rem' }}>Guía de Práctica Ética del Coaching</h4>
                <p style={{ fontSize: '0.75rem', color: '#666', margin: 0 }}>Matriz Comparativa · Código ICF 2026 · PDF descargable</p>
              </div>

              <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column' as const, gap: '0.5rem' }}>
                {bullets.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#D17BA8', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.8rem', color: '#888' }}>{b}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' as const }}>
                  <input
                    type="text" placeholder="Tu nombre" value={name}
                    onChange={e => setName(e.target.value)}
                    style={{ flex: 1, minWidth: 140, background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: 8, padding: '0.85rem 1rem', color: '#F5F0E8', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif', outline: 'none' }}
                  />
                  <input
                    type="email" placeholder="Tu correo electrónico *" value={email}
                    onChange={e => { setEmail(e.target.value); setError('') }}
                    required
                    style={{ flex: 2, minWidth: 200, background: '#1a1a1a', border: `1px solid ${error ? '#D17BA8' : '#2a2a2a'}`, borderRadius: 8, padding: '0.85rem 1rem', color: '#F5F0E8', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif', outline: 'none' }}
                  />
                </div>
                {error && <p style={{ fontSize: '0.75rem', color: '#E8A5C7', margin: 0 }}>{error}</p>}
                <button
                  type="submit" disabled={loading}
                  style={{ background: 'linear-gradient(135deg, #D17BA8, #E8A5C7)', color: '#fff', border: 'none', borderRadius: 8, padding: '0.95rem 1.5rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, width: '100%', fontFamily: 'Inter, sans-serif' }}
                >
                  {loading ? 'Enviando...' : 'Recibir mi guía gratuita →'}
                </button>
                <p style={{ fontSize: '0.65rem', color: '#444', textAlign: 'center' as const, margin: 0 }}>🔒 Tu correo es privado. Sin spam. Solo recursos de valor.</p>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center' as const, padding: '2rem 0' }}>
              <div style={{ fontSize: 52, marginBottom: '1rem' }}>🌸</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', color: '#F5F0E8', fontWeight: 400, marginBottom: '0.5rem' }}>¡Ya está en camino!</h3>
              <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                Revisa tu correo en los próximos minutos.<br />Si no aparece, revisa la carpeta de spam.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
