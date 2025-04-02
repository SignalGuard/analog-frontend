'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AnomalyThresholds() {
  const [cpuThreshold, setCpuThreshold] = useState('90')
  const [memoryThreshold, setMemoryThreshold] = useState('85')
  const [diskThreshold, setDiskThreshold] = useState('95')
  const [networkThreshold, setNetworkThreshold] = useState('80')
  const [detectionSensitivity, setDetectionSensitivity] = useState('medium')

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log('Saving thresholds:', { cpuThreshold, memoryThreshold, diskThreshold, networkThreshold, detectionSensitivity })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Anomaly Detection Thresholds</CardTitle>
        <CardDescription>Configure thresholds for anomaly detection</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cpu-threshold">CPU Usage Threshold (%)</Label>
              <Input
                id="cpu-threshold"
                type="number"
                min="0"
                max="100"
                value={cpuThreshold}
                onChange={(e) => setCpuThreshold(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="memory-threshold">Memory Usage Threshold (%)</Label>
              <Input
                id="memory-threshold"
                type="number"
                min="0"
                max="100"
                value={memoryThreshold}
                onChange={(e) => setMemoryThreshold(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disk-threshold">Disk Usage Threshold (%)</Label>
              <Input
                id="disk-threshold"
                type="number"
                min="0"
                max="100"
                value={diskThreshold}
                onChange={(e) => setDiskThreshold(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="network-threshold">Network Usage Threshold (%)</Label>
              <Input
                id="network-threshold"
                type="number"
                min="0"
                max="100"
                value={networkThreshold}
                onChange={(e) => setNetworkThreshold(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="detection-sensitivity">Detection Sensitivity</Label>
            <Select value={detectionSensitivity} onValueChange={setDetectionSensitivity}>
              <SelectTrigger id="detection-sensitivity">
                <SelectValue placeholder="Select sensitivity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Save Thresholds</Button>
        </form>
      </CardContent>
    </Card>
  )
}

