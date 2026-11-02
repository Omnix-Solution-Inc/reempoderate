/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Identificador de versión visible en el navegador: permite avisar cuando hay una nueva
  env: {
    NEXT_PUBLIC_BUILD_ID:
      process.env.VERCEL_GIT_COMMIT_SHA ||
      process.env.VERCEL_DEPLOYMENT_ID ||
      'dev',
  },
  // El HTML se revalida siempre; los recursos con hash siguen en caché larga
  async headers() {
    return [
      {
        source: '/:path((?!_next/static|_next/image|favicon|logo|.*\\.(?:png|jpg|jpeg|svg|webp|ico|css|js)$).*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.base44.com',
      },
    ],
  },
}

export default nextConfig
