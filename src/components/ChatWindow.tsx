"use client";
import { useChat } from '@/contexts/ContactsContext';
import { Message } from '@/types';
import { useEffect, useState } from 'react';
import { ChatHeader } from './messages/ChatHeader';
import { MessageBubble } from './messages/MessageBubble';
import { EmptyMessage } from './messages/EmptyMessage';
import { Loading } from './ui/Loading';

export function ChatWindow() {
  const { selectedContact } = useChat();
  const [messages, setMessages] = useState<Message[]>([]);
   const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedContact) return;
    async function fetchMessageChat() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `/api/messages?contactId=${selectedContact?.id}`,
        );
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        const data = await response.json();
        console.log("🚀 ~ fetchMessageChat ~ data:", data)
        setMessages(data);
      } catch (error) {
        setError("Erro ao buscar mensagens");
        console.log("Erro ao buscar mensagens:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMessageChat();
  }, [selectedContact]);
  
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
          <EmptyMessage title='GS Company Chat' textParaph='Selecione uma conversa ao lado para visualizar o histórico e
              enviar mensagens.' divText=' Ambiente de Teste' />
        )}

        {selectedContact && loading && (
          <div className='flex flex-col items-center justify-center h-full text-gray-500 space-y-4'>
            <Loading text="Carregando Mensagens..." />
          </div>
        )}

        {selectedContact && !loading && messages.length === 0 && (
          <EmptyMessage title='Nenhuma mensagem ainda' textParaph='Comece a conversar enviando a primeira mensagem!' divText=' Ambiente de Teste' />
        )}

        {selectedContact && !loading && messages.length > 0 && (
          <div className="space-y-2">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
          </div>
        )}
      </div>

      {/* Input Area */}
      <footer className="bg-white p-4 z-10">
        <div className="max-w-4xl mx-auto flex gap-4 items-end">
          <div className="flex-1 bg-white border border-gray-300 rounded-2xl flex items-center gap-2 px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-shadow shadow-sm">
            <button className="text-gray-400 hover:text-gray-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Digite uma mensagem..."
              className="flex-1 py-2 bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
            />
            <button className="text-gray-400 hover:text-gray-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </button>
          </div>

          <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md flex-shrink-0">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}
