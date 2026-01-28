import { Note } from "@/types"

interface CreateNotePayload {
  contactId: string
  content: string
}

export async function createNote(
  payload: CreateNotePayload
): Promise<Note> {
  const res = await fetch("/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })

  if (!res.ok) {
    throw new Error("Erro ao criar nota")
  }

  return res.json()
}

export async function getNotesByContact(
  contactId: string
): Promise<Note[]> {
  const res = await fetch(`/api/notes?contactId=${contactId}`)

  if (!res.ok) {
    throw new Error("Erro ao buscar notas")
  }

  return res.json()
}
