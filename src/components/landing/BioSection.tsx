'use client'
import Image from 'next/image'

const MARIELA_PHOTO = '/mariela-bio.jpg'

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
            Esa búsqueda continua me llevó a formarme como Coach Ontológica y Laboral, especializada en Mindfulness, y ser miembro de la International Coaching Federation (ICF).
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

      </div>
    </section>
  )
}
