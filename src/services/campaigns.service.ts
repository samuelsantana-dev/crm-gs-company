import { Campaign } from "@/types"

export async function getCampaigns(): Promise<Campaign[]> {
  const res = await fetch("/api/campaigns")
  if (!res.ok) {
    throw new Error("Erro ao buscar campanhas")
  }
  return res.json()
}
