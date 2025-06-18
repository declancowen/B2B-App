'use client'

import { useRouter } from 'next/navigation'

export default function PendingBidPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-12 mt-4">
          <p className="text-sm text-gray-500">
            <span className="text-gray-400">Bids</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Bid Offers</span>
          </p>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Bid offers</h1>
          <p className="text-gray-500">You have 5 offers for your pending bid</p>
        </div>

        {/* Status Card */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Reviewing Offers</h3>
                <p className="text-sm text-orange-600">Your bid is receiving offers from multiple lenders</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">5</p>
              <p className="text-sm text-gray-500">Offers Received</p>
            </div>
          </div>
        </div>

        {/* Bid Details Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Bid Details</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Requested Amount</p>
                <p className="text-base font-medium text-gray-900">R5,000,000</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Term</p>
                <p className="text-base font-medium text-gray-900">12 months</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Loan Type</p>
                <p className="text-base font-medium text-gray-900">Trade Finance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Best Offer Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Best offer</h2>
          
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-200 rounded-xl p-8 shadow-sm relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-full -mr-16 -mt-16 opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full -ml-12 -mb-12 opacity-20"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-md mr-3">
                      Best offer
                    </span>
                  </div>
                  <div className="mb-4">
                    <p className="text-4xl font-bold text-gray-900 mb-2">4.5% APR</p>
                    <p className="text-base text-gray-600 font-medium">Offered by First National Bank</p>
                  </div>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center text-teal-600">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Lowest rate
                    </div>
                    <div className="flex items-center text-teal-600">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                      Fast approval
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center ml-6">
                  <div className="w-20 h-20 bg-teal-500 rounded-md flex items-center justify-center mb-3 shadow-lg">
                    <span className="text-white text-lg font-bold">FN</span>
                  </div>
                  <p className="text-xs font-bold text-teal-700 text-center leading-tight">FIRST<br/>NATIONAL<br/>BANK</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-teal-200">
                <button 
                  onClick={() => router.push('/bid-offer')}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm"
                >
                  Accept This Offer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Offers Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Other offers</h2>
          
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-4 border-b border-gray-200">
              <div className="grid grid-cols-12 text-sm font-semibold text-gray-700">
                <div className="col-span-7">Lender</div>
                <div className="col-span-2 text-right">APR</div>
                <div className="col-span-3 text-right">Action</div>
              </div>
            </div>
            
            <div className="divide-y divide-gray-100">
              {/* Second Federal Credit Union */}
              <div className="px-8 py-6 hover:bg-gray-50 transition-colors duration-150">
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-7 flex items-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                      <span className="text-white text-sm font-bold">SF</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Second Federal Credit Union</p>
                      <p className="text-xs text-gray-500">Traditional banking</p>
                    </div>
                  </div>
                  <div className="col-span-2 text-right">
                    <p className="text-xl font-bold text-gray-900">4.7%</p>
                    <p className="text-xs text-gray-500">APR</p>
                  </div>
                  <div className="col-span-3 text-right">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Community Savings Bank */}
              <div className="px-8 py-6 hover:bg-gray-50 transition-colors duration-150">
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-7 flex items-center">
                    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                      <span className="text-white text-sm font-bold">CS</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Community Savings Bank</p>
                      <p className="text-xs text-gray-500">Local community bank</p>
                    </div>
                  </div>
                  <div className="col-span-2 text-right">
                    <p className="text-xl font-bold text-gray-900">4.8%</p>
                    <p className="text-xs text-gray-500">APR</p>
                  </div>
                  <div className="col-span-3 text-right">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Regional Trust */}
              <div className="px-8 py-6 hover:bg-gray-50 transition-colors duration-150">
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-7 flex items-center">
                    <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                      <span className="text-white text-sm font-bold">RT</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Regional Trust</p>
                      <p className="text-xs text-gray-500">Regional financial services</p>
                    </div>
                  </div>
                  <div className="col-span-2 text-right">
                    <p className="text-xl font-bold text-gray-900">4.9%</p>
                    <p className="text-xs text-gray-500">APR</p>
                  </div>
                  <div className="col-span-3 text-right">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* United Financial Group */}
              <div className="px-8 py-6 hover:bg-gray-50 transition-colors duration-150">
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-7 flex items-center">
                    <div className="w-12 h-12 bg-teal-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                      <span className="text-white text-sm font-bold">UF</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">United Financial Group</p>
                      <p className="text-xs text-gray-500">Corporate finance specialist</p>
                    </div>
                  </div>
                  <div className="col-span-2 text-right">
                    <p className="text-xl font-bold text-gray-900">5.0%</p>
                    <p className="text-xs text-gray-500">APR</p>
                  </div>
                  <div className="col-span-3 text-right">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 