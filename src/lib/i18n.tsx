'use client'

// Sistema bilingüe ReEmpodérate — Español (default) / English
// El español es la lengua fuente: reproduce EXACTAMENTE los textos actuales.
// El inglés es traducción profesional nueva. Ningún texto funcional cambia.

import { createContext, useContext, useEffect, useState } from 'react'

export type Lang = 'es' | 'en'

type Dict = Record<string, string>

const es: Dict = {
  // ===== NABVAR =====
  'nav.metodo': 'Método',
  'nav.coaching': 'Coaching',
  'nav.rueda': 'Rueda de la Vida',
  'nav.bio': 'Bio',
  'nav.acceder': 'Acceder',

  // ===== HERO =====
  'hero.h1a': 'Tu vida empieza cuando',
  'hero.h1b': 'decides quién quieres ser.',
  'hero.p': 'ReEmpodérate es un espacio de acompañamiento para personas que ya saben que algo tiene que cambiar — y eligen ser quienes lo cambien.',
  'hero.cta': 'Empieza tu transformación',
  'hero.portal': 'Acceder a mi portal',
  'hero.dashboard': 'Ir a mi dashboard',
  'hero.stat1': 'Años de experiencia',
  'hero.stat2': 'No directivo',
  'hero.stat3': 'Miembro de la Federación',

  // ===== RUEDA (sección landing) =====
  'ruedaSec.tag': 'Herramienta gratuita',
  'ruedaSec.h2': 'La Rueda de tu Vida',
  'ruedaSec.p1': 'Dibuja en minutos dónde estás hoy y hacia dónde decides ir. Califica cada área de tu vida del 1 al 10 y observa tu rueda dibujarse en tiempo real.',
  'ruedaSec.p2': 'Al finalizar, recíbela en tu correo — con el círculo pleno como horizonte y tu presente dibujado en él.',
  'ruedaSec.cta': 'Dibuja tu Rueda →',

  // ===== SERVICIOS / TRÍADA =====
  'services.tag': 'Metodología de cambio',
  'services.h2': 'La Tríada de la Coherencia',
  'services.serT': 'El SER',
  'services.serS': 'El Observador',
  'services.serP': 'Soy el espejo donde te miras para descubrir tu propia realidad. ¿Quién elijo ser ante lo que estoy viviendo? Te acompaño mediante conversaciones a abrir nuevas posibilidades.',
  'services.hacerT': 'El HACER',
  'services.hacerS': 'La Acción',
  'services.hacerP': 'Tú determinas qué acciones tomar en relación a lo que te sucede. Conversaciones generativas como puente hacia tus propios objetivos.',
  'services.tenerT': 'El TENER',
  'services.tenerS': 'El Resultado',
  'services.tenerP': 'Resultados sostenibles en el tiempo. Cuando mente, cuerpo y emoción se alinean en un mismo propósito, el cambio es consecuencia natural.',

  // ===== COACHING PREVIEW =====
  'coach.ontoTitle': 'Coaching Ontológico',
  'coach.ontoP': 'Es una conversación donde te acompaño a mirarte. A ver cómo piensas, cómo sientes y cómo te relacionas con todo lo que te rodea. A reconocer quién estás siendo hoy y quién eliges ser a partir de ahora.',
  'coach.aborda': 'Aborda:',
  'coach.ontoQ1': '¿Quién elijo ser ante lo que estoy viviendo?',
  'coach.ontoQ2': '¿Cómo son mis conversaciones internas y cómo me hablo?',
  'coach.ontoQ3': '¿Cómo son mis relaciones y vínculos?',
  'coach.ontoQ4': '¿Cuál es mi propósito y estoy viviendo en coherencia con lo que digo, siento y hago?',
  'coach.laboralTitle': 'Coaching Laboral',
  'coach.laboralP': 'Es una conversación donde te acompaño a mirar tu camino profesional. A ver dónde estás, hacia dónde quieres ir y qué pasos dar para llegar ahí. A tomar decisiones sobre tu trabajo con claridad y seguridad.',
  'coach.laboralQ1': '¿Hacia dónde quiero ir con mi carrera?',
  'coach.laboralQ2': '¿Qué decisiones tomo sobre empleo, emprendimiento o cambio de rumbo?',
  'coach.laboralQ3': '¿Cómo son mi liderazgo, comunicación y desempeño en el trabajo?',
  'coach.laboralQ4': '¿Cómo alineo mi propósito personal con mi vida profesional?',
  'coach.xmTitle': 'Ejecución Sistémica | Programa Élite XM',
  'coach.xmP1': 'El Programa Élite XM transforma sistemas complejos y asegura resultados de alto impacto en 90 días, sin sacrificar la paz mental de tu equipo directivo. Diseñado específicamente para dueños de empresas, altos directivos (C-level) y comités gerenciales que enfrentan alta incertidumbre.',
  'coach.xmConsiste': '¿En qué consiste?',
  'coach.xmP2': 'Un programa de mentoría y consultoría de élite de 3 meses que sustituye la reflexión abstracta por un sistema riguroso de accountability y ejecución. Mediante el Modelo XM y el Kit de Ejecución Sistémica, diagnosticamos, alineamos y estructuramos tu compañía hacia metas exactas.',
  'coach.xmCamino': 'El Camino a 90 Días',
  'coach.xmF1': 'Fase 1 — Scanner XM:',
  'coach.xmF1p': ' Diagnóstico profundo del sistema corporativo para aislar cuellos de botella operativos y brechas de liderazgo.',
  'coach.xmF2': 'Fase 2 — Procesos Limpios:',
  'coach.xmF2p': ' Rediseño de flujos de trabajo directivos con herramientas de comunicación de alta precisión.',
  'coach.xmF3': 'Fase 3 — Ejecución SMART:',
  'coach.xmF3p': ' Implementación de tableros de control con KPIs estrictos para garantizar rentabilidad y cumplimiento en plazo.',
  'coach.xmF4': 'Fase 4 — Equipos de Alto Rendimiento:',
  'coach.xmF4p': ' Capacitación estratégica y alineación de equipos clave para consolidar una cultura de autonomía, alineación y excelencia en resultados.',
  'coach.xmPorque': 'Por qué tu Empresa lo Necesita',
  'coach.xmW1': '100% ejecución:',
  'coach.xmW1p': ' Pasamos de la idea a la acción medible y sostenida.',
  'coach.xmW2': 'Sin burnout directivo:',
  'coach.xmW2p': ' Resultados tangibles para líderes que manejan operaciones complejas.',
  'coach.xmCierre': '¿Tu comité directivo está listo para asegurar resultados medibles?',
  'coach.alqTitle': 'Alquimia Floral',
  'coach.alqP': 'Es un taller presencial donde creas con tus propias manos. La flor y los elementos naturales son tu espejo, para escucharte, procesar tus emociones y recordar quién eres más allá de tus roles. Más de una década en el mundo floral me llevó a unir mis dos pasiones: el arte floral y el coaching.',
  'coach.alqQ1': '¿Quién soy más allá de mis roles?',
  'coach.alqQ2': '¿Qué emociones estoy procesando a través de lo que creo?',
  'coach.alqQ3': '¿Qué me refleja la flor y los elementos que elijo?',
  'coach.alqQ4': '¿Cómo convierto esta creación en una herramienta de sanación y expansión de mi consciencia?',
  'coach.bloqueP': 'Es un proceso tuyo y las respuestas emergen de ti.',
  'coach.b1': 'Reflexivo',
  'coach.b1p': ' — indagación consciente sobre tu observador y tus posibilidades.',
  'coach.b2': 'Transformacional',
  'coach.b2p': ' — cambio profundo y sostenible.',
  'coach.b3': 'No directivo',
  'coach.b3p': ' — las respuestas emergen desde tu propia individualidad.',
  'coach.b4': 'ICF',
  'coach.b4p': ' — respaldado por el marco ético de la Federación Internacional de Coaching.',

  // ===== BIO =====
  'bio.h3': '¿Por qué nace ReEmpodérate? 🌿',
  'bio.p1': 'ReEmpodérate nace como una respuesta a esos momentos de transición en los que sentimos que algo debe cambiar. Nuestro propósito es ser un espejo para acompañarte en lo personal y profesional a:',
  'bio.i1': 'Rediseñar tu futuro:',
  'bio.i1p': ' Cuestionar creencias que limitan y abrir nuevas posibilidades.',
  'bio.i2': 'Alinear el Ser, Hacer y Tener:',
  'bio.i2p': ' Hacer que tus pensamientos, emociones y acciones caminen en la misma dirección.',
  'bio.i3': 'Transitar procesos con claridad:',
  'bio.i3p': ' Brindar herramientas clave para la toma de decisiones y el desarrollo de un liderazgo consciente.',
  'bio.p2': 'Creemos firmemente en el valor de la escucha empática, la presencia activa y la flexibilidad para habitar la vida con serenidad.',
  'bio.ctaH': '¿List@ para iniciar tu propio proceso de transformación?',
  'bio.ctaP': 'Te invitamos a conocer más sobre nuestros espacios de acompañamiento.',
  'bio.cta': 'Empieza tu transformación',

  // ===== RED DE COACHES =====
  'red.h2': 'Red de Coaches 🌿',
  'red.p': 'Un equipo que acompaña transformaciones desde distintos territorios de experiencia, con el corazón de ReEmpodérate.',
  'red.verMas': 'Ver más',
  'red.mostrarMenos': 'Mostrar menos',
  'red.marielaBadge': 'Fundadora',
  'red.marielaTitle': 'Coach Ontológica y Laboral · Miembro de ICF',
  'red.marielaIntro': 'Venezolana, inmigrante en EE. UU. desde 2015, madre de cuatro hijos. Fundadora de ReEmpodérate.',
  'red.marielaB1': '¡Hol@! 💜 Soy Mariela Barbetti, venezolana, inmigrante en EE. UU. desde 2015, madre de cuatro hijos (Paul, Abraham, Alena y Ana), esposa, hija, hermana y amiga.',
  'red.marielaB2': 'Mi camino se sostiene sobre una pasión constante: aprender. Con formación previa en Derecho en Venezuela, el rigor analítico me dio una base sólida, mientras que mi propia experiencia de vida —emigrar, reinventarme y sostener el equilibrio familiar— me enseñó que el verdadero crecimiento exige redescubrirnos y transformar nuestra mirada.',
  'red.marielaB3': 'Esa búsqueda continua me llevó a certificarme como Coach Ontológica y Laboral, estar en proceso de certificación de Mindfulness y ser miembro de la International Coaching Federation (ICF).',
  'red.marielaB4': 'Miro mi recorrido con profundo reconocimiento: gracias a mis muchos profesores y mentores, cuyo conocimiento y guía me impulsaron a cuestionar, expandir mi mirada y confiar en mi potencial para acompañar a otros.',
  'red.xiomaraBadge': 'Coach Ejecutiva',
  'red.xiomaraTitle': 'Arquitecta de Resultados · Consultora Sistémica y Coach Ejecutiva',
  'red.xiomaraIntro': '45 años de trayectoria profesional acompañando a empresas y líderes en su transformación.',
  'red.xiomaraB1': '"Entreno para ver lo que no ves y materializar lo que creías imposible."',
  'red.xiomaraB2': 'Con 45 años de trayectoria profesional ininterrumpida, Xiomara Moreno Bello es especialista en gestión del cambio organizacional, facilitación del aprendizaje significativo y desarrollo de liderazgo ejecutivo. A lo largo de más de cuatro décadas, ha acompañado a empresas y líderes a cerrar la brecha entre la identidad corporativa y sus resultados estratégicos.',
  'red.xiomaraB3': 'Es fundadora y creadora de metodologías enfocadas en la Transformación Sistémica, integrando herramientas de metacognición, consciencia inmediata y el marco de Trilogía de Vida (armonización personal, profesional y ciudadana). Su enfoque combina la solidez conceptual de la gestión estratégica moderna con una mirada humana orientada a la sostenibilidad organizativa.',
  'red.xiomaraB4': 'Actualmente asesora a organizaciones en arquitecturas de cambio, formación de líderes transformadores y programas de continuidad estratégica. Reside y opera desde Caracas, Venezuela, proyectando su alcance a nivel internacional.',

  // ===== CTA SECTION =====
  'cta.h2': 'Tu transformación comienza con una conversación',
  'cta.p': 'Da el primer paso hacia una vida en coherencia. Acompañamos tu proceso con rigor profesional, respeto absoluto y la pureza del método no directivo.',
  'cta.b1': 'Escuela Online',
  'cta.b2': 'En construcción — pronto llegará algo hermoso',
  'cta.b3': 'Mientras tanto, recibe gratis nuestra guía',
  'cta.guideName': '"Las 3 dimensiones de tu transformación: SER, HACER y TENER"',
  'cta.b4': ' y sé de las primeras personas en enterarte cuando abramos.',
  'cta.placeholder': 'Tu correo electrónico',
  'cta.enviando': 'Enviando...',
  'cta.enviar': 'Quiero mi guía gratuita 💕',
  'cta.ahoraNo': 'Ahora no',
  'cta.gracias': '¡Gracias!',
  'cta.guiaCamino1': 'Tu guía está en camino a',
  'cta.guiaCamino2': '. Revisa tu bandeja de entrada — y si no la ves, revisa el spam.',
  'cta.tagline': 'Tu Decisión. Tu Vida. 🌸',
  'cta.cerrar': 'Cerrar',

  // ===== FOOTER =====
  'footer.p': 'Transformación consciente a través del coaching ontológico, el arte y la comunidad.',
  'footer.plataforma': 'Plataforma',
  'footer.f1': 'Coaching 1:1',
  'footer.f2': 'Talleres',
  'footer.f3': 'Galería',
  'footer.f4': 'Marketplace',
  'footer.contacto': 'Contacto',
  'footer.copy': '2026 ReEmpodérate. Todos los derechos reservados. · New York – USA',

  // ===== RUEDA DE LA VIDA (página) =====
  'rueda.volver': 'Volver al inicio',
  'rueda.tag': 'Herramienta de coaching',
  'rueda.h1': 'La Rueda de tu Vida',
  'rueda.p': 'Un espejo honesto de dónde estás hoy y hacia dónde decides ir. Califica cada área del 1 al 10 — primero cómo la vives ahora, luego dónde te gustaría estar. Observa tu rueda dibujarse en tiempo real.',
  'rueda.step1t': 'Renombra o agrega áreas',
  'rueda.step1d': 'Tu rueda, tus palabras.',
  'rueda.step2t': 'Califica tu HOY',
  'rueda.step2d': 'Del 1 al 10, con honestidad.',
  'rueda.step3t': 'Marca tu META',
  'rueda.step3d': 'El puntaje al que decides llegar.',
  'rueda.step4t': 'Descárgala',
  'rueda.step4d': 'En PNG o PDF, y recíbela en tu correo.',
  'rueda.ahora': 'Ahora',
  'rueda.meta': 'Meta',
  'rueda.promAhora': 'Promedio ahora',
  'rueda.promMeta': 'Promedio meta',
  'rueda.descPng': 'Descargar PNG',
  'rueda.descPdf': 'Descargar PDF',
  'rueda.reiniciar': 'Reiniciar',
  'rueda.quitar': 'Quitar',
  'rueda.agregar': '+ Agregar área',
  'rueda.nuevaArea': 'Nueva área',
  'rueda.exportTitle': 'Mi Rueda de la Vida',
  'rueda.exportSub': '¿Dónde estás hoy y hacia dónde quieres ir?',
  'rueda.exportSlogan': 'Tu vida empieza cuando decides quién quieres ser · reempoderate.com',
  'rueda.filePng': 'mi-rueda-de-la-vida.png',
  'rueda.filePdf': 'mi-rueda-de-la-vida.pdf',
  'rueda.savedH': 'Tu rueda está en camino 🌸',
  'rueda.savedP': 'Enviamos tu rueda a tu correo. Las ruedas más valiosas son las que se conversan: ¿qué conversación quieres abrir con la tuya?',
  'rueda.savedCta': 'Conversar mis resultados por WhatsApp',
  'rueda.savedAgendar': 'Agendar mi sesión de coaching',
  'rueda.waMsg': 'Hola, completé la Rueda de mi Vida en el sitio de ReEmpodérate y quiero conversar mis resultados',
  'rueda.modalH': 'Recibe tu rueda',
  'rueda.modalP': 'Déjanos tu nombre y correo: te enviamos tu rueda para que la conserves y la compartas.',
  'rueda.phNombre': 'Tu nombre',
  'rueda.phCorreo': 'Tu correo',
  'rueda.phPhone': 'WhatsApp (opcional)',
  'rueda.errNombre': 'Ingresa tu nombre',
  'rueda.errCorreo': 'Ingresa un correo válido para recibir tu rueda',
  'rueda.errEnvio': 'Algo no salió bien. Inténtalo de nuevo.',
  'rueda.enviando': 'Enviando…',
  'rueda.recibir': 'Recibir mi rueda',
  'rueda.footer': 'ReEmpodérate · Tu vida empieza cuando decides quién quieres ser',

  // ===== AGENDAR =====
  'agendar.h1': 'Agenda tu sesión',
  'agendar.p': '¿Cuándo quieres comenzar? Elige el día y hora que mejor te funcione.',
  'agendar.selDia': 'Selecciona un día',
  'agendar.horarios': 'Horarios disponibles',
  'agendar.confirmar': 'Confirmar por WhatsApp',
  'agendar.nota': 'Al confirmar, abrirás WhatsApp para finalizar tu agendamiento con Mariela.',
  'agendar.confH': '¡Tu sesión está agendada!',
  'agendar.confP': 'Hemos abierto WhatsApp para confirmar tu cita. Mariela te contactará pronto para los detalles.',
  'agendar.volver': '← Volver al inicio',
  'agendar.waMsg': 'Hola Mariela, agendé mi sesión de coaching.\n\nFecha: {date}\nHora: {time}\n\n¿Cuándo quieres comenzar? — ¡Ya elegí mi fecha! 🌸',

  // ===== DIAGNÓSTICO =====
  'diag.h1': 'Indagación Inicial',
  'diag.p': 'Un espacio de reflexión consciente · 3 preguntas poderosas',
  'diag.welcome': 'Bienvenida a ReEmpodérate. Este es un espacio de indagación consciente.\n\nEscribe un mensaje inicial sobre lo que te trae aquí. Te acompañaré con tres preguntas, una a la vez.',
  'diag.q1': '¿Qué te lleva a buscar este espacio de transformación en este momento de tu vida, y qué observas sobre la urgencia que sientes?',
  'diag.q1h': 'Tómate un momento. Respira. Escribe desde la honestidad, no desde lo que crees que deberías decir.',
  'diag.q2': 'Si imaginas que ya has alcanzado ese cambio que buscas... ¿quién serías tú, siendo diferente a quien eres hoy?',
  'diag.q2h': 'No describas lo que tendrías. Describe quién serías siendo. La diferencia es esencial.',
  'diag.q3': '¿Qué estarías dispuesta a soltar o a confrontar de ti misma para que esa transformación sea real y sostenible en el tiempo?',
  'diag.q3h': 'El cambio sostenible siempre exige soltar algo. Identificar aquello es el primer acto de poder.',
  'diag.final': 'Gracias por tu honestidad y tu valentía al responder estas tres preguntas.\n\nLo que has escrito revela una disposición al cambio que vale la pena honrar.\n\nTe invito a dar el siguiente paso: una sesión de coaching ontológico donde podamos profundizar en lo que has compartido.\n\nToca el botón de abajo para conectar directamente con Mariela y agendar tu sesión.',
  'diag.enviar': 'Enviar a Mariela y agendar mi sesión',
  'diag.summaryHeader': '🌸 *Diagnóstico ReEmpodérate* 🌸\n\n',
  'diag.summaryP1': 'Una persona ha completado su proceso de indagación inicial.\n\n',
  'diag.summaryInit': '--- *Mensaje inicial* ---\n',
  'diag.summaryQ': '--- *Pregunta {n}* ---\n',
  'diag.summaryR': '*Respuesta:* ',
  'diag.summaryFinal': 'Esta persona está lista para una sesión de coaching ontológico.',
  'diag.ph': 'Escribe aquí tu reflexión...',

  // ===== LOGIN ADMIN =====
  'login.sub': 'Accede a tu panel',
  'login.nombre': 'Nombre',
  'login.clave': 'Clave',
  'login.error1': 'No pudimos iniciar sesión',
  'login.error2': 'Hubo un problema de conexión. Inténtalo de nuevo.',
  'login.enviando': 'Iniciando sesión...',
  'login.entrar': 'Entrar',
  'login.ver': 'Ver',
  'login.ocultar': 'Ocultar',
  'login.problema': '¿Problemas para entrar?',
  'login.contacto': 'Contacta a tu servicio técnico',
  'login.volver': '← Volver al inicio',

  'diag.ph0': 'Escribe tu mensaje inicial...',
  'diag.ph1': 'Tu respuesta...',
  'diag.hintMin': 'Escribe al menos 10 caracteres para enviar',
  'diag.prog0': 'Mensaje inicial',
  'diag.prog1': 'Pregunta 1 de 3',
  'diag.prog2': 'Pregunta 2 de 3',
  'diag.prog3': 'Pregunta 3 de 3',
  'diag.prog4': 'Proceso completado',

  'login.phNombre': 'Tu nombre de usuario',
  'login.phClave': 'Tu clave',
  'login.olvide': 'Olvidé mi clave',
  'login.entrando': 'Entrando…',
  'login.entrarBtn': 'Entrar',
  'login.primeraVez': '¿Primera vez?',
  'login.crear': 'Crea tu cuenta',
  'login.ayuda': '¿Necesitas ayuda?',
  'login.servicio': 'Servicio Técnico',

  // ===== FLOTANTE WHATSAPP =====
  'wa.label': 'Escríbenos por WhatsApp',
}

const en: Dict = {
  // ===== NAVBAR =====
  'nav.metodo': 'Method',
  'nav.coaching': 'Coaching',
  'nav.rueda': 'Wheel of Life',
  'nav.bio': 'About',
  'nav.acceder': 'Log in',

  // ===== HERO =====
  'hero.h1a': 'Your life begins when',
  'hero.h1b': 'you decide who you want to be.',
  'hero.p': 'ReEmpowerYou is a space of accompaniment for people who already know something needs to change — and choose to be the ones who change it.',
  'hero.cta': 'Start your transformation',
  'hero.portal': 'Go to my portal',
  'hero.dashboard': 'Go to my dashboard',
  'hero.stat1': 'Years of experience',
  'hero.stat2': 'Non-directive',
  'hero.stat3': 'Member of the Federation',

  // ===== WHEEL (landing section) =====
  'ruedaSec.tag': 'Free tool',
  'ruedaSec.h2': 'The Wheel of Your Life',
  'ruedaSec.p1': 'In minutes, draw where you are today and where you choose to go. Rate each area of your life from 1 to 10 and watch your wheel take shape in real time.',
  'ruedaSec.p2': 'When you finish, receive it in your inbox — with the full circle as your horizon and your present drawn within it.',
  'ruedaSec.cta': 'Draw your Wheel →',

  // ===== SERVICES / TRIAD =====
  'services.tag': 'A methodology for change',
  'services.h2': 'The Coherence Triad',
  'services.serT': 'BEING',
  'services.serS': 'The Observer',
  'services.serP': 'I am the mirror in which you look at yourself to discover your own reality. Who do I choose to be in the face of what I am living? Through conversation, I accompany you in opening new possibilities.',
  'services.hacerT': 'DOING',
  'services.hacerS': 'The Action',
  'services.hacerP': 'You determine which actions to take in relation to what is happening to you. Generative conversations as a bridge toward your own goals.',
  'services.tenerT': 'HAVING',
  'services.tenerS': 'The Result',
  'services.tenerP': 'Sustainable results over time. When mind, body, and emotion align in a single purpose, change is a natural consequence.',

  // ===== COACHING PREVIEW =====
  'coach.ontoTitle': 'Ontological Coaching',
  'coach.ontoP': 'It is a conversation in which I accompany you to look at yourself. To see how you think, how you feel, and how you relate to everything around you. To recognize who you are being today and who you choose to be from now on.',
  'coach.aborda': 'It addresses:',
  'coach.ontoQ1': 'Who do I choose to be in the face of what I am living?',
  'coach.ontoQ2': 'What are my inner conversations like, and how do I speak to myself?',
  'coach.ontoQ3': 'What are my relationships and bonds like?',
  'coach.ontoQ4': 'What is my purpose, and am I living in coherence with what I say, feel, and do?',
  'coach.laboralTitle': 'Career Coaching',
  'coach.laboralP': 'It is a conversation in which I accompany you to look at your professional path. To see where you are, where you want to go, and what steps to take to get there. To make decisions about your work with clarity and confidence.',
  'coach.laboralQ1': 'Where do I want my career to go?',
  'coach.laboralQ2': 'What decisions do I make about employment, entrepreneurship, or a change of direction?',
  'coach.laboralQ3': 'What are my leadership, communication, and performance like at work?',
  'coach.laboralQ4': 'How do I align my personal purpose with my professional life?',
  'coach.xmTitle': 'Systemic Execution | XM Elite Program',
  'coach.xmP1': 'The XM Elite Program transforms complex systems and secures high-impact results in 90 days, without sacrificing the peace of mind of your leadership team. Designed specifically for business owners, senior executives (C-level), and management committees facing high uncertainty.',
  'coach.xmConsiste': 'What does it consist of?',
  'coach.xmP2': 'A 3-month elite mentoring and consulting program that replaces abstract reflection with a rigorous system of accountability and execution. Through the XM Model and the Systemic Execution Kit, we diagnose, align, and structure your company toward exact goals.',
  'coach.xmCamino': 'The 90-Day Path',
  'coach.xmF1': 'Phase 1 — XM Scanner:',
  'coach.xmF1p': ' A deep diagnosis of the corporate system to isolate operational bottlenecks and leadership gaps.',
  'coach.xmF2': 'Phase 2 — Clean Processes:',
  'coach.xmF2p': ' Redesign of executive workflows with high-precision communication tools.',
  'coach.xmF3': 'Phase 3 — SMART Execution:',
  'coach.xmF3p': ' Implementation of control dashboards with strict KPIs to guarantee profitability and on-time delivery.',
  'coach.xmF4': 'Phase 4 — High-Performance Teams:',
  'coach.xmF4p': ' Strategic training and alignment of key teams to consolidate a culture of autonomy, alignment, and excellence in results.',
  'coach.xmPorque': 'Why Your Company Needs It',
  'coach.xmW1': '100% execution:',
  'coach.xmW1p': ' We move from idea to measurable, sustained action.',
  'coach.xmW2': 'No executive burnout:',
  'coach.xmW2p': ' Tangible results for leaders managing complex operations.',
  'coach.xmCierre': 'Is your leadership committee ready to secure measurable results?',
  'coach.alqTitle': 'Floral Alchemy',
  'coach.alqP': 'It is an in-person workshop where you create with your own hands. The flower and natural elements are your mirror, to listen to yourself, process your emotions, and remember who you are beyond your roles. More than a decade in the floral world led me to unite my two passions: floral art and coaching.',
  'coach.alqQ1': 'Who am I beyond my roles?',
  'coach.alqQ2': 'What emotions am I processing through what I create?',
  'coach.alqQ3': 'What do the flower and the elements I choose reflect back to me?',
  'coach.alqQ4': 'How do I turn this creation into a tool for healing and expanding my consciousness?',
  'coach.bloqueP': 'It is your process, and the answers emerge from you.',
  'coach.b1': 'Reflective',
  'coach.b1p': ' — conscious inquiry into your observer and your possibilities.',
  'coach.b2': 'Transformational',
  'coach.b2p': ' — deep, sustainable change.',
  'coach.b3': 'Non-directive',
  'coach.b3p': ' — the answers emerge from your own individuality.',
  'coach.b4': 'ICF',
  'coach.b4p': ' — backed by the ethical framework of the International Coaching Federation.',

  // ===== BIO =====
  'bio.h3': 'Why was ReEmpowerYou born? 🌿',
  'bio.p1': 'ReEmpowerYou was born as a response to those moments of transition in which we feel something must change. Our purpose is to be a mirror to accompany you, personally and professionally, to:',
  'bio.i1': 'Redesign your future:',
  'bio.i1p': ' Question limiting beliefs and open new possibilities.',
  'bio.i2': 'Align Being, Doing, and Having:',
  'bio.i2p': ' Bring your thoughts, emotions, and actions to walk in the same direction.',
  'bio.i3': 'Move through transitions with clarity:',
  'bio.i3p': ' Provide key tools for decision-making and the development of conscious leadership.',
  'bio.p2': 'We firmly believe in the value of empathic listening, active presence, and the flexibility to inhabit life with serenity.',
  'bio.ctaH': 'Ready to begin your own transformation process?',
  'bio.ctaP': 'We invite you to learn more about our spaces of accompaniment.',
  'bio.cta': 'Start your transformation',

  // ===== COACHES NETWORK =====
  'red.h2': 'Coaches Network 🌿',
  'red.p': 'A team that accompanies transformations from different territories of experience, with the heart of ReEmpowerYou.',
  'red.verMas': 'See more',
  'red.mostrarMenos': 'Show less',
  'red.marielaBadge': 'Founder',
  'red.marielaTitle': 'Ontological & Career Coach · ICF Member',
  'red.marielaIntro': 'Venezuelan, an immigrant in the U.S. since 2015, mother of four children. Founder of ReEmpowerYou.',
  'red.marielaB1': 'Hello! 💜 I am Mariela Barbetti, Venezuelan, an immigrant in the U.S. since 2015, mother of four children (Paul, Abraham, Alena, and Ana), wife, daughter, sister, and friend.',
  'red.marielaB2': 'My path rests on a constant passion: learning. With prior training in Law in Venezuela, analytical rigor gave me a solid foundation, while my own life experience — emigrating, reinventing myself, and sustaining family balance — taught me that true growth requires rediscovering ourselves and transforming the way we see.',
  'red.marielaB3': 'That continuous search led me to become certified as an Ontological and Career Coach, to be in the process of Mindfulness certification, and to be a member of the International Coaching Federation (ICF).',
  'red.marielaB4': 'I look back on my journey with deep gratitude: thanks to my many teachers and mentors, whose knowledge and guidance encouraged me to question, expand my vision, and trust my potential to accompany others.',
  'red.xiomaraBadge': 'Executive Coach',
  'red.xiomaraTitle': 'Architect of Results · Systemic Consultant and Executive Coach',
  'red.xiomaraIntro': '45 years of professional experience accompanying companies and leaders in their transformation.',
  'red.xiomaraB1': '"I train you to see what you do not see and to materialize what you believed impossible."',
  'red.xiomaraB2': 'With 45 years of uninterrupted professional experience, Xiomara Moreno Bello is a specialist in organizational change management, facilitation of significant learning, and executive leadership development. Over more than four decades, she has accompanied companies and leaders in closing the gap between corporate identity and strategic results.',
  'red.xiomaraB3': 'She is the founder and creator of methodologies focused on Systemic Transformation, integrating metacognition tools, immediate awareness, and the Trilogía de Vida framework (personal, professional, and civic harmonization). Her approach combines the conceptual solidity of modern strategic management with a human perspective oriented toward organizational sustainability.',
  'red.xiomaraB4': 'She currently advises organizations on change architectures, the formation of transformative leaders, and strategic continuity programs. She lives and operates from Caracas, Venezuela, projecting her reach internationally.',

  // ===== CTA SECTION =====
  'cta.h2': 'Your transformation begins with a conversation',
  'cta.p': 'Take the first step toward a life in coherence. We accompany your process with professional rigor, absolute respect, and the purity of the non-directive method.',
  'cta.b1': 'Online School',
  'cta.b2': 'Under construction — something beautiful is on its way',
  'cta.b3': 'In the meantime, receive our free guide',
  'cta.guideName': '"The 3 Dimensions of Your Transformation: BEING, DOING, and HAVING"',
  'cta.b4': ' and be among the first to know when we open.',
  'cta.placeholder': 'Your email address',
  'cta.enviando': 'Sending...',
  'cta.enviar': 'I want my free guide 💕',
  'cta.ahoraNo': 'Not now',
  'cta.gracias': 'Thank you!',
  'cta.guiaCamino1': 'Your guide is on its way to',
  'cta.guiaCamino2': '. Check your inbox — and if you do not see it, check your spam folder.',
  'cta.tagline': 'Your Decision. Your Life. 🌸',
  'cta.cerrar': 'Close',

  // ===== FOOTER =====
  'footer.p': 'Conscious transformation through ontological coaching, art, and community.',
  'footer.plataforma': 'Platform',
  'footer.f1': '1:1 Coaching',
  'footer.f2': 'Workshops',
  'footer.f3': 'Gallery',
  'footer.f4': 'Marketplace',
  'footer.contacto': 'Contact',
  'footer.copy': '2026 ReEmpowerYou. All rights reserved. · New York – USA',

  // ===== WHEEL OF LIFE (page) =====
  'rueda.volver': 'Back to home',
  'rueda.tag': 'Coaching tool',
  'rueda.h1': 'The Wheel of Your Life',
  'rueda.p': 'An honest mirror of where you are today and where you choose to go. Rate each area from 1 to 10 — first how you live it now, then where you would like to be. Watch your wheel take shape in real time.',
  'rueda.step1t': 'Rename or add areas',
  'rueda.step1d': 'Your wheel, your words.',
  'rueda.step2t': 'Rate your TODAY',
  'rueda.step2d': 'From 1 to 10, with honesty.',
  'rueda.step3t': 'Mark your GOAL',
  'rueda.step3d': 'The score you decide to reach.',
  'rueda.step4t': 'Download it',
  'rueda.step4d': 'In PNG or PDF, and receive it in your inbox.',
  'rueda.ahora': 'Now',
  'rueda.meta': 'Goal',
  'rueda.promAhora': 'Average now',
  'rueda.promMeta': 'Average goal',
  'rueda.descPng': 'Download PNG',
  'rueda.descPdf': 'Download PDF',
  'rueda.reiniciar': 'Start over',
  'rueda.quitar': 'Remove',
  'rueda.agregar': '+ Add area',
  'rueda.nuevaArea': 'New area',
  'rueda.exportTitle': 'My Wheel of Life',
  'rueda.exportSub': 'Where are you today, and where do you want to go?',
  'rueda.exportSlogan': 'Your life begins when you decide who you want to be · reempoderate.com',
  'rueda.filePng': 'my-wheel-of-life.png',
  'rueda.filePdf': 'my-wheel-of-life.pdf',
  'rueda.savedH': 'Your wheel is on its way 🌸',
  'rueda.savedP': 'We sent your wheel to your inbox. The most valuable wheels are the ones that get talked about: what conversation do you want to open with yours?',
  'rueda.savedCta': 'Talk about my results on WhatsApp',
  'rueda.savedAgendar': 'Book my coaching session',
  'rueda.waMsg': 'Hi, I completed the Wheel of my Life on the ReEmpowerYou website and I would like to talk about my results',
  'rueda.modalH': 'Receive your wheel',
  'rueda.modalP': 'Leave us your name and email: we will send you your wheel so you can keep it and share it.',
  'rueda.phNombre': 'Your name',
  'rueda.phCorreo': 'Your email',
  'rueda.phPhone': 'WhatsApp (optional)',
  'rueda.errNombre': 'Please enter your name',
  'rueda.errCorreo': 'Please enter a valid email to receive your wheel',
  'rueda.errEnvio': 'Something went wrong. Please try again.',
  'rueda.enviando': 'Sending…',
  'rueda.recibir': 'Receive my wheel',
  'rueda.footer': 'ReEmpowerYou · Your life begins when you decide who you want to be',

  // ===== BOOKING =====
  'agendar.h1': 'Book your session',
  'agendar.p': 'When do you want to begin? Choose the day and time that work best for you.',
  'agendar.selDia': 'Select a day',
  'agendar.horarios': 'Available times',
  'agendar.confirmar': 'Confirm via WhatsApp',
  'agendar.nota': 'By confirming, WhatsApp will open so you can finish booking with Mariela.',
  'agendar.confH': 'Your session is booked!',
  'agendar.confP': 'We have opened WhatsApp to confirm your appointment. Mariela will contact you soon with the details.',
  'agendar.volver': '← Back to home',
  'agendar.waMsg': 'Hi Mariela, I booked my coaching session.\n\nDate: {date}\nTime: {time}\n\nWhen do you want to begin? — I have already chosen my date! 🌸',

  // ===== DIAGNOSTIC =====
  'diag.h1': 'Initial Inquiry',
  'diag.p': 'A space for conscious reflection · 3 powerful questions',
  'diag.welcome': 'Welcome to ReEmpowerYou. This is a space for conscious inquiry.\n\nWrite an opening message about what brings you here. I will accompany you with three questions, one at a time.',
  'diag.q1': 'What brings you to seek this space of transformation at this moment of your life, and what do you notice about the urgency you feel?',
  'diag.q1h': 'Take a moment. Breathe. Write from honesty, not from what you think you should say.',
  'diag.q2': 'If you imagine you have already reached the change you seek... who would you be, being different from who you are today?',
  'diag.q2h': 'Do not describe what you would have. Describe who you would be. The difference is essential.',
  'diag.q3': 'What would you be willing to let go of, or confront within yourself, so that this transformation is real and sustainable over time?',
  'diag.q3h': 'Sustainable change always requires letting go of something. Identifying it is the first act of power.',
  'diag.final': 'Thank you for your honesty and your courage in answering these three questions.\n\nWhat you have written reveals a readiness for change that is worth honoring.\n\nI invite you to take the next step: an ontological coaching session where we can deepen into what you have shared.\n\nTap the button below to connect directly with Mariela and book your session.',
  'diag.enviar': 'Send to Mariela and book my session',
  'diag.summaryHeader': '🌸 *ReEmpowerYou Diagnostic* 🌸\n\n',
  'diag.summaryP1': 'A person has completed their initial inquiry process.\n\n',
  'diag.summaryInit': '--- *Opening message* ---\n',
  'diag.summaryQ': '--- *Question {n}* ---\n',
  'diag.summaryR': '*Answer:* ',
  'diag.summaryFinal': 'This person is ready for an ontological coaching session.',
  'diag.ph': 'Write your reflection here...',

  // ===== ADMIN LOGIN =====
  'login.sub': 'Access your panel',
  'login.nombre': 'Name',
  'login.clave': 'Password',
  'login.error1': 'We could not log you in',
  'login.error2': 'There was a connection problem. Please try again.',
  'login.enviando': 'Logging in...',
  'login.entrar': 'Log in',
  'login.ver': 'Show',
  'login.ocultar': 'Hide',
  'login.problema': 'Trouble logging in?',
  'login.contacto': 'Contact your technical support',
  'login.volver': '← Back to home',

  'diag.ph0': 'Write your opening message...',
  'diag.ph1': 'Your answer...',
  'diag.hintMin': 'Write at least 10 characters to send',
  'diag.prog0': 'Opening message',
  'diag.prog1': 'Question 1 of 3',
  'diag.prog2': 'Question 2 of 3',
  'diag.prog3': 'Question 3 of 3',
  'diag.prog4': 'Process completed',

  'login.phNombre': 'Your username',
  'login.phClave': 'Your password',
  'login.olvide': 'I forgot my password',
  'login.entrando': 'Logging in…',
  'login.entrarBtn': 'Log in',
  'login.primeraVez': 'First time?',
  'login.crear': 'Create your account',
  'login.ayuda': 'Need help?',
  'login.servicio': 'Technical Support',

  // ===== FLOATING WHATSAPP =====
  'wa.label': 'Message us on WhatsApp',
}

const dicts: Record<Lang, Dict> = { es, en }

// Enlace de WhatsApp según idioma:
// ES mantiene la frase exacta que activa el flujo de bienvenida del agente.
// EN usa la versión en inglés con la marca ReEmpowerYou (atención personal del equipo).
export function getWhatsAppUrl(lang: Lang): string {
  if (lang === 'en') {
    return 'https://wa.me/13217329993?text=Hello%2C%20I%20want%20to%20start%20my%20transformational%20and%20self-aware%20coaching%20process%20with%20ReEmpowerYou%21'
  }
  return 'https://wa.me/13217329993?text=%C2%A1Hola%2C%20quiero%20iniciar%20mi%20proceso%20de%20coaching%20transformacional%20y%20autoconsciente%20con%20ReEmpod%C3%A9rate%21'
}

// Áreas por defecto de la Rueda, por idioma
export const RUEDA_AREAS: Record<Lang, string[]> = {
  es: [
    'Familia',
    'Amor y pareja',
    'Amistades',
    'Salud y bienestar',
    'Trabajo y propósito',
    'Finanzas',
    'Crecimiento personal',
    'SER · Espiritualidad',
    'Diversión y descanso',
    'Hogar y entorno',
  ],
  en: [
    'Family',
    'Love & Partnership',
    'Friendships',
    'Health & Well-being',
    'Work & Purpose',
    'Finances',
    'Personal Growth',
    'BEING · Spirituality',
    'Fun & Rest',
    'Home & Environment',
  ],
}

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'es',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('re_lang')
      if (saved === 'en' || saved === 'es') {
        setLangState(saved)
      } else if (typeof window.location.hostname === 'string'
        && window.location.hostname.includes('reempoweryou')) {
        // reempoweryou.com abre en inglés; reempoderate.com en español
        setLangState('en')
      }
    } catch {}
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      window.localStorage.setItem('re_lang', l)
    } catch {}
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useI18n() {
  const { lang, setLang } = useContext(LangContext)

  // t('clave') — devuelve el texto en el idioma activo
  const t = (key: string): string => {
    const d = dicts[lang]
    if (d && key in d) return d[key]
    const fallback = dicts.es[key]
    return fallback ?? key
  }

  return { lang, setLang, t }
}
