import { useRef } from "react";

interface Props {
  loading: boolean
  onReload: () => void
  buttonRef: React.RefObject<HTMLButtonElement | null>
}

export function CampaignsHeader({ loading, onReload }: Props) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  return (
    <div className="px-5 py-4 border-b font-semibold text-gray-800 flex justify-between items-center">
      <span>📣 Campanhas</span>

      <button
        ref={buttonRef}
        onClick={onReload}
        disabled={loading}
        className="p-2 rounded-full hover:bg-gray-100 transition"
        title="Recarregar campanhas"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
        ) : (
          "🔄"
        )}
      </button>
    </div>
  )
}
