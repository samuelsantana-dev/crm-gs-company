"use client"

import { useEffect, useState } from "react"
import { User } from "@/types"
import { getUsersStatus } from "@/services/contacts.service"
import { TeamsList } from "@/components/teams/TeamsList"

export default function TeamsDashboard() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true)
        setError(null)
        const data = await getUsersStatus()
        setUsers(data)
      } catch {
        setError("Erro ao carregar equipe")
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div>
        <div className="p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-800">👥 Equipe</h1>
        <p className="text-sm text-gray-500">
          Visualize quem está online e gerencie sua equipe
        </p>
      </header>

      <TeamsList users={users} loading={loading} error={error} />
    </div>
   
    </div>
    
  )
}
