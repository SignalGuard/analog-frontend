'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Log = {
  id: string
  timestamp: string
  message: string
  level: 'info' | 'warning' | 'error' | 'critical'
}

const logs: Log[] = [
  { id: '1', timestamp: '2023-06-01 10:00:00', message: 'System startup', level: 'info' },
  { id: '2', timestamp: '2023-06-01 10:05:23', message: 'High CPU usage detected', level: 'warning' },
  { id: '3', timestamp: '2023-06-01 10:10:45', message: 'Database connection failed', level: 'error' },
  { id: '4', timestamp: '2023-06-01 10:15:12', message: 'Security breach detected', level: 'critical' },
  // Add more log entries as needed
]

export default function LogViewer() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterLevel, setFilterLevel] = useState('all')

  const filteredLogs = logs.filter(log => 
    log.message.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterLevel === 'all' || log.level === filterLevel)
  )

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Log Viewer</h2>
      <div className="flex gap-4 mb-4">
        <Input
          placeholder="Search logs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={filterLevel} onValueChange={setFilterLevel}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All levels</SelectItem>
            <SelectItem value="info">Info</SelectItem>
            <SelectItem value="warning">Warning</SelectItem>
            <SelectItem value="error">Error</SelectItem>
            <SelectItem value="critical">Critical</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Timestamp</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Level</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredLogs.map((log) => (
            <TableRow key={log.id}>
              <TableCell>{log.timestamp}</TableCell>
              <TableCell>{log.message}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold
                  ${log.level === 'info' ? 'bg-blue-100 text-blue-800' :
                    log.level === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                    log.level === 'error' ? 'bg-red-100 text-red-800' :
                    'bg-purple-100 text-purple-800'}`}>
                  {log.level}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

