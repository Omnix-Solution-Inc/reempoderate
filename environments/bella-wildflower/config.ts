// The Bella Wildflower — Environment Configuration (Pilot)
export const ENV_CONFIG = {
  id: 'bella-wildflower',
  name: 'The Bella Wildflower',
  tagline: 'Diseño Floral · Bodas · Eventos Especiales',
  domain: 'thebellawildflower.com',
  subdomain: 'bella.reempoderate.com',

  brand: {
    primary: '#B88373',     // tbw-rose
    secondary: '#3D4A3E',   // tbw-green
    accent: '#C4A882',
    dark: '#2F2A27',
    light: '#F4EFEB',       // tbw-cream
    fontHeading: 'Cinzel',
    fontBody: 'Montserrat',
  },

  features: {
    coaching: false,
    businessPlans: true,
    gallery: true,
    marketplace: false,
    courses: false,
    // Business system (existing tbwsystem)
    floralSystem: {
      clients: true,
      events: true,
      proposals: true,
      payments: true,
      recipes: true,
      calculator: true,
    },
    auth: {
      google: true,
      microsoft: false,
    },
  },

  publicRoutes: ['/', '/gallery', '/about', '/services'],
  protectedRoutes: ['/dashboard', '/admin', '/proposals', '/clients', '/events', '/payments', '/recipes'],
}
