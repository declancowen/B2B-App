'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LendContractPage() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [todaysDate, setTodaysDate] = useState('')

  const handleSignAndContinue = () => {
    console.log('Contract signed and continuing...')
    // For lenders, redirect to bank details setup
    router.push('/lend/bank-details')
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12 mt-4">
          <p className="text-sm text-gray-600 mb-4">Step 1 of 3</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-black h-2 rounded-full" style={{ width: '33.33%' }}></div>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Review and sign your lending agreement</h1>
        </div>

        {/* Loan Agreement Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Lending agreement</h2>
          <p className="text-gray-600 mb-6">
            This lending agreement is between you, the lender, and the borrower. It outlines the terms and conditions of the loan you are providing, 
            including the loan amount, interest rate, repayment schedule, and any fees. Please read this document carefully before signing.
          </p>
          
          {/* Document Preview Area */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-32 flex items-center justify-center bg-gray-50">
            <p className="text-gray-500">Lending Agreement Document Preview</p>
          </div>
        </div>

        {/* Sign Agreement Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Sign your lending agreement</h2>
          <p className="text-gray-600 mb-6">
            By signing below, you acknowledge that you have read, understood, and agree to the terms and conditions of this lending agreement.
          </p>
          
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"
              />
            </div>
            
            <div>
              <input
                type="text"
                placeholder="Today's date"
                value={todaysDate}
                onChange={(e) => setTodaysDate(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"
              />
            </div>
          </div>
        </div>

        {/* Sign and Continue Button */}
        <div className="mb-10">
          <button
            onClick={handleSignAndContinue}
            className="w-full max-w-md bg-black text-white py-4 px-8 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-semibold text-base transition-colors duration-200"
          >
            Sign and continue
          </button>
        </div>
      </div>
    </div>
  )
} 