import { LoadingProps } from "@/types";

export function Loading({ text }: LoadingProps) {
  return (
    <div className="p-6 flex flex-col items-center justify-center gap-3 text-gray-500">
      <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
      <span className="text-sm">{text}</span>
    </div>
  );
}
