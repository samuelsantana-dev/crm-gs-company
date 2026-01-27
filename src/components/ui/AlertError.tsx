import { AlertErrorProps } from "@/types";

export function AlertError({ message, messageError }: AlertErrorProps) {
  return (
    <div className="m-4 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
      <p className="text-sm font-medium">{messageError}</p>
      <p className="text-xs mt-1">{message}</p>
    </div>
  );
}
