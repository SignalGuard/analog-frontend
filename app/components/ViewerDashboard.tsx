import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ViewerDashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Viewer Dashboard</CardTitle>
        <CardDescription>View system status and reports</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p>All systems are operating normally.</p>
              <Button className="mt-2">View Details</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p>3 new reports are available.</p>
              <Button className="mt-2">View Reports</Button>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}

