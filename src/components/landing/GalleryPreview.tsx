export function GalleryPreview() {
  return (
    <section id="talleres" className="py-24 bg-cream-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-terracotta italic text-lg mb-3">Alquimia Floral</p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Creas con tus propias manos usando la flor como espejo para escucharte, procesar emociones y recordar quién eres más allá de tus roles. Más de una década de experiencia en el sector floral.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-shamrock/10 text-shamrock px-4 py-2 rounded-full text-sm">Creatividad manual</span>
            <span className="bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm">Procesamiento emocional</span>
            <span className="bg-shamrock/10 text-shamrock px-4 py-2 rounded-full text-sm">10+ años de experiencia</span>
          </div>
        </div>
      </div>
    </section>
  )
}
