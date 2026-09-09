import Link from 'next/link'

export function RuedaSection() {
  return (
    <section className="py-16 md:py-20 bg-cream.dark">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Mini rueda decorativa */}
        <div className="flex justify-center md:justify-start order-2 md:order-1">
          <svg width="260" height="260" viewBox="0 0 260 260" className="drop-shadow-sm">
            {/* anillos */}
            {[52, 104].map((r) => (
              <circle key={r} cx="130" cy="130" r={r} fill="none" stroke="#5D4E5C" strokeOpacity="0.15" strokeWidth="1" />
            ))}
            {/* ejes */}
            {[0, 60, 120, 180, 240, 300].map((deg) => {
              const rad = ((deg - 90) * Math.PI) / 180
              return (
                <line
                  key={deg}
                  x1="130" y1="130"
                  x2={130 + 104 * Math.cos(rad)}
                  y2={130 + 104 * Math.sin(rad)}
                  stroke="#5D4E5C" strokeOpacity="0.15" strokeWidth="1"
                />
              )
            })}
            {/* META — círculo pleno punteado dorado */}
            <circle cx="130" cy="130" r="104" fill="none" stroke="#C9A227" strokeWidth="2.5" strokeDasharray="8 6" />
            {/* AHORA — polígono rosa */}
            <polygon
              points="130,34 187,97 163,183 62,166 43,83"
              fill="#E8A5C7" fillOpacity="0.55"
              stroke="#D17BA8" strokeWidth="2.5"
            />
            {/* puntos */}
            {[
              [130, 34], [187, 97], [163, 183], [62, 166], [43, 83],
            ].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#D17BA8" />
            ))}
          </svg>
        </div>

        {/* Texto */}
        <div className="text-center md:text-left order-1 md:order-2">
          <p className="text-xs uppercase tracking-[0.3em] text-bloom-deep mb-4">
            Herramienta gratuita
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-ink-dark mb-5">
            La Rueda de tu Vida
          </h2>
          <p className="text-ink/70 leading-relaxed mb-3">
            Dibuja en minutos dónde estás hoy y hacia dónde decides ir. Califica cada área
            de tu vida del 1 al 10 y observa tu rueda dibujarse en tiempo real.
          </p>
          <p className="text-ink/70 leading-relaxed mb-8">
            Al finalizar, recíbela en tu correo — con el círculo pleno como horizonte y tu
            presente dibujado en él.
          </p>
          <Link
            href="/rueda-de-la-vida"
            className="inline-block bg-bloom-deep text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-bloom transition"
          >
            Dibuja tu Rueda →
          </Link>
        </div>
      </div>
    </section>
  )
}
