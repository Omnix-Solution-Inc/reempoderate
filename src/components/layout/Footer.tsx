import Image from 'next/image'

const LOGO_URL = "https://media.base44.com/images/public/whatsapp/6a066d4f6fb4352d1a5946c3/your_agent/6a066d4f6fb4352d1a5946c4/8b68f2560_REEMPODERATE_Logo.png"

export function Footer() {
  return (
    <footer className="bg-shamrock-dark text-cream/80 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src={LOGO_URL} alt="ReEmpoderate" width={40} height={40} className="rounded-full" />
              <span className="font-playfair text-xl text-cream font-bold">ReEmpoderate</span>
            </div>
            <p className="text-sm text-cream/60 leading-relaxed">
              Acompañamiento profesional para mujeres que eligen salir del automatismo y construir una nueva realidad en coherencia.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-cream mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>Coaching Ontológico</li>
              <li>Coaching Laboral</li>
              <li>Talleres de Alquimia Floral</li>
              <li>Acompañamiento Individual</li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-cream mb-4">Contacto</h4>
            <p className="text-sm text-cream/60">Ibero Business Center</p>
            <p className="text-sm text-cream/60 mt-2">Coaching Ontológico Certificado</p>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 text-center text-sm text-cream/40">
          <p>© 2026 ReEmpoderate · Tu Poder, Tu Vida</p>
        </div>
      </div>
    </footer>
  )
}
