'use client'

import { useRouter } from 'next/navigation'

export default function ApprovalPage() {
  const router = useRouter()

  const handleBackToDashboard = () => {
    router.push('/lend/loan-dashboard')
  }

  const handleViewLoanDetails = () => {
    router.push('/lend/accepted-offer')
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
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Lending agreement approved</h1>
          <p className="text-gray-600">
            Your lending agreement has been successfully approved and activated. You'll start receiving repayments as scheduled.
          </p>
        </div>

        {/* Approval Status Section */}
        <div className="mb-10">
          <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">Contract Signed</h3>
              <p className="text-sm text-gray-600">Awaiting fee payment</p>
            </div>
          </div>
        </div>

        {/* What's Next Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">What's next?</h2>
          
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex-shrink-0 mr-4 mt-1">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Pay fee</h3>
                <p className="text-sm text-gray-500">The service fee will be paid and advanced on behalf of the borrower.</p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex-shrink-0 mr-4 mt-1">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Disperse loan</h3>
                <p className="text-sm text-gray-500">Once the fee is paid, the loan will be dispersed on the due date.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <button
            onClick={handleBackToDashboard}
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-medium transition-colors duration-200"
          >
            Go to Dashboard
          </button>
          
          <button
            onClick={handleViewLoanDetails}
            className="bg-white text-gray-700 px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-medium transition-colors duration-200"
          >
            View Loan Details
          </button>
        </div>
      </div>
    </div>
  )
} 