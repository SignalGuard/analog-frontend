import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AnalystDashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analyst Dashboard</CardTitle>
        <CardDescription>Access and analyze anomaly data</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Anomalies</CardTitle>
            </CardHeader>
            <CardContent>
              <p>You have 5 new anomalies to review.</p>
              <Button className="mt-2">Review Anomalies</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Data Analysis Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access advanced data analysis tools.</p>
              <Button className="mt-2">Open Analysis Suite</Button>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}

