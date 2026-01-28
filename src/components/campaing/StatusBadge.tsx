import { Campaign } from "@/types"

export function StatusBadge({
  status,
}: {
  status: Campaign["status"]
}) {
  const map = {
    draft: "bg-gray-100 text-gray-600",
    scheduled: "bg-yellow-100 text-yellow-700",
    running: "bg-blue-100 text-blue-700",
    completed: "bg-green-100 text-green-700",
    failed: "bg-red-100 text-red-700",
  }

  const labelMap = {
    draft: "Rascunho",
    scheduled: "Agendada",
    running: "Em andamento",
    completed: "Finalizada",
    failed: "Falhou",
  }

  return (
    <span
      className={`text-xs font-medium px-2 py-1 rounded-full ${map[status]}`}
    >
      {labelMap[status]}
    </span>
  )
}
