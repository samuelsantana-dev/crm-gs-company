'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const menu = [
  { label: "Conversas", href: "/chat", icon: "💬" },
  { label: "Dashboard", href: "/dashboard", icon: "📊" },
  { label: "Equipe", href: "/dashboard/team", icon: "👥" },
  { label: "Campanhas", href: "/dashboard/campaigns", icon: "📣" },
]

export function SidebarNavigation() {
  const pathname = usePathname()

  return (
    <aside className="w-80 h-full border-r border-gray-200 bg-white flex flex-col shadow-sm z-10">
      <div className="p-4 border-b border-gray-100 bg-gray-50">
        <h2 className="text-xl font-bold text-gray-800">
          GS Company
        </h2>
        <p className="text-xs text-gray-500">
          Painel Administrativo
        </p>
      </div>

      <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
        {menu.map(item => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                p-4 flex items-center gap-3 cursor-pointer transition-colors
                ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "hover:bg-gray-50 text-gray-700"
                }
              `}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium text-sm">
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>

      <div className="border-t border-gray-100">
        <div className="p-4 text-xs text-gray-400">
          © 2026 • GS Company
        </div>
      </div>
    </aside>
  )
}
