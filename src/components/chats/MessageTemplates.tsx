"use client"

import { useEffect, useState } from "react"
import { Template } from "@/types"
import { getTemplates } from "@/services/message.service"

interface Props {
  onSelect: (content: string) => void
}

export function MessageTemplates({ onSelect }: Props) {
  const [templates, setTemplates] = useState<Template[]>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    async function fetchTemplates() {
      
      const data = await getTemplates()
      setTemplates(data)
    }
    fetchTemplates()
  }, [])

  function handleSelect(content: string) {
    onSelect(content)
    setOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:bg-gray-100 transition"
        title="Respostas rápidas"
      >
        ⚡
      </button>

      {open && (
        <div className="absolute bottom-12 right-0 w-72 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden animate-fade-in">
          <div className="px-4 py-2 text-sm font-semibold text-gray-600 border-b">
            Respostas rápidas
          </div>

          <div className="max-h-60 overflow-y-auto">
            {templates.length === 0 && (
              <p className="p-4 text-sm text-gray-400 text-center">
                Nenhum template cadastrado
              </p>
            )}

            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => handleSelect(template.content)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 transition"
              >
                <p className="text-sm font-medium text-gray-700">
                  {template.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {template.content}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
