import { Campaign } from "@/types"
import { StatusBadge } from "./StatusBadge"

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  const progress =
    campaign.stats.total === 0
      ? 0
      : Math.round((campaign.stats.sent / campaign.stats.total) * 100)

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-blue-300">
      <div className="flex justify-between">
        <div>
          <p className="font-medium text-gray-800">{campaign.name}</p>
          <p className="text-xs text-gray-400">
            {new Date(campaign.createdAt).toLocaleDateString("pt-BR")}
          </p>
        </div>

        <StatusBadge status={campaign.status} />
      </div>

      <div className="mt-3">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>
            {campaign.stats.sent}/{campaign.stats.total}
          </span>
          <span>{progress}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="h-2 bg-blue-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
