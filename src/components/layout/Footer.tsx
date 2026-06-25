export function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-playfair text-xl text-primary mb-3">ReEmpoderate</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Transformación consciente a través del coaching ontológico, el arte y la comunidad.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-300">Plataforma</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Coaching 1:1</li>
            <li>Talleres</li>
            <li>Galería</li>
            <li>Marketplace</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-300">Comunidad</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Red de Coaches</li>
            <li>Facilitadores</li>
            <li>Blog</li>
            <li>Recursos</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-300">Ambientes</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>The Bella Wildflower</li>
            <li>RyS Agency</li>
            <li>Witmakers</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-xs text-gray-500 flex justify-between">
        <span>© 2026 ReEmpoderate. Todos los derechos reservados.</span>
        <span>Powered by Witmakers + Omnix</span>
      </div>
    </footer>
  )
}
