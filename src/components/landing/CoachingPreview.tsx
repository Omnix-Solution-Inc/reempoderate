export function CoachingPreview() {
  return (
    <section id="coaching" className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-terracotta italic text-lg mb-3">Coaching Ontológico y Laboral</p>
        </div>

        {/* Coaching Ontológico */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <h3 className="font-playfair text-2xl text-bloom-deep mb-4">Coaching Ontológico</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Es una conversación donde te acompaño a mirarte a ti misma. A ver cómo piensas, cómo sientes y cómo te relacionas con todo lo que te rodea. A reconocer quién estás siendo hoy y quién eliges ser a partir de ahora.
          </p>
          <p className="text-ink font-medium text-sm mb-3">Aborda:</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">Quién elijo ser ante lo que estoy viviendo</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">Mis conversaciones internas y cómo me hablo</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">Mis relaciones y vínculos</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">Mi propósito y si estoy viviendo en coherencia con lo que digo, siento y hago…</p>
            </div>
          </div>
        </div>

        {/* Coaching Laboral */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-10">
          <h3 className="font-playfair text-2xl text-bloom-deep mb-4">Coaching Laboral</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Es una conversación donde te acompaño a mirar tu camino profesional. A ver dónde estás, hacia dónde quieres ir y qué pasos dar para llegar ahí. A tomar decisiones sobre tu trabajo con claridad y seguridad.
          </p>
          <p className="text-ink font-medium text-sm mb-3">Aborda:</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">Mi carrera y hacia dónde quiero ir profesionalmente</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">Decisiones de empleo, emprendimiento o cambio de rumbo</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">Mi liderazgo, comunicación y desempeño en el trabajo</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-bloom-deep text-sm mt-1">✦</span>
              <p className="text-gray-600 text-sm">Cómo alineo mi propósito personal con mi vida profesional…</p>
            </div>
          </div>
        </div>

        {/* Bloque unificado */}
        <div className="bg-shamrock/5 rounded-2xl p-8 border border-shamrock/10">
          <p className="text-gray-600 text-base leading-relaxed mb-6 text-center italic">
            Es un proceso tuyo y las respuestas emergen de ti.
          </p>
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="text-bloom text-xl mt-1">✦</span>
              <p className="text-gray-600 text-base"><strong className="text-ink">Reflexivo</strong> — indagación consciente sobre tu observador y tus posibilidades.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bloom text-xl mt-1">✦</span>
              <p className="text-gray-600 text-base"><strong className="text-ink">Transformacional</strong> — cambio profundo y sostenible.</p>
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
      </div>
    </section>
  )
}
