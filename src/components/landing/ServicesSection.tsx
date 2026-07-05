export function ServicesSection() {
  return (
    <section className="py-24 bg-cream-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-terracotta italic text-lg mb-3">Metodología de cambio basada en el Modelo OSAR</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-shamrock font-bold border-l-5 border-terracotta pl-5 text-left max-w-2xl mx-auto">
            La Tríada de la Coherencia Sistémica
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
            Nos apoyamos en el rigor de la estructura de Coherencia para abordar cada espacio de tu vida de manera integral, profunda y sistemática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* SER */}
          <div className="bg-white rounded-xl p-8 border-b-4 border-shamrock shadow-sm">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="font-playfair text-2xl text-shamrock mb-4">El SER<br/><span className="text-base text-gray-500 font-normal">El Observador</span></h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Es el espacio donde cultivamos la mirada interna. Identificamos brechas de insatisfacción y nos preguntamos: <em>¿Quién estoy siendo mientras transito este proceso?</em>. Ordenamos tu mundo interno para abrir nuevas posibilidades.
            </p>
          </div>

          {/* HACER */}
          <div className="bg-white rounded-xl p-8 border-b-4 border-terracotta shadow-sm">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-playfair text-2xl text-shamrock mb-4">El HACER<br/><span className="text-base text-gray-500 font-normal">La Acción</span></h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              El diseño y la ejecución de acciones coherentes y conscientes. Damos paso a conversaciones generativas y al uso de la creatividad manual como un puente directo hacia el logro de tus objetivos de forma tangible.
            </p>
          </div>

          {/* TENER */}
          <div className="bg-white rounded-xl p-8 border-b-4 border-shamrock shadow-sm">
            <div className="text-4xl mb-4">🌸</div>
            <h3 className="font-playfair text-2xl text-shamrock mb-4">El TENER<br/><span className="text-base text-gray-500 font-normal">El Resultado</span></h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              El impacto medible y los resultados sostenibles en el tiempo. Cuando tu mente, tu cuerpo y tu emoción se alinean en un mismo propósito, los resultados son la consecuencia natural de esa coherencia interna.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
