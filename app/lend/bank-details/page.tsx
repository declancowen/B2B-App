'use client'

import { useRouter } from 'next/navigation'

export default function BankDetailsPage() {
  const router = useRouter()

  // Bank details from the accepted offer (this would typically come from props or API)
  const bankDetails = {
    accountHolder: 'Your Investment Fund',
    bankName: 'Standard Bank',
    accountNumber: '123456789',
    branchCode: '051001'
  }

  const handleConfirm = () => {
    console.log('Bank details confirmed, proceeding...')
    router.push('/lend/approval')
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
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Confirm your bank details</h1>
          <p className="text-gray-600">
            Please confirm your bank account details where you'll receive the loan repayments. 
            These details were provided during your bid submission.
          </p>
        </div>

        {/* Bank Account Details Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Bank Account Details</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Account Holder Name</p>
                <p className="text-lg font-semibold text-gray-900">{bankDetails.accountHolder}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Bank Name</p>
                <p className="text-lg font-semibold text-gray-900">{bankDetails.bankName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Account Number</p>
                <p className="text-lg font-semibold text-gray-900">{bankDetails.accountNumber}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Branch Code</p>
                <p className="text-lg font-semibold text-gray-900">{bankDetails.branchCode}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="mb-10">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Details</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-medium">Monthly Payment to Receive:</span> R919,181</p>
              <p><span className="font-medium">First Payment Date:</span> 15th of next month</p>
              <p><span className="font-medium">Payment Day:</span> 15th of each month</p>
              <p><span className="font-medium">Duration:</span> 12 months</p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mb-10">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notice</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
              <li>Payments will be deposited directly into this account</li>
              <li>You will receive confirmation notifications for each payment</li>
              <li>Any changes to bank details must be updated immediately</li>
              <li>Ensure your account can receive electronic transfers</li>
            </ul>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mb-10">
          <button
            onClick={handleConfirm}
            className="w-full max-w-md bg-black text-white py-4 px-8 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-semibold text-base transition-colors duration-200"
          >
            Confirm and continue
          </button>
        </div>
      </div>
    </div>
  )
} 