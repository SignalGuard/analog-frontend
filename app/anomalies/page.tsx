import AnomalyDetectionPanel from '../components/AnomalyDetectionPanel'
import AlertsNotificationsPanel from '../components/AlertsNotificationsPanel'

export default function AnomaliesPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Anomaly Detection and Alerts</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <AnomalyDetectionPanel />
        <AlertsNotificationsPanel />
      </div>
    </div>
  )
}

