'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RequestPage() {
  const router = useRouter()
  const [financeType, setFinanceType] = useState('Bridging Finance')
  const [loanValue, setLoanValue] = useState('')
  const [term, setTerm] = useState('')

  const handleNext = () => {
    console.log('Finance request:', { financeType, loanValue, term })
    // Navigate to submission page
    router.push('/borrow/submit')
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-12 mt-4">
          <p className="text-sm text-gray-500">
            <span className="text-gray-400">Loans</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Request</span>
          </p>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-8">What type of finance do you need?</h1>
        </div>

        <div className="space-y-8">
          {/* Finance Type Selection */}
          <div className="flex gap-4 mb-8">
            <button
              type="button"
              onClick={() => setFinanceType('Bridging Finance')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                financeType === 'Bridging Finance'
                  ? 'bg-gray-200 text-gray-900'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Bridging Finance
            </button>
            
            <button
              type="button"
              onClick={() => setFinanceType('Trade Finance')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                financeType === 'Trade Finance'
                  ? 'bg-gray-200 text-gray-900'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Trade Finance
            </button>
          </div>

          {/* Loan Value Input */}
          <div>
            <label htmlFor="loan-value" className="block text-lg font-medium text-gray-900 mb-4">
              Loan Value (R)
            </label>
            <input
              id="loan-value"
              type="text"
              value={loanValue}
              onChange={(e) => setLoanValue(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"
              placeholder="Enter loan value"
            />
          </div>

          {/* Term Input */}
          <div>
            <label htmlFor="term" className="block text-lg font-medium text-gray-900 mb-4">
              Term (Months)
            </label>
            <input
              id="term"
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"
              placeholder="Enter term in months"
            />
          </div>

          {/* Next Button */}
          <div className="pt-4">
            <button
              type="button"
              onClick={handleNext}
              className="w-full max-w-sm bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-medium text-base"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 