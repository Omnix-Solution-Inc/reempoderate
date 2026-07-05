export function CoachingPreview() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-terracotta italic text-lg mb-3">El Ecosistema ReEmpoderate</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-shamrock font-bold mb-6">
              Sesiones de Coaching Ontológico y Laboral
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Espacios de conversación profesional individuales o para entornos de trabajo guiados bajo la pureza del método no directivo y un riguroso marco de ética profesional.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Expandimos tu observación y optimizamos tu coordinación de acciones para abrir futuros alternativos.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/60 border border-shamrock/20 rounded-xl px-5 py-3 text-sm text-shamrock">
              <span className="text-xl">📜</span>
              <span>Espacio reservado para el Sello Profesional / Credencial</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-shamrock/10 to-terracotta/10 flex items-center justify-center p-12">
              <div className="text-center">
                <div className="text-6xl mb-4">🧭</div>
                <p className="font-playfair text-xl text-shamrock italic">
                  "El observador que eres determina el mundo que habitas"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
