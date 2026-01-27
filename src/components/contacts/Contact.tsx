import { Contact } from '@/types/';

interface ContactsListProps {
  contacts: Contact[];
  isLoading?: boolean;
  onSelect?: (contact: Contact) => void;
}

export function ContactsList({
  contacts,
  isLoading = false,
  onSelect
}: ContactsListProps) {

  return (
    <div className="divide-y divide-gray-50">
      {contacts.map(contact => (
        <div
          key={contact.id}
          onClick={() => onSelect?.(contact)}
          className="p-4 hover:bg-gray-50 cursor-pointer transition-colors flex gap-3 items-center"
        >
          {contact.profilePicture ? (
            <img
              src={contact.profilePicture}
              alt={contact.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
              {contact.name.charAt(0)}
            </div>
          )}

          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm text-gray-800 truncate">
              {contact.name}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {contact.lastMessage?.content || 'Sem mensagens ainda'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
