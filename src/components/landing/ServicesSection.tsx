export function ServicesSection() {
  return (
    <section id="metodo" className="py-24 bg-cream-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-terracotta italic text-lg mb-3">Metodología de cambio · Modelo OSAR</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-shamrock font-bold">
            La Tríada de la Coherencia Sistémica
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 border-b-4 border-shamrock shadow-sm">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="font-playfair text-2xl text-shamrock mb-3">El SER<br/><span className="text-base text-gray-500 font-normal">El Observador</span></h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cultivamos la mirada interna. <em>¿Quién estoy siendo mientras transito este proceso?</em> Ordenamos tu mundo interno para abrir nuevas posibilidades.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border-b-4 border-terracotta shadow-sm">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-playfair text-2xl text-shamrock mb-3">El HACER<br/><span className="text-base text-gray-500 font-normal">La Acción</span></h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Diseñamos y ejecutamos acciones coherentes y conscientes. Conversaciones generativas y creatividad manual como puente hacia tus objetivos.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border-b-4 border-shamrock shadow-sm">
            <div className="text-4xl mb-4">🌸</div>
            <h3 className="font-playfair text-2xl text-shamrock mb-3">El TENER<br/><span className="text-base text-gray-500 font-normal">El Resultado</span></h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Resultados sostenibles en el tiempo. Cuando mente, cuerpo y emoción se alinean en un mismo propósito, el cambio es consecuencia natural.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
