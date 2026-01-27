import { EmptyStateProps } from "@/types";

export function EmptyState({
  title,
  description
}: EmptyStateProps) {
  return (
    <div className="p-8 text-center text-gray-500">
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs mt-1">{description}</p>
    </div>
  );
}
