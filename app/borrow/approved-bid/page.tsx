'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default function ApprovedBidPage() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  // Removed activeGraphTab state as tabs are no longer needed

  // Actual amortization schedule data for R10M, 12 months (Bullet payment structure)
  const loanAmount = 10000000; // R10M
  const actualSchedule = [
    { month: 0, monthlyPayment: 0.0, principalPaid: 0.0, interestPaid: 0.0, remainingBalance: 10000000.0, cumulativeInterest: 0.0, cumulativePrincipal: 0.0 },
    { month: 1, monthlyPayment: 0.0, principalPaid: 0.0, interestPaid: 0.0, remainingBalance: 10000000.0, cumulativeInterest: 0.0, cumulativePrincipal: 0.0 },
    { month: 2, monthlyPayment: 0.0, principalPaid: 0.0, interestPaid: 0.0, remainingBalance: 10000000.0, cumulativeInterest: 0.0, cumulativePrincipal: 0.0 },
    { month: 3, monthlyPayment: 0.0, principalPaid: 0.0, interestPaid: 0.0, remainingBalance: 10000000.0, cumulativeInterest: 0.0, cumulativePrincipal: 0.0 },
    { month: 4, monthlyPayment: 0.0, principalPaid: 0.0, interestPaid: 0.0, remainingBalance: 10000000.0, cumulativeInterest: 0.0, cumulativePrincipal: 0.0 },
    { month: 5, monthlyPayment: 0.0, principalPaid: 0.0, interestPaid: 0.0, remainingBalance: 10000000.0, cumulativeInterest: 0.0, cumulativePrincipal: 0.0 },
    { month: 6, monthlyPayment: 0.0, principalPaid: 0.0, interestPaid: 0.0, remainingBalance: 10000000.0, cumulativeInterest: 0.0, cumulativePrincipal: 0.0 },
    { month: 7, monthlyPayment: 0.0, principalPaid: 0.0, interestPaid: 0.0, remainingBalance: 10000000.0, cumulativeInterest: 0.0, cumulativePrincipal: 0.0 },
    { month: 8, monthlyPayment: 0.0, principalPaid: 0.0, interestPaid: 0.0, remainingBalance: 10000000.0, cumulativeInterest: 0.0, cumulativePrincipal: 0.0 },
    { month: 9, monthlyPayment: 0.0, principalPaid: 0.0, interestPaid: 0.0, remainingBalance: 10000000.0, cumulativeInterest: 0.0, cumulativePrincipal: 0.0 },
    { month: 10, monthlyPayment: 0.0, principalPaid: 0.0, interestPaid: 0.0, remainingBalance: 10000000.0, cumulativeInterest: 0.0, cumulativePrincipal: 0.0 },
    { month: 11, monthlyPayment: 0.0, principalPaid: 0.0, interestPaid: 0.0, remainingBalance: 10000000.0, cumulativeInterest: 0.0, cumulativePrincipal: 0.0 },
    { month: 12, monthlyPayment: 11850000.0, principalPaid: 10000000.0, interestPaid: 1850000.0, remainingBalance: 0.0, cumulativeInterest: 1850000.0, cumulativePrincipal: 10000000.0 }
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
    { name: 'Capital Received', value: loanAmount * 0.98, color: '#d1d5db' },
    { name: 'Service Fee', value: loanAmount * 0.02, color: '#000000' },
    { name: 'Total Interest', value: actualSchedule[actualSchedule.length - 1].cumulativeInterest, color: '#6b7280' }
  ];

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
            <span className="text-gray-400">Bids</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Bid Details</span>
          </p>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Bridge Finance Details</h1>
            <p className="text-gray-600">View the details of your approved bid.</p>
          </div>
        </div>

        {/* Status Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Awaiting Dispersement</h3>
                <p className="text-sm text-blue-600">Your loan is approved and ready for disbursement</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">R10,000,000</p>
              <p className="text-sm text-gray-500">Loan Amount</p>
            </div>
          </div>
        </div>

        {/* Bid Overview Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Bid Overview</h2>
          
          {/* Bid Proposal Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Interest Rate</p>
                <p className="text-2xl font-bold text-gray-900">18.50%</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Security Type</p>
                <p className="text-base font-medium text-gray-900">First choice: Unsecured</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Status</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Approved
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm font-medium text-gray-900 mb-3">Required Documents</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Please provide a signed personal guarantee agreement from the company director</li>
                <li>• Submit updated financial statements for the guarantor (not older than 3 months)</li>
                <li>• Include proof of the guarantor's assets and liabilities statement</li>
                <li>• Provide confirmation of the guarantor's employment and income verification</li>
              </ul>
            </div>
          </div>

          {/* Loan Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900">Interest Rate</h4>
              </div>
              <p className="text-2xl font-bold text-gray-900">18.50%</p>
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
                <h4 className="font-medium text-gray-900">Lender</h4>
              </div>
              <p className="text-xl font-bold text-gray-900">Standard Bank</p>
              <p className="text-sm text-gray-500">Bid Provider</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900">Security Type</h4>
              </div>
              <p className="text-xl font-bold text-gray-900">Unsecured</p>
              <p className="text-sm text-gray-500">Security Type</p>
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
                <p className="text-sm font-medium text-gray-500 mb-1">Date Approved</p>
                <p className="text-lg font-semibold text-gray-900">15 October 2023</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Due Date</p>
                <p className="text-lg font-semibold text-gray-900">15 January 2024</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Funds Required</p>
                <p className="text-lg font-semibold text-gray-900">7 days</p>
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
                  <h3 className="text-base font-semibold text-gray-900">Repayment for R{loanAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })} Loan</h3>
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
              
            {/* Loan Structure Chart */}
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
              
            {/* Summary Statistics */}
            <div className="p-6 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Capital Received</p>
                  <p className="text-lg font-bold text-gray-900">R{(loanAmount * 0.98).toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Service Fee</p>
                  <p className="text-lg font-bold text-gray-900">R{(loanAmount * 0.02).toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Total Interest</p>
                  <p className="text-lg font-bold text-gray-900">R{actualSchedule[actualSchedule.length - 1].cumulativeInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Total Payments</p>
                  <p className="text-lg font-bold text-gray-900">R{(actualSchedule[actualSchedule.length - 1].cumulativeInterest + actualSchedule[actualSchedule.length - 1].cumulativePrincipal).toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Billing Schedule Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Billing Schedule</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <div className="grid grid-cols-5 gap-4 text-sm font-medium text-gray-500">
                <div>Payment Date</div>
                <div>Principal</div>
                <div>Interest</div>
                <div>Total Payment</div>
                <div>Status</div>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {actualSchedule.slice(1, 7).map((payment, index) => {
                const paymentDate = new Date(2024, 0 + index, 15); // Jan 15, 2024 + index months
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
                  <div key={index} className="px-6 py-4 grid grid-cols-5 gap-4 text-sm">
                    <div className="font-medium text-gray-900">{dateString}</div>
                    <div className="text-gray-900">R{monthlyPrincipal.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                    <div className="text-gray-900">R{monthlyInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                    <div className="font-semibold text-gray-900">R{monthlyTotal.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                        No Payment
                      </span>
                    </div>
                  </div>
                );
              })}
              <div className="px-6 py-4 grid grid-cols-5 gap-4 text-sm bg-gray-50">
                <div className="font-medium text-gray-900">...</div>
                <div className="text-gray-600 italic">{12 - 6} more payments</div>
                <div className="text-gray-600 italic">...</div>
                <div></div>
                <div className="font-semibold text-gray-700 cursor-pointer hover:text-gray-900">View Full Schedule</div>
              </div>
            </div>
          </div>
        </div>

        {/* Debit Order Details Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Debit Order Details</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bank Details */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-4">Bank Account Details</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Account Holder</p>
                    <p className="text-base font-medium text-gray-900">ABC Construction (Pty) Ltd</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Bank</p>
                    <p className="text-base font-medium text-gray-900">Standard Bank</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Number</p>
                    <p className="text-base font-medium text-gray-900">••••••••••1234</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Type</p>
                    <p className="text-base font-medium text-gray-900">Business Current Account</p>
                  </div>
                </div>
              </div>

              {/* Debit Order Details */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-4">Debit Order Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Monthly Payment</p>
                    <p className="text-xl font-bold text-gray-900">R919,181</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">First Debit Date</p>
                    <p className="text-base font-medium text-gray-900">15 November 2023</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Last Debit Date</p>
                    <p className="text-base font-medium text-gray-900">15 October 2024</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Debit Order Reference</p>
                    <p className="text-base font-medium text-gray-900">MML-DO-234567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Banner */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Debit Order Status: Pending</p>
                    <p className="text-xs text-gray-500">Awaiting disbursement</p>
                  </div>
                </div>
                <button className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 font-medium">
                  Manage Debit Order
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Important Information</h2>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">Please Note</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ensure sufficient funds are available in your account before each debit date</li>
                  <li>• Failed debit orders may incur additional fees and affect your credit rating</li>
                  <li>• Contact us immediately if you need to change your debit order details</li>
                  <li>• Early settlement options are available - contact our team for more information</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Trail Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Audit Trail</h2>
          
          <div className="relative">
            {/* Timeline line - connects through all icons */}
            <div className="absolute top-4 bottom-4 w-0.5 bg-gray-300" style={{left: '15.5px'}}></div>
            
            <div className="space-y-4">
              {/* Bid Application Submitted */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-4 relative z-10">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <p className="text-base font-semibold text-gray-900">Bid Submitted</p>
                  <p className="text-gray-500 text-sm">October 1, 2023</p>
                </div>
              </div>

              {/* Bid Accepted */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-4 relative z-10">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <p className="text-base font-semibold text-gray-900">Bid Accepted</p>
                  <p className="text-gray-500 text-sm">October 10, 2023</p>
                </div>
              </div>

              {/* Bid Approved */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-4 relative z-10">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <p className="text-base font-semibold text-gray-900">Bid Approved</p>
                  <p className="text-gray-500 text-sm">October 15, 2023</p>
                </div>
              </div>

              {/* Borrower Contract Signed */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-4 relative z-10">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <p className="text-base font-semibold text-gray-900">Borrower Accepted</p>
                  <p className="text-gray-500 text-sm">October 16, 2023</p>
                </div>
              </div>

              {/* Lender Contract Signed */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-4 relative z-10">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <p className="text-base font-semibold text-gray-900">Lender Accepted</p>
                  <p className="text-gray-500 text-sm">October 17, 2023</p>
                </div>
              </div>

              {/* Debit Order Authorization */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-4 relative z-10">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <p className="text-base font-semibold text-gray-900">Debit Order Authorization</p>
                  <p className="text-gray-500 text-sm">October 18, 2023</p>
                </div>
              </div>

              {/* Loan Dispersed - Pending */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-4 relative z-10">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <p className="text-base font-semibold text-gray-400">Loan Dispersed</p>
                  <p className="text-gray-400 text-sm">Pending</p>
                </div>
              </div>

              {/* Future - Loan in Progress */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-4 relative z-10">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <p className="text-base font-semibold text-gray-400">Loan in Progress</p>
                  <p className="text-gray-400 text-sm">Pending</p>
                </div>
              </div>

              {/* Future - Loan Complete */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-4 relative z-10">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <p className="text-base font-semibold text-gray-400">Loan Complete</p>
                  <p className="text-gray-400 text-sm">Pending</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contract Document Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Contract Document</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-gray-900">Loan Contract - LN-2023-00123.pdf</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                      Draft
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">PDF</p>
                </div>
              </div>
              <button
                onClick={handleDownload}
                className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-medium"
              >
                Download
              </button>
            </div>
          </div>
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