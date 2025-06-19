'use client'

import { useRouter } from 'next/navigation'

export default function NextStepsPage() {
  const router = useRouter()

  const handleBackToDashboard = () => {
    router.push('/borrow/bid-dashboard')
  }

  const handleViewProgress = () => {
    router.push('/borrow/approved-bid')
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12 mt-4">
          <p className="text-sm text-gray-600 mb-4">Step 3 of 3</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-black h-2 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Contract signed</h1>
          <p className="text-gray-600">
            You've signed the contract. We've sent a copy to your email address, elena.smith@email.com.
          </p>
        </div>

        {/* Contract Status Section */}
        <div className="mb-10">
          <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">Contract</h3>
              <p className="text-sm text-gray-500">Signed by you</p>
            </div>
          </div>
        </div>

        {/* What's Next Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">What's next?</h2>
          
          <div className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex-shrink-0 mr-4 mt-1">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">Lender review</h3>
              <p className="text-sm text-gray-500">The lender will review and sign the contract.</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <button
            onClick={handleBackToDashboard}
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-medium transition-colors duration-200"
          >
            Back to Dashboard
          </button>
          
          <button
            onClick={handleViewProgress}
            className="bg-white text-gray-700 px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-medium transition-colors duration-200"
          >
            View Progress
          </button>
        </div>
      </div>
    </div>
  )
} 