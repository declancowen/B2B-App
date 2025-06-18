'use client'

import { useRouter } from 'next/navigation'

export default function BidDashboardPage() {
  const router = useRouter()

  const handleFinanceNow = () => {
    console.log('Finance Now clicked')
    // Add navigation logic here
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-xl font-semibold text-gray-900 mb-8">MoMoola</h1>
          
          <nav className="space-y-2">
            <div 
              onClick={() => router.push('/loan-dashboard')}
              className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Loans</span>
            </div>
            
            <div className="flex items-center px-3 py-2 bg-gray-200 rounded-md">
              <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m14.5 12.5-8 8a2.119 2.119 0 0 1-3-3l8-8"/>
                <path d="m16 16 6-6"/>
                <path d="m8 8 6-6"/>
                <path d="m9 7 8 8"/>
                <path d="m21 11-8-8"/>
              </svg>
              <span className="text-gray-900 font-medium">Bids</span>
            </div>
            
            <div className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>Company</span>
            </div>
            
            <div className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Documents</span>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Bids</h1>
        
        {/* Approved Bids Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Approved Bids</h2>
          <div className="space-y-4">
          {/* Bridging Finance Loan */}
          <div 
                            onClick={() => router.push('/approved-bid')}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 14 5-5-5-5"/>
                    <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Bridging Finance</p>
                  <p className="text-3xl font-bold text-gray-900">R10,000,000</p>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white text-base font-bold">SB</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-8">
                <div className="min-w-[80px]">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Term</p>
                  <p className="text-sm font-semibold text-gray-900">12 months</p>
                </div>
                <div className="min-w-[60px]">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">APR</p>
                  <p className="text-sm font-semibold text-gray-900">8.50%</p>
                </div>
                <div className="min-w-[100px]">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Provider</p>
                  <p className="text-sm font-semibold text-gray-900">Standard Bank</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-blue-600">Awaiting Dispersement</span>
              </div>
            </div>
                      </div>
          </div>
        </div>

        {/* Pending Bids Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Pending Bids</h2>
          <div className="space-y-4">
            {/* Trade Finance Loan */}
          <div 
            onClick={() => router.push('/pending-bid')}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m16 3 4 4-4 4"/>
                    <path d="M20 7H4"/>
                    <path d="m8 21-4-4 4-4"/>
                    <path d="M4 17h16"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Trade Finance</p>
                  <p className="text-3xl font-bold text-gray-900">R5,000,000</p>
                </div>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-8">
                <div className="min-w-[80px]">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Term</p>
                  <p className="text-sm font-semibold text-gray-900">12 months</p>
                </div>
                <div className="min-w-[60px]">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">APR</p>
                  <p className="text-sm font-semibold text-gray-900">TBD</p>
                </div>
                <div className="min-w-[100px]">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Provider</p>
                  <p className="text-sm font-semibold text-gray-900">TBD</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-orange-600">Pending</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
} 