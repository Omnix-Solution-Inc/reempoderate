'use client'

// Selector de idioma ES / EN — ReEmpodérate
// Botón discreto estilo píldora; recuerda la elección en el navegador.

import { useI18n } from '@/lib/i18n'

export function LangToggle({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useI18n()

  const base =
    'text-xs font-semibold rounded-full px-1 py-0.5 transition-colors'
  const active = dark ? 'bg-bloom-deep text-white' : 'bg-bloom-deep text-white'
  const inactive = dark ? 'text-white/60 hover:text-white' : 'text-ink/50 hover:text-ink'

  return (
    <button
      type="button"
      aria-label="Language / Idioma"
      title="Español / English"
      onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
      className={`flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-xs font-medium transition-colors ${
        dark ? 'border-white/20 bg-white/5' : 'border-bloom/20 bg-white/60'
      }`}
    >
      <span
        onClick={(e) => { e.stopPropagation(); setLang('es') }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') setLang('es') }}
        className={`cursor-pointer px-1.5 py-0.5 rounded-full ${lang === 'es' ? active : inactive}`}
      >
        ES
      </span>
      <span
        onClick={(e) => { e.stopPropagation(); setLang('en') }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') setLang('en') }}
        className={`cursor-pointer px-1.5 py-0.5 rounded-full ${lang === 'en' ? active : inactive}`}
      >
        EN
      </span>
    </button>
  )
}
