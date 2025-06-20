'use client'

import { useRouter } from 'next/navigation'
import ProgressBar from '../../../components/ProgressBar'

export default function ConfirmationPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <ProgressBar currentStep={4} totalSteps={5} />
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Registration Status</h1>
          <p className="text-gray-600">Review your registration status and company details.</p>
        </div>

        {/* Registration Status Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Registration Status</h2>
          <div className="flex items-center bg-gray-50 p-4 rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">Registration Status</p>
              <p className="text-gray-600">Registered</p>
            </div>
          </div>
        </div>

        {/* Company Details Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Company Details</h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900 w-1/3">Company Name</td>
                  <td className="px-4 py-4 text-sm text-gray-600">Mzansi Manufacturing (Pty) Ltd</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">Company Number</td>
                  <td className="px-4 py-4 text-sm text-gray-600">2019/456789/07</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">Registered Address</td>
                  <td className="px-4 py-4 text-sm text-gray-600">15 Nelson Mandela Boulevard, Woodstock, Cape Town, 7925</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">Industry</td>
                  <td className="px-4 py-4 text-sm text-gray-600">Manufacturing</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">Business Description</td>
                  <td className="px-4 py-4 text-sm text-gray-600">Manufacturing and distribution of sustainable packaging solutions and eco-friendly products</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Ownership Structure Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Ownership Structure</h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900 w-1/3">Ownership Structure</td>
                  <td className="px-4 py-4 text-sm text-gray-600">Private Limited Company</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">Number of Owners</td>
                  <td className="px-4 py-4 text-sm text-gray-600">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Directors Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Directors</h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Director</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Role</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Date Appointed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Thabo Mthembu</td>
                  <td className="px-4 py-3 text-sm text-gray-600">CEO</td>
                  <td className="px-4 py-3 text-sm text-gray-600">2019-03-01</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Sarah Nkomo</td>
                  <td className="px-4 py-3 text-sm text-gray-600">CFO</td>
                  <td className="px-4 py-3 text-sm text-gray-600">2020-06-15</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Pieter van der Merwe</td>
                  <td className="px-4 py-3 text-sm text-gray-600">COO</td>
                  <td className="px-4 py-3 text-sm text-gray-600">2019-09-10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Banking Details Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Banking Details</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Bank Information</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-gray-500">Bank Name</span>
                    <p className="text-sm font-medium text-gray-900">FNB Business</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Branch Code</span>
                    <p className="text-sm font-medium text-gray-900">250655</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Swift Code</span>
                    <p className="text-sm font-medium text-gray-900">FIRNZAJJ</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Status</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-green-600">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Account Details</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-gray-500">Account Holder</span>
                    <p className="text-sm font-medium text-gray-900">Mzansi Manufacturing (Pty) Ltd</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Account Type</span>
                    <p className="text-sm font-medium text-gray-900">Business Current Account</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Account Number</span>
                    <p className="text-sm font-medium text-gray-900">••••••••••1234</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Reference</span>
                    <p className="text-sm font-medium text-gray-900">MZANSI-MFG-001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <button
            type="button"
            onClick={() => router.push('/borrow/terms')}
            className="w-full max-w-md bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-medium"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
} 