'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function LenderBidDashboardPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<'leads' | 'prospects' | 'opportunities' | 'cancelled'>('leads')

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab && (tab === 'leads' || tab === 'prospects' || tab === 'opportunities' || tab === 'cancelled')) {
      setActiveTab(tab)
    }
  }, [searchParams])

  const handleFinanceNow = () => {
    console.log('Finance Now clicked')
    // Add navigation logic here
  }

  // Dummy company data
  const dummyCompanies = [
    { id: 1, name: "TechCorp Solutions", loanValue: "R10,000,000", loanTerm: "12 months", loanType: "Trade Finance", dueDate: "2024-01-15", daysUntilDue: 7, status: "Bid Submitted" },
    { id: 2, name: "Green Energy Ltd", loanValue: "R5,000,000", loanTerm: "18 months", loanType: "Trade Finance", dueDate: "2024-02-10", daysUntilDue: 33, status: "Under Review" },
    { id: 3, name: "Manufacturing Plus", loanValue: "R3,200,000", loanTerm: "24 months", loanType: "Bridging Finance", dueDate: "2024-01-20", daysUntilDue: 12, status: "New" },
    { id: 4, name: "Retail Dynamics", loanValue: "R1,800,000", loanTerm: "6 months", loanType: "Trade Finance", dueDate: "2024-01-12", daysUntilDue: 4, status: "New" },
    { id: 5, name: "Construction Pro", loanValue: "R7,500,000", loanTerm: "36 months", loanType: "Bridging Finance", dueDate: "2024-03-05", daysUntilDue: 56, status: "New" },
    { id: 6, name: "Digital Marketing Inc", loanValue: "R950,000", loanTerm: "9 months", loanType: "Trade Finance", dueDate: "2024-01-18", daysUntilDue: 10, status: "New" },
    { id: 7, name: "Food & Beverage Co", loanValue: "R4,100,000", loanTerm: "15 months", loanType: "Bridging Finance", dueDate: "2024-02-25", daysUntilDue: 48, status: "New" },
    { id: 8, name: "Transport Solutions", loanValue: "R6,300,000", loanTerm: "30 months", loanType: "Trade Finance", dueDate: "2024-01-30", daysUntilDue: 22, status: "New" },
    { id: 9, name: "Healthcare Systems", loanValue: "R2,900,000", loanTerm: "12 months", loanType: "Bridging Finance", dueDate: "2024-01-25", daysUntilDue: 17, status: "New" },
    { id: 10, name: "Logistics Express", loanValue: "R3,750,000", loanTerm: "21 months", loanType: "Trade Finance", dueDate: "2024-02-15", daysUntilDue: 38, status: "New" }
  ]

  const handleView = (companyId: number) => {
    console.log('View company:', companyId)
    // Navigate to different pages based on tab and company
    if (companyId === 1 && activeTab === 'prospects') {
      console.log('Navigating to active offer page...')
      router.push('/lend/active-offer')
    } else if (companyId === 2 && activeTab === 'prospects') {
      console.log('Navigating to active offer 2 page...')
      router.push('/lend/active-offer-2')
    } else if (companyId === 1 && activeTab === 'opportunities') {
      console.log('Navigating to accepted offer page...')
      router.push('/lend/accepted-offer')
    } else if (companyId === 1) {
      console.log('Navigating to bid offer page...')
      router.push('/lend/bid-offer')
    } else {
      console.log('Company ID', companyId, 'clicked but no navigation configured')
    }
    // Add view logic for other companies here
  }

  const handleDelete = (companyId: number) => {
    console.log('Delete company:', companyId)
    // Add delete logic here
  }

  const getFilteredCompanies = () => {
    if (activeTab === 'prospects') {
      return dummyCompanies.filter(company => company.id === 1 || company.id === 2) // TechCorp Solutions and Green Energy Ltd
    } else if (activeTab === 'opportunities') {
      return dummyCompanies.filter(company => company.id === 1) // Only TechCorp Solutions
    } else if (activeTab === 'cancelled') {
      return dummyCompanies.filter(company => company.id === 3 || company.id === 4) // Manufacturing Plus and Retail Dynamics
    }
    return dummyCompanies // Show all companies for other tabs
  }

  const getDueDatePillStyle = (daysUntilDue: number) => {
    return "bg-white text-black border-gray-300"
  }

  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "Bid Submitted":
        return "bg-blue-50 text-blue-800 border-blue-200"
      case "Under Review":
        return "bg-orange-50 text-orange-800 border-orange-200"
      case "New":
        return "bg-white text-black border-gray-300"
      default:
        return "bg-white text-black border-gray-300"
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
              Company Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Loan Value
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Loan Term
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Loan Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Due Date
            </th>
            {activeTab === 'prospects' && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            )}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {getFilteredCompanies().map((company) => (
            <tr 
              key={company.id} 
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => handleView(company.id)}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{company.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-md bg-white text-black border border-gray-300 shadow-sm">
                  {company.loanValue}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-md bg-white text-black border border-gray-300 shadow-sm">
                  {company.loanTerm}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-md bg-white text-black border border-gray-300 shadow-sm">
                  {company.loanType}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-md border shadow-sm ${getDueDatePillStyle(company.daysUntilDue)}`}>
                  {formatDate(company.dueDate)}
                </span>
              </td>
              {activeTab === 'prospects' && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-md border shadow-sm ${getStatusBadgeStyle(company.status)}`}>
                    {company.status}
                  </span>
                </td>
              )}
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleView(company.id)}
                    className="bg-gray-100 text-black p-2 rounded-md hover:bg-gray-200 transition-colors duration-200"
                    title="View"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </button>
                  {activeTab !== 'opportunities' && activeTab !== 'cancelled' && (
                    <button
                      onClick={() => handleDelete(company.id)}
                      className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition-colors duration-200"
                      title="Delete"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3,6 5,6 21,6"/>
                        <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>
                        <line x1="10" y1="11" x2="10" y2="17"/>
                        <line x1="14" y1="11" x2="14" y2="17"/>
                      </svg>
                    </button>
                  )}
                </div>
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
            
            <div 
              className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer"
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
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-24 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Bids</h1>
        
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('leads')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'leads'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Leads
            </button>
            <button
              onClick={() => setActiveTab('prospects')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'prospects'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Prospects
            </button>
            <button
              onClick={() => setActiveTab('opportunities')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'opportunities'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Opportunities
            </button>
            <button
              onClick={() => setActiveTab('cancelled')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'cancelled'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Cancelled
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {/* Table Actions */}
          <div className="mb-4 flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">Review new loan requests from businesses</p>
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
                title="Group"
              >
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="9" y1="9" x2="15" y2="9"/>
                  <line x1="9" y1="15" x2="15" y2="15"/>
                </svg>
              </button>
            </div>
          </div>
          
          {renderTable()}
        </div>
      </div>
    </div>
  )
} 