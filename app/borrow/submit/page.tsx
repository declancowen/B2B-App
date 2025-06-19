'use client'

import { useRouter } from 'next/navigation'

export default function SubmitPage() {
  const router = useRouter()

  const handleBackToDashboard = () => {
    console.log('Navigating back to dashboard')
    // Navigate to loan dashboard
    router.push('/borrow/bid-dashboard')
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-12 mt-4">
          <p className="text-sm text-gray-500">
            <span className="text-gray-400">Loans</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Submission</span>
          </p>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Request Submitted</h1>
          <p className="text-gray-700 text-base leading-relaxed">
            Your request has been submitted and is currently under review. We are working to find the best lender offer for you. You will be notified once an offer is available.
          </p>
        </div>

        <div className="pt-4">
          <button
            type="button"
            onClick={handleBackToDashboard}
            className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-medium"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
} 