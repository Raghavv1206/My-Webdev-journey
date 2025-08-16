"use client"
import React, {useEffect} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Login = () => {
  // Generate star positions once on the client to avoid hydration errors
  const stars = React.useMemo(() => {
    return Array.from({ length: 120 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
      background: `rgba(255,255,255,${Math.random() * 0.7 + 0.3})`,
      opacity: Math.random() * 0.7 + 0.3,
      filter: 'blur(0.5px)'
    }));
  }, []);
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    document.title = "Login - Get Me A Chai" 
    if (session) {
      // Check if user exists in DB
      fetch('/api/check-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: session.user.email })
      })
      .then(res => res.json())
      .then(data => {
        if (data.exists) {
          router.push(`/${data.username}`)
        } else {
          router.push('/dashboard')
        }
      })
    }
  }, [session])

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#111]">
      {/* Starry Night Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Star field */}
        <div className="absolute inset-0">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={star}
            ></div>
          ))}
        </div>
        {/* Subtle nebula shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-800/30 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gray-700/30 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-4xl md:text-5xl mb-8 text-white drop-shadow-lg">Login to Get Started</h1>

        <div className="flex flex-col gap-4 items-center w-full max-w-md p-10 rounded-2xl bg-gray-900/80 backdrop-blur-md shadow-2xl border border-gray-800 animate-fade-in-up">
          {/* Google Button */}
          <button className="flex items-center w-full bg-gray-900 text-white border border-gray-700 rounded-lg shadow-md px-6 py-3 text-base font-semibold hover:bg-gray-800 hover:scale-105 hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-gray-700 transition-all duration-300 transform hover:-translate-y-1">
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <g>
                <path fill="#fff" d="M9.827 24c0-1.524.253-2.985.705-4.356L2.623 13.604C1.082 16.734.214 20.26.214 24c0 3.737.868 7.262 2.407 10.389l7.905-6.051c-.448-1.364-.698-2.82-.698-4.338z"/>
                <path fill="#fff" d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.093l6.836-6.827C35.036 2.773 29.695.533 23.714.533c-9.287 0-17.268 5.311-21.09 13.071l7.909 6.04c1.822-5.532 7.017-9.511 13.181-9.511z"/>
                <path fill="#fff" d="M23.714 37.867c-6.165 0-11.36-3.978-13.182-9.51l-7.909 6.038c3.822 7.761 11.803 13.072 21.09 13.072 5.732 0 11.204-2.035 15.311-5.848l-7.507-5.804c-2.118 1.334-4.785 2.052-7.804 2.052z"/>
                <path fill="#fff" d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714v9.067h12.604c-.63 3.091-2.345 5.468-4.8 7.015l7.507 5.804C43.339 37.614 46.145 31.649 46.145 24z"/>
              </g>
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* LinkedIn Button */}
          <button className="flex items-center w-full bg-gray-900 text-white border border-gray-700 rounded-lg shadow-md px-6 py-3 text-base font-semibold hover:bg-gray-800 hover:scale-105 hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-gray-700 transition-all duration-300 transform hover:-translate-y-1">
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.369 4.267 5.455v6.285zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.069 0-1.144.925-2.069 2.069-2.069 1.144 0 2.069.925 2.069 2.069 0 1.143-.925 2.069-2.069 2.069zm1.777 13.019H3.56V9h3.554v11.452z"/>
            </svg>
            <span>Continue with LinkedIn</span>
          </button>

          {/* Twitter Button */}
          <button className="flex items-center w-full bg-gray-900 text-white border border-gray-700 rounded-lg shadow-md px-6 py-3 text-base font-semibold hover:bg-gray-800 hover:scale-105 hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-gray-700 transition-all duration-300 transform hover:-translate-y-1">
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.924 2.206-4.924 4.924 0 .386.045.762.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.697 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.318-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.067 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.016-.634z"/>
            </svg>
            <span>Continue with Twitter</span>
          </button>

          {/* Facebook Button */}
          <button className="flex items-center w-full bg-gray-900 text-white border border-gray-700 rounded-lg shadow-md px-6 py-3 text-base font-semibold hover:bg-gray-800 hover:scale-105 hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-gray-700 transition-all duration-300 transform hover:-translate-y-1">
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.104C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/>
            </svg>
            <span>Continue with Facebook</span>
          </button>

          {/* Github Button */}
          <button onClick={() => { signIn("github") }} className="flex items-center w-full bg-gray-900 text-white border border-gray-700 rounded-lg shadow-md px-6 py-3 text-base font-semibold hover:bg-gray-800 hover:scale-105 hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-gray-700 transition-all duration-300 transform hover:-translate-y-1">
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .321.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            <span>Continue with Github</span>
          </button>

          {/* Apple Button */}
          <button className="flex items-center w-full bg-gray-900 text-white border border-gray-700 rounded-lg shadow-md px-6 py-3 text-base font-semibold hover:bg-gray-800 hover:scale-105 hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-gray-700 transition-all duration-300 transform hover:-translate-y-1">
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
              <path d="M16.365 1.43c0 1.14-.467 2.267-1.32 3.18-.84.9-2.22 1.59-3.36 1.59-.09-1.08.36-2.25 1.32-3.15.84-.9 2.22-1.62 3.36-1.62zm2.52 6.36c-1.44-.06-2.67.81-3.36.81-.72 0-1.86-.78-3.06-.78-2.34 0-4.5 1.68-5.73 4.29-2.46 4.26-.63 10.56 1.77 14.04 1.17 1.8 2.55 3.81 4.38 3.74 1.77-.07 2.43-1.21 4.56-1.21 2.13 0 2.72 1.17 4.56 1.17 1.83.01 3.06-1.92 4.22-3.72 1.45-2.13 2.05-4.19 2.08-4.29-.05-.02-4.01-1.54-4.06-6.09-.03-3.81 3.11-5.62 3.25-5.7-1.78-2.6-4.54-2.89-5.33-2.94z"/>
            </svg>
            <span>Continue with Apple</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
