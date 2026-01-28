import { User } from "@/types"
import { Avatar } from "../ui/Avatar"

interface TeamCardProps {
  user: User
}

function mapRole(role: User["role"]) {
  const map = {
    admin: "Administrador",
    agent: "Atendente",
    supervisor: "Supervisor",
  }

  return map[role]
}

export function TeamCard({ user }: TeamCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <div className="relative">
          {user.avatar ? (
            <Avatar profilePicture={user.avatar} name={user.name} />
          ) : (
            <Avatar profilePicture="" name={user.name} />
          )}

          <span
            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
              user.isOnline ? "bg-green-500" : "bg-gray-400"
            }`}
            title={user.isOnline ? "Online" : "Offline"}
          />
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-800 truncate">
            {user.name}
          </p>
          <p className="text-xs text-gray-500 truncate">
            {user.email}
          </p>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
          {mapRole(user.role)}
        </span>

        <span
          className={`text-xs font-medium ${
            user.isOnline ? "text-green-600" : "text-gray-400"
          }`}
        >
          {user.isOnline ? "Online" : "Offline"}
        </span>
      </div>
    </div>
  )
}
