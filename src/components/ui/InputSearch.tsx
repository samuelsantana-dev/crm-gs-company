import { InputProps } from "@/types";

export function Input({ label, placeholder, onChange }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-xs font-medium text-gray-600">{label}</label>
      )}

      <div className="relative">
        <input
          className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all"
          placeholder={placeholder || "Digite aqui..."}
          onChange={(e) => onChange?.(e.target.value)}
        />

        <svg
          className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}
