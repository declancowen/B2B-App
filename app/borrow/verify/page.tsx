'use client'

import { useRouter } from 'next/navigation'
import ProgressBar from '../../../components/ProgressBar'

export default function VerifyPage() {
  const router = useRouter()

  const handleStartVerification = () => {
    console.log('Starting verification...')
    // Navigate to confirmation page after verification
    router.push('/borrow/confirmation')
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <ProgressBar currentStep={3} totalSteps={5} />
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Verify your identity</h1>
          <p className="text-gray-700 text-base leading-relaxed">
            To ensure the security of your account, we need to verify your identity using facial recognition. Please follow the instructions below to complete the verification process.
          </p>
        </div>
        
        {/* Face recognition icon */}
        <div className="mb-12 flex justify-start">
          <div className="w-32 h-32 flex items-center justify-center">
            <svg 
              width="128" 
              height="128" 
              viewBox="0 0 128 128" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-800"
            >
              {/* Face outline with corners */}
              <path 
                d="M32 16 L16 16 L16 32" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round" 
                fill="none"
              />
              <path 
                d="M96 16 L112 16 L112 32" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round" 
                fill="none"
              />
              <path 
                d="M32 112 L16 112 L16 96" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round" 
                fill="none"
              />
              <path 
                d="M96 112 L112 112 L112 96" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round" 
                fill="none"
              />
              
              {/* Eyes */}
              <circle cx="48" cy="56" r="3" fill="currentColor" />
              <circle cx="80" cy="56" r="3" fill="currentColor" />
              
              {/* Smile */}
              <path 
                d="M48 80 Q64 96 80 80" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round" 
                fill="none"
              />
            </svg>
          </div>
        </div>

        <button
          type="button"
          onClick={handleStartVerification}
          className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-medium text-base"
        >
          Start Verification
        </button>
      </div>
    </div>
  )
} 