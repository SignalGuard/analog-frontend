'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type ApiKey = {
  id: string
  name: string
  key: string
  createdAt: string
}

export default function ApiKeyManagement() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    { id: '1', name: 'Production API', key: 'prod_api_key_123', createdAt: '2023-06-01' },
    { id: '2', name: 'Development API', key: 'dev_api_key_456', createdAt: '2023-06-02' },
  ])
  const [newKeyName, setNewKeyName] = useState('')

  const handleCreateKey = (e: React.FormEvent) => {
    e.preventDefault()
    if (newKeyName) {
      const newKey: ApiKey = {
        id: Date.now().toString(),
        name: newKeyName,
        key: `api_key_${Math.random().toString(36).substr(2, 9)}`,
        createdAt: new Date().toISOString().split('T')[0]
      }
      setApiKeys([...apiKeys, newKey])
      setNewKeyName('')
    }
  }

  const handleDeleteKey = (id: string) => {
    setApiKeys(apiKeys.filter(key => key.id !== id))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Key Management</CardTitle>
        <CardDescription>Manage API keys for third-party integrations</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>API Key</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apiKeys.map((apiKey) => (
              <TableRow key={apiKey.id}>
                <TableCell>{apiKey.name}</TableCell>
                <TableCell>{apiKey.key}</TableCell>
                <TableCell>{apiKey.createdAt}</TableCell>
                <TableCell>
                  <Button variant="destructive" size="sm" onClick={() => handleDeleteKey(apiKey.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <form onSubmit={handleCreateKey} className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="new-key-name">New API Key Name</Label>
            <Input
              id="new-key-name"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              placeholder="Enter API key name"
            />
          </div>
          <Button type="submit">Create New API Key</Button>
        </form>
      </CardContent>
    </Card>
  )
}

