export function GalleryPreview() {
  return (
    <section id="talleres" className="py-24 bg-cream-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Imagen floristas - grande y llena el recuadro */}
          <div className="relative order-2 md:order-1">
            <div className="rounded-3xl bg-gradient-to-br from-terracotta/10 to-shamrock/10 overflow-hidden flex items-end justify-center min-h-[420px]">
              <img
                src="/flores_taller.png"
                alt="Alquimia Floral"
                className="w-full object-contain object-bottom"
                style={{ maxHeight: '480px' }}
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-terracotta italic text-lg mb-3">Alquimia Floral</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-shamrock font-bold mb-6">
              La materia noble de la flor
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4 italic font-playfair">
              "La materia noble de la flor como espejo de tu esencia"
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Creas con tus propias manos usando la flor como espejo para escucharte, procesar emociones y recordar quién eres más allá de tus roles. Más de una década de experiencia en el sector floral.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-shamrock/10 text-shamrock px-4 py-2 rounded-full text-sm">Creatividad manual</span>
              <span className="bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm">Procesamiento emocional</span>
              <span className="bg-shamrock/10 text-shamrock px-4 py-2 rounded-full text-sm">10+ años de experiencia</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
