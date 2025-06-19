'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ProgressBar from '../../../components/ProgressBar'

export default function DocumentUploadPage() {
  const router = useRouter()
  const [files, setFiles] = useState({
    balanceSheet: null,
    incomeStatement: null,
    cashflowStatement: null,
    managementAccounts: null,
    bankStatement1: null,
    bankStatement2: null,
    bankStatement3: null,
    provisionsList: null,
    companyProfile: null,
    executiveSummary: null
  })

  const handleFileUpload = (section: string, file: File | null) => {
    setFiles(prev => ({
      ...prev,
      [section]: file
    }))
  }

  const handleSubmit = () => {
    console.log('Submitting documents:', files)
    // Navigate to submit page after document submission
    router.push('/borrow/submit')
  }



  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12 mt-4">
          <p className="text-sm text-gray-600 mb-4">Step 2 of 3</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-black h-2 rounded-full" style={{ width: '66.67%' }}></div>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <p className="text-sm text-gray-500">
            <span className="text-gray-400">Application</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Documents</span>
          </p>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Upload documents</h1>
          <p className="text-gray-600">Please upload the following documents to complete your application.</p>
        </div>

        <div className="space-y-10">
          {/* Financial Documents */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Financial Documents</h3>
            <div className="space-y-3">
              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Balance Sheet</p>
                    <p className="text-sm text-gray-600">Annual financial position statement</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const input = document.createElement('input')
                    input.type = 'file'
                    input.accept = '.pdf,.jpg,.jpeg,.png,.docx'
                    input.onchange = (e) => {
                      const file = (e.target as HTMLInputElement).files?.[0] || null
                      handleFileUpload('balanceSheet', file)
                    }
                    input.click()
                  }}
                  className={`px-3 py-1 text-sm rounded ${files.balanceSheet ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  {files.balanceSheet ? 'Uploaded' : 'Upload'}
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Income Statement</p>
                    <p className="text-sm text-gray-600">Profit and loss statement</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const input = document.createElement('input')
                    input.type = 'file'
                    input.accept = '.pdf,.jpg,.jpeg,.png,.docx'
                    input.onchange = (e) => {
                      const file = (e.target as HTMLInputElement).files?.[0] || null
                      handleFileUpload('incomeStatement', file)
                    }
                    input.click()
                  }}
                  className={`px-3 py-1 text-sm rounded ${files.incomeStatement ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  {files.incomeStatement ? 'Uploaded' : 'Upload'}
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Cashflow Statement</p>
                    <p className="text-sm text-gray-600">Cash receipts and payments analysis</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const input = document.createElement('input')
                    input.type = 'file'
                    input.accept = '.pdf,.jpg,.jpeg,.png,.docx'
                    input.onchange = (e) => {
                      const file = (e.target as HTMLInputElement).files?.[0] || null
                      handleFileUpload('cashflowStatement', file)
                    }
                    input.click()
                  }}
                  className={`px-3 py-1 text-sm rounded ${files.cashflowStatement ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  {files.cashflowStatement ? 'Uploaded' : 'Upload'}
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Management Accounts</p>
                    <p className="text-sm text-gray-600">Internal monthly financial reports (3 months)</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const input = document.createElement('input')
                    input.type = 'file'
                    input.accept = '.pdf,.jpg,.jpeg,.png,.docx'
                    input.onchange = (e) => {
                      const file = (e.target as HTMLInputElement).files?.[0] || null
                      handleFileUpload('managementAccounts', file)
                    }
                    input.click()
                  }}
                  className={`px-3 py-1 text-sm rounded ${files.managementAccounts ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  {files.managementAccounts ? 'Uploaded' : 'Upload'}
                </button>
              </div>
            </div>
          </div>

          {/* Bank Statements */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Bank Statements</h3>
            <div className="space-y-3">
              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                      <line x1="1" y1="10" x2="23" y2="10"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Bank Statement - Month 1</p>
                    <p className="text-sm text-gray-600">Most recent monthly banking transaction history</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const input = document.createElement('input')
                    input.type = 'file'
                    input.accept = '.pdf,.jpg,.jpeg,.png,.docx'
                    input.onchange = (e) => {
                      const file = (e.target as HTMLInputElement).files?.[0] || null
                      handleFileUpload('bankStatement1', file)
                    }
                    input.click()
                  }}
                  className={`px-3 py-1 text-sm rounded ${files.bankStatement1 ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  {files.bankStatement1 ? 'Uploaded' : 'Upload'}
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                      <line x1="1" y1="10" x2="23" y2="10"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Bank Statement - Month 2</p>
                    <p className="text-sm text-gray-600">Previous month banking transaction history</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const input = document.createElement('input')
                    input.type = 'file'
                    input.accept = '.pdf,.jpg,.jpeg,.png,.docx'
                    input.onchange = (e) => {
                      const file = (e.target as HTMLInputElement).files?.[0] || null
                      handleFileUpload('bankStatement2', file)
                    }
                    input.click()
                  }}
                  className={`px-3 py-1 text-sm rounded ${files.bankStatement2 ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  {files.bankStatement2 ? 'Uploaded' : 'Upload'}
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                      <line x1="1" y1="10" x2="23" y2="10"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Bank Statement - Month 3</p>
                    <p className="text-sm text-gray-600">Third month banking transaction history</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const input = document.createElement('input')
                    input.type = 'file'
                    input.accept = '.pdf,.jpg,.jpeg,.png,.docx'
                    input.onchange = (e) => {
                      const file = (e.target as HTMLInputElement).files?.[0] || null
                      handleFileUpload('bankStatement3', file)
                    }
                    input.click()
                  }}
                  className={`px-3 py-1 text-sm rounded ${files.bankStatement3 ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  {files.bankStatement3 ? 'Uploaded' : 'Upload'}
                </button>
              </div>
            </div>
          </div>

          {/* Additional Documents */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Additional Documents</h3>
            <div className="space-y-3">
              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Provisions List</p>
                    <p className="text-sm text-gray-600">Special conditions and requirements</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const input = document.createElement('input')
                    input.type = 'file'
                    input.accept = '.pdf,.jpg,.jpeg,.png,.docx'
                    input.onchange = (e) => {
                      const file = (e.target as HTMLInputElement).files?.[0] || null
                      handleFileUpload('provisionsList', file)
                    }
                    input.click()
                  }}
                  className={`px-3 py-1 text-sm rounded ${files.provisionsList ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  {files.provisionsList ? 'Uploaded' : 'Upload'}
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Company Profile</p>
                    <p className="text-sm text-gray-600">Detailed company information and background</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const input = document.createElement('input')
                    input.type = 'file'
                    input.accept = '.pdf,.jpg,.jpeg,.png,.docx'
                    input.onchange = (e) => {
                      const file = (e.target as HTMLInputElement).files?.[0] || null
                      handleFileUpload('companyProfile', file)
                    }
                    input.click()
                  }}
                  className={`px-3 py-1 text-sm rounded ${files.companyProfile ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  {files.companyProfile ? 'Uploaded' : 'Upload'}
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Executive Summary</p>
                    <p className="text-sm text-gray-600">Business overview and key highlights</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const input = document.createElement('input')
                    input.type = 'file'
                    input.accept = '.pdf,.jpg,.jpeg,.png,.docx'
                    input.onchange = (e) => {
                      const file = (e.target as HTMLInputElement).files?.[0] || null
                      handleFileUpload('executiveSummary', file)
                    }
                    input.click()
                  }}
                  className={`px-3 py-1 text-sm rounded ${files.executiveSummary ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  {files.executiveSummary ? 'Uploaded' : 'Upload'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full max-w-md bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-medium"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
} 