'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function CompletedLoanPage() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Actual amortization schedule data for R20M, 12 months, 12.00% APR
  const loanAmount = 20000000; // R20M
  const actualSchedule = [
    { month: 0, monthlyPayment: 0.0, principalPaid: 0.0, interestPaid: 0.0, remainingBalance: 20000000.0, cumulativeInterest: 0.0, cumulativePrincipal: 0.0 },
    { month: 1, monthlyPayment: 1776975.77, principalPaid: 1576975.77, interestPaid: 200000.0, remainingBalance: 18423024.23, cumulativeInterest: 200000.0, cumulativePrincipal: 1576975.77 },
    { month: 2, monthlyPayment: 1776975.77, principalPaid: 1592745.53, interestPaid: 184230.24, remainingBalance: 16830278.7, cumulativeInterest: 384230.24, cumulativePrincipal: 3169721.3 },
    { month: 3, monthlyPayment: 1776975.77, principalPaid: 1608672.99, interestPaid: 168302.79, remainingBalance: 15221605.71, cumulativeInterest: 552533.03, cumulativePrincipal: 4778394.29 },
    { month: 4, monthlyPayment: 1776975.77, principalPaid: 1624759.72, interestPaid: 152216.06, remainingBalance: 13596845.99, cumulativeInterest: 704749.09, cumulativePrincipal: 6403154.01 },
    { month: 5, monthlyPayment: 1776975.77, principalPaid: 1641007.31, interestPaid: 135968.46, remainingBalance: 11955838.68, cumulativeInterest: 840717.55, cumulativePrincipal: 8044161.32 },
    { month: 6, monthlyPayment: 1776975.77, principalPaid: 1657417.39, interestPaid: 119558.39, remainingBalance: 10298421.29, cumulativeInterest: 960275.93, cumulativePrincipal: 9701578.71 },
    { month: 7, monthlyPayment: 1776975.77, principalPaid: 1673991.56, interestPaid: 102984.21, remainingBalance: 8624429.73, cumulativeInterest: 1063260.15, cumulativePrincipal: 11375570.27 },
    { month: 8, monthlyPayment: 1776975.77, principalPaid: 1690731.48, interestPaid: 86244.3, remainingBalance: 6933698.25, cumulativeInterest: 1149504.44, cumulativePrincipal: 13066301.75 },
    { month: 9, monthlyPayment: 1776975.77, principalPaid: 1707638.79, interestPaid: 69336.98, remainingBalance: 5226059.46, cumulativeInterest: 1218841.43, cumulativePrincipal: 14773940.54 },
    { month: 10, monthlyPayment: 1776975.77, principalPaid: 1724715.18, interestPaid: 52260.59, remainingBalance: 3501344.28, cumulativeInterest: 1271102.02, cumulativePrincipal: 16498655.72 },
    { month: 11, monthlyPayment: 1776975.77, principalPaid: 1741962.33, interestPaid: 35013.44, remainingBalance: 1759381.95, cumulativeInterest: 1306115.46, cumulativePrincipal: 18240618.05 },
    { month: 12, monthlyPayment: 1776975.77, principalPaid: 1759381.95, interestPaid: 17593.82, remainingBalance: 0.0, cumulativeInterest: 1323709.28, cumulativePrincipal: 20000000.0 }
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
            <span className="text-gray-900">Loan Details</span>
          </p>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Trade Finance Details</h1>
          <p className="text-gray-600">View the details of your completed loan.</p>
        </div>

        {/* Status Card */}
        <div className="mb-10">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Loan Completed</h3>
                  <p className="text-sm text-gray-600">Your loan has been successfully completed</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">R20,000,000</p>
                <p className="text-sm text-gray-500">Loan Amount</p>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Progress Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Loan Progress</h2>
          
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Payment Progress</h3>
                <p className="text-sm text-gray-600">12 of 12 payments completed</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-black">100%</p>
                <p className="text-sm text-gray-500">Complete</p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-black h-3 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            {/* Progress Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Total Paid</p>
                <p className="text-xl font-bold text-gray-900">R21,323,709</p>
                <p className="text-xs text-gray-600">Principal + Interest</p>
              </div>
              <div className="text-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Final Balance</p>
                <p className="text-xl font-bold text-gray-900">R0</p>
                <p className="text-xs text-gray-600">Loan Completed</p>
              </div>
              <div className="text-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Completion Date</p>
                <p className="text-xl font-bold text-gray-900">15 Oct 2024</p>
                <p className="text-xs text-gray-600">Final Payment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Overview Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Loan Overview</h2>

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
              <p className="text-2xl font-bold text-gray-900">12.00%</p>
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
              <p className="text-xl font-bold text-gray-900">Investec</p>
              <p className="text-sm text-gray-500">Loan Provider</p>
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
                <p className="text-lg font-semibold text-gray-900">October 15, 2023</p>
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
                  <p className="text-sm text-gray-600">With 12-Month Term and 12.00% Interest Rate</p>
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
                      ticks={[0, 2, 4, 6, 8, 10, 12]}
                      axisLine={true}
                      tickLine={false}
                      tick={{ fontSize: 14, fill: '#6b7280' }}
                      dy={10}
                      stroke="#e5e7eb"
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
                      stroke="#191c2b" 
                      strokeWidth={3}
                      name="Balance"
                      dot={{ fill: '#191c2b', strokeWidth: 2, r: 3, stroke: '#191c2b' }}
                      activeDot={{ r: 5, fill: '#191c2b', stroke: '#ffffff', strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="interest" 
                      stroke="#43c149" 
                      strokeWidth={3}
                      name="Interest"
                      dot={{ fill: '#43c149', strokeWidth: 2, r: 3, stroke: '#43c149' }}
                      activeDot={{ r: 5, fill: '#43c149', stroke: '#ffffff', strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="principal" 
                      stroke="#66f770" 
                      strokeWidth={3}
                      name="Principal"
                      dot={{ fill: '#66f770', strokeWidth: 2, r: 3, stroke: '#66f770' }}
                      activeDot={{ r: 5, fill: '#66f770', stroke: '#ffffff', strokeWidth: 2 }}
                    />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            {/* Summary Cards Below Chart */}
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
                const paymentDate = new Date(2023, 10 + index, 15); // Nov 15, 2023 + index months
                const dateString = paymentDate.toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                });
                
                // Fix the billing schedule calculation to use the actual monthly data
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
                    <p className="text-base font-medium text-gray-900">Advanced Property Solutions (Pty) Ltd</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Bank</p>
                    <p className="text-base font-medium text-gray-900">Standard Bank</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Number</p>
                    <p className="text-base font-medium text-gray-900">••••••••••4789</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Type</p>
                    <p className="text-base font-medium text-gray-900">Business Cheque</p>
                  </div>
                </div>
              </div>

              {/* Debit Order Details */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-4">Debit Order Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Monthly Payment</p>
                    <p className="text-xl font-bold text-gray-900">R1,776,976</p>
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
                    <p className="text-base font-medium text-gray-900">MML-DO-123456</p>
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
                    <p className="text-sm font-medium text-gray-900">Debit Order Status: Completed</p>
                    <p className="text-xs text-gray-500">Completed on October 15, 2024</p>
                  </div>
                </div>
                <button className="bg-black text-white text-sm px-4 py-2 rounded-md font-medium cursor-not-allowed">
                  Loan Completed
                </button>
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
                  <p className="text-gray-500 mt-1">October 15, 2023</p>
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
                  <p className="text-gray-500 mt-1">October 16, 2023</p>
                </div>
              </div>

              {/* Lender Contract Signed */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-6 relative z-10">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold text-gray-900">Lender Contract Signed</p>
                  <p className="text-gray-500 mt-1">October 17, 2023</p>
                </div>
              </div>

              {/* Debit Order Authorization */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-6 relative z-10">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold text-gray-900">Debit Order Authorization</p>
                  <p className="text-gray-500 mt-1">October 18, 2023</p>
                </div>
              </div>

              {/* Loan Dispersed */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-6 relative z-10">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold text-gray-900">Loan Dispersed</p>
                  <p className="text-gray-500 mt-1">October 20, 2023</p>
                </div>
              </div>

              {/* Loan Complete */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-6 relative z-10">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold text-gray-900">Loan Complete</p>
                  <p className="text-gray-500 mt-1">October 15, 2024</p>
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
                  <p className="font-medium text-gray-900">Loan Contract - LN-2023-00123.pdf</p>
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