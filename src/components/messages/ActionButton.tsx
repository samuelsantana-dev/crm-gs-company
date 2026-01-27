interface ActionButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export  function ActionButton({ onClick, children }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-gray-400 hover:text-gray-600 transition-colors"
      type="button"
    >
      {children}
    </button>
  );
}
