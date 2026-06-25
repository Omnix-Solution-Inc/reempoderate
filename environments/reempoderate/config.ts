// ReEmpoderate — Environment Configuration
export const ENV_CONFIG = {
  id: 'reempoderate',
  name: 'ReEmpoderate',
  tagline: 'Transformación Consciente · Arte · Comunidad',
  domain: 'reempoderate.com',
  subdomain: null,
  
  brand: {
    primary: '#D06371',
    secondary: '#6CAA80',
    accent: '#EDCA5B',
    dark: '#1A1A1A',
    light: '#F9F5F0',
    fontHeading: 'Playfair Display',
    fontBody: 'Inter',
  },

  features: {
    coaching: true,
    businessPlans: true,
    gallery: true,
    marketplace: true,
    courses: true,
    auth: {
      google: true,
      microsoft: true,
    },
  },

  publicRoutes: ['/', '/gallery', '/marketplace', '/about', '/coaching'],
  protectedRoutes: ['/dashboard', '/admin', '/business-plan', '/profile', '/sessions'],
}
