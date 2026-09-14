'use client'
import Image from 'next/image'

const XIOMARA_PHOTO = '/xiomara-coach.jpg'

export function RedCoachesSection() {
  return (
    <section id="red-de-coaches" className="py-24 bg-cream-dark/30">
      <div className="max-w-5xl mx-auto px-6">
        {/* Encabezado de la sección */}
        <div className="text-center mb-14">
          <h2 className="font-playfair text-3xl md:text-4xl text-ink mb-4">
            Red de Coaches 🌿
          </h2>
          <p className="font-arimo text-ink/60 text-base max-w-2xl mx-auto leading-relaxed">
            Un equipo que acompaña transformaciones desde distintos territorios
            de experiencia, con el corazón de ReEmpodérate.
          </p>
        </div>

        {/* Tarjeta de Xiomara Moreno Bello */}
        <div className="max-w-3xl mx-auto bg-white/60 rounded-3xl p-8 md:p-12 shadow-lg shadow-bloom/10 ring-1 ring-bloom-light/30">
          {/* Foto */}
          <div className="flex justify-center mb-8">
            <div className="relative w-44 h-44 md:w-52 md:h-52">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-xl shadow-bloom/20 ring-4 ring-bloom-light/40">
                <Image
                  src={XIOMARA_PHOTO}
                  alt="Xiomara Moreno Bello"
                  fill
                  className="object-cover rounded-full"
                  style={{ borderRadius: '9999px' }}
                  sizes="(max-width: 768px) 11rem, 13rem"
                />
              </div>
            </div>
          </div>

          {/* Nombre y título */}
          <h3 className="font-playfair text-2xl md:text-3xl text-ink text-center mb-3">
            Xiomara Moreno Bello
          </h3>
          <p className="font-arimo text-sm text-bloom-deep text-center mb-8 tracking-wide uppercase">
            Arquitecta de Resultados · Consultora Sistémica y Coach Ejecutiva
          </p>

          {/* Biografía */}
          <div className="space-y-5 font-arimo text-ink/70 text-base leading-relaxed">
            <p className="text-center italic text-ink/80 border-l-4 border-bloom pl-4 -ml-4 md:mx-8">
              &ldquo;Entreno para ver lo que no ves y materializar lo que creías
              imposible.&rdquo;
            </p>

            <p>
              Con 45 años de trayectoria profesional ininterrumpida, Xiomara
              Moreno Bello es especialista en gestión del cambio organizacional,
              facilitación del aprendizaje significativo y desarrollo de
              liderazgo ejecutivo. A lo largo de más de cuatro décadas, ha
              acompañado a empresas y líderes a cerrar la brecha entre la
              identidad corporativa y sus resultados estratégicos.
            </p>

            <p>
              Es fundadora y creadora de metodologías enfocadas en la
              Transformación Sistémica, integrando herramientas de metacognición,
              consciencia inmediata y el marco de Trilogía de Vida (armonización
              personal, profesional y ciudadana). Su enfoque combina la solidez
              conceptual de la gestión estratégica moderna con una mirada humana
              orientada a la sostenibilidad organizativa.
            </p>

            <p>
              Actualmente asesora a organizaciones en arquitecturas de cambio,
              formación de líderes transformadores y programas de continuidad
              estratégica. Reside y opera desde Caracas, Venezuela, proyectando
              su alcance a nivel internacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
