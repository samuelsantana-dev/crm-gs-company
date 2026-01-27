interface SendButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function SendButton({ onClick, disabled }: SendButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        bg-blue-600 text-white p-3 rounded-full
        hover:bg-blue-700 transition-all
        transform hover:scale-105
        shadow-md flex-shrink-0
        disabled:opacity-50 disabled:cursor-not-allowed
      "
      title="Send Button"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    </button>
  );
}
