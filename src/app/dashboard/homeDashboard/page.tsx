import Card from "@/components/ui/Card";

export default function HomeDashboard() {
  return (
    <div>
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm m-10">
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard Operacional
        </h1>
        <p className="text-gray-600 max-w-2xl mt-1">
          Este painel centraliza a gestão do atendimento, permitindo acompanhar
          equipes em tempo real, organizar filas, criar campanhas de disparo e
          analisar métricas de desempenho de forma clara e objetiva.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card
          title="Atendentes Online"
          description="Usuários disponíveis agora"
          icon="🟢"
        />
        <Card title="Conversas Ativas" description="Em atendimento" icon="💬" />
        <Card title="Filas" description="Departamentos ativos" icon="📋" />
        <Card title="Campanhas" description="Em andamento" icon="📢" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Visão Geral
        </h2>
        <p className="text-sm text-gray-500">
          Aqui você poderá visualizar gráficos, relatórios e indicadores de
          desempenho conforme o sistema evolui.
        </p>
      </div>
    </div>
  );
}
