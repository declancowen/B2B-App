'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ProgressBar from '../../components/ProgressBar'

export default function TermsPage() {
  const router = useRouter()
  const [agreements, setAgreements] = useState({
    termsOfService: false,
    privacyPolicy: false,
    cookiePolicy: false
  })

  const handleCheckboxChange = (key: string, checked: boolean) => {
    setAgreements(prev => ({
      ...prev,
      [key]: checked
    }))
  }

  const handleAccept = () => {
    console.log('Terms accepted:', agreements)
    // Navigate to request page after accepting terms
    router.push('/request')
  }

  const handleDecline = () => {
    console.log('Terms declined')
    // Add decline logic here
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <ProgressBar currentStep={6} totalSteps={6} />
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Terms and Conditions</h1>
          <p className="text-gray-700 text-base leading-relaxed">
            Please read and accept the following terms and conditions before proceeding. By clicking "Accept", you agree to be bound by these terms. If you do not agree, please click "Decline".
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex items-center">
            <input
              id="terms-of-service"
              type="checkbox"
              checked={agreements.termsOfService}
              onChange={(e) => handleCheckboxChange('termsOfService', e.target.checked)}
              className="w-5 h-5 text-black bg-white border-2 border-gray-300 rounded focus:ring-black focus:ring-2"
            />
            <label htmlFor="terms-of-service" className="ml-3 text-gray-900 text-base">
              I agree to the terms of service
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="privacy-policy"
              type="checkbox"
              checked={agreements.privacyPolicy}
              onChange={(e) => handleCheckboxChange('privacyPolicy', e.target.checked)}
              className="w-5 h-5 text-black bg-white border-2 border-gray-300 rounded focus:ring-black focus:ring-2"
            />
            <label htmlFor="privacy-policy" className="ml-3 text-gray-900 text-base">
              I agree to the privacy policy
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="cookie-policy"
              type="checkbox"
              checked={agreements.cookiePolicy}
              onChange={(e) => handleCheckboxChange('cookiePolicy', e.target.checked)}
              className="w-5 h-5 text-black bg-white border-2 border-gray-300 rounded focus:ring-black focus:ring-2"
            />
            <label htmlFor="cookie-policy" className="ml-3 text-gray-900 text-base">
              I agree to the cookie policy
            </label>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleAccept}
            className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-medium"
          >
            Accept
          </button>
          
          <button
            type="button"
            onClick={handleDecline}
            className="px-8 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 font-medium"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
} 