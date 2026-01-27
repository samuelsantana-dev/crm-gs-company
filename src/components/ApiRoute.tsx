export function ApiRoute({ method, path, desc }: { method: string, path: string, desc: string }) {
  const color = method === 'GET' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700';
  return (
    <li className="flex items-start gap-3 text-sm">
      <span className={`font-mono text-xs px-2 py-0.5 rounded ${color} font-bold min-w-[50px] text-center`}>
        {method}
      </span>
      <div>
        <a href={path} target="_blank" className="font-mono text-gray-800 hover:underline hover:text-blue-600 block">
          {path}
        </a>
        <span className="text-gray-500 text-xs">{desc}</span>
      </div>
    </li>
  );
}