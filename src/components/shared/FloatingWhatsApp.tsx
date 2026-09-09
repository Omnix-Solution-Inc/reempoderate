'use client'

// Botón flotante de WhatsApp — ReEmpodérate
// Logo oficial, esquina inferior derecha, presente en todas las páginas.
// Usa la frase exacta del botón del sitio para activar el flujo de bienvenida.

const WA_MESSAGE = encodeURIComponent(
  'Hola, quiero iniciar mi proceso de transformación con ReEmpoderate'
)
const WA_URL = `https://wa.me/13217329993?text=${WA_MESSAGE}`

export function FloatingWhatsApp() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      title="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-[60] group"
    >
      <span className="block w-14 h-14 rounded-full shadow-lg transition-transform duration-200 group-hover:scale-110 group-active:scale-95">
        <svg viewBox="0 0 32 32" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#25D366" />
          <path
            fill="#FFFFFF"
            d="M16.004 6.4c-5.24 0-9.5 4.26-9.5 9.5 0 1.672.438 3.304 1.268 4.736L6.4 25.6l5.106-1.342a9.46 9.46 0 0 0 4.497 1.145h.004c5.24 0 9.5-4.26 9.5-9.5s-4.26-9.503-9.503-9.503zm0 17.348h-.003a7.88 7.88 0 0 1-4.014-1.098l-.288-.171-2.985.783.797-2.912-.187-.299a7.85 7.85 0 0 1-1.204-4.191c0-4.345 3.535-7.879 7.881-7.879a7.83 7.83 0 0 1 5.574 2.31 7.83 7.83 0 0 1 2.308 5.575c0 4.346-3.535 7.877-7.865 7.877zm4.32-5.905c-.237-.118-1.404-.693-1.622-.773-.218-.08-.377-.118-.535.12-.16.237-.615.772-.754.931-.139.158-.277.177-.514.059-.238-.119-1.003-.37-1.91-1.179-.706-.63-1.182-1.405-1.32-1.643-.14-.237-.016-.365.104-.483.106-.106.237-.277.356-.415.118-.139.158-.238.237-.396.08-.158.04-.297-.02-.415-.059-.119-.534-1.287-.732-1.762-.193-.463-.389-.4-.534-.408a.3.3 0 0 0-.089.01c-.093.007-.324.09-.5.324-.177.235-.635.83-.635 1.62 0 .791.613 1.666.595 1.605-.02.06.217 1.36 1.264 2.485 1.312 1.411 2.447 1.845 2.795 1.925.416.096.794.07.1.094.196-.03.436-.08.568-.168.192-.124.386-.408.442-.628.056-.22.038-.408-.02-.446-.058-.04-.202-.083-.453-.14z"
          />
        </svg>
      </span>
    </a>
  )
}
