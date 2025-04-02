import DashboardOverview from './components/DashboardOverview'
import LogViewer from './components/LogViewer'

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Anomaly Detection Dashboard</h1>
      <DashboardOverview />
      <LogViewer />
    </div>
  )
}

