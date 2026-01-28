"use client";
import { useChat } from '@/contexts/ContactsContext';
import { Message } from '@/types';
import { useEffect, useState } from 'react';
import { ChatHeader } from './messages/ChatHeader';
import { MessageBubble } from './messages/MessageBubble';
import { EmptyMessage } from './messages/EmptyMessage';
import { Loading } from './ui/Loading';
import { ChatInput } from './messages/ChatInput';
import { SendButton } from './messages/SendButton';
import { MessageTemplates } from './chats/MessageTemplates';
import { InternalNotes } from './contacts/InternalNotes';
import { getMessagesByContact, sendMessage } from '@/services/message.service';

export function ChatWindow() {
  const { selectedContact } = useChat();
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [messageText, setMessageText] = useState("");

 useEffect(() => {
   async function fetchMessageChat() {
     try {
       setLoading(true)
       setError(null)
       
       if (!selectedContact) return
      const data = await getMessagesByContact(selectedContact.id)
      setMessages(data)
    } catch (error) {
      setError("Erro ao buscar mensagens")
      console.error("Erro ao buscar mensagens:", error)
    } finally {
      setLoading(false)
    }
  }

  fetchMessageChat()
}, [selectedContact])
  
  async function handleSendMessage() {
    if (!messageText.trim() || !selectedContact) return;

    const newMessage: Message = {
      id: crypto.randomUUID(),
      contactId: selectedContact.id,
      content: messageText.trim(),
      timestamp: new Date().toISOString(),
      direction: "outbound",
      status: "sent",
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessageText("");

    try {
      setLoading(true);
      await sendMessage(newMessage)
    } catch (error) {
      console.error("Erro ao enviar mensagem", error);
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <div className="flex-1 flex flex-col h-full bg-[#efeae2] relative">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")',
        }}
      ></div>

      <ChatHeader contact={selectedContact} />

      <div className="flex-1 p-6 overflow-y-auto relative z-0">
        {!selectedContact && (
          <EmptyMessage
            title="GS Company Chat"
            textParaph="Selecione uma conversa ao lado para visualizar o histórico e
              enviar mensagens."
            divText=" Ambiente de Teste"
          />
        )}

        {selectedContact && loading && (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4">
            <Loading text="Carregando Mensagens..." />
          </div>
        )}

        {selectedContact && !loading && messages.length === 0 && (
          <EmptyMessage
            title="Nenhuma mensagem ainda"
            textParaph="Comece a conversar enviando a primeira mensagem!"
            divText="Ambiente de Teste"
          />
        )}

        {selectedContact && !loading && messages.length > 0 && (
          <div className="space-y-2">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
          </div>
        )}
      </div>

      <footer className="bg-white p-4 z-10">
        <div className="max-w-4xl mx-auto flex gap-4 items-end">
          <ChatInput
            value={messageText}
            onChange={setMessageText}
            onSend={handleSendMessage}
            disabled={!selectedContact}
          />

          <MessageTemplates onSelect={setMessageText} />
          <InternalNotes contactId={selectedContact?.id || ""} />
          <SendButton
            onClick={handleSendMessage}
            disabled={!selectedContact || !messageText.trim()}
          />
        </div>
      </footer>
    </div>
  );
}
