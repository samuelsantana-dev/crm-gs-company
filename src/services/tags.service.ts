import { Tag } from "@/types"

export async function addTagToContact(
  contactId: string,
  tagId: string
): Promise<Tag> {
  const res = await fetch("/api/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contactId, tagId })
  })

  if (!res.ok) {
    throw new Error("Erro ao adicionar etiqueta")
  }

  return res.json()
}

export async function removeTagFromContact(
  contactId: string,
  tagId: string
) {
  await fetch("/api/tags", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contactId, tagId })
  })
}
