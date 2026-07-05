export function Footer() {
  return (
    <footer className="bg-shamrock-dark text-cream/80 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
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
          <p>© 2026 ReEmpoderate · Autotransformación Consciente</p>
        </div>
      </div>
    </footer>
  )
}
