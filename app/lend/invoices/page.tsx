'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function InvoicesPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<'paid' | 'unpaid'>('unpaid')

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab && (tab === 'paid' || tab === 'unpaid')) {
      setActiveTab(tab)
    }
  }, [searchParams])

  // Dummy invoice data
  const dummyInvoices = [
    {
      id: 1,
      loanId: "LN-2023-00123",
      type: "Trade Finance",
      value: "R150,000",
      contractDate: "2023-10-15",
      disbursementDate: "2023-10-18",
      status: "unpaid",
      urgency: "high",
      daysOverdue: 15,
      companyName: "TechCorp Solutions"
    },
    {
      id: 2,
      loanId: "LN-2023-00124",
      type: "Bridging Finance",
      value: "R95,000",
      contractDate: "2023-09-20",
      disbursementDate: "2023-09-22",
      status: "paid",
      urgency: "low",
      daysOverdue: 0,
      paymentDate: "2023-10-25",
      companyName: "Manufacturing Plus"
    },
    {
      id: 3,
      loanId: "LN-2023-00125",
      type: "Trade Finance",
      value: "R75,000",
      contractDate: "2023-11-05",
      disbursementDate: "2023-11-08",
      status: "unpaid",
      urgency: "medium",
      daysOverdue: 5,
      companyName: "Retail Dynamics"
    },
    {
      id: 4,
      loanId: "LN-2023-00126",
      type: "Bridging Finance",
      value: "R200,000",
      contractDate: "2023-08-12",
      disbursementDate: "2023-08-15",
      status: "paid",
      urgency: "low",
      daysOverdue: 0,
      paymentDate: "2023-09-18",
      companyName: "Construction Pro"
    },
    {
      id: 5,
      loanId: "LN-2023-00127",
      type: "Trade Finance",
      value: "R50,000",
      contractDate: "2023-10-28",
      disbursementDate: "2023-10-30",
      status: "unpaid",
      urgency: "high",
      daysOverdue: 20,
      companyName: "Digital Marketing Inc"
    },
    {
      id: 6,
      loanId: "LN-2023-00128",
      type: "Bridging Finance",
      value: "R125,000",
      contractDate: "2023-09-15",
      disbursementDate: "2023-09-18",
      status: "paid",
      urgency: "low",
      daysOverdue: 0,
      paymentDate: "2023-10-20",
      companyName: "Food & Beverage Co"
    },
    {
      id: 7,
      loanId: "LN-2023-00129",
      type: "Trade Finance",
      value: "R180,000",
      contractDate: "2023-11-12",
      disbursementDate: "2023-11-15",
      status: "unpaid",
      urgency: "medium",
      daysOverdue: 8,
      companyName: "Transport Solutions"
    },
    {
      id: 8,
      loanId: "LN-2023-00130",
      type: "Bridging Finance",
      value: "R110,000",
      contractDate: "2023-08-25",
      disbursementDate: "2023-08-28",
      status: "paid",
      urgency: "low",
      daysOverdue: 0,
      paymentDate: "2023-09-30",
      companyName: "Healthcare Systems"
    },
    {
      id: 9,
      loanId: "LN-2023-00131",
      type: "Trade Finance",
      value: "R135,000",
      contractDate: "2023-10-02",
      disbursementDate: "2023-10-05",
      status: "unpaid",
      urgency: "high",
      daysOverdue: 25,
      companyName: "Logistics Express"
    },
    {
      id: 10,
      loanId: "LN-2023-00132",
      type: "Bridging Finance",
      value: "R165,000",
      contractDate: "2023-07-18",
      disbursementDate: "2023-07-21",
      status: "paid",
      urgency: "low",
      daysOverdue: 0,
      paymentDate: "2023-08-22",
      companyName: "Energy Solutions"
    }
  ]

  const handleView = (invoiceId: number) => {
    console.log('View invoice:', invoiceId)
    // Add navigation logic here
  }

  const handlePay = (invoiceId: number) => {
    console.log('Pay invoice:', invoiceId)
    // Add payment logic here
  }

  const handleDownload = (invoiceId: number) => {
    console.log('Download invoice:', invoiceId)
    // Add download logic here
  }

  const getFilteredInvoices = () => {
    return dummyInvoices.filter(invoice => invoice.status === activeTab)
  }

  const getUrgencyBadgeStyle = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "bg-red-50 text-red-800 border-red-200"
      case "medium":
        return "bg-orange-50 text-orange-800 border-orange-200"
      case "low":
        return "bg-green-50 text-green-800 border-green-200"
      default:
        return "bg-gray-50 text-gray-800 border-gray-200"
    }
  }

  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-50 text-green-800 border-green-200"
      case "unpaid":
        return "bg-red-50 text-red-800 border-red-200"
      default:
        return "bg-gray-50 text-gray-800 border-gray-200"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString().slice(-2)
    return `${day}/${month}/${year}`
  }

  const renderTable = () => (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Loan ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fee
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contract Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Disbursement Date
            </th>
            {activeTab === 'paid' && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Date
              </th>
            )}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            {activeTab === 'unpaid' && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Urgency
              </th>
            )}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {getFilteredInvoices().map((invoice) => (
            <tr 
              key={invoice.id} 
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => handleView(invoice.id)}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{invoice.loanId}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{invoice.companyName}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-md bg-white text-black border border-gray-300 shadow-sm">
                  {invoice.type}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-md bg-white text-black border border-gray-300 shadow-sm">
                  {invoice.value}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-md bg-white text-black border border-gray-300 shadow-sm">
                  {formatDate(invoice.contractDate)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-md bg-white text-black border border-gray-300 shadow-sm">
                  {formatDate(invoice.disbursementDate)}
                </span>
              </td>
              {activeTab === 'paid' && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-md bg-white text-black border border-gray-300 shadow-sm">
                    {invoice.paymentDate ? formatDate(invoice.paymentDate) : 'N/A'}
                  </span>
                </td>
              )}
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-md border shadow-sm ${getStatusBadgeStyle(invoice.status)}`}>
                  {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                </span>
              </td>
              {activeTab === 'unpaid' && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-md border shadow-sm ${getUrgencyBadgeStyle(invoice.urgency)}`}>
                    {invoice.urgency.charAt(0).toUpperCase() + invoice.urgency.slice(1)}
                  </span>
                </td>
              )}
              <td className="px-6 py-4 whitespace-nowrap">
                {activeTab === 'unpaid' ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePay(invoice.id)
                    }}
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                  >
                    Pay
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDownload(invoice.id)
                    }}
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                  >
                    Download
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

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
            
            <div className="flex items-center px-3 py-2 bg-gray-200 rounded-md">
              <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              <span className="text-gray-900 font-medium">Invoices</span>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-24 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Invoices</h1>
        
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('unpaid')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'unpaid'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Unpaid ({dummyInvoices.filter(inv => inv.status === 'unpaid').length})
            </button>
            <button
              onClick={() => setActiveTab('paid')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'paid'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Paid ({dummyInvoices.filter(inv => inv.status === 'paid').length})
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {/* Table Actions */}
          <div className="mb-4 flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">
                {activeTab === 'unpaid' 
                  ? 'Manage outstanding invoice payments from borrowers' 
                  : 'View completed invoice payments'}
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                className="p-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
                title="Search"
              >
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
              
              <button
                className="p-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
                title="Filter"
              >
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46 22,3"/>
                </svg>
              </button>
              
              <button
                className="p-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
                title="Export"
              >
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </button>
            </div>
          </div>
          
          {renderTable()}
          
          {getFilteredInvoices().length === 0 && (
            <div className="text-center py-12">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No {activeTab} invoices</h3>
              <p className="text-gray-500">There are no {activeTab} invoices to display at this time.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 