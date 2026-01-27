import { Contact } from "@/types";
import { Avatar } from "../ui/Avatar";

interface ChatHeaderProps {
  contact?: Contact | null;
}

export function ChatHeader({ contact }: ChatHeaderProps) {
  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center px-6 shadow-sm z-10">
      <div className="flex items-center gap-3">
        {contact?.profilePicture ? (
           <Avatar profilePicture={contact.profilePicture} name={contact.name} />
        ) : (
          <Avatar profilePicture="" name={contact ? contact.name : ""} />
        )}

        <div>
          {contact ? (
            <>
              <h3 className="font-semibold text-gray-800">
                {contact.name}
              </h3>
              <p className="text-xs text-gray-500">
                {contact.phoneNumber}
              </p>
            </>
          ) : (
            <>
              <h3 className="font-semibold text-gray-800">
                Selecione um contato
              </h3>
              <p className="text-xs text-gray-500">
                Para começar o atendimento
              </p>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
