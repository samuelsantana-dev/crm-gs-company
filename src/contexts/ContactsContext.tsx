'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Contact } from '@/types';

interface ChatContextData {
  selectedContact: Contact | null;
  selectContact: (contact: Contact) => void;
}

const ChatContext = createContext<ChatContextData | null>(null);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  function selectContact(contact: Contact) {
    setSelectedContact(contact);
  }

  return (
    <ChatContext.Provider value={{ selectedContact, selectContact }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
