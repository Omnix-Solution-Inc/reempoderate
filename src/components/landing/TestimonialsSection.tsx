export function TestimonialsSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-playfair text-3xl md:text-4xl text-shamrock font-bold mb-12 text-center">
          El Sentido del Acompañamiento
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-shamrock/10">
            <div className="text-3xl mb-4">🌿</div>
            <h3 className="font-playfair text-xl text-shamrock mb-4">Vivir en Consciencia</h3>
            <p className="text-gray-600 leading-relaxed">
              Vivimos a menudo bajo un estado de supervivencia y automatismo, desconectadas de nuestro verdadero potencial. En ReEmpoderate entendemos que los resultados sostenibles en tu vida personal, académica o laboral son la consecuencia natural de la alineación entre tu cuerpo, tu mente y tu lenguaje.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-terracotta/10">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="font-playfair text-xl text-shamrock mb-4">La Experiencia del Primer Contacto</h3>
            <p className="text-gray-600 leading-relaxed">
              Cada interacción ha sido cuidadosamente trazada desde antes de nuestro primer encuentro. Esta atención minuciosa al detalle asegura que cada conversación, cada confirmación y cada espacio compartido se desenvuelvan en un entorno de alta confianza, fluidez operativa y respeto absoluto por tus tiempos.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-shamrock/5 to-terracotta/5 rounded-2xl p-10 text-center">
          <h3 className="font-playfair text-2xl text-shamrock mb-4">Filosofía No Directiva</h3>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            A través de un proceso reflexivo y transformacional, honramos tu autonomía absoluta. Acompañamos mediante metodologías profesionales estructuradas para facilitar que las respuestas y el poder emerjan desde tu propia individualidad interna.
          </p>
        </div>
      </div>
    </section>
  )
}
