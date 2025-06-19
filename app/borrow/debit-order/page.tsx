'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DebitOrderPage() {
  const router = useRouter()
  const [bankName, setBankName] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [routingNumber, setRoutingNumber] = useState('')
  const [accountHolder, setAccountHolder] = useState('')

  const handleContinue = () => {
    console.log('Debit order setup continuing...')
    router.push('/borrow/next-steps')
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

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Set up your debit order</h1>
          <p className="text-gray-600">
            To complete your loan setup, we need to set up a debit order for your monthly repayments. 
            Please provide your bank account details below.
          </p>
        </div>

        {/* Bank Account Details Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Bank Account Details</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="accountHolder" className="block text-sm font-medium text-gray-700 mb-2">
                Account Holder Name
              </label>
              <input
                id="accountHolder"
                type="text"
                placeholder="Full name as it appears on your account"
                value={accountHolder}
                onChange={(e) => setAccountHolder(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"
              />
            </div>

            <div>
              <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-2">
                Bank Name
              </label>
              <input
                id="bankName"
                type="text"
                placeholder="Your bank name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"
              />
            </div>
            
            <div>
              <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Account Number
              </label>
              <input
                id="accountNumber"
                type="text"
                placeholder="Your account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"
              />
            </div>
            
            <div>
              <label htmlFor="routingNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Branch Code
              </label>
              <input
                id="routingNumber"
                type="text"
                placeholder="Your branch code"
                value={routingNumber}
                onChange={(e) => setRoutingNumber(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"
              />
            </div>
          </div>
        </div>

        {/* Debit Order Information */}
        <div className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Debit Order Details</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-medium">Monthly Payment:</span> R427,083</p>
              <p><span className="font-medium">First Debit Date:</span> 1st of next month</p>
              <p><span className="font-medium">Payment Day:</span> 1st of each month</p>
              <p><span className="font-medium">Duration:</span> 12 months</p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mb-10">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notice</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
              <li>Ensure your account has sufficient funds on the debit date</li>
              <li>Failed debit orders may incur additional fees</li>
              <li>You can cancel or modify the debit order by contacting us</li>
              <li>You will receive a confirmation SMS before each debit</li>
            </ul>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mb-10">
          <button
            onClick={handleContinue}
            className="w-full max-w-md bg-black text-white py-4 px-8 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-semibold text-base transition-colors duration-200"
          >
            Set up debit order
          </button>
        </div>
      </div>
    </div>
  )
} 