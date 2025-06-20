'use client'

import { useRouter } from 'next/navigation'

export default function CompanyDashboardPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-xl font-semibold text-gray-900 mb-8">MoMoola</h1>
          
          <nav className="space-y-2">
            <div 
              className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer"
              onClick={() => router.push('/lend/dashboard')}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <path d="M9 9h6v6H9z"/>
              </svg>
              <span>Dashboard</span>
            </div>
            
            <div 
              className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer"
              onClick={() => router.push('/lend/loan-dashboard')}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Loans</span>
            </div>
            
            <div 
              className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer"
              onClick={() => router.push('/lend/bid-dashboard')}
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
              className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer"
              onClick={() => router.push('/lend/invoices')}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              <span>Invoices</span>
            </div>
            
            <div className="flex items-center px-3 py-2 bg-gray-200 rounded-md">
              <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-gray-900 font-medium">Company</span>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-24 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Company Profile</h1>
        
        {/* Registration Status Card */}
        <div className="mb-10">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Company Registered</h3>
                  <p className="text-sm text-green-600">Your company registration is complete and verified</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">Active</p>
                <p className="text-sm text-gray-500">Status</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Overview Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Company Overview</h2>
          
          {/* Company Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Company</p>
                  <p className="text-lg font-bold text-gray-900">Standard Bank Corporate Finance</p>
                </div>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Number</p>
                <p className="text-sm font-semibold text-gray-900">1962/000738/06</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Industry</p>
                  <p className="text-lg font-bold text-gray-900">Financial Services</p>
                </div>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                <p className="text-sm font-semibold text-gray-900">Johannesburg, SA</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Ownership</p>
                  <p className="text-lg font-bold text-gray-900">Public Company</p>
                </div>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Owners</p>
                <p className="text-sm font-semibold text-gray-900">3 Directors</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Details Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Company Details</h2>
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 w-1/3">Registered Address</td>
                  <td className="px-6 py-4 text-sm text-gray-600">9th Floor, Standard Bank Centre, 5 Simmonds Street, Johannesburg, 2001</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Business Description</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Corporate and investment banking services, lending solutions, and financial advisory</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Directors Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Directors</h2>
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Director</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Role</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Date Appointed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">SM</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Sim Tshabalala</p>
                        <p className="text-xs text-gray-500">Chief Executive Officer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-600">CEO</td>
                  <td className="px-6 py-3 text-sm text-gray-600">2018-04-01</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">AR</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Arno Daehnke</p>
                        <p className="text-xs text-gray-500">Chief Financial Officer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-600">CFO</td>
                  <td className="px-6 py-3 text-sm text-gray-600">2020-02-01</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">KM</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Kenny Fihla</p>
                        <p className="text-xs text-gray-500">Chief Operating Officer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-600">COO</td>
                  <td className="px-6 py-3 text-sm text-gray-600">2019-06-15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bank Details Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Bank Details</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bank Information */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-4">Bank Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Bank Name</p>
                    <p className="text-base font-medium text-gray-900">Standard Bank</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Branch Code</p>
                    <p className="text-base font-medium text-gray-900">051001</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Holder</p>
                    <p className="text-base font-medium text-gray-900">Standard Bank Corporate Finance Ltd</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Type</p>
                    <p className="text-base font-medium text-gray-900">Corporate Current Account</p>
                  </div>
                </div>
              </div>

              {/* Account Details */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-4">Account Details</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Account Number</p>
                    <p className="text-base font-medium text-gray-900">••••••••••9876</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Swift Code</p>
                    <p className="text-base font-medium text-gray-900">SBZAZAJJ</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Reference</p>
                    <p className="text-base font-medium text-gray-900">SBCF-CORP-001</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <p className="text-base font-medium text-green-700">Verified</p>
                    </div>
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