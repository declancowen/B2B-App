'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart, PieChart, Pie, Cell } from 'recharts'

export default function LenderBidDashboardPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<'all' | 'leads' | 'prospects' | 'opportunities' | 'cancelled'>('all')

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab && (tab === 'all' || tab === 'leads' || tab === 'prospects' || tab === 'opportunities' || tab === 'cancelled')) {
      setActiveTab(tab)
    }
  }, [searchParams])

  // Sample loan data for different scenarios
  const loanScenarios = [
    {
      id: 1,
      title: "Historical Capital Exposure",
      amount: "Capital exposure over the last 12 months",
      term: "",
      rate: "",
      data: [
        { month: "Jan-24", capitalExposure: 45.0 },
        { month: "Feb-24", capitalExposure: 52.0 },
        { month: "Mar-24", capitalExposure: 48.0 },
        { month: "Apr-24", capitalExposure: 55.0 },
        { month: "May-24", capitalExposure: 38.0 },
        { month: "Jun-24", capitalExposure: 42.0 },
        { month: "Jul-24", capitalExposure: 46.0 },
        { month: "Aug-24", capitalExposure: 71.0 },
        { month: "Sep-24", capitalExposure: 68.0 },
        { month: "Oct-24", capitalExposure: 62.0 },
        { month: "Nov-24", capitalExposure: 67.0 },
        { month: "Dec-24", capitalExposure: 64.0 },
        { month: "Jan-25", capitalExposure: 69.0 }
      ]
    },
    {
      id: 2,
      title: "Capital Exposure",
      amount: "Distribution by status",
      term: "",
      rate: "",
      data: [
        { name: "Active", value: 55, color: "#000000", actualValue: "R35.9M" },
        { name: "Pending", value: 30, color: "#4b5563", actualValue: "R19.6M" },
        { name: "Pipeline", value: 15, color: "#9ca3af", actualValue: "R9.8M" }
      ]
    },
    {
      id: 3,
      title: "Cumulative Interest Earned",
      amount: "Interest earned over the last 12 months",
      term: "",
      rate: "",
      data: [
        { month: "Jan-24", cumulativeInterest: 2.1 },
        { month: "Feb-24", cumulativeInterest: 2.8 },
        { month: "Mar-24", cumulativeInterest: 3.2 },
        { month: "Apr-24", cumulativeInterest: 3.2 },
        { month: "May-24", cumulativeInterest: 4.1 },
        { month: "Jun-24", cumulativeInterest: 4.1 },
        { month: "Jul-24", cumulativeInterest: 5.3 },
        { month: "Aug-24", cumulativeInterest: 6.1 },
        { month: "Sep-24", cumulativeInterest: 6.1 },
        { month: "Oct-24", cumulativeInterest: 6.9 },
        { month: "Nov-24", cumulativeInterest: 7.8 },
        { month: "Dec-24", cumulativeInterest: 7.8 },
        { month: "Jan-25", cumulativeInterest: 8.5 }
      ]
    },
    {
      id: 4,
      title: "Loan Pipeline",
      amount: "Distribution by status",
      term: "",
      rate: "",
      data: [
        { name: "Active", value: 52.6, color: "#000000", actualValue: "10" },
        { name: "Approved", value: 10.5, color: "#4b5563", actualValue: "2" },
        { name: "In Review", value: 15.8, color: "#6b7280", actualValue: "3" },
        { name: "Accepted", value: 21.1, color: "#9ca3af", actualValue: "4" }
      ]
    },
    {
      id: 5,
      title: "Construction Pro",
      amount: "R7,500,000",
      term: "36 months",
      rate: "13.50%",
      data: [
        { month: 0, balance: 7.5, interest: 0.0, principal: 0.0 },
        { month: 1, balance: 7.5, interest: 0.084, principal: 0.0 },
        { month: 3, balance: 7.5, interest: 0.253, principal: 0.0 },
        { month: 6, balance: 7.5, interest: 0.506, principal: 0.0 },
        { month: 12, balance: 7.5, interest: 1.013, principal: 0.0 },
        { month: 18, balance: 7.5, interest: 1.519, principal: 0.0 },
        { month: 24, balance: 7.5, interest: 2.025, principal: 0.0 },
        { month: 30, balance: 7.5, interest: 2.531, principal: 0.0 },
        { month: 36, balance: 0.0, interest: 3.038, principal: 7.5 }
      ]
    },
    {
      id: 6,
      title: "Digital Marketing Inc",
      amount: "R950,000",
      term: "9 months",
      rate: "17.50%",
      data: [
        { month: 0, balance: 0.95, interest: 0.0, principal: 0.0 },
        { month: 1, balance: 0.95, interest: 0.014, principal: 0.0 },
        { month: 2, balance: 0.95, interest: 0.028, principal: 0.0 },
        { month: 3, balance: 0.95, interest: 0.042, principal: 0.0 },
        { month: 6, balance: 0.95, interest: 0.083, principal: 0.0 },
        { month: 9, balance: 0.0, interest: 0.125, principal: 0.95 }
      ]
    },
    {
      id: 7,
      title: "Food & Beverage Co",
      amount: "R4,100,000",
      term: "15 months",
      rate: "13.00%",
      data: [
        { month: 0, balance: 4.1, interest: 0.0, principal: 0.0 },
        { month: 1, balance: 4.1, interest: 0.044, principal: 0.0 },
        { month: 3, balance: 4.1, interest: 0.133, principal: 0.0 },
        { month: 6, balance: 4.1, interest: 0.266, principal: 0.0 },
        { month: 9, balance: 4.1, interest: 0.399, principal: 0.0 },
        { month: 12, balance: 4.1, interest: 0.533, principal: 0.0 },
        { month: 15, balance: 0.0, interest: 0.666, principal: 4.1 }
      ]
    },
    {
      id: 8,
      title: "Transport Solutions",
      amount: "R6,300,000",
      term: "30 months",
      rate: "14.50%",
      data: [
        { month: 0, balance: 6.3, interest: 0.0, principal: 0.0 },
        { month: 1, balance: 6.3, interest: 0.076, principal: 0.0 },
        { month: 3, balance: 6.3, interest: 0.229, principal: 0.0 },
        { month: 6, balance: 6.3, interest: 0.458, principal: 0.0 },
        { month: 12, balance: 6.3, interest: 0.915, principal: 0.0 },
        { month: 18, balance: 6.3, interest: 1.373, principal: 0.0 },
        { month: 24, balance: 6.3, interest: 1.830, principal: 0.0 },
        { month: 30, balance: 0.0, interest: 2.288, principal: 6.3 }
      ]
    }
  ];

  const renderChart = (scenario: any, isRightColumn: boolean = false) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col h-full">
      <div className="mb-4 flex-shrink-0">
        <h3 className="text-sm font-semibold text-gray-900">{scenario.title}</h3>
        <div className="flex items-center gap-4 mt-1">
          <span className="text-xs text-gray-600">{scenario.amount}</span>
          <span className="text-xs text-gray-600">{scenario.term}</span>
          <span className="text-xs text-gray-600">{scenario.rate}</span>
        </div>
      </div>
      
      <div className={`w-full ${isRightColumn ? 'flex-1' : 'flex-1 min-h-48'}`}>
        <ResponsiveContainer width="100%" height="100%">
          {scenario.id === 2 || scenario.id === 4 ? (
            <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <Pie
                data={scenario.data}
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="85%"
                paddingAngle={2}
                dataKey="value"
              >
                {scenario.data.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <text 
                x="50%" 
                y="45%" 
                textAnchor="middle" 
                dominantBaseline="middle"
                style={{ 
                  fontSize: '24px', 
                  fontWeight: '700', 
                  fill: '#000000' 
                }}
              >
                {scenario.id === 2 ? 'R65.2M' : scenario.id === 4 ? '19' : '100%'}
              </text>
              <Tooltip 
                content={(props) => {
                  const { active, payload } = props;
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div style={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '6px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        padding: '8px',
                        fontSize: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '6px',
                          margin: '2px 0'
                        }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: data.color,
                            borderRadius: '2px'
                          }} />
                          <span style={{ 
                            color: '#000000',
                            fontWeight: '500'
                          }}>
                            {data.name}: {data.actualValue || `${data.value}%`}
                          </span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                content={(props) => {
                  return (
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      paddingTop: '8px',
                      gap: '12px',
                      flexWrap: 'wrap'
                    }}>
                      {scenario.data.map((entry: any, index: number) => (
                        <div key={index} style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '4px',
                          fontSize: '10px'
                        }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: entry.color,
                            borderRadius: '2px'
                          }} />
                          <span style={{ 
                            color: '#000000',
                            fontWeight: '400'
                          }}>
                            {entry.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  );
                }}
              />
            </PieChart>
          ) : scenario.id === 1 || scenario.id === 3 ? (
            <AreaChart
              data={scenario.data}
              margin={{
                top: 10,
                right: 10,
                left: -20,
                bottom: 20,
              }}
            >
              <defs>
                <linearGradient id="capitalExposureGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#374151" stopOpacity={0.8}/>
                  <stop offset="100%" stopColor="#f3f4f6" stopOpacity={0.2}/>
                </linearGradient>
                <linearGradient id="cumulativeInterestGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#374151" stopOpacity={0.8}/>
                  <stop offset="100%" stopColor="#f3f4f6" stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis 
                dataKey="month"
                axisLine={true}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#6b7280' }}
                stroke="#e5e7eb"
              />
              <YAxis 
                axisLine={true}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#6b7280' }}
                tickFormatter={(value) => `${value.toFixed(1)}M`}
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
                        borderRadius: '6px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        padding: '8px',
                        fontSize: '12px'
                      }}>
                        <p style={{ 
                          margin: '0 0 4px 0', 
                          fontWeight: '600',
                          color: '#000000'
                        }}>
                          {label}
                        </p>
                        {payload.map((entry, index) => {
                          let displayName = '';
                          if (entry.dataKey === 'cumulativeInterest') displayName = '';
                          
                          return (
                            <div key={index} style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '6px',
                              margin: '2px 0'
                            }}>
                              <div style={{
                                width: '8px',
                                height: '8px',
                                backgroundColor: entry.color,
                                borderRadius: '2px'
                              }} />
                              <span style={{ 
                                color: '#000000',
                                fontWeight: '400'
                              }}>
                                {displayName && `${displayName}: `}R{(Number(entry.value) * 1000000).toLocaleString('en-US', { maximumFractionDigits: 0 })}
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
                  return (
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      paddingTop: '16px',
                      gap: '8px'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '6px' 
                      }}>
                        <div style={{
                          width: '16px',
                          height: '3px',
                          backgroundColor: '#000000',
                          borderRadius: '2px'
                        }} />
                        <span style={{ 
                          fontSize: '12px', 
                          color: '#000000',
                          fontWeight: '500'
                        }}>
                          {scenario.id === 1 ? 'Capital Exposure' : 'Cumulative Interest'}
                </span>
                      </div>
                    </div>
                  );
                }}
              />
              <Area 
                type="monotone" 
                dataKey={scenario.id === 1 ? "capitalExposure" : "cumulativeInterest"} 
                stroke="#000000" 
                strokeWidth={1}
                fill={scenario.id === 1 ? "url(#capitalExposureGradient)" : "url(#cumulativeInterestGradient)"}
                name={scenario.id === 1 ? "Capital Exposure" : "Cumulative Interest"}
                dot={false}
                activeDot={{ r: 3, fill: '#000000', stroke: '#ffffff', strokeWidth: 2 }}
              />
            </AreaChart>
          ) : (
            <LineChart
              data={scenario.data}
              margin={{
                top: 10,
                right: 10,
                left: -20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis 
                dataKey="month"
                axisLine={true}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#6b7280' }}
                stroke="#e5e7eb"
              />
              <YAxis 
                axisLine={true}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#6b7280' }}
                tickFormatter={(value) => `${value.toFixed(1)}M`}
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
                        borderRadius: '6px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        padding: '8px',
                        fontSize: '12px'
                      }}>
                        <p style={{ 
                          margin: '0 0 4px 0', 
                          fontWeight: '600',
                          color: '#000000'
                        }}>
                          {label}
                        </p>
                        {payload.map((entry, index) => {
                          let displayName = 'Capital Exposure';
                          if (entry.dataKey === 'balance') displayName = 'Balance';
                          else if (entry.dataKey === 'interest') displayName = 'Interest';
                          else if (entry.dataKey === 'principal') displayName = 'Principal';
                          else if (entry.dataKey === 'capitalExposure') displayName = '';
                          
                          return (
                            <div key={index} style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '6px',
                              margin: '2px 0'
                            }}>
                              <div style={{
                                width: '8px',
                                height: '8px',
                                backgroundColor: entry.color,
                                borderRadius: '2px'
                              }} />
                              <span style={{ 
                                color: '#000000',
                                fontWeight: '400'
                              }}>
                                {displayName && `${displayName}: `}R{(Number(entry.value) * 1000000).toLocaleString('en-US', { maximumFractionDigits: 0 })}
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
              <>
                <Line 
                  type="monotone" 
                  dataKey="balance" 
                  stroke="#000000" 
                  strokeWidth={2}
                  name="Balance"
                  dot={false}
                  activeDot={{ r: 3, fill: '#000000', stroke: '#ffffff', strokeWidth: 1 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="interest" 
                  stroke="#6b7280" 
                  strokeWidth={2}
                  name="Interest"
                  dot={false}
                  activeDot={{ r: 3, fill: '#6b7280', stroke: '#ffffff', strokeWidth: 1 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="principal" 
                  stroke="#d1d5db" 
                  strokeWidth={2}
                  name="Principal"
                  dot={false}
                  activeDot={{ r: 3, fill: '#d1d5db', stroke: '#ffffff', strokeWidth: 1 }}
                />
              </>
            </LineChart>
          )}
        </ResponsiveContainer>
                </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-xl font-semibold text-gray-900 mb-8">MoMoola</h1>
          
          <nav className="space-y-2">
            <div className="flex items-center px-3 py-2 bg-gray-200 rounded-md">
              <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <path d="M9 9h6v6H9z"/>
              </svg>
              <span className="text-gray-900 font-medium">Dashboard</span>
            </div>
            
            <div 
              className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer"
              onClick={() => router.push('/lend/loan-dashboard')}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Loans</span>
            </div>
            
            <div 
              className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer"
              onClick={() => router.push('/lend/bid-dashboard')}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m14.5 12.5-8 8a2.119 2.119 0 0 1-3-3l8-8"/>
                <path d="m16 16 6-6"/>
                <path d="m8 8 6-6"/>
                <path d="m9 7 8 8"/>
                <path d="m21 11-8-8"/>
              </svg>
              <span>Bids</span>
            </div>
            
            <div 
              className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer"
              onClick={() => router.push('/lend/invoices')}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              <span>Invoices</span>
            </div>
            
            <div 
              className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer"
              onClick={() => router.push('/lend/company-dashboard')}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>Company</span>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-24 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Dashboard</h1>
        


        {/* Dashboard Content */}
        <div className="mt-6">
          {/* Dashboard Description */}
          <div className="mb-6">
            <p className="text-gray-600 text-sm">Overview of your lending activities</p>
          </div>
          
          {/* Tables Row (50%/50%) */}
          <div className="flex gap-6 mb-6">
            <div className="w-[50%]">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Upcoming Invoices</h3>
                
                {/* Due Today Section */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wider">Due Today</h4>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-md bg-gray-50 text-gray-800 border border-gray-200">
                      2 Items
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">LN-2024-00145</span>
                            <span className="text-xs text-gray-600">TechCorp Solutions</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-500 w-16 text-right"></span>
                            <span className="text-sm font-semibold text-gray-900 w-20 text-right">R85,000</span>
                          </div>
                        </div>
                      </div>
                      <button className="ml-3 px-3 py-1 bg-black text-white text-xs font-medium rounded hover:bg-gray-800 transition-colors">
                        Pay
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">LN-2024-00151</span>
                            <span className="text-xs text-gray-600">Food & Beverage Co</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-500 w-16 text-right"></span>
                            <span className="text-sm font-semibold text-gray-900 w-20 text-right">R125,000</span>
                          </div>
                        </div>
                      </div>
                      <button className="ml-3 px-3 py-1 bg-black text-white text-xs font-medium rounded hover:bg-gray-800 transition-colors">
                        Pay
                      </button>
                    </div>
                  </div>
                </div>

                {/* Due in the next 7 days Section */}
            <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wider">Due in the next 7 days</h4>
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-md bg-gray-50 text-gray-800 border border-gray-200">
                      3 Items
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">LN-2024-00146</span>
                            <span className="text-xs text-gray-600">Manufacturing Plus</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-500 w-16 text-right">30/01/25</span>
                            <span className="text-sm font-semibold text-gray-900 w-20 text-right">R120,000</span>
                          </div>
                        </div>
                      </div>
                      <button className="ml-3 px-3 py-1 bg-black text-white text-xs font-medium rounded hover:bg-gray-800 transition-colors">
                        Pay
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">LN-2024-00147</span>
                            <span className="text-xs text-gray-600">Retail Dynamics</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-500 w-16 text-right">02/02/25</span>
                            <span className="text-sm font-semibold text-gray-900 w-20 text-right">R65,000</span>
                          </div>
                        </div>
                      </div>
                      <button className="ml-3 px-3 py-1 bg-black text-white text-xs font-medium rounded hover:bg-gray-800 transition-colors">
                        Pay
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">LN-2024-00152</span>
                            <span className="text-xs text-gray-600">Transport Solutions</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-500 w-16 text-right">03/02/25</span>
                            <span className="text-sm font-semibold text-gray-900 w-20 text-right">R95,000</span>
                          </div>
                        </div>
                      </div>
                      <button className="ml-3 px-3 py-1 bg-black text-white text-xs font-medium rounded hover:bg-gray-800 transition-colors">
                        Pay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-[50%]">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Loans to Disperse</h3>
                
                {/* Due Today Section */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wider">Due Today</h4>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-md bg-gray-50 text-gray-800 border border-gray-200">
                      2 Items
                    </span>
                  </div>
                  <div className="space-y-2">
                                        <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">LN-2024-00148</span>
                            <span className="text-xs text-gray-600">Green Energy Ltd</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-500 w-16 text-right"></span>
                            <span className="text-sm font-semibold text-gray-900 w-24 text-right">R2,500,000</span>
                          </div>
                        </div>
                      </div>
                      <button className="ml-3 px-3 py-1 bg-black text-white text-xs font-medium rounded hover:bg-gray-800 transition-colors">
                        View
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">LN-2024-00154</span>
                            <span className="text-xs text-gray-600">Energy Solutions</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-500 w-16 text-right"></span>
                            <span className="text-sm font-semibold text-gray-900 w-24 text-right">R3,200,000</span>
                          </div>
                        </div>
                      </div>
                      <button className="ml-3 px-3 py-1 bg-black text-white text-xs font-medium rounded hover:bg-gray-800 transition-colors">
                        View
              </button>
                    </div>
                  </div>
                </div>

                {/* Due in the next 7 days Section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wider">Due in the next 7 days</h4>
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-md bg-gray-50 text-gray-800 border border-gray-200">
                      3 Items
                    </span>
                  </div>
                  <div className="space-y-2">
                                        <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">LN-2024-00149</span>
                            <span className="text-xs text-gray-600">Construction Pro</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-500 w-16 text-right">26/01/25</span>
                            <span className="text-sm font-semibold text-gray-900 w-24 text-right">R1,800,000</span>
                          </div>
                        </div>
                      </div>
                      <button className="ml-3 px-3 py-1 bg-black text-white text-xs font-medium rounded hover:bg-gray-800 transition-colors">
                        View
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">LN-2024-00150</span>
                            <span className="text-xs text-gray-600">Digital Marketing Inc</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-500 w-16 text-right">27/01/25</span>
                            <span className="text-sm font-semibold text-gray-900 w-24 text-right">R950,000</span>
                          </div>
                        </div>
                      </div>
                      <button className="ml-3 px-3 py-1 bg-black text-white text-xs font-medium rounded hover:bg-gray-800 transition-colors">
                        View
              </button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">LN-2024-00155</span>
                            <span className="text-xs text-gray-600">Manufacturing Plus</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-500 w-16 text-right">28/01/25</span>
                            <span className="text-sm font-semibold text-gray-900 w-24 text-right">R1,400,000</span>
                          </div>
                        </div>
                      </div>
                      <button className="ml-3 px-3 py-1 bg-black text-white text-xs font-medium rounded hover:bg-gray-800 transition-colors">
                        View
              </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 2x2 Grid of Charts (70%/30%) */}
          <div className="flex flex-col gap-6">
            {/* Row 1 */}
            <div className="flex gap-6 h-96">
              <div className="w-[70%]">
                {renderChart(loanScenarios[0], false)}
              </div>
              <div className="w-[30%]">
                {renderChart(loanScenarios[1], true)}
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex gap-6 h-96">
              <div className="w-[70%]">
                {renderChart(loanScenarios[2], false)}
              </div>
              <div className="w-[30%]">
                {renderChart(loanScenarios[3], true)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 