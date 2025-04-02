import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminDashboard from '../components/AdminDashboard'
import AnalystDashboard from '../components/AnalystDashboard'
import ViewerDashboard from '../components/ViewerDashboard'
import ProfileSettings from '../components/ProfileSettings'

export default function UserManagementPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <Tabs defaultValue="admin" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="admin">Admin Dashboard</TabsTrigger>
          <TabsTrigger value="analyst">Analyst Dashboard</TabsTrigger>
          <TabsTrigger value="viewer">Viewer Dashboard</TabsTrigger>
          <TabsTrigger value="profile">Profile Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="admin">
          <AdminDashboard />
        </TabsContent>
        <TabsContent value="analyst">
          <AnalystDashboard />
        </TabsContent>
        <TabsContent value="viewer">
          <ViewerDashboard />
        </TabsContent>
        <TabsContent value="profile">
          <ProfileSettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}

