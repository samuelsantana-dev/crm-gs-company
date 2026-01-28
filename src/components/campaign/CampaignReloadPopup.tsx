interface Props {
  position: { top: number; left: number }
  total: number
  onClose: () => void
}

export function CampaignReloadPopup({ position, total, onClose }: Props) {
  return (
    <div
      className="fixed z-50 bg-white border border-gray-200 rounded-xl shadow-lg"
      style={{ top: position.top, left: position.left, width: 300 }}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium text-gray-800">
            Campanhas Atualizadas
          </h3>
          <button onClick={onClose}>✕</button>
        </div>

        <p className="text-sm text-gray-600">
          {total === 1
            ? "1 campanha carregada com sucesso"
            : `${total} campanhas carregadas com sucesso`}
        </p>
      </div>
    </div>
  )
}
