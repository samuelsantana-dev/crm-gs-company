"use client"
import { useEffect, useRef, useState } from "react"
import { Campaign } from "@/types"
import { getCampaigns } from "@/services/campaigns.service"
import { CampaignsHeader } from "./CampaignsHeader"
import { CampaignReloadPopup } from "./CampaignReloadPopup"
import { CampaignEmptyState } from "./CampaignEmptyState"
import { CampaignCard } from "./CampaignCard"

export function CampaignsList() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showReloadPopup, setShowReloadPopup] = useState(false)
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 })

  const buttonRef = useRef<HTMLButtonElement>(null)

  const fetchCampaigns = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getCampaigns()
      setCampaigns(data)
      
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        setPopupPosition({
          top: rect.bottom + 8,
          left: rect.left - 300 + rect.width 
        })
      }
      
      setShowReloadPopup(true)
      
      setTimeout(() => {
        setShowReloadPopup(false)
      }, 3000)
      
    } catch {
      setError("Erro ao carregar campanhas")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCampaigns()
  }, [])


  return (
   <div className="flex flex-col h-full flex-1 border-l border-gray-200 bg-white">
      <CampaignsHeader
        loading={loading}
        onReload={fetchCampaigns}
        buttonRef={buttonRef}
      />

      {showReloadPopup && (
        <CampaignReloadPopup
          position={popupPosition}
          total={campaigns.length}
          onClose={() => setShowReloadPopup(false)}
        />
      )}

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {campaigns.length === 0 ? (
          <CampaignEmptyState
            loading={loading}
            error={error}
            onRetry={fetchCampaigns}
          />
        ) : (
          campaigns.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))
        )}
      </div>
    </div>
  );
}