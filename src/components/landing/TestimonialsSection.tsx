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

        <div className="space-y-5 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            Mi nombre es <span className="font-semibold text-shamrock">Mariela Barbetti</span>. Acompañe la construcción de nuevas realidades desde el autoconocimiento y la exploración de la individualidad interna.
          </p>
          <p>
            Como Coach Ontológica y Profesional, miembro activo de la <span className="font-semibold text-shamrock">Federación Internacional de Coaching (ICF)</span>, he acompañado a mujeres a tomar el control de sus vidas. Creé <span className="font-semibold text-terracotta">Alquimia Floral</span> fusionando más de una década de experiencia como florista con el trabajo emocional y creativo.
          </p>
        </div>

        <div className="mt-12 bg-gradient-to-r from-shamrock/5 to-terracotta/5 rounded-2xl p-10 text-center">
          <div className="space-y-2 mb-6">
            <p className="font-playfair text-xl text-shamrock italic">¿Cuáles son mis pensamientos?</p>
            <p className="font-playfair text-xl text-shamrock italic">¿Qué tipo de pensamientos tengo?</p>
            <p className="font-playfair text-xl text-shamrock italic">¿Me limitan o crean posibilidades?</p>
          </div>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            ReEmpoderate acompaña a quienes han decidido rediseñar su futuro, utilizando la conversación como puente hacia la autotransformación.
          </p>
        </div>
      </div>
    </section>
  )
}
