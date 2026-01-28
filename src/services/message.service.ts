import { Message, Template } from "@/types"

export async function sendMessage(message: Message): Promise<void> {
  const res = await fetch("/api/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  })

  if (!res.ok) {
    throw new Error("Erro ao enviar mensagem")
  }
}

export async function getMessagesByContact(
  contactId: string
): Promise<Message[]> {
  const res = await fetch(`/api/messages?contactId=${contactId}`)

  if (!res.ok) {
    throw new Error("Erro ao buscar mensagens")
  }

  return res.json()
}


export async function getTemplates(): Promise<Template[]> {
  const res = await fetch("/api/templates")

  if (!res.ok) {
    throw new Error("Erro ao buscar templates")
  }

  return res.json()
}
