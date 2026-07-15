export function Footer() {
  return (
    <footer className="bg-ink text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-playfair text-xl text-bloom mb-3">ReEmpoderate</h3>
          <p className="text-white/50 text-sm leading-relaxed">
            Transformacion consciente a traves del coaching ontologico, el arte y la comunidad.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white/70">Plataforma</h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li>Coaching 1:1</li>
            <li>Talleres</li>
            <li>Galeria</li>
            <li>Marketplace</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white/70">Comunidad</h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li>Red de Coaches</li>
            <li>Facilitadores</li>
            <li>Blog</li>
            <li>Recursos</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white/70">Contacto</h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li>hola@reempoderate.com</li>
            <li>+1 (321) 732-9993</li>
          </ul>
          {/* Redes sociales junto al contacto */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.instagram.com/re_empoderate"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @re_empoderate"
              className="text-white/50 hover:text-bloom transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@reempoderate"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok @reempoderate"
              className="text-white/50 hover:text-bloom transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-xs text-white/30 text-center">
        <span>2026 ReEmpoderate. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}
