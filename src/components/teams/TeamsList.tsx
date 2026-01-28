import { User } from "@/types"
import { TeamCard } from "./TeamCard"
import { Loading } from "../ui/Loading"
import { EmptyMessage } from "../messages/EmptyMessage"

interface TeamsListProps {
  users: User[]
  loading: boolean
  error: string | null
}

export function TeamsList({ users, loading, error }: TeamsListProps) {
  if (loading) {
    return <Loading text="Carregando equipe..." />
  }

  if (error) {
    return <p className="text-sm text-red-500">{error}</p>
  }

  if (users.length === 0) {
    return (
      <EmptyMessage title="Resultado Final" textParaph="Nenhum membro na equipe ainda." divText="Faça uma nova pesquisa" />
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map(user => (
        <TeamCard key={user.id} user={user} />
      ))}
    </div>
  )
}
