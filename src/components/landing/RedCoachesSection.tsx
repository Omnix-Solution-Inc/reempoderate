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

        {/* Tarjeta de Xiomara Moreno */}
        <div className="max-w-3xl mx-auto bg-white/60 rounded-3xl p-8 md:p-12 shadow-lg shadow-bloom/10 ring-1 ring-bloom-light/30">
          {/* Foto */}
          <div className="flex justify-center mb-8">
            <div className="relative w-44 h-44 md:w-52 md:h-52">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-xl shadow-bloom/20 ring-4 ring-bloom-light/40">
                <Image
                  src={XIOMARA_PHOTO}
                  alt="Xiomara Moreno"
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
            Xiomara Moreno
          </h3>
          <p className="font-arimo text-sm text-bloom-deep text-center mb-8 tracking-wide uppercase">
            Consultora Formadora · Facilitadora de Aprendizajes · Coach
          </p>

          {/* Biografía */}
          <div className="space-y-5 font-arimo text-ink/70 text-base leading-relaxed">
            <p className="text-center italic text-ink/80 border-l-4 border-bloom pl-4 -ml-4 md:mx-8">
              &ldquo;Entreno para ver lo que no ves y materializar lo que creías
              imposible.&rdquo;
            </p>

            <p>
              Durante 40 años ininterrumpidos, Xiomara ha acompañado a
              organizaciones como consultora, formadora y facilitadora de
              aprendizajes. Hoy pone sus servicios y productos a la orden de las
              organizaciones que desean optimizar sus equipos de talento,
              transformando a su gente en consultores transformadores para el
              negocio.
            </p>

            <p>
              Su acompañamiento genera cambios conscientes e inmediatos en las
              habilidades blandas: manejo efectivo de equipos de trabajo,
              formación de líderes transformacionales, cultura de
              responsabilidad, mejora de la gestión del tiempo y reducción del
              retrabajo — respuestas claras a las necesidades reales de las
              empresas de hoy.
            </p>

            <p>
              Sus productos, <strong className="text-ink">La Mentoría</strong> y{' '}
              <strong className="text-ink">El Coaching en línea</strong>,
              fortalecen el Ser para optimizar el Hacer con modelos
              personalizados y adaptables: personas, grupos y equipos de
              organizaciones de salud, educativas, tecnológicas, de
              construcción o manufactura que buscan desarrollar las habilidades
              blandas de su gente.
            </p>

            <p>
              Trabaja con indicadores de resultados medibles, alineados al
              corazón del negocio y a sus objetivos financieros, de mejora de la
              calidad y de calidez empresarial, como valores clave de su
              cultura.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
