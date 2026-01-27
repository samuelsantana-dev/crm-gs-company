import { ActionButton } from '@/components/messages/ActionButton';
interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled?: boolean;
}

export function ChatInput({
  value,
  onChange,
  onSend,
  disabled,
}: ChatInputProps) {
  return (
    <div className="
      flex-1 bg-white border border-gray-300 rounded-2xl
      flex items-center gap-2 px-4 py-2
      focus-within:ring-2 focus-within:ring-blue-500
      transition-shadow shadow-sm
    ">
      <ActionButton>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </ActionButton>

      <input
        type="text"
        value={value}
        disabled={disabled}
        placeholder="Digite uma mensagem..."
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSend()}
        className="
          flex-1 py-2 bg-transparent focus:outline-none
          text-gray-700 placeholder-gray-400
          disabled:cursor-not-allowed
        "
      />

      <ActionButton>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586
               a4 4 0 00-5.656-5.656l-6.415 6.585
               a6 6 0 108.486 8.486L20.5 13"
          />
        </svg>
      </ActionButton>
    </div>
  );
}
