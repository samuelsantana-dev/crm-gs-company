import { EmptyMessage } from "../messages/EmptyMessage"
import { Loading } from "../ui/Loading"

interface Props {
  loading: boolean
  error: string | null
  onRetry: () => void
}

export function CampaignEmptyState({ loading, error, onRetry }: Props) {
  if (loading) {
    return (
      <Loading text="Carregando campanhas..." />
    )
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-3">{error}</p>
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Tentar novamente
        </button>
      </div>
    )
  }

  return (
    <EmptyMessage title="Nenhuma campanha encontrada" textParaph="Nenhuma campanha encontrada." divText="Crie uma nova campanha" />
  )
}
