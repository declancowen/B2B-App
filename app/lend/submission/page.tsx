'use client'

import { useRouter } from 'next/navigation'

export default function SubmissionPage() {
  const router = useRouter()

  const handleBackToDashboard = () => {
    router.push('/lend/bid-dashboard?tab=prospects')
  }

  const handleViewProgress = () => {
    router.push('/lend/active-offer')
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-12 mt-4">
          <p className="text-sm text-gray-500">
            <span className="text-gray-400">Bids</span>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Bid Details</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Confirmation</span>
          </p>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Bid submitted</h1>
          <p className="text-gray-600">
            Your bid has been successfully submitted. We've sent a confirmation to your email address.
          </p>
        </div>

        {/* Bid Status Section */}
        <div className="mb-10">
          <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">Bid Submitted</h3>
              <p className="text-sm text-gray-500">Successfully submitted to borrower</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">Borrower review</h3>
              <p className="text-sm text-gray-500">The borrower will review your bid and respond accordingly.</p>
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
            View Bid Details
          </button>
        </div>
      </div>
    </div>
  )
} 