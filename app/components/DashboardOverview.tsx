'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: '00:00', logs: 4000, anomalies: 240 },
  { name: '04:00', logs: 3000, anomalies: 139 },
  { name: '08:00', logs: 2000, anomalies: 980 },
  { name: '12:00', logs: 2780, anomalies: 390 },
  { name: '16:00', logs: 1890, anomalies: 490 },
  { name: '20:00', logs: 2390, anomalies: 300 },
  { name: '23:59', logs: 3490, anomalies: 430 },
]

export default function DashboardOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Logs Processed</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,234,567</div>
          <p className="text-xs text-muted-foreground">+20.1% from last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Detected Anomalies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">23,456</div>
          <p className="text-xs text-muted-foreground">+15.2% from last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">System Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">98.7%</div>
          <p className="text-xs text-muted-foreground">+0.2% from last week</p>
        </CardContent>
      </Card>
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Data Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="logs" stroke="#8884d8" name="Logs" />
              <Line yAxisId="right" type="monotone" dataKey="anomalies" stroke="#82ca9d" name="Anomalies" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

