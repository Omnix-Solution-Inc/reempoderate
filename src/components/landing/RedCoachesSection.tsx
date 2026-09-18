'use client'
import { useState } from 'react'
import Image from 'next/image'

import { useI18n, type Lang } from '@/lib/i18n'

type Coach = {
  id: string
  photo: string
  alt: string
  badge: string
  name: string
  title: string
  intro: string
  bio: string[]
}

const COACHES_BY_LANG: Record<Lang, Coach[]> = {
  es: [
    {
      id: 'mariela',
      photo: '/mariela-bio.jpg',
      alt: 'Mariela Barbetti',
      badge: 'Fundadora',
      name: 'Mariela Barbetti',
      title: 'Coach Ontológica y Laboral · Miembro de ICF',
      intro:
        'Venezolana, inmigrante en EE. UU. desde 2015, madre de cuatro hijos. Fundadora de ReEmpodérate.',
      bio: [
        '¡Hol@! 💜 Soy Mariela Barbetti, venezolana, inmigrante en EE. UU. desde 2015, madre de cuatro hijos (Paul, Abraham, Alena y Ana), esposa, hija, hermana y amiga.',
        'Mi camino se sostiene sobre una pasión constante: aprender. Con formación previa en Derecho en Venezuela, el rigor analítico me dio una base sólida, mientras que mi propia experiencia de vida —emigrar, reinventarme y sostener el equilibrio familiar— me enseñó que el verdadero crecimiento exige redescubrirnos y transformar nuestra mirada.',
        'Esa búsqueda continua me llevó a certificarme como Coach Ontológica y Laboral, estar en proceso de certificación de Mindfulness y ser miembro de la International Coaching Federation (ICF).',
        'Miro mi recorrido con profundo reconocimiento: gracias a mis muchos profesores y mentores, cuyo conocimiento y guía me impulsaron a cuestionar, expandir mi mirada y confiar en mi potencial para acompañar a otros.',
      ],
    },
    {
      id: 'xiomara',
      photo: '/xiomara-coach.jpg',
      alt: 'Xiomara Moreno Bello',
      badge: 'Coach Ejecutiva',
      name: 'Xiomara Moreno Bello',
      title: 'Arquitecta de Resultados · Consultora Sistémica y Coach Ejecutiva',
      intro:
        '45 años de trayectoria profesional acompañando a empresas y líderes en su transformación.',
      bio: [
        '"Entreno para ver lo que no ves y materializar lo que creías imposible."',
        'Con 45 años de trayectoria profesional ininterrumpida, Xiomara Moreno Bello es especialista en gestión del cambio organizacional, facilitación del aprendizaje significativo y desarrollo de liderazgo ejecutivo. A lo largo de más de cuatro décadas, ha acompañado a empresas y líderes a cerrar la brecha entre la identidad corporativa y sus resultados estratégicos.',
        'Es fundadora y creadora de metodologías enfocadas en la Transformación Sistémica, integrando herramientas de metacognición, consciencia inmediata y el marco de Trilogía de Vida (armonización personal, profesional y ciudadana). Su enfoque combina la solidez conceptual de la gestión estratégica moderna con una mirada humana orientada a la sostenibilidad organizativa.',
        'Actualmente asesora a organizaciones en arquitecturas de cambio, formación de líderes transformadores y programas de continuidad estratégica. Reside y opera desde Caracas, Venezuela, proyectando su alcance a nivel internacional.',
      ],
    },
  ],
  en: [
    {
      id: 'mariela',
      photo: '/mariela-bio.jpg',
      alt: 'Mariela Barbetti',
      badge: 'Founder',
      name: 'Mariela Barbetti',
      title: 'Ontological & Career Coach · ICF Member',
      intro:
        'Venezuelan, an immigrant in the U.S. since 2015, mother of four children. Founder of ReEmpodérate.',
      bio: [
        'Hello! 💜 I am Mariela Barbetti, Venezuelan, an immigrant in the U.S. since 2015, mother of four children (Paul, Abraham, Alena, and Ana), wife, daughter, sister, and friend.',
        'My path rests on a constant passion: learning. With prior training in Law in Venezuela, analytical rigor gave me a solid foundation, while my own life experience — emigrating, reinventing myself, and sustaining family balance — taught me that true growth requires rediscovering ourselves and transforming the way we see.',
        'That continuous search led me to become certified as an Ontological and Career Coach, to be in the process of Mindfulness certification, and to be a member of the International Coaching Federation (ICF).',
        'I look back on my journey with deep gratitude: thanks to my many teachers and mentors, whose knowledge and guidance encouraged me to question, expand my vision, and trust my potential to accompany others.',
      ],
    },
    {
      id: 'xiomara',
      photo: '/xiomara-coach.jpg',
      alt: 'Xiomara Moreno Bello',
      badge: 'Executive Coach',
      name: 'Xiomara Moreno Bello',
      title: 'Architect of Results · Systemic Consultant and Executive Coach',
      intro:
        '45 years of professional experience accompanying companies and leaders in their transformation.',
      bio: [
        '"I train you to see what you do not see and to materialize what you believed impossible."',
        'With 45 years of uninterrupted professional experience, Xiomara Moreno Bello is a specialist in organizational change management, facilitation of significant learning, and executive leadership development. Over more than four decades, she has accompanied companies and leaders in closing the gap between corporate identity and strategic results.',
        'She is the founder and creator of methodologies focused on Systemic Transformation, integrating metacognition tools, immediate awareness, and the Trilogía de Vida framework (personal, professional, and civic harmonization). Her approach combines the conceptual solidity of modern strategic management with a human perspective oriented toward organizational sustainability.',
        'She currently advises organizations on change architectures, the formation of transformative leaders, and strategic continuity programs. She lives and operates from Caracas, Venezuela, projecting her reach internationally.',
      ],
    },
  ],
}

function CoachCard({ coach }: { coach: Coach }) {
  const [open, setOpen] = useState(false)
  const { t } = useI18n()
  return (
    <div className="max-w-3xl mx-auto bg-white/60 rounded-3xl p-8 md:p-10 shadow-lg shadow-bloom/10 ring-1 ring-bloom-light/30 mb-10 last:mb-0">
      {/* Foto */}
      <div className="flex justify-center mb-6">
        <div className="relative w-40 h-40 md:w-48 md:h-48">
          <div className="absolute inset-0 rounded-full overflow-hidden shadow-xl shadow-bloom/20 ring-4 ring-bloom-light/40">
            <Image
              src={coach.photo}
              alt={coach.alt}
              fill
              className="object-cover rounded-full"
              style={{ borderRadius: '9999px' }}
              sizes="(max-width: 768px) 10rem, 12rem"
            />
          </div>
        </div>
      </div>

      {/* Etiqueta, nombre y título */}
      <div className="text-center">
        <span className="inline-block bg-bloom-light/60 text-bloom-deep text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-3">
          {coach.badge}
        </span>
        <h3 className="font-playfair text-2xl md:text-3xl text-ink mb-2">
          {coach.name}
        </h3>
        <p className="font-arimo text-sm text-bloom-deep tracking-wide uppercase mb-4">
          {coach.title}
        </p>

        {/* Descripción breve + puntos suspensivos clicables */}
        {!open && (
          <p className="font-arimo text-ink/60 text-base max-w-xl mx-auto leading-relaxed">
            {coach.intro}{' '}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label={`${t('red.verMas')} — ${coach.name}`}
              className="text-bloom-deep font-bold hover:text-bloom transition-colors cursor-pointer tracking-widest"
            >
              ...
            </button>
          </p>
        )}
      </div>

      {/* Bio completa desplegable */}
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 font-arimo text-ink/70 text-base leading-relaxed pt-6 mt-2 border-t border-bloom-light/50">
            {coach.bio.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0 && coach.id === 'xiomara'
                    ? 'text-center italic text-ink/80 border-l-4 border-bloom pl-4 -ml-4 md:mx-8'
                    : ''
                }
              >
                {p}
              </p>
            ))}
          </div>
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="font-arimo text-sm text-bloom-deep/70 hover:text-bloom-deep underline transition-colors"
            >
              {t('red.mostrarMenos')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function RedCoachesSection() {
  const { lang, t } = useI18n()
  const coaches = COACHES_BY_LANG[lang]
  return (
    <section id="red-de-coaches" className="py-24 bg-cream-dark/30">
      <div className="max-w-5xl mx-auto px-6">
        {/* Encabezado de la sección */}
        <div className="text-center mb-14">
          <h2 className="font-playfair text-3xl md:text-4xl text-ink mb-4">
            {t('red.h2')}
          </h2>
          <p className="font-arimo text-ink/60 text-base max-w-2xl mx-auto leading-relaxed">
            {t('red.p')}
          </p>
        </div>

        {/* Tarjetas */}
        {coaches.map((coach) => (
          <CoachCard key={coach.id} coach={coach} />
        ))}
      </div>
    </section>
  )
}
