import { Contact } from "@/types"

export async function getContacts(): Promise<Contact[]> {
  const res = await fetch("/api/contacts")

  if (!res.ok) {
    throw new Error("Erro ao buscar contatos")
  }

  return res.json()
}
