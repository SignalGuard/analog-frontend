'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function VisualizationPreferences() {
  const [darkMode, setDarkMode] = useState(false)
  const [chartType, setChartType] = useState('line')
  const [refreshRate, setRefreshRate] = useState('30')

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log('Saving preferences:', { darkMode, chartType, refreshRate })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Visualization Preferences</CardTitle>
        <CardDescription>Customize your dashboard appearance</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSave} className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode">Dark Mode</Label>
            <Switch
              id="dark-mode"
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="chart-type">Default Chart Type</Label>
            <Select value={chartType} onValueChange={setChartType}>
              <SelectTrigger id="chart-type">
                <SelectValue placeholder="Select chart type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="line">Line Chart</SelectItem>
                <SelectItem value="bar">Bar Chart</SelectItem>
                <SelectItem value="pie">Pie Chart</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="refresh-rate">Dashboard Refresh Rate (seconds)</Label>
            <Select value={refreshRate} onValueChange={setRefreshRate}>
              <SelectTrigger id="refresh-rate">
                <SelectValue placeholder="Select refresh rate" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10 seconds</SelectItem>
                <SelectItem value="30">30 seconds</SelectItem>
                <SelectItem value="60">1 minute</SelectItem>
                <SelectItem value="300">5 minutes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Save Preferences</Button>
        </form>
      </CardContent>
    </Card>
  )
}

