'use client'

import { useRouter } from 'next/navigation'
import ProgressBar from '../../components/ProgressBar'

export default function ConfirmationPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <ProgressBar currentStep={5} totalSteps={6} />
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
                  <td className="px-4 py-4 text-sm text-gray-600">Tech Solutions Inc.</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">Company Number</td>
                  <td className="px-4 py-4 text-sm text-gray-600">987654321</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">Registered Address</td>
                  <td className="px-4 py-4 text-sm text-gray-600">456 Innovation Avenue, Tech City, CA 90210</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">Industry</td>
                  <td className="px-4 py-4 text-sm text-gray-600">Technology</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">Business Description</td>
                  <td className="px-4 py-4 text-sm text-gray-600">Provides innovative software solutions for businesses</td>
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
                  <td className="px-4 py-3 text-sm text-gray-900">Liam Harper</td>
                  <td className="px-4 py-3 text-sm text-gray-600">CEO</td>
                  <td className="px-4 py-3 text-sm text-gray-600">2021-01-15</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Ava Sullivan</td>
                  <td className="px-4 py-3 text-sm text-gray-600">CFO</td>
                  <td className="px-4 py-3 text-sm text-gray-600">2021-01-15</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Owen Parker</td>
                  <td className="px-4 py-3 text-sm text-gray-600">CTO</td>
                  <td className="px-4 py-3 text-sm text-gray-600">2021-01-15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12">
          <button
            type="button"
            onClick={() => router.push('/terms')}
            className="w-full max-w-md bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-medium"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
} 