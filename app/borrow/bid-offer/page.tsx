'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default function BidOfferPage() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeGraphTab, setActiveGraphTab] = useState('payments')

  // Actual amortization schedule data for R5M loan, 12 months, 14.00% APR (Interest-only structure)
  const loanAmount = 5000000; // R5M
  const actualSchedule = [
    { month: 0, monthlyPayment: 0.0, principalPaid: 0.0, interestPaid: 0.0, remainingBalance: 5000000.0, cumulativeInterest: 0.0, cumulativePrincipal: 0.0 },
    { month: 1, monthlyPayment: 58333.33, principalPaid: 0.0, interestPaid: 58333.33, remainingBalance: 5000000.0, cumulativeInterest: 58333.33, cumulativePrincipal: 0.0 },
    { month: 2, monthlyPayment: 58333.33, principalPaid: 0.0, interestPaid: 58333.33, remainingBalance: 5000000.0, cumulativeInterest: 116666.67, cumulativePrincipal: 0.0 },
    { month: 3, monthlyPayment: 58333.33, principalPaid: 0.0, interestPaid: 58333.33, remainingBalance: 5000000.0, cumulativeInterest: 175000.0, cumulativePrincipal: 0.0 },
    { month: 4, monthlyPayment: 58333.33, principalPaid: 0.0, interestPaid: 58333.33, remainingBalance: 5000000.0, cumulativeInterest: 233333.33, cumulativePrincipal: 0.0 },
    { month: 5, monthlyPayment: 58333.33, principalPaid: 0.0, interestPaid: 58333.33, remainingBalance: 5000000.0, cumulativeInterest: 291666.67, cumulativePrincipal: 0.0 },
    { month: 6, monthlyPayment: 58333.33, principalPaid: 0.0, interestPaid: 58333.33, remainingBalance: 5000000.0, cumulativeInterest: 350000.0, cumulativePrincipal: 0.0 },
    { month: 7, monthlyPayment: 58333.33, principalPaid: 0.0, interestPaid: 58333.33, remainingBalance: 5000000.0, cumulativeInterest: 408333.33, cumulativePrincipal: 0.0 },
    { month: 8, monthlyPayment: 58333.33, principalPaid: 0.0, interestPaid: 58333.33, remainingBalance: 5000000.0, cumulativeInterest: 466666.67, cumulativePrincipal: 0.0 },
    { month: 9, monthlyPayment: 58333.33, principalPaid: 0.0, interestPaid: 58333.33, remainingBalance: 5000000.0, cumulativeInterest: 525000.0, cumulativePrincipal: 0.0 },
    { month: 10, monthlyPayment: 58333.33, principalPaid: 0.0, interestPaid: 58333.33, remainingBalance: 5000000.0, cumulativeInterest: 583333.33, cumulativePrincipal: 0.0 },
    { month: 11, monthlyPayment: 58333.33, principalPaid: 0.0, interestPaid: 58333.33, remainingBalance: 5000000.0, cumulativeInterest: 641666.67, cumulativePrincipal: 0.0 },
    { month: 12, monthlyPayment: 5058333.33, principalPaid: 5000000.0, interestPaid: 58333.33, remainingBalance: 0.0, cumulativeInterest: 700000.0, cumulativePrincipal: 5000000.0 }
  ];

  // Prepare data for Recharts (convert to millions)
  const chartData = actualSchedule.map(item => ({
    month: item.month,
    balance: item.remainingBalance / 1000000, // Remaining Loan Balance
    interest: item.cumulativeInterest / 1000000, // Cumulative Interest Paid
    principal: item.cumulativePrincipal / 1000000 // Cumulative Principal Paid
  }));

  // Pie chart data for total balance breakdown
  const pieData = [
    { name: 'Capital Received', value: 4900000, color: '#d1d5db' },
    { name: 'Service Fee', value: 100000, color: '#000000' },
    { name: 'Total Interest', value: 700000, color: '#6b7280' }
  ];

  const handleAcceptOffer = () => {
    console.log('Offer accepted')
    router.push('/borrow/bid-confirmation')
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

        {/* Offer Details Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Offer Details</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Loan Amount</p>
                <p className="text-lg font-semibold text-gray-900">R5,000,000</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Interest Rate</p>
                <p className="text-lg font-semibold text-gray-900">14.00% p.a.</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Due Date</p>
                <p className="text-lg font-semibold text-gray-900">15 March 2024</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Loan Term</p>
                <p className="text-lg font-semibold text-gray-900">12 months</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lending Structure Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Lending Structure</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            {/* Lending Structure Type */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-black">Security Structure</p>
                <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                  Upload Documents
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-gray-100 text-black px-3 py-1 rounded-md text-sm font-medium border border-gray-200">
                  Personal Suretyship
                </span>
              </div>
            </div>

            {/* Lender Feedback */}
            <div>
              <p className="text-sm font-medium text-black mb-4">Lender Feedback & Requirements</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">First National Bank Requirements</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>• Please provide a signed personal guarantee agreement from the company director</p>
                      <p>• Submit updated financial statements for the guarantor (not older than 3 months)</p>
                      <p>• Include proof of the guarantor's assets and liabilities statement</p>
                      <p>• Provide confirmation of the guarantor's employment and income verification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fee Summary Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Fee Summary</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {/* Main Fee Display */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Fee</h3>
                  <p className="text-sm text-gray-600">2% of loan principal</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">
                    R{(loanAmount * 0.02).toLocaleString('en-US', { maximumFractionDigits: 0 })}
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
                  <div className="text-lg font-bold text-gray-900 mb-1">R{loanAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                  <p className="text-sm text-gray-500">Loan Principal</p>
                </div>
                <div className="text-center p-4 bg-black text-white rounded-lg">
                  <div className="text-lg font-bold mb-1">R{(loanAmount * 0.02).toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                  <p className="text-sm text-gray-300">Service Fee</p>
                </div>
              </div>

              {/* Calculation Display */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-center text-gray-700">
                  <span className="font-medium">R{loanAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  <span className="mx-3 text-gray-400">×</span>
                  <span className="font-medium">2%</span>
                  <span className="mx-3 text-gray-400">=</span>
                  <span className="font-bold text-black">R{(loanAmount * 0.02).toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-amber-900 mb-1">Important Notice</h4>
                    <p className="text-sm text-amber-800">
                      The 2% service fee (R{(loanAmount * 0.02).toLocaleString('en-US', { maximumFractionDigits: 0 })}) will be deducted from the loan amount at disbursement. 
                      You will receive R{(loanAmount * 0.98).toLocaleString('en-US', { maximumFractionDigits: 0 })} (98% of the loan), 
                      but the full principal amount of R{loanAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })} plus interest will be repaid to the lender.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repayment Structure Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Repayment Structure</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="p-6 pb-0">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Repayment for R5,000,000 Loan</h3>
                  <p className="text-sm text-gray-600">With 12-Month Term and 14.00% Interest Rate</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 bg-gray-200 text-black text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Full Breakdown
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="-mb-px flex space-x-8">
                  <button
                    onClick={() => setActiveGraphTab('payments')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeGraphTab === 'payments'
                        ? 'border-black text-black'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Payment Schedule
                  </button>
                  <button
                    onClick={() => setActiveGraphTab('balances')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeGraphTab === 'balances'
                        ? 'border-black text-black'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Loan Structure
                  </button>
                </nav>
              </div>
            </div>
              
            {/* Tab Content */}
            {activeGraphTab === 'payments' && (
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
                      <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
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
            )}

                        {activeGraphTab === 'balances' && (
              <div className="h-96 w-full px-6">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(props) => {
                        const { name, value } = props;
                        return (
                          <text 
                            x={props.x} 
                            y={props.y} 
                            fill="#000000" 
                            textAnchor={props.x > props.cx ? 'start' : 'end'} 
                            dominantBaseline="central"
                            fontSize="14"
                            fontWeight="500"
                          >
                            {`${name}: R${value.toLocaleString('en-US', { maximumFractionDigits: 0 })}`}
                          </text>
                        );
                      }}
                      outerRadius={120}
                      innerRadius={60}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="#ffffff" strokeWidth={4} />
                      ))}
                    </Pie>

                    <Legend 
                      verticalAlign="bottom" 
                      height={60}
                      content={(props) => {
                        const { payload } = props;
                        return (
                          <div style={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            paddingTop: '20px',
                            gap: '24px',
                            flexWrap: 'wrap'
                          }}>
                            {payload?.map((entry, index) => {
                              const data = pieData[index];
                              return (
                                <div key={index} style={{ 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  gap: '8px' 
                                }}>
                                  <div style={{
                                    width: '12px',
                                    height: '12px',
                                    backgroundColor: data.color,
                                    borderRadius: '3px'
                                  }} />
                                  <span style={{ 
                                    fontSize: '14px', 
                                    color: '#000000',
                                    fontWeight: '400'
                                  }}>
                                    {data.name}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        );
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
              
            {/* Summary Statistics */}
            <div className="p-6 pt-4">
              {activeGraphTab === 'payments' && (
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
              )}

              {activeGraphTab === 'balances' && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Capital Received</p>
                    <p className="text-lg font-bold text-gray-900">R4,900,000</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Service Fee</p>
                    <p className="text-lg font-bold text-gray-900">R100,000</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Total Interest</p>
                    <p className="text-lg font-bold text-gray-900">R700,000</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Total Payments</p>
                    <p className="text-lg font-bold text-gray-900">R5,700,000</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Billing Schedule Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Billing Schedule</h2>
          
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
                const paymentDate = new Date(2024, 2 + index, 15); // Mar 15, 2024 + index months
                const dateString = paymentDate.toLocaleDateString('en-GB', { 
                  day: '2-digit', 
                  month: '2-digit', 
                  year: '2-digit' 
                });
                
                // Use the actual monthly data from the schedule
                const monthlyPrincipal = payment.principalPaid;
                const monthlyInterest = payment.interestPaid;
                const monthlyTotal = payment.monthlyPayment;
                
                return (
                  <div key={index} className="px-6 py-4 grid grid-cols-4 gap-4 text-sm">
                    <div className="font-medium text-gray-900">{dateString}</div>
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
                              <h2 className="text-xl font-semibold text-gray-900">Full Repayment Breakdown</h2>
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