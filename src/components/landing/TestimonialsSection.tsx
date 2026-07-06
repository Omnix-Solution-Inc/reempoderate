export function TestimonialsSection() {
  return (
    <section id="bio" className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-terracotta italic text-lg mb-3">Autotransformación Consciente</p>
          <h2 className="font-playfair text-3xl md:text-5xl text-shamrock font-bold">
            Mariela Barbetti
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="text-center">
            <div className="aspect-square rounded-full bg-gradient-to-br from-shamrock/15 to-terracotta/15 flex items-center justify-center mb-4 mx-auto max-w-[180px]">
              <span className="text-5xl">🌸</span>
            </div>
            <p className="font-playfair text-sm text-shamrock">Coach Ontológica</p>
            <p className="text-xs text-gray-400">ICF Member</p>
          </div>
          <div className="text-center">
            <div className="aspect-square rounded-full bg-gradient-to-br from-terracotta/15 to-shamrock/15 flex items-center justify-center mb-4 mx-auto max-w-[180px]">
              <span className="text-5xl">💐</span>
            </div>
            <p className="font-playfair text-sm text-shamrock">Florista desde 2015</p>
            <p className="text-xs text-gray-400">Alquimia Floral</p>
          </div>
          <div className="text-center">
            <div className="aspect-square rounded-full bg-gradient-to-br from-shamrock/15 to-terracotta/15 flex items-center justify-center mb-4 mx-auto max-w-[180px]">
              <span className="text-5xl">🌟</span>
            </div>
            <p className="font-playfair text-sm text-shamrock">Madre de Cuatro</p>
            <p className="text-xs text-gray-400">Fundadora</p>
          </div>
        </div>

        <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            Mi nombre es <span className="font-semibold text-shamrock">Mariela Barbetti</span> y mi propósito es acompañar en la construcción de nuevas realidades desde el autoconocimiento y la exploración de la individualidad interna.
          </p>
          <p>
            Como madre de cuatro, he atravesado procesos personales que me han enseñado que la verdadera competencia nace del autodescubrimiento.
          </p>
          <p>
            Como Coach Ontológica y Profesional, miembro activo de la <span className="font-semibold text-shamrock">Federación Internacional de Coaching (ICF)</span>, he acompañado a mujeres a tomar el control de sus vidas.
          </p>
          <p>
            Creé <span className="font-semibold text-terracotta">Alquimia Floral</span> como un laboratorio creativo y manual donde fusiono mi experiencia como florista desde 2015. Aquí, cada persona crea con sus manos para escucharse, recordando quién es más allá de sus heridas y sus roles.
          </p>
        </div>

        <div className="mt-12 bg-gradient-to-r from-shamrock/5 to-terracotta/5 rounded-2xl p-10 text-center">
          <div className="space-y-2 mb-6">
            <p className="font-playfair text-xl text-shamrock italic">¿Cuáles son mis pensamientos?</p>
            <p className="font-playfair text-xl text-shamrock italic">¿Qué tipo de pensamientos tengo?</p>
            <p className="font-playfair text-xl text-shamrock italic">¿Me limitan o crean posibilidades?</p>
          </div>
        </div>

        <div className="mt-10 text-center max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            ReEmpoderate nace como una iniciativa con el propósito de acompañar a quienes han decidido rediseñar su futuro, utilizando la conversación como puente hacia esa autotransformación.
          </p>
        </div>
      </div>
    </section>
  )
}
