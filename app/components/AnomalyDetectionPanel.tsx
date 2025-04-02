'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from 'recharts'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const anomalyData = [
  { name: 'Network', value: 400 },
  { name: 'CPU', value: 300 },
  { name: 'Memory', value: 200 },
  { name: 'Disk', value: 100 },
]

const historyData = [
  { date: '2023-06-01', resolved: 5, unresolved: 2 },
  { date: '2023-06-02', resolved: 3, unresolved: 1 },
  { date: '2023-06-03', resolved: 4, unresolved: 3 },
  { date: '2023-06-04', resolved: 7, unresolved: 0 },
  { date: '2023-06-05', resolved: 2, unresolved: 4 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const anomalyDescriptions = [
  {
    id: '1',
    title: 'Unusual Network Traffic Spike',
    description: 'Detected an abnormal increase in network traffic, potentially indicating a DDoS attack or unauthorized data transfer.',
    impact: 'May lead to service disruptions or data breaches if not addressed promptly.',
  },
  {
    id: '2',
    title: 'CPU Usage Anomaly',
    description: 'Observed sustained high CPU usage outside of normal operational patterns.',
    impact: 'Could result in system slowdowns, increased response times, or service outages.',
  },
  {
    id: '3',
    title: 'Memory Leak Detected',
    description: 'Identified a gradual increase in memory usage without corresponding release, suggesting a potential memory leak.',
    impact: 'May cause system instability, crashes, or degraded performance over time.',
  },
]

export default function AnomalyDetectionPanel() {
  const [expandedAnomalies, setExpandedAnomalies] = useState<string[]>([])

  const toggleAnomaly = (anomalyId: string) => {
    setExpandedAnomalies(prev =>
      prev.includes(anomalyId)
        ? prev.filter(id => id !== anomalyId)
        : [...prev, anomalyId]
    )
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Anomaly Detection Panel</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Anomaly Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={anomalyData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {anomalyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Anomaly History</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={historyData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="resolved" stackId="a" fill="#82ca9d" />
                <Bar dataKey="unresolved" stackId="a" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Detailed Anomaly Descriptions</h3>
          <Accordion type="single" collapsible className="w-full">
            {anomalyDescriptions.map((anomaly) => (
              <AccordionItem value={anomaly.id} key={anomaly.id}>
                <AccordionTrigger>{anomaly.title}</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">{anomaly.description}</p>
                  <p className="font-semibold">Potential Impact:</p>
                  <p>{anomaly.impact}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  )
}

