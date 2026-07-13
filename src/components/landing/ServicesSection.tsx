export function ServicesSection() {
  return (
    <section id="metodo" className="py-24 bg-cream-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-terracotta italic text-lg mb-3">Metodología de cambio</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-shamrock font-bold">
            La Tríada de la Coherencia Sistémica
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* SER */}
          <div className="bg-white rounded-xl p-8 border-b-4 border-shamrock shadow-sm">
            <div className="flex items-center justify-center w-full h-28 mb-4">
              <img src="/infinito.png" alt="Ser" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-playfair text-2xl text-shamrock mb-3">El SER<br/><span className="text-base text-gray-500 font-normal">El Observador</span></h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Somos el espejo donde te miras para descubrir tu propia realidad. <em>¿Quién elijo ser ante lo que estoy viviendo?</em> Te acompañamos mediante conversaciones a abrir nuevas posibilidades.
            </p>
          </div>

          {/* HACER */}
          <div className="bg-white rounded-xl p-8 border-b-4 border-terracotta shadow-sm">
            <div className="flex items-center justify-center w-full h-28 mb-4">
              <img src="/hacer_icon.png" alt="Hacer" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-playfair text-2xl text-shamrock mb-3">El HACER<br/><span className="text-base text-gray-500 font-normal">La Acción</span></h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tú determinas qué acciones tomar en relación a lo que te sucede. Conversaciones generativas y creatividad manual como puente hacia tus propios objetivos.
            </p>
          </div>

          {/* TENER */}
          <div className="bg-white rounded-xl p-8 border-b-4 border-shamrock shadow-sm">
            <div className="flex items-center justify-center w-full h-28 mb-4">
              <img src="/tener_icon.png" alt="Tener" className="w-full h-full object-contain" />
            </div>
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
