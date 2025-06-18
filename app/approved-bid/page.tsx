'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function ApprovedBidPage() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Actual amortization schedule data
  const loanAmount = 10000000; // R10M
  const actualSchedule = [
    { month: 0, monthlyPayment: 0, principalPaid: 0, interestPaid: 0, remainingBalance: 10000000, cumulativeInterest: 0, cumulativePrincipal: 0 },
    { month: 1, monthlyPayment: 872197.82, principalPaid: 801364.49, interestPaid: 70833.33, remainingBalance: 9198635.51, cumulativeInterest: 70833.33, cumulativePrincipal: 801364.49 },
    { month: 2, monthlyPayment: 872197.82, principalPaid: 807040.82, interestPaid: 65157, remainingBalance: 8391594.69, cumulativeInterest: 135990.33, cumulativePrincipal: 1608405.31 },
    { month: 3, monthlyPayment: 872197.82, principalPaid: 812757.36, interestPaid: 59440.46, remainingBalance: 7578837.32, cumulativeInterest: 195430.79, cumulativePrincipal: 2421162.67 },
    { month: 4, monthlyPayment: 872197.82, principalPaid: 818514.39, interestPaid: 53683.43, remainingBalance: 6760322.93, cumulativeInterest: 249114.22, cumulativePrincipal: 3239677.06 },
    { month: 5, monthlyPayment: 872197.82, principalPaid: 824312.2, interestPaid: 47885.62, remainingBalance: 5936010.73, cumulativeInterest: 296999.84, cumulativePrincipal: 4063989.26 },
    { month: 6, monthlyPayment: 872197.82, principalPaid: 830151.08, interestPaid: 42046.74, remainingBalance: 5105859.64, cumulativeInterest: 339046.58, cumulativePrincipal: 4894140.34 },
    { month: 7, monthlyPayment: 872197.82, principalPaid: 836031.32, interestPaid: 36166.51, remainingBalance: 4269828.33, cumulativeInterest: 375213.09, cumulativePrincipal: 5730171.66 },
    { month: 8, monthlyPayment: 872197.82, principalPaid: 841953.21, interestPaid: 30244.62, remainingBalance: 3427875.12, cumulativeInterest: 405457.71, cumulativePrincipal: 6572124.87 },
    { month: 9, monthlyPayment: 872197.82, principalPaid: 847917.04, interestPaid: 24280.78, remainingBalance: 2579958.08, cumulativeInterest: 429738.49, cumulativePrincipal: 7420041.91 },
    { month: 10, monthlyPayment: 872197.82, principalPaid: 853923.12, interestPaid: 18274.7, remainingBalance: 1726034.95, cumulativeInterest: 448013.19, cumulativePrincipal: 8273965.03 },
    { month: 11, monthlyPayment: 872197.82, principalPaid: 859971.74, interestPaid: 12226.08, remainingBalance: 866063.21, cumulativeInterest: 460239.27, cumulativePrincipal: 9133936.77 },
    { month: 12, monthlyPayment: 872197.82, principalPaid: 866063.21, interestPaid: 6134.61, remainingBalance: 0, cumulativeInterest: 466373.88, cumulativePrincipal: 9999999.98 }
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
            <span className="text-gray-400">Bids</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Bid Details</span>
          </p>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Bridge Finance Details</h1>
          <p className="text-gray-600">View the details of your approved bid.</p>
        </div>

        {/* Bid Overview Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Bid Overview</h2>
          
          {/* Status Card */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
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
              <p className="text-2xl font-bold text-gray-900">8.50%</p>
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
                  <h3 className="text-base font-semibold text-gray-900">Amortization for R10,000,000 Loan</h3>
                  <p className="text-sm text-gray-600">With 12-Month Term and 8.50% Interest Rate</p>
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
                      domain={[0, 12]}
                      type="number"
                      ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 14, fill: '#6b7280' }}
                      dy={10}
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
                
                // Calculate monthly values from cumulative data
                const prevPayment = index === 0 ? actualSchedule[0] : actualSchedule[index];
                const monthlyPrincipal = payment.cumulativePrincipal - prevPayment.cumulativePrincipal;
                const monthlyInterest = payment.cumulativeInterest - prevPayment.cumulativeInterest;
                const monthlyTotal = monthlyPrincipal + monthlyInterest;
                
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
              {/* Bank Account Information */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  Bank Account Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Bank</p>
                    <p className="text-base text-gray-900">Standard Bank</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Branch Code</p>
                    <p className="text-base text-gray-900 font-mono">051001</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Account Holder</p>
                    <p className="text-base text-gray-900">ABC Construction (Pty) Ltd</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Account Number</p>
                    <p className="text-base text-gray-900">••••••••••1234</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Account Type</p>
                    <p className="text-base text-gray-900">Business Current Account</p>
                  </div>
                </div>
              </div>

              {/* Debit Order Information */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Debit Order Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Monthly Debit Amount</p>
                    <p className="text-lg font-bold text-gray-900">R832,572</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Debit Date</p>
                    <p className="text-base text-gray-900">15th of each month</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">First Debit Date</p>
                    <p className="text-base text-gray-900">November 15, 2023</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Final Debit Date</p>
                    <p className="text-base text-gray-900">October 15, 2024</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Status</p>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                      <span className="text-base text-gray-600 font-medium">Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mt-8 p-4 bg-gray-100 border border-gray-300 rounded-lg">
              <div className="flex items-start">
                <div className="w-5 h-5 text-gray-600 mr-3 mt-0.5">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">Important Notice</h4>
                  <p className="text-sm text-gray-700">
                    Please ensure sufficient funds are available in your account before each debit date. 
                    Failed debit orders may result in additional fees and could affect your credit rating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Trail Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Audit Trail</h2>
          
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold text-gray-900">Lender Contract Signed</p>
                  <p className="text-gray-500 mt-1">October 17, 2023</p>
                </div>
              </div>

              {/* Loan Dispersed - Pending */}
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