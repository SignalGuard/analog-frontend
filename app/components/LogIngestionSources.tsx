'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

type LogSource = {
  id: string
  name: string
  path: string
  enabled: boolean
}

export default function LogIngestionSources() {
  const [logSources, setLogSources] = useState<LogSource[]>([
    { id: '1', name: 'System Logs', path: '/var/log/syslog', enabled: true },
    { id: '2', name: 'Application Logs', path: '/var/log/app.log', enabled: true },
    { id: '3', name: 'Security Logs', path: '/var/log/auth.log', enabled: false },
  ])
  const [newSourceName, setNewSourceName] = useState('')
  const [newSourcePath, setNewSourcePath] = useState('')

  const handleToggleSource = (id: string) => {
    setLogSources(sources =>
      sources.map(source =>
        source.id === id ? { ...source, enabled: !source.enabled } : source
      )
    )
  }

  const handleAddSource = (e: React.FormEvent) => {
    e.preventDefault()
    if (newSourceName && newSourcePath) {
      setLogSources([...logSources, {
        id: Date.now().toString(),
        name: newSourceName,
        path: newSourcePath,
        enabled: true
      }])
      setNewSourceName('')
      setNewSourcePath('')
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Log Ingestion Sources</CardTitle>
        <CardDescription>Configure log sources for ingestion</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {logSources.map(source => (
            <div key={source.id} className="flex items-center space-x-2">
              <Checkbox
                id={`source-${source.id}`}
                checked={source.enabled}
                onCheckedChange={() => handleToggleSource(source.id)}
              />
              <Label htmlFor={`source-${source.id}`} className="flex-grow">
                {source.name} ({source.path})
              </Label>
            </div>
          ))}
        </div>
        <form onSubmit={handleAddSource} className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="new-source-name">New Source Name</Label>
            <Input
              id="new-source-name"
              value={newSourceName}
              onChange={(e) => setNewSourceName(e.target.value)}
              placeholder="Enter source name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-source-path">New Source Path</Label>
            <Input
              id="new-source-path"
              value={newSourcePath}
              onChange={(e) => setNewSourcePath(e.target.value)}
              placeholder="Enter source path"
            />
          </div>
          <Button type="submit">Add New Source</Button>
        </form>
      </CardContent>
    </Card>
  )
}

