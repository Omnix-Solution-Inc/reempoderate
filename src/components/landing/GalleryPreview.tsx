export function GalleryPreview() {
  return (
    <section className="py-24 bg-cream-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-terracotta/10 to-shamrock/10 flex items-center justify-center p-12">
              <div className="text-center">
                <div className="text-6xl mb-4">💐</div>
                <p className="font-playfair text-xl text-terracotta italic">
                  "La materia noble de la flor como espejo de tu esencia"
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-terracotta italic text-lg mb-3">El Ecosistema ReEmpoderate</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-shamrock font-bold mb-6">
              Talleres de Alquimia Floral
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Un laboratorio creativo, artístico y manual respaldado por más de una década de experiencia en el sector floral.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Aquí creas con tus propias manos utilizando la materia noble de la flor como un espejo para escucharte, procesar emociones y recordar quién eres más allá de tus roles o heridas cotidianas.
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
