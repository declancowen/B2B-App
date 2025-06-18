'use client'

import { useRouter } from 'next/navigation'

export default function DocumentDashboardPage() {
  const router = useRouter()

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
            
            <div 
              onClick={() => router.push('/bid-dashboard')}
              className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m14.5 12.5-8 8a2.119 2.119 0 0 1-3-3l8-8"/>
                <path d="m16 16 6-6"/>
                <path d="m8 8 6-6"/>
                <path d="m9 7 8 8"/>
                <path d="m21 11-8-8"/>
              </svg>
              <span>Bids</span>
            </div>
            
            <div 
              onClick={() => router.push('/company-dashboard')}
              className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>Company</span>
            </div>
            
            <div className="flex items-center px-3 py-2 bg-gray-200 rounded-md">
              <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-gray-900 font-medium">Documents</span>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-24 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Documents</h1>
          <p className="text-lg text-gray-600">Manage your company documents and bank statements</p>
        </div>
        
        {/* Documents Grid */}
        <div className="mb-10">
          <div className="grid grid-cols-3 gap-8">
            
            {/* Management Accounts */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                  </svg>
                </div>
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
                  Expired
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">Management Accounts</h3>
              <p className="text-sm text-gray-500 mb-3">Expired: 07/07/2023</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-sm text-gray-600 font-medium">534 days overdue</span>
                <button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 transform hover:scale-105">
                  Re-upload
                </button>
              </div>
            </div>

            {/* Balance Sheet */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                </div>
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
                  Verified
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">Balance Sheet</h3>
              <p className="text-sm text-gray-500 mb-3">Expiry: 30/06/2024</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-sm text-gray-600 font-medium">156 days remaining</span>
                <button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 transform hover:scale-105">
                  View
                </button>
              </div>
            </div>

            {/* Income Statement */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
                  Verified
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">Income Statement</h3>
              <p className="text-sm text-gray-500 mb-3">Expiry: 31/08/2024</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-sm text-gray-600 font-medium">218 days remaining</span>
                <button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 transform hover:scale-105">
                  View
                </button>
              </div>
            </div>

            {/* Cashflow Statement */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
                  Verified
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">Cashflow Statement</h3>
              <p className="text-sm text-gray-500 mb-3">Expiry: 15/09/2024</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-sm text-gray-600 font-medium">233 days remaining</span>
                <button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 transform hover:scale-105">
                  View
                </button>
              </div>
            </div>

            {/* Statement of Changes in Equity */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
                  Verified
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">Changes in Equity</h3>
              <p className="text-sm text-gray-500 mb-3">Expiry: 30/07/2024</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-sm text-gray-600 font-medium">187 days remaining</span>
                <button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 transform hover:scale-105">
                  View
                </button>
              </div>
            </div>

            {/* Bank Statement 1 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                </div>
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
                  Verified
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">Bank Statement Jan</h3>
              <p className="text-sm text-gray-500 mb-3">Expiry: 31/01/2025</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-sm text-gray-600 font-medium">365 days remaining</span>
                <button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 transform hover:scale-105">
                  View
                </button>
              </div>
            </div>

            {/* Bank Statement 2 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                </div>
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
                  Verified
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">Bank Statement Dec</h3>
              <p className="text-sm text-gray-500 mb-3">Expiry: 31/12/2024</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-sm text-gray-600 font-medium">334 days remaining</span>
                <button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 transform hover:scale-105">
                  View
                </button>
              </div>
            </div>

            {/* Bank Statement 3 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                </div>
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-yellow-50 text-yellow-700 border border-yellow-200">
                  Pending
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">Bank Statement Nov</h3>
              <p className="text-sm text-gray-500 mb-3">Expiry: 30/11/2024</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-sm text-gray-600 font-medium">Under review</span>
                <button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 transform hover:scale-105">
                  View
                </button>
              </div>
            </div>

            {/* List of Provisions/Contingencies */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-yellow-50 text-yellow-700 border border-yellow-200">
                  Pending
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">Provisions List</h3>
              <p className="text-sm text-gray-500 mb-3">Expiry: 28/02/2024</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-sm text-gray-600 font-medium">303 days overdue</span>
                <button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 transform hover:scale-105">
                  View
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
} 