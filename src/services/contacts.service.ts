import { Contact, User } from "@/types"

export async function getContacts(): Promise<Contact[]> {
  const res = await fetch("/api/contacts")

  if (!res.ok) {
    throw new Error("Erro ao buscar contatos")
  }

  return res.json()
}

export async function getUsersStatus(): Promise<User[]> {
  const res = await fetch("/api/users")

  if (!res.ok) {
    throw new Error("Erro ao buscar status dos usuários")
  }

  return res.json()
}
