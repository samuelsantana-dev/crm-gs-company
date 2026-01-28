'use client';

import { Contact } from "@/types";
import { useEffect, useState } from "react";
import { ContactsList } from "./contacts/Contact";
import { Loading } from "./ui/Loading";
import { AlertError } from "./ui/AlertError";
import { EmptyState } from "./ui/EmptyState";
import { FooterSidebar } from "./FooterSidebar";
import { Input } from "./ui/InputSearch";
import { useChat } from '@/contexts/ContactsContext';
import { getContacts } from "@/services/contacts.service"
import Link from "next/link";

export function Sidebar() {
  const { selectContact } = useChat();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

useEffect(() => {
  async function fetchContacts() {
    try {
      setLoading(true);
      setError(null);

      const data = await getContacts();
      setContacts(data);
    } catch (error) {
      setError("Erro ao buscar contatos");
      console.error("Erro ao buscar contatos:", error);
    } finally {
      setLoading(false);
    }
  }

  fetchContacts();
}, []);


  const filteredContacts = contacts.filter((contactsFilter) =>
    contactsFilter.name
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase()),
  );
  return (
    <aside className="w-80 h-full border-r border-gray-200 bg-white flex flex-col shadow-sm z-10">
      <div className="p-4 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center justify-between mb-4">
          <Link href="/dashboard">
            <h2>Dashboard</h2>
          </Link>
          <h2 className="text-xl font-bold text-gray-800">Conversas</h2>
          <span className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
            {contacts.length} Ativas
          </span>
        </div>

        <div className="relative">
         <Input
            placeholder="Buscar contato..."
            onChange={setSearch}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar divide-y divide-gray-50">
        {loading && <Loading text="Carregando contatos..." />}

        {error && <AlertError message={error} />}

        {!loading && !error && filteredContacts.length === 0 && (
          <EmptyState
            title="Nenhum contato encontrado"
            description="Tente ajustar sua busca"
          />
        )}

        {!loading && !error && filteredContacts.length > 0 && (
          <ContactsList
            contacts={filteredContacts}
            onSelect={(contact) =>
              selectContact(contact)
            }
          />
        )}
      </div>

      <FooterSidebar />
    </aside>
  );
}
