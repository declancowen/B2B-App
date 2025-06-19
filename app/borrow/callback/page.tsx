'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ProgressBar from '../../../components/ProgressBar'

export default function CallbackPage() {
  const router = useRouter()

  const handleResendEmail = () => {
    console.log('Resending confirmation email...')
    // Add resend email logic here
  }

  const handleConfirmEmail = () => {
    console.log('Email confirmed')
    // Navigate to verify page after email confirmation
    router.push('/borrow/verify')
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <ProgressBar currentStep={2} totalSteps={6} />
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Confirm your email</h1>
          <p className="text-gray-700 text-base leading-relaxed">
            We've sent a confirmation email to your email address. Please check your inbox and click the link to complete your registration.
          </p>
        </div>
        
        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleConfirmEmail}
            className="flex-1 bg-black text-white px-6 py-2.5 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-medium"
          >
            I confirmed my email
          </button>
          
          <button
            type="button"
            onClick={handleResendEmail}
            className="flex-1 bg-gray-200 text-gray-700 px-6 py-2.5 rounded-md hover:bg-gray-300 font-medium"
          >
            Resend Confirmation Email
          </button>
        </div>
      </div>
    </div>
  )
} 