'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

type Alert = {
  id: string
  message: string
  timestamp: string
  severity: 'low' | 'medium' | 'high'
  status: 'new' | 'acknowledged' | 'resolved'
}

const initialAlerts: Alert[] = [
  { id: '1', message: 'High CPU usage detected', timestamp: '2023-06-05 10:30:00', severity: 'high', status: 'new' },
  { id: '2', message: 'Memory usage above 90%', timestamp: '2023-06-05 11:15:00', severity: 'medium', status: 'new' },
  { id: '3', message: 'Disk space running low', timestamp: '2023-06-05 12:00:00', severity: 'low', status: 'new' },
]

export default function AlertsNotificationsPanel() {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)

  const handleAlertAction = (id: string, action: 'acknowledge' | 'resolve') => {
    setAlerts(prevAlerts =>
      prevAlerts.map(alert =>
        alert.id === id
          ? { ...alert, status: action === 'acknowledge' ? 'acknowledged' : 'resolved' }
          : alert
      )
    )
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Alerts and Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Alert</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alerts.map((alert) => (
              <TableRow key={alert.id}>
                <TableCell>
                  <div>{alert.message}</div>
                  <div className="text-sm text-gray-500">{alert.timestamp}</div>
                </TableCell>
                <TableCell>
                  <Badge variant={alert.severity === 'high' ? 'destructive' : alert.severity === 'medium' ? 'warning' : 'secondary'}>
                    {alert.severity}
                  </Badge>
                </TableCell>
                <TableCell>{alert.status}</TableCell>
                <TableCell>
                  {alert.status === 'new' && (
                    <>
                      <Button size="sm" variant="outline" className="mr-2" onClick={() => handleAlertAction(alert.id, 'acknowledge')}>
                        Acknowledge
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleAlertAction(alert.id, 'resolve')}>
                        Resolve
                      </Button>
                    </>
                  )}
                  {alert.status === 'acknowledged' && (
                    <Button size="sm" variant="outline" onClick={() => handleAlertAction(alert.id, 'resolve')}>
                      Resolve
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Notification Settings</h3>
          <div className="flex items-center space-x-2">
            <Switch
              id="email-notifications"
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
            <Label htmlFor="email-notifications">Email Notifications</Label>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <Switch
              id="sms-notifications"
              checked={smsNotifications}
              onCheckedChange={setSmsNotifications}
            />
            <Label htmlFor="sms-notifications">SMS Notifications</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

