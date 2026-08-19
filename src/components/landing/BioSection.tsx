'use client'
import Image from 'next/image'

const MARIELA_PHOTO = 'https://base44.app/api/apps/6a066d4f6fb4352d1a5946c3/files/mp/public/6a066d4f6fb4352d1a5946c3/701b8a237_mariela_bio.jpg'

export function BioSection() {
  return (
    <section id="bio" className="py-24 bg-gradient-to-b from-cream to-cream-dark">
      <div className="max-w-5xl mx-auto px-6">
        {/* Foto con bordes suavizados */}
        <div className="flex justify-center mb-12">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full overflow-hidden shadow-xl shadow-bloom/20 ring-4 ring-bloom-light/40">
              <Image
                src={MARIELA_PHOTO}
                alt="Mariela Barbetti Oropeza"
                fill
                className="object-cover rounded-full"
                style={{ borderRadius: '9999px' }}
                sizes="(max-width: 768px) 18rem, 20rem"
              />
            </div>
          </div>
        </div>

        {/* Nombre y titulo */}
        <h2 className="font-playfair text-3xl md:text-4xl text-ink text-center mb-3">
          Mariela Barbetti Oropeza
        </h2>
        <p className="font-arimo text-sm text-bloom-deep text-center mb-10 tracking-wide uppercase">
          Coach Ontológica y Laboral · Miembro de ICF
        </p>

        {/* Biografia */}
        <div className="max-w-3xl mx-auto space-y-6 font-arimo text-ink/70 text-base leading-relaxed">
          <p>
            ¡Hola! Soy Mariela Barbetti, venezolana, mujer inmigrante radicada en Estados Unidos desde 2015, madre de cuatro hijos (Paul, Abraham, Alena y Ana), esposa, hija y hermana.
          </p>

          <p>
            Mi camino hacia el acompañamiento profesional se sostiene sobre una base constante: mi pasión por aprender. Con formación previa en Derecho en Venezuela, el rigor analítico y ético que aprendí en las aulas me dio una estructura sólida, mientras que mi propia experiencia de vida —emigrar, reinventarme y sostener el equilibrio familiar en un nuevo país— me enseñó que el crecimiento personal exige redescubrirnos y adaptar nuestra mirada.
          </p>

          <p>
            Esa búsqueda continua me llevó a certificarme como Coach Ontológica y Laboral, especializada en meditación y ser miembro de la International Coaching Federation (ICF).
          </p>

          {/* Gratitud y Reconocimiento */}
          <h3 className="font-playfair text-2xl text-ink pt-6">
            Gratitud y Reconocimiento
          </h3>
          <p>
            Nada de este camino habría sido posible en soledad. Hoy miro mi recorrido con un profundo sentimiento de reconocimiento hacia cada paso dado. Gracias a mis muchos profesores y mentores, cuyo conocimiento, guía y generosidad no solo moldearon mi estructura profesional, sino que me impulsaron a cuestionar, expandir mi mirada y confiar en mi propio potencial para acompañar a otros con excelencia y empatía.
          </p>

          {/* ¿Por qué nace ReEmpodérate? */}
          <h3 className="font-playfair text-2xl text-ink pt-6">
            ¿Por qué nace ReEmpodérate?
          </h3>
          <p>
            ReEmpodérate nace como una respuesta a esos momentos de transición en los que sentimos que algo debe cambiar. A lo largo de mi historia he comprobado que las mayores limitaciones no provienen de la falta de capacidad, sino de los bucles de pensamientos y relatos que nos desconectan de nuestro propio potencial.
          </p>
          <p>
            Mi propósito es ser un espejo para acompañar en lo personal y profesional a:
          </p>
          <div className="space-y-3 pl-4">
            <p className="flex gap-3">
              <span className="text-bloom-deep flex-shrink-0">✦</span>
              <span><strong className="text-ink">Rediseñar su futuro:</strong> Cuestionar creencias que limitan y abrir nuevas posibilidades mediante el diálogo ontológico.</span>
            </p>
            <p className="flex gap-3">
              <span className="text-bloom-deep flex-shrink-0">✦</span>
              <span><strong className="text-ink">Alinear el Ser, Hacer y Tener:</strong> Facilitar un espacio de auto-observación para que tus pensamientos, emociones y acciones caminen en la misma dirección.</span>
            </p>
            <p className="flex gap-3">
              <span className="text-bloom-deep flex-shrink-0">✦</span>
              <span><strong className="text-ink">Transitar procesos con claridad:</strong> Brindar herramientas clave para la toma de decisiones, la gestión laboral y el desarrollo de un liderazgo consciente.</span>
            </p>
          </div>

          {/* Filosofía de trabajo */}
          <h3 className="font-playfair text-2xl text-ink pt-6">
            Mi filosofía de trabajo
          </h3>
          <p>
            Creo profundamente en el valor de la escucha empática, la presencia activa y la flexibilidad como motores para habitar la vida con serenidad. Para mí, el aprendizaje no se detiene nunca: cada conversación, cada desafío y cada nueva herramienta son una oportunidad para recordar quiénes somos más allá de nuestras rutinas o roles diarios.
          </p>
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <h3 className="font-playfair text-2xl text-ink mb-4">
            ¿Listo para iniciar tu propio proceso de transformación?
          </h3>
          <p className="font-arimo text-ink/60 text-base mb-8">
            Te invito a conocer mis espacios de acompañamiento y recursos.
          </p>
          <a
            href="https://wa.me/13217329993?text=Hola%2C%20quiero%20iniciar%20mi%20proceso%20de%20transformaci%C3%B3n%20con%20ReEmpodérate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bloom-deep text-white px-8 py-4 rounded-2xl font-medium hover:bg-bloom transition text-base shadow-lg shadow-bloom/25"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Empieza tu transformación
          </a>
        </div>
      </div>
    </section>
  )
}
