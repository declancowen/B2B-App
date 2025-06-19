'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function ApprovedBidPage() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('bid')

  // Actual amortization schedule data for R10M, 12 months, 18.50% APR
  const loanAmount = 10000000; // R10M
  const actualSchedule = [
    { month: 0, monthlyPayment: 0.0, principalPaid: 0.0, interestPaid: 0.0, remainingBalance: 10000000.0, cumulativeInterest: 0.0, cumulativePrincipal: 0.0 },
    { month: 1, monthlyPayment: 919181.18, principalPaid: 765014.51, interestPaid: 154166.67, remainingBalance: 9234985.49, cumulativeInterest: 154166.67, cumulativePrincipal: 765014.51 },
    { month: 2, monthlyPayment: 919181.18, principalPaid: 776808.48, interestPaid: 142372.69, remainingBalance: 8458177.01, cumulativeInterest: 296539.36, cumulativePrincipal: 1541822.99 },
    { month: 3, monthlyPayment: 919181.18, principalPaid: 788784.28, interestPaid: 130396.9, remainingBalance: 7669392.73, cumulativeInterest: 426936.26, cumulativePrincipal: 2330607.27 },
    { month: 4, monthlyPayment: 919181.18, principalPaid: 800944.71, interestPaid: 118236.47, remainingBalance: 6868448.02, cumulativeInterest: 545172.73, cumulativePrincipal: 3131551.98 },
    { month: 5, monthlyPayment: 919181.18, principalPaid: 813292.6, interestPaid: 105888.57, remainingBalance: 6055155.42, cumulativeInterest: 651061.3, cumulativePrincipal: 3944844.58 },
    { month: 6, monthlyPayment: 919181.18, principalPaid: 825830.86, interestPaid: 93350.31, remainingBalance: 5229324.55, cumulativeInterest: 744411.61, cumulativePrincipal: 4770675.45 },
    { month: 7, monthlyPayment: 919181.18, principalPaid: 838562.42, interestPaid: 80618.75, remainingBalance: 4390762.13, cumulativeInterest: 825030.37, cumulativePrincipal: 5609237.87 },
    { month: 8, monthlyPayment: 919181.18, principalPaid: 851490.26, interestPaid: 67690.92, remainingBalance: 3539271.87, cumulativeInterest: 892721.28, cumulativePrincipal: 6460728.13 },
    { month: 9, monthlyPayment: 919181.18, principalPaid: 864617.4, interestPaid: 54563.77, remainingBalance: 2674654.47, cumulativeInterest: 947285.06, cumulativePrincipal: 7325345.53 },
    { month: 10, monthlyPayment: 919181.18, principalPaid: 877946.92, interestPaid: 41234.26, remainingBalance: 1796707.55, cumulativeInterest: 988519.31, cumulativePrincipal: 8203292.45 },
    { month: 11, monthlyPayment: 919181.18, principalPaid: 891481.93, interestPaid: 27699.24, remainingBalance: 905225.61, cumulativeInterest: 1016218.55, cumulativePrincipal: 9094774.39 },
    { month: 12, monthlyPayment: 919181.18, principalPaid: 905225.61, interestPaid: 13955.56, remainingBalance: 0.0, cumulativeInterest: 1030174.12, cumulativePrincipal: 10000000.0 }
  ];

  // Prepare data for Recharts (convert to millions)
  const chartData = actualSchedule.map(item => ({
    month: item.month,
    balance: item.remainingBalance / 1000000, // Remaining Loan Balance
    interest: item.cumulativeInterest / 1000000, // Cumulative Interest Paid
    principal: item.cumulativePrincipal / 1000000 // Cumulative Principal Paid
  }));

  // Calculate schedule for summary statistics (using actual data)
  const schedule = actualSchedule.slice(1); // Remove month 0 for calculations

  const handleDownload = () => {
    console.log('Downloading contract...')
    // Add download logic here
  }

  const handleSubmitBid = () => {
    console.log('Submitting bid...')
    // Add submit bid logic here
    router.push('/lend/submission')
  }

  // Function to generate payment dates starting from due date
  const getPaymentDates = () => {
    const startDate = new Date('2024-01-15') // Due date
    const dates = []
    
    for (let i = 0; i < 12; i++) {
      const paymentDate = new Date(startDate)
      paymentDate.setMonth(startDate.getMonth() + i)
      
      const day = paymentDate.getDate().toString().padStart(2, '0')
      const month = (paymentDate.getMonth() + 1).toString().padStart(2, '0')
      const year = paymentDate.getFullYear().toString().slice(-2)
      
      dates.push(`${day}/${month}/${year}`)
    }
    
    return dates
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-12 mt-4">
          <p className="text-sm text-gray-500">
            <span className="text-gray-400">Bids</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Bid Details</span>
          </p>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">Bridge Finance Details</h1>
              <p className="text-gray-600">View your submitted bid.</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-gray-200 text-black text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors">
                Cancel Bid
              </button>
              <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                Sign Contract
              </button>
            </div>
          </div>
        </div>

        {/* Status Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Borrower Signed</h3>
                <p className="text-sm text-blue-600">Awaiting lender signature</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">R10,000,000</p>
              <p className="text-sm text-gray-500">Loan Amount</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('bid')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'bid'
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Bid
              </button>
              <button
                onClick={() => setActiveTab('risk')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'risk'
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Risk
              </button>
              <button
                onClick={() => setActiveTab('documents')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'documents'
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Documents
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'bid' && (
          <>
            {/* Bid Overview Section */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-gray-900 mb-6">Bid Overview</h2>
          
          {/* Loan Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900">Interest Rate</h4>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900">18.50%</span>
              </div>
              <p className="text-sm text-gray-500">per annum</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900">Loan Term</h4>
              </div>
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-sm text-gray-500">months</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900">Borrower</h4>
              </div>
              <p className="text-xl font-bold text-gray-900">TechCorp Solutions</p>
              <p className="text-sm text-gray-500">Requesting Party</p>
            </div>
          </div>

          {/* Additional Details */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Bid ID</p>
                <p className="text-lg font-semibold text-gray-900">LN-2023-00123</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Date Submitted</p>
                <p className="text-lg font-semibold text-gray-900">October 15, 2023</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Due Date</p>
                <p className="text-lg font-semibold text-gray-900">15/01/24</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Funds Required</p>
                <p className="text-lg font-semibold text-gray-900">7 days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Summary Section */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-gray-900 mb-6">Loan Summary</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Loan Details */}
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-gray-900">Loan Details</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Principal Amount</p>
                    <p className="text-lg font-bold text-gray-900">R10,000,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Interest Rate</p>
                    <p className="text-lg font-bold text-gray-900">18.50% p.a.</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Loan Term</p>
                    <p className="text-lg font-bold text-gray-900">12 months</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Loan Type</p>
                    <p className="text-base font-medium text-gray-900">Bridging Finance</p>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-gray-900">Payment Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Monthly Payment</p>
                    <p className="text-lg font-bold text-gray-900">R919,181</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Interest</p>
                    <p className="text-lg font-bold text-gray-900">R1,030,172</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Repayment</p>
                    <p className="text-lg font-bold text-gray-900">R11,030,172</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Payment Frequency</p>
                    <p className="text-base font-medium text-gray-900">Monthly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fee Summary Section */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-gray-900 mb-6">Fee Summary</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {/* Main Fee Display */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Fee</h3>
                  <p className="text-sm text-gray-600">2% of total interest charged</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">
                    R{(actualSchedule[actualSchedule.length - 1].cumulativeInterest * 0.02).toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-sm text-gray-500">Total Fee</p>
                </div>
              </div>
            </div>

            {/* Fee Breakdown */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">2.00%</div>
                  <p className="text-sm text-gray-500">Fee Rate</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-gray-900 mb-1">R{actualSchedule[actualSchedule.length - 1].cumulativeInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                  <p className="text-sm text-gray-500">Total Interest</p>
                </div>
                <div className="text-center p-4 bg-black text-white rounded-lg">
                  <div className="text-lg font-bold mb-1">R{(actualSchedule[actualSchedule.length - 1].cumulativeInterest * 0.02).toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                  <p className="text-sm text-gray-300">Service Fee</p>
                </div>
              </div>

              {/* Calculation Display */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-center text-gray-700">
                  <span className="font-medium">R{actualSchedule[actualSchedule.length - 1].cumulativeInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  <span className="mx-3 text-gray-400">×</span>
                  <span className="font-medium">2%</span>
                  <span className="mx-3 text-gray-400">=</span>
                  <span className="font-bold text-black">R{(actualSchedule[actualSchedule.length - 1].cumulativeInterest * 0.02).toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Amortization Section */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-gray-900 mb-6">Loan Amortization</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="p-6 pb-0">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Amortization for R10,000,000 Loan</h3>
                  <p className="text-sm text-gray-600">With 12-Month Term and 18.50% Interest Rate</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 bg-gray-200 text-black text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Full Breakdown
                </button>
              </div>
            </div>
              
            {/* Recharts Chart Container - Full Width */}
            <div className="h-96 w-full px-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{
                    top: 20,
                    right: 20,
                    left: -20,
                    bottom: 40,
                  }}
                >
                    <XAxis 
                      dataKey="month" 
                      domain={[0, 12]}
                      type="number"
                      ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                      axisLine={true}
                      tickLine={false}
                      tick={{ fontSize: 14, fill: '#6b7280' }}
                      dy={10}
                      stroke="#e5e7eb"
                    />
                    <YAxis 
                      domain={[0, 10]}
                      ticks={[0, 2, 4, 6, 8, 10]}
                      axisLine={true}
                      tickLine={false}
                      tick={{ fontSize: 14, fill: '#6b7280' }}
                      tickFormatter={(value) => `${value.toFixed(0)}M`}
                      stroke="#e5e7eb"
                    />
                    <Tooltip 
                      content={(props) => {
                        const { active, payload, label } = props;
                        if (active && payload && payload.length) {
                          return (
                            <div style={{
                              backgroundColor: 'white',
                              border: '1px solid #e5e7eb',
                              borderRadius: '8px',
                              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                              padding: '12px',
                              fontSize: '14px'
                            }}>
                              <p style={{ 
                                margin: '0 0 8px 0', 
                                fontWeight: '600',
                                color: '#000000'
                              }}>
                                Month {label}
                              </p>
                              {payload.map((entry, index) => {
                                let displayName = 'Unknown';
                                if (entry.dataKey === 'balance') displayName = 'Balance';
                                else if (entry.dataKey === 'interest') displayName = 'Interest';
                                else if (entry.dataKey === 'principal') displayName = 'Principal';
                                
                                return (
                                  <div key={index} style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '8px',
                                    margin: '4px 0'
                                  }}>
                                    <div style={{
                                      width: '12px',
                                      height: '12px',
                                      backgroundColor: entry.color,
                                      borderRadius: '3px'
                                    }} />
                                    <span style={{ 
                                      color: '#000000',
                                      fontWeight: '400'
                                    }}>
                                      {displayName}: R{(Number(entry.value) * 1000000).toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        }
                        return null;
                      }}
                      cursor={{ stroke: '#e5e7eb', strokeWidth: 1 }}
                    />
                    <Legend 
                      verticalAlign="bottom" 
                      height={36}
                      content={(props) => {
                        const { payload } = props;
                        return (
                          <div style={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            paddingTop: '20px',
                            gap: '24px'
                          }}>
                            {payload?.map((entry, index) => (
                              <div key={index} style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '8px' 
                              }}>
                                <div style={{
                                  width: '12px',
                                  height: '12px',
                                  backgroundColor: entry.color,
                                  borderRadius: '3px'
                                }} />
                                <span style={{ 
                                  fontSize: '14px', 
                                  color: '#000000',
                                  fontWeight: '400'
                                }}>
                                  {entry.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        );
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="balance" 
                      stroke="#000000" 
                      strokeWidth={3}
                      name="Balance"
                      dot={{ fill: '#000000', strokeWidth: 2, r: 3, stroke: '#000000' }}
                      activeDot={{ r: 5, fill: '#000000', stroke: '#ffffff', strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="interest" 
                      stroke="#6b7280" 
                      strokeWidth={3}
                      name="Interest"
                      dot={{ fill: '#6b7280', strokeWidth: 2, r: 3, stroke: '#6b7280' }}
                      activeDot={{ r: 5, fill: '#6b7280', stroke: '#ffffff', strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="principal" 
                      stroke="#d1d5db" 
                      strokeWidth={3}
                      name="Principal"
                      dot={{ fill: '#d1d5db', strokeWidth: 2, r: 3, stroke: '#d1d5db' }}
                      activeDot={{ r: 5, fill: '#d1d5db', stroke: '#ffffff', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
            
            {/* Summary Statistics */}
            <div className="p-6 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Total Interest</p>
                  <p className="text-lg font-bold text-gray-900">
                    R{actualSchedule[actualSchedule.length - 1].cumulativeInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Total Principal</p>
                  <p className="text-lg font-bold text-gray-900">R{loanAmount.toLocaleString('en-US')}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Total Payments</p>
                  <p className="text-lg font-bold text-gray-900">
                    R{(actualSchedule[actualSchedule.length - 1].cumulativeInterest + actualSchedule[actualSchedule.length - 1].cumulativePrincipal).toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Billing Schedule Section */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-gray-900 mb-6">Billing Schedule</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-500">
                <div>Payment Date</div>
                <div>Principal</div>
                <div>Interest</div>
                <div>Total Payment</div>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {actualSchedule.slice(1, 7).map((payment, index) => {
                const paymentDates = getPaymentDates();
                
                // Use the actual monthly data from the schedule
                const monthlyPrincipal = payment.principalPaid;
                const monthlyInterest = payment.interestPaid;
                const monthlyTotal = payment.monthlyPayment;
                
                return (
                  <div key={index} className="px-6 py-4 grid grid-cols-4 gap-4 text-sm">
                    <div className="font-medium text-gray-900">{paymentDates[index]}</div>
                    <div className="text-gray-900">R{monthlyPrincipal.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                    <div className="text-gray-900">R{monthlyInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                    <div className="font-semibold text-gray-900">R{monthlyTotal.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                  </div>
                );
              })}
              <div className="px-6 py-4 grid grid-cols-4 gap-4 text-sm bg-gray-50">
                <div className="font-medium text-gray-900">...</div>
                <div className="text-gray-600 italic">{12 - 6} more payments</div>
                <div className="text-gray-600 italic">...</div>
                <div className="font-semibold text-gray-700 cursor-pointer hover:text-gray-900">View Full Schedule</div>
              </div>
            </div>
                     </div>
         </div>

        {/* Lender Bank Details Section */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-gray-900 mb-6">Lender Bank Details</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bank Information */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-4">Bank Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Bank Name</p>
                    <p className="text-base font-medium text-gray-900">Standard Bank</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Branch Code</p>
                    <p className="text-base font-medium text-gray-900">051001</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Holder</p>
                    <p className="text-base font-medium text-gray-900">Standard Bank Corporate Finance</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Type</p>
                    <p className="text-base font-medium text-gray-900">Corporate Current Account</p>
                  </div>
                </div>
              </div>

              {/* Account Details */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-4">Account Details</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Account Number</p>
                    <p className="text-base font-medium text-gray-900">••••••••••5678</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Swift Code</p>
                    <p className="text-base font-medium text-gray-900">SBZAZAJJ</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Reference</p>
                    <p className="text-base font-medium text-gray-900">LN-2023-00123-TECH</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <p className="text-base font-medium text-green-700">Verified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Trail Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Audit Trail</h2>
          
          <div className="relative">
            {/* Timeline line - connects through all icons */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-300"></div>
            
            <div className="space-y-8">
              {/* Bid Application Submitted */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-6 relative z-10">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold text-gray-900">Bid Application Submitted</p>
                  <p className="text-gray-500 mt-1">October 1, 2023</p>
                </div>
              </div>

              {/* Bid Approved */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-6 relative z-10">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold text-gray-900">Bid Approved</p>
                  <p className="text-gray-500 mt-1">In Progress</p>
                </div>
              </div>

              {/* Borrower Contract Signed */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-6 relative z-10">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold text-gray-900">Borrower Contract Signed</p>
                  <p className="text-gray-500 mt-1">October 5, 2023</p>
                </div>
              </div>

              {/* Lender Contract Signed */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-6 relative z-10">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold text-gray-400">Lender Contract Signed</p>
                  <p className="text-gray-400 mt-1">Pending</p>
                </div>
              </div>

              {/* Debit Order Authorization */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-6 relative z-10">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold text-gray-400">Debit Order Authorization</p>
                  <p className="text-gray-400 mt-1">Pending</p>
                </div>
              </div>

              {/* Loan Dispersed */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-6 relative z-10">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold text-gray-400">Loan Dispersed</p>
                  <p className="text-gray-400 mt-1">Pending</p>
                </div>
              </div>

              {/* Current - Loan in Progress */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-6 relative z-10">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold text-gray-400">Loan in Progress</p>
                  <p className="text-gray-400 mt-1">Pending</p>
                </div>
              </div>

              {/* Future - Loan Complete */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-6 relative z-10">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold text-gray-400">Loan Complete</p>
                  <p className="text-gray-400 mt-1">Pending</p>
                </div>
              </div>
            </div>
          </div>
        </div>


          </>
        )}

        {/* Risk Tab Content */}
        {activeTab === 'risk' && (
          <div className="mb-10">
            <h2 className="text-base font-semibold text-gray-900 mb-6">Risk Assessment</h2>
            
            {/* Risk Score Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-gray-900">Overall Risk Score</h3>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-green-700">Low Risk</span>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="text-3xl font-bold text-green-600 mr-2">B+</div>
                <div className="text-sm text-gray-600">
                  <p>Credit Rating</p>
                  <p>Last Updated: Oct 2023</p>
                </div>
              </div>
            </div>

            {/* Risk Factors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Credit History</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Payment History</span>
                    <span className="text-sm font-medium text-green-600">Excellent</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Credit Utilization</span>
                    <span className="text-sm font-medium text-green-600">45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Default History</span>
                    <span className="text-sm font-medium text-green-600">None</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Financial Health</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Debt-to-Income</span>
                    <span className="text-sm font-medium text-yellow-600">65%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Liquidity Ratio</span>
                    <span className="text-sm font-medium text-green-600">Good</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Revenue Trend</span>
                    <span className="text-sm font-medium text-green-600">Growing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Mitigation */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-base font-semibold text-gray-900 mb-4">Risk Mitigation</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Collateral Secured</p>
                    <p className="text-sm text-gray-600">Property valued at R15,000,000</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Insurance Coverage</p>
                    <p className="text-sm text-gray-600">Comprehensive business insurance in place</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Guarantor</p>
                    <p className="text-sm text-gray-600">Personal guarantee from company directors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Documents Tab Content */}
        {activeTab === 'documents' && (
          <div className="mb-10">
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
                  <button className="px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">
                    View
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
                  <button className="px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">
                    View
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
                  <button className="px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">
                    View
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
                      <p className="text-sm text-gray-600">Internal monthly financial reports</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">
                    View
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
                      <p className="text-sm font-medium text-gray-900">Bank Statement Jan</p>
                      <p className="text-sm text-gray-600">Monthly banking transaction history</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">
                    View
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
                      <p className="text-sm font-medium text-gray-900">Bank Statement Dec</p>
                      <p className="text-sm text-gray-600">Monthly banking transaction history</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">
                    View
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
                      <p className="text-sm font-medium text-gray-900">Bank Statement Nov</p>
                      <p className="text-sm text-gray-600">Monthly banking transaction history</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* Contract Documents */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-900 mb-4">Contract Documents</h3>
              <div className="space-y-3">
                <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Loan Agreement</p>
                      <p className="text-sm text-gray-600">Primary loan contract and terms</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">
                    View
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Security Agreement</p>
                      <p className="text-sm text-gray-600">Collateral and security documentation</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">
                    View
                  </button>
                </div>

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
                  <button className="px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Modal for Full Breakdown */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-7xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Full Amortization Breakdown</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Payment Month</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Monthly Payment Amount (ZAR)</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Principal Paid (ZAR)</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Interest Paid (ZAR)</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Remaining Loan Balance (ZAR)</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Cumulative Interest Paid (ZAR)</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Cumulative Principal Paid (ZAR)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {actualSchedule.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">{row.month}</td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">
                          {row.monthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">
                          {row.principalPaid.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">
                          {row.interestPaid.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">
                          {row.remainingBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">
                          {row.cumulativeInterest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">
                          {row.cumulativePrincipal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 