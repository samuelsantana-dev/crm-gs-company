import { CampaignsList } from '@/components/campaing/CampaignsList';
import { SidebarNavigation } from '@/components/navigation/DashboardSidebar';

export default function Campaings() {
  return (
   <div className="flex h-screen">
      <SidebarNavigation />
      <CampaignsList />
    </div>
  );
}
