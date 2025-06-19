'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function CompletedLoanPage() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Actual amortization schedule data for R20M loan (completed)
  const loanAmount = 20000000; // R20M
  const actualSchedule = [
    { month: 0, monthlyPayment: 0, principalPaid: 0, interestPaid: 0, remainingBalance: 20000000, cumulativeInterest: 0, cumulativePrincipal: 0 },
    { month: 1, monthlyPayment: 3483333.33, principalPaid: 3391666.67, interestPaid: 91666.67, remainingBalance: 16608333.33, cumulativeInterest: 91666.67, cumulativePrincipal: 3391666.67 },
    { month: 2, monthlyPayment: 3483333.33, principalPaid: 3407187.50, interestPaid: 76145.83, remainingBalance: 13201145.83, cumulativeInterest: 167812.50, cumulativePrincipal: 6798854.17 },
    { month: 3, monthlyPayment: 3483333.33, principalPaid: 3422895.31, interestPaid: 60438.02, remainingBalance: 9778250.52, cumulativeInterest: 228250.52, cumulativePrincipal: 10221749.48 },
    { month: 4, monthlyPayment: 3483333.33, principalPaid: 3438791.15, interestPaid: 44542.19, remainingBalance: 6339459.37, cumulativeInterest: 272792.71, cumulativePrincipal: 13660540.63 },
    { month: 5, monthlyPayment: 3483333.33, principalPaid: 3454876.04, interestPaid: 28457.29, remainingBalance: 2884583.33, cumulativeInterest: 301250.00, cumulativePrincipal: 17115416.67 },
    { month: 6, monthlyPayment: 3483333.33, principalPaid: 2884583.33, interestPaid: 13208.33, remainingBalance: 0, cumulativeInterest: 314458.33, cumulativePrincipal: 20000000 }
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

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-12 mt-4">
          <p className="text-sm text-gray-500">
            <span className="text-gray-400">Loans</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Completed Loan Details</span>
          </p>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Trade Finance Details</h1>
          <p className="text-gray-600">View the details of your completed loan.</p>
        </div>

        {/* Loan Overview Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Loan Overview</h2>
          
          {/* Status Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Completed Loan</h3>
                  <p className="text-sm text-gray-600">This loan has been fully paid off</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">R20,000,000</p>
                <p className="text-sm text-gray-500">Loan Amount</p>
              </div>
            </div>
          </div>

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
              <p className="text-2xl font-bold text-gray-900">5.50%</p>
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
              <p className="text-2xl font-bold text-gray-900">6</p>
              <p className="text-sm text-gray-500">months</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900">Lender</h4>
              </div>
              <p className="text-xl font-bold text-gray-900">Investec</p>
              <p className="text-sm text-gray-500">Loan Provider</p>
            </div>
          </div>

          {/* Additional Details */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Loan ID</p>
                <p className="text-lg font-semibold text-gray-900">LN-2022-00098</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Date Completed</p>
                <p className="text-lg font-semibold text-gray-900">June 15, 2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Amortization Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Loan Amortization</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="p-6 pb-0">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Amortization for R20,000,000 Loan</h3>
                  <p className="text-sm text-gray-600">With 6-Month Term and 5.50% Interest Rate</p>
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
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="month" 
                      domain={[0, 6]}
                      type="number"
                      ticks={[0, 1, 2, 3, 4, 5, 6]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 14, fill: '#6b7280' }}
                      dy={10}
                    />
                    <YAxis 
                      domain={[0, 20]}
                      ticks={[0, 5, 10, 15, 20]}
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
                      stroke="#2563eb" 
                      name="Balance"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="interest" 
                      stroke="#dc2626" 
                      name="Interest"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="principal" 
                      stroke="#16a34a" 
                      name="Principal"
                      strokeWidth={2}
                      dot={false}
                    />
                </LineChart>
              </ResponsiveContainer>
            </div>

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

        {/* Modal for Full Breakdown */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Full Amortization Schedule</h3>
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
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Payment Month</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-900">Monthly Payment Amount</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-900">Principal Paid</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-900">Interest Paid</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-900">Remaining Loan Balance</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-900">Cumulative Interest Paid</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-900">Cumulative Principal Paid</th>
                      </tr>
                    </thead>
                    <tbody>
                      {actualSchedule.slice(1).map((payment, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-900">{payment.month}</td>
                          <td className="text-right py-3 px-4 text-gray-900">R{payment.monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                          <td className="text-right py-3 px-4 text-gray-900">R{payment.principalPaid.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                          <td className="text-right py-3 px-4 text-gray-900">R{payment.interestPaid.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                          <td className="text-right py-3 px-4 text-gray-900">R{payment.remainingBalance.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                          <td className="text-right py-3 px-4 text-gray-900">R{payment.cumulativeInterest.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                          <td className="text-right py-3 px-4 text-gray-900">R{payment.cumulativePrincipal.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
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
    </div>
  )
} 