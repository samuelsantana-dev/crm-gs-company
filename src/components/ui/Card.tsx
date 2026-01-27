export default function Card({ title, description, icon }: { title: string, description: string, icon: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}