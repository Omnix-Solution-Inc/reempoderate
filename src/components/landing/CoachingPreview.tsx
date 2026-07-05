export function CoachingPreview() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-bloom italic text-lg mb-3">El Ecosistema ReEmpoderate</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-ink font-bold mb-6">
              Sesiones de Coaching Ontológico y Laboral
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              El proceso del coaching es <strong className="text-ink">reflexivo y transformacional</strong>. Acompañamos bajo estándares ICF mediante sesiones de coaching no directivo, honrando la autonomía absoluta del ser y facilitando que las respuestas y el potencial emerjan desde la propia individualidad de la persona.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-bloom text-xl mt-1">✦</span>
                <p className="text-gray-600 text-base leading-relaxed">
                  <strong className="text-ink">Reflexivo</strong> — cada conversación es un espacio de indagación consciente sobre tu observador, tus creencias y tus posibilidades.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-bloom text-xl mt-1">✦</span>
                <p className="text-gray-600 text-base leading-relaxed">
                  <strong className="text-ink">Transformacional</strong> — el objetivo es un cambio profundo y sostenible, no solo una solución temporal.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-bloom text-xl mt-1">✦</span>
                <p className="text-gray-600 text-base leading-relaxed">
                  <strong className="text-ink">No directivo</strong> — tus respuestas emergen desde tu propia individualidad, nunca desde una indicación externa.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-bloom text-xl mt-1">✦</span>
                <p className="text-gray-600 text-base leading-relaxed">
                  <strong className="text-ink">Estándares ICF</strong> — respaldados por el marco ético y profesional de la Federación Internacional de Coaching.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-3 bg-white/60 border border-bloom/20 rounded-xl px-5 py-3 text-sm text-ink">
              <span className="text-xl">📜</span>
              <span>Espacio reservado para el Sello Profesional / Credencial ICF</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-bloom/10 to-gold/10 flex items-center justify-center p-12">
              <div className="text-center">
                <div className="text-6xl mb-4">🧭</div>
                <p className="font-playfair text-xl text-ink italic leading-relaxed">
                  "El observador que eres determina el mundo que habitas"
                </p>
                <div className="mt-6 inline-block bg-bloom/10 rounded-full px-4 py-1.5 text-xs font-medium text-bloom">
                  Autonomía absoluta del ser
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
