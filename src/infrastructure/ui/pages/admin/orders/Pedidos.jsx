import { useNavigate } from 'react-router-dom'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

const tabs = [
  { label: 'Todos',       to: '/admin/pedidos',             icon: 'fa-clipboard-list', count: 30 },
  { label: 'Entrantes',   to: '/admin/pedidos-entrantes',   icon: 'fa-truck-fast',     count: 12 },
  { label: 'Atendidos',   to: '/admin/pedidos-atendidos',   icon: 'fa-circle-check',   count: 8 },
  { label: 'Calificados', to: '/admin/pedidos-calificados', icon: 'fa-star',           count: 5 },
  { label: 'Por Cliente', to: '/admin/pedidos-clientes',    icon: 'fa-users',          count: null },
]

const mockPedidos = [
  { id: '#P001', cliente: 'Juan Pérez',    monto: 'S/ 120.00', estado: 'Entrante',  fecha: '25/04/2026', items: 3 },
  { id: '#P002', cliente: 'María García',  monto: 'S/ 85.50',  estado: 'Atendido',  fecha: '25/04/2026', items: 2 },
  { id: '#P003', cliente: 'Carlos López',  monto: 'S/ 210.00', estado: 'Calificado',fecha: '24/04/2026', items: 5 },
  { id: '#P004', cliente: 'Ana Torres',    monto: 'S/ 56.00',  estado: 'Atendido',  fecha: '24/04/2026', items: 1 },
  { id: '#P005', cliente: 'Luis Ramírez',  monto: 'S/ 320.75', estado: 'Entrante',  fecha: '23/04/2026', items: 7 },
]

const sc = { 'Entrante': 'info', 'Atendido': 'active', 'Calificado': 'pending' }

export default function Pedidos() {
  const navigate = useNavigate()

  return (
    <div>
      <PageHeader title="Pedidos" subtitle="Gestión general de pedidos" />

      <div className="orders-tabs">
        {tabs.map(t => (
          <button key={t.to} className="orders-tab" onClick={() => navigate(t.to)}>
            <i className={`fa-solid ${t.icon}`} />
            {t.label}
            {t.count && <span className="badge">{t.count}</span>}
          </button>
        ))}
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <div className="toolbar">
          <div className="toolbar__left">
            <div className="search-bar">
              <i className="fa-solid fa-magnifying-glass" />
              <input placeholder="Buscar pedido o cliente..." />
            </div>
          </div>
          <div className="toolbar__right">
            <button className="btn btn-secondary-sm"><i className="fa-solid fa-filter" /> Filtrar</button>
            <button className="btn btn-secondary-sm"><i className="fa-solid fa-file-excel" /> Exportar</button>
          </div>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>ID</th><th>Cliente</th><th>Ítems</th><th>Monto</th><th>Estado</th><th>Fecha</th><th>Acciones</th></tr>
            </thead>
            <tbody>
              {mockPedidos.map(p => (
                <tr key={p.id}>
                  <td><strong>{p.id}</strong></td>
                  <td>{p.cliente}</td>
                  <td>{p.items}</td>
                  <td>{p.monto}</td>
                  <td><span className={`status-badge ${sc[p.estado]}`}>{p.estado}</span></td>
                  <td className="text-secondary">{p.fecha}</td>
                  <td>
                    <div className="flex gap-2">
                      <button className="btn-icon" onClick={() => navigate('/admin/pedidos/1')}><i className="fa-solid fa-eye" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .orders-tabs { display: flex; gap: 8px; flex-wrap: wrap; }
        .orders-tab {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 0 16px; height: 40px;
          background: var(--bg-secondary); border: 1px solid var(--line-color);
          border-radius: var(--border-radius-sm); font-size: 14px;
          color: var(--text-primary); cursor: pointer; transition: var(--transition);
        }
        .orders-tab:hover { background: var(--primary); color: #fff; border-color: var(--primary); }
      `}</style>
    </div>
  )
}
