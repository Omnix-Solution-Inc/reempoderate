'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LoginPage() {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) router.push('/dashboard')
  }, [session, router])

  return (
    <main className="min-h-screen bg-light-bg flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md text-center">
        <h1 className="font-playfair text-3xl text-primary mb-2">ReEmpoderate</h1>
        <p className="text-gray-500 mb-8 text-sm">Accede a tu espacio de transformación</p>

        <button
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
          className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-3 px-4 mb-3 hover:bg-gray-50 transition font-medium text-sm"
        >
          <img src="/icons/google.svg" alt="Google" className="w-5 h-5" />
          Continuar con Google
        </button>

        <button
          onClick={() => signIn('azure-ad', { callbackUrl: '/dashboard' })}
          className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-3 px-4 hover:bg-gray-50 transition font-medium text-sm"
        >
          <img src="/icons/microsoft.svg" alt="Microsoft" className="w-5 h-5" />
          Continuar con Microsoft
        </button>

        <p className="text-xs text-gray-400 mt-6">
          Al continuar, aceptas nuestros términos de uso y política de privacidad.
        </p>
      </div>
    </main>
  )
}
