import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnomalyThresholds from '../components/AnomalyThresholds'
import LogIngestionSources from '../components/LogIngestionSources'
import VisualizationPreferences from '../components/VisualizationPreferences'
import ApiKeyManagement from '../components/ApiKeyManagement'

export default function CustomConfigurationsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Custom Configurations</h1>
      <Tabs defaultValue="thresholds" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="thresholds">Anomaly Thresholds</TabsTrigger>
          <TabsTrigger value="ingestion">Log Ingestion</TabsTrigger>
          <TabsTrigger value="visualization">Visualization</TabsTrigger>
          <TabsTrigger value="api">API Keys</TabsTrigger>
        </TabsList>
        <TabsContent value="thresholds">
          <AnomalyThresholds />
        </TabsContent>
        <TabsContent value="ingestion">
          <LogIngestionSources />
        </TabsContent>
        <TabsContent value="visualization">
          <VisualizationPreferences />
        </TabsContent>
        <TabsContent value="api">
          <ApiKeyManagement />
        </TabsContent>
      </Tabs>
    </div>
  )
}

