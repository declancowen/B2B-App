'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Calendar Component
function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  
  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  const goToPrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const selectDate = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    setSelectedDate(newDate)
  }

  const isSelected = (day: number) => {
    return selectedDate.getDate() === day &&
           selectedDate.getMonth() === currentMonth.getMonth() &&
           selectedDate.getFullYear() === currentMonth.getFullYear()
  }

  const isToday = (day: number) => {
    const today = new Date()
    return today.getDate() === day &&
           today.getMonth() === currentMonth.getMonth() &&
           today.getFullYear() === currentMonth.getFullYear()
  }

  // Generate calendar days
  const calendarDays = []
  
  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null)
  }
  
  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-sm">
      <div className="mb-4">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={goToPrevMonth}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <h4 className="text-lg font-semibold text-gray-900">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h4>
          
          <button
            onClick={goToNextMonth}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map((day) => (
            <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => (
            <div key={index} className="aspect-square">
              {day && (
                <button
                  onClick={() => selectDate(day)}
                  className={`w-full h-full flex items-center justify-center text-sm rounded-md transition-colors ${
                    isSelected(day)
                      ? 'bg-black text-white'
                      : isToday(day)
                      ? 'bg-gray-200 text-gray-900 font-medium'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {day}
                </button>
              )}
            </div>
          ))}
        </div>


      </div>
    </div>
  )
}

export default function RequestPage() {
  const router = useRouter()
  const [financeType, setFinanceType] = useState('Bridging Finance')
  const [loanValue, setLoanValue] = useState('')
  const [term, setTerm] = useState('')

  const handleNext = () => {
    console.log('Finance request:', { financeType, loanValue, term })
    // Navigate to document upload page
    router.push('/borrow/document-upload')
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12 mt-4">
          <p className="text-sm text-gray-600 mb-4">Step 1 of 3</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-black h-2 rounded-full" style={{ width: '33.33%' }}></div>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="mb-12">
          <p className="text-sm text-gray-500">
            <span className="text-gray-400">Application</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Loan</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column Header */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-8">What type of finance do you need?</h1>
          </div>
          
          {/* Right Column Header */}
          <div className="ml-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">When do you need the funds?</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Form Fields */}
          <div className="space-y-8">
            {/* Finance Type Selection */}
            <div className="flex gap-4 mb-8">
              <button
                type="button"
                onClick={() => setFinanceType('Bridging Finance')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  financeType === 'Bridging Finance'
                    ? 'bg-gray-200 text-gray-900'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Bridging Finance
              </button>
              
              <button
                type="button"
                onClick={() => setFinanceType('Trade Finance')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  financeType === 'Trade Finance'
                    ? 'bg-gray-200 text-gray-900'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Trade Finance
              </button>
            </div>

            {/* Loan Value Input */}
            <div>
              <label htmlFor="loan-value" className="block text-lg font-medium text-gray-900 mb-4">
                Loan Value (R)
              </label>
              <input
                id="loan-value"
                type="text"
                value={loanValue}
                onChange={(e) => setLoanValue(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"
                placeholder="Enter loan value"
              />
            </div>

            {/* Term Input */}
            <div>
              <label htmlFor="term" className="block text-lg font-medium text-gray-900 mb-4">
                Term (Months)
              </label>
              <input
                id="term"
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-base"
                placeholder="Enter term in months"
              />
            </div>

            {/* Next Button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleNext}
                className="w-full max-w-sm bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-medium text-base"
              >
                Next
              </button>
            </div>
          </div>

          {/* Right Column - Calendar */}
          <div className="ml-8">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  )
} 