'use client'

import { useRouter } from 'next/navigation'

export default function OfferPage() {
  const router = useRouter()

  const handleAcceptOffer = () => {
    console.log('Offer accepted')
    router.push('/contract')
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-12 mt-4">
          <p className="text-sm text-gray-500">
            <span className="text-gray-400">Loans</span>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Bid Offers</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Offer Details</span>
          </p>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Offer Details</h1>
          <p className="text-gray-500">Review the selected offer details below. You can accept this offer to proceed with your loan application.</p>
        </div>

        {/* Trade Finance Loan Card */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-xl p-6 shadow-md relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-teal-100 rounded-full -mr-10 -mt-10 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-100 rounded-full -ml-8 -mb-8 opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-md mr-4 border border-teal-200">
                      Selected Offer
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Trade Finance</h2>
                </div>
                
                <div className="flex items-center ml-6">
                  <div className="w-14 h-14 bg-teal-500 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white text-base font-bold">FN</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-teal-200 pt-3">
                <p className="text-gray-600 font-medium">From First National Bank</p>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Details Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Loan Details</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-gray-500 mb-1">Loan Amount</p>
                <p className="text-lg font-semibold text-gray-900">R5,000,000</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Interest Rate</p>
                <p className="text-lg font-semibold text-gray-900">4.5% APR</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Loan Term</p>
                <p className="text-lg font-semibold text-gray-900">12 months</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Loan Provider</p>
                <p className="text-lg font-semibold text-gray-900">First National Bank</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Monthly Payment</p>
                <p className="text-lg font-semibold text-gray-900">R427,083</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Interest Paid</p>
                <p className="text-lg font-semibold text-gray-900">R125,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accept Offer Button */}
        <div className="mb-10">
          <button
            onClick={handleAcceptOffer}
            className="w-full max-w-md bg-black text-white py-4 px-8 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-semibold text-lg transition-colors duration-200"
          >
            Accept Offer
          </button>
        </div>
      </div>
    </div>
  )
} 