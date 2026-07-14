export function CoachingPreview() {
  return (
    <section id="coaching" className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-bloom italic text-lg mb-3">Coaching Ontológico y Laboral</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-ink font-bold mb-6">
              Un proceso reflexivo y transformacional
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Acompañamos bajo estándares ICF mediante sesiones no directivas, honrando la autonomía absoluta del ser y facilitando que las respuestas emerjan desde tu propia individualidad.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-bloom text-xl mt-1">✦</span>
                <p className="text-gray-600 text-base"><strong className="text-ink">Reflexivo</strong> — indagación consciente sobre tu observador y tus posibilidades.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-bloom text-xl mt-1">✦</span>
                <p className="text-gray-600 text-base"><strong className="text-ink">Transformacional</strong> — cambio profundo y sostenible, no soluciones temporales.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-bloom text-xl mt-1">✦</span>
                <p className="text-gray-600 text-base"><strong className="text-ink">No directivo</strong> — las respuestas emergen desde tu propia individualidad.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-bloom text-xl mt-1">✦</span>
                <p className="text-gray-600 text-base"><strong className="text-ink">ICF</strong> — respaldado por el marco ético de la Federación Internacional de Coaching.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-[#FEFAFC] flex flex-col items-center justify-center p-6 overflow-hidden">
              <img
                src="/observador_icon.png"
                alt="El Observador"
                className="w-full h-3/5 object-contain bg-[#FEFAFC] rounded-xl"
              />
              <p className="font-playfair text-xl text-ink italic text-center leading-snug mt-4">
                "El observador que eres determina el mundo que habitas"
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
