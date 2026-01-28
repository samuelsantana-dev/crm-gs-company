"use client"

import { useEffect, useState } from "react"
import { Note } from "@/types"
import { createNote, getNotesByContact } from "@/services/notes.service"

interface Props {
  contactId: string
}

export function InternalNotes({ contactId }: Props) {
  const [notes, setNotes] = useState<Note[]>([])
  const [text, setText] = useState("")
  const [open, setOpen] = useState(false)

 useEffect(() => {
  if (!open) return
  if (!contactId) return

  async function fetchNotes() {
    try {
      const data = await getNotesByContact(contactId)
      setNotes(data)
    } catch (error) {
      console.error("Erro ao buscar notas:", error)
    }
  }

  fetchNotes()
}, [contactId, open])

  async function handleAddNote() {
    if (!text.trim()) return;

    const newNote = await createNote({
      contactId,
      content: text,
    });
    setNotes((prev) => [newNote, ...prev]);
    setText("");
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:bg-gray-100 transition"
        title="Notas internas"
      >
        📝
      </button>

      {open && (
        <div className="absolute bottom-12 right-0 w-80 bg-white border border-gray-200 rounded-xl shadow-lg animate-fade-in">
          <div className="px-4 py-3 border-b text-sm font-semibold text-gray-700">
            Notas internas
          </div>

          <div className="p-4 border-b">
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Escreva uma nota privada..."
              className="w-full border border-gray-300 rounded-lg p-2 text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows={3}
            />

            <button
              onClick={handleAddNote}
              className="mt-2 w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Salvar nota
            </button>
          </div>

          <div className="max-h-60 overflow-y-auto">
            {notes.length === 0 && (
              <p className="p-4 text-sm text-gray-400 text-center">
                Nenhuma nota ainda
              </p>
            )}

            {notes.map(note => (
              <div
                key={note.id}
                className="px-4 py-3 border-b last:border-b-0"
              >
                <p className="text-sm text-gray-700">
                  {note.content}
                </p>
                <span className="text-xs text-gray-400">
                  {new Date(note.createdAt).toLocaleString("pt-BR")}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
