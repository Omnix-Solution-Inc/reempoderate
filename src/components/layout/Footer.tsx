export function Footer() {
  return (
    <footer className="bg-ink text-cream py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="ReEmpoderate" className="h-14 w-14 rounded-full object-cover" />
              <div>
                <p className="font-playfair text-lg text-cream font-bold">ReEmpoderate</p>
                <p className="text-xs text-cream/60 italic">Tu Poder, Tu Vida</p>
              </div>
            </div>
            <p className="text-sm text-cream/60 leading-relaxed">
              Acompañamiento profesional en autotransformación consciente mediante coaching ontológico y alquimia floral.
            </p>
          </div>

          <div>
            <p className="font-playfair text-sm text-cream mb-4 uppercase tracking-wider">Servicios</p>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>Coaching Ontológico</li>
              <li>Coaching Laboral</li>
              <li>Talleres de Alquimia Floral</li>
              <li>Acompañamiento ICF</li>
            </ul>
          </div>

          <div>
            <p className="font-playfair text-sm text-cream mb-4 uppercase tracking-wider">Contacto</p>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>📍 Estados Unidos</li>
              <li><a href="mailto:marielabarbettio@gmail.com" className="hover:text-bloom transition">✉️ marielabarbettio@gmail.com</a></li>
              <li>🌿 ICF Member</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 text-center">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} ReEmpoderate · Autotransformación Consciente
          </p>
        </div>
      </div>
    </footer>
  )
}
