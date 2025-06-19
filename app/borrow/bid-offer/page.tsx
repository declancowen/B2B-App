'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function BidOfferPage() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Actual amortization schedule data for R5M loan, 12 months, 14.00% APR
  const loanAmount = 5000000; // R5M
  const actualSchedule = [
    { month: 0, monthlyPayment: 0, principalPaid: 0, interestPaid: 0, remainingBalance: 5000000, cumulativeInterest: 0, cumulativePrincipal: 0 },
    { month: 1, monthlyPayment: 449167, principalPaid: 390833, interestPaid: 58334, remainingBalance: 4609167, cumulativeInterest: 58334, cumulativePrincipal: 390833 },
    { month: 2, monthlyPayment: 449167, principalPaid: 395397, interestPaid: 53770, remainingBalance: 4213770, cumulativeInterest: 112104, cumulativePrincipal: 786230 },
    { month: 3, monthlyPayment: 449167, principalPaid: 400027, interestPaid: 49140, remainingBalance: 3813743, cumulativeInterest: 161244, cumulativePrincipal: 1186257 },
    { month: 4, monthlyPayment: 449167, principalPaid: 404721, interestPaid: 44446, remainingBalance: 3409022, cumulativeInterest: 205690, cumulativePrincipal: 1590978 },
    { month: 5, monthlyPayment: 449167, principalPaid: 409482, interestPaid: 39685, remainingBalance: 2999540, cumulativeInterest: 245375, cumulativePrincipal: 2000460 },
    { month: 6, monthlyPayment: 449167, principalPaid: 414310, interestPaid: 34857, remainingBalance: 2585230, cumulativeInterest: 280232, cumulativePrincipal: 2414770 },
    { month: 7, monthlyPayment: 449167, principalPaid: 419206, interestPaid: 29961, remainingBalance: 2166024, cumulativeInterest: 310193, cumulativePrincipal: 2833976 },
    { month: 8, monthlyPayment: 449167, principalPaid: 424173, interestPaid: 24994, remainingBalance: 1741851, cumulativeInterest: 335187, cumulativePrincipal: 3258149 },
    { month: 9, monthlyPayment: 449167, principalPaid: 429211, interestPaid: 19956, remainingBalance: 1312640, cumulativeInterest: 355143, cumulativePrincipal: 3687360 },
    { month: 10, monthlyPayment: 449167, principalPaid: 434321, interestPaid: 14846, remainingBalance: 878319, cumulativeInterest: 369989, cumulativePrincipal: 4121681 },
    { month: 11, monthlyPayment: 449167, principalPaid: 439505, interestPaid: 9662, remainingBalance: 438814, cumulativeInterest: 379651, cumulativePrincipal: 4561186 },
    { month: 12, monthlyPayment: 449167, principalPaid: 438814, interestPaid: 5120, remainingBalance: 0, cumulativeInterest: 384771, cumulativePrincipal: 5000000 }
  ];

  // Prepare data for Recharts (convert to millions)
  const chartData = actualSchedule.map(item => ({
    month: item.month,
    balance: item.remainingBalance / 1000000, // Remaining Loan Balance
    interest: item.cumulativeInterest / 1000000, // Cumulative Interest Paid
    principal: item.cumulativePrincipal / 1000000 // Cumulative Principal Paid
  }));

  const handleAcceptOffer = () => {
    console.log('Offer accepted')
    router.push('/borrow/contract')
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-12 mt-4">
          <p className="text-sm text-gray-500">
            <span className="text-gray-400">Bids</span>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Bid Offers</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Offer Details</span>
          </p>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Offer Details</h1>
          <p className="text-gray-500">Review the selected offer details below. You can accept this offer to proceed with your bid application.</p>
        </div>

        {/* Trade Finance Loan Card */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-xl p-6 shadow-md relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-teal-100 rounded-full -mr-10 -mt-10 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-100 rounded-full -ml-8 -mb-8 opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-md mr-4 border border-teal-200">
                      Selected Offer
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Trade Finance</h2>
                </div>
                
                <div className="flex items-center ml-6">
                  <div className="w-14 h-14 bg-teal-500 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white text-base font-bold">FN</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-teal-200 pt-3">
                <p className="text-gray-600 font-medium">From First National Bank</p>
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
                  <h3 className="text-base font-semibold text-gray-900">Amortization for R5,000,000 Loan</h3>
                  <p className="text-sm text-gray-600">With 12-Month Term and 14.00% Interest Rate</p>
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
                      domain={[0, 5]}
                      ticks={[0, 1, 2, 3, 4, 5]}
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

        {/* Loan Details Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Loan Details</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-gray-500 mb-1">Loan Amount</p>
                <p className="text-lg font-semibold text-gray-900">R5,000,000</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Interest Rate</p>
                <p className="text-lg font-semibold text-gray-900">14.00% APR</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Loan Term</p>
                <p className="text-lg font-semibold text-gray-900">12 months</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Loan Provider</p>
                <p className="text-lg font-semibold text-gray-900">First National Bank</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Monthly Payment</p>
                <p className="text-lg font-semibold text-gray-900">R427,083</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Interest Paid</p>
                <p className="text-lg font-semibold text-gray-900">R125,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accept Offer Button */}
        <div className="mb-10">
          <button
            onClick={handleAcceptOffer}
            className="w-full max-w-md bg-black text-white py-4 px-8 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-semibold text-lg transition-colors duration-200"
          >
            Accept Offer
          </button>
        </div>
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