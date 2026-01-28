"use client"

import { SidebarNavigation } from "@/components/navigation/DashboardSidebar"
import TeamsDashboard from "@/components/teams/TeamDashboard"

export default function TeamsPage() {
  return (
    <div className="flex">
      <SidebarNavigation />
      <TeamsDashboard />
    </div>
    
  )
}
