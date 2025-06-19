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
          <div className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">Awaiting Disbursement</h3>
              <p className="text-sm text-blue-600">Loan approved, funds will be disbursed soon</p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Disbursement notification</h3>
                <p className="text-sm text-gray-500">We will notify you when this loan is due to be dispersed.</p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex-shrink-0 mr-4 mt-1">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Receive monthly payments</h3>
                <p className="text-sm text-gray-500">You'll receive R919,181 monthly payments starting on the 15th of next month.</p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex-shrink-0 mr-4 mt-1">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Track your investment</h3>
                <p className="text-sm text-gray-500">Monitor payment status and loan progress in your dashboard.</p>
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