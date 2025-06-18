'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ProgressBar from '../../components/ProgressBar'

export default function DocumentUploadPage() {
  const router = useRouter()
  const [files, setFiles] = useState({
    managementAccounts: null,
    bankStatements: null,
    provisions: null
  })

  const handleFileUpload = (section: string, file: File | null) => {
    setFiles(prev => ({
      ...prev,
      [section]: file
    }))
  }

  const handleSubmit = () => {
    console.log('Submitting documents:', files)
    // Navigate to confirmation page after document submission
    router.push('/confirmation')
  }

  const FileUploadSection = ({ 
    title, 
    section, 
    isHighlighted = false 
  }: { 
    title: string
    section: string
    isHighlighted?: boolean 
  }) => (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      <div className={`border-2 border-dashed ${isHighlighted ? 'border-blue-400 bg-blue-50' : 'border-gray-300'} rounded-lg p-8 text-center`}>
        <div className="mb-4">
          <p className="text-gray-700 font-medium mb-2">Drag and drop or browse</p>
          <p className="text-gray-500 text-sm">PDF, JPG, PNG, or DOCX. Max 5MB</p>
        </div>
        <button
          type="button"
          onClick={() => {
            const input = document.createElement('input')
            input.type = 'file'
            input.accept = '.pdf,.jpg,.jpeg,.png,.docx'
            input.onchange = (e) => {
              const file = (e.target as HTMLInputElement).files?.[0] || null
              handleFileUpload(section, file)
            }
            input.click()
          }}
          className={`px-6 py-2 rounded-md font-medium ${
            isHighlighted 
              ? 'bg-blue-500 text-white hover:bg-blue-600' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Browse
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <ProgressBar currentStep={4} totalSteps={6} />
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Upload documents</h1>
          <p className="text-gray-600">Please upload the following documents to complete your application.</p>
        </div>

        <div className="space-y-8">
          <FileUploadSection 
            title="3-month management accounts"
            section="managementAccounts"
          />

          <FileUploadSection 
            title="Latest annual signed bank statements"
            section="bankStatements"
          />

          <FileUploadSection 
            title="List of provisions & contingencies"
            section="provisions"
          />
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