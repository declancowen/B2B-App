'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function LenderBidDashboardPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'pending' | 'complete'>('all')

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab && (tab === 'all' || tab === 'active' || tab === 'pending' || tab === 'complete')) {
      setActiveTab(tab)
    }
  }, [searchParams])

  const handleFinanceNow = () => {
    console.log('Finance Now clicked')
    // Add navigation logic here
  }

  // Company loan data
  const dummyCompanies = [
    { 
      id: 1, 
      name: "Global Manufacturing Ltd", 
      loanValue: "R10,000,000", 
      loanTerm: "12 months", 
      loanType: "Trade Finance", 
      dueDate: "2024-01-15", 
      daysUntilDue: 7, 
      status: "Active",
      completeDate: "2024-12-15",
      progress: 65
    },
    { 
      id: 3, 
      name: "Coastal Logistics Group", 
      loanValue: "R5,200,000", 
      loanTerm: "24 months", 
      loanType: "Trade Finance", 
      dueDate: "2024-03-10", 
      daysUntilDue: 61, 
      status: "Complete",
      completeDate: "2024-01-05",
      progress: 100
    },
    { 
      id: 4, 
      name: "Metro Construction Ltd", 
      loanValue: "R12,800,000", 
      loanTerm: "36 months", 
      loanType: "Bridging Finance", 
      dueDate: "2024-01-28", 
      daysUntilDue: 20, 
      status: "Pay Fee",
      completeDate: "2027-01-28",
      progress: 0
    },
    { 
      id: 5, 
      name: "Strategic Holdings Inc", 
      loanValue: "R8,900,000", 
      loanTerm: "15 months", 
      loanType: "Trade Finance", 
      dueDate: "2024-02-15", 
      daysUntilDue: 38, 
      status: "Disburse Loan",
      completeDate: "2025-05-15",
      progress: 0
    }
  ]

  const handleView = (companyId: number) => {
    console.log('View company:', companyId)
    // Find the company to get its status
    const company = dummyCompanies.find(c => c.id === companyId)
    if (!company) {
      console.log('Company not found')
      return
    }

    // Navigate based on company status
    if (company.status === 'Active') {
      console.log('Navigating to active loan page...')
      router.push('/lend/active-loan')
    } else if (company.status === 'Complete') {
      console.log('Navigating to completed loan page...')
      router.push('/lend/completed-loan')
    } else if (company.status === 'Pay Fee' || company.status === 'Disburse Loan') {
      console.log('Navigating to pending loan page...')
      router.push('/lend/active-offer')
    } else {
      console.log('No specific navigation configured for status:', company.status)
      router.push('/lend/bid-offer')
    }
  }

  const handleDelete = (companyId: number) => {
    console.log('Delete company:', companyId)
    // Add delete logic here
  }

  const getFilteredCompanies = () => {
    if (activeTab === 'all') {
      return dummyCompanies // Show all companies
    } else if (activeTab === 'active') {
      return dummyCompanies.filter(company => company.status === 'Active')
    } else if (activeTab === 'pending') {
      return dummyCompanies.filter(company => company.status === 'Pay Fee' || company.status === 'Disburse Loan')
    } else if (activeTab === 'complete') {
      return dummyCompanies.filter(company => company.status === 'Complete')
    }
    return dummyCompanies // Fallback
  }

  const getDueDatePillStyle = (daysUntilDue: number) => {
    return "bg-white text-black border-gray-300"
  }

  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-50 text-green-800 border-green-200"
      case "Pending":
        return "bg-yellow-50 text-yellow-800 border-yellow-200"
      case "Complete":
        return "bg-blue-50 text-blue-800 border-blue-200"
      case "Pay Fee":
        return "bg-red-50 text-red-800 border-red-200"
      case "Disburse Loan":
        return "bg-orange-50 text-orange-800 border-orange-200"
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
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Complete Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Progress
            </th>
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
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-md bg-white text-black border border-gray-300 shadow-sm">
                  {formatDate(company.completeDate)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-md border shadow-sm ${getStatusBadgeStyle(company.status)}`}>
                  {company.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${company.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{company.progress}%</span>
                </div>
              </td>
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
              onClick={() => router.push('/lend/dashboard')}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <path d="M9 9h6v6H9z"/>
              </svg>
              <span>Dashboard</span>
            </div>
            
            <div className="flex items-center px-3 py-2 bg-gray-200 rounded-md">
              <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-gray-900 font-medium">Loans</span>
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
            
            <div 
              className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer"
              onClick={() => router.push('/lend/company-dashboard')}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>Company</span>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-24 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Loans</h1>
        
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'all'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('active')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'active'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'pending'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveTab('complete')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'complete'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Complete
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