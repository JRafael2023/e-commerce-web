import { useNavigate } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader.jsx'
import '../../components/common/PageHeader.css'
import './Dashboard.css'

const stats = [
  { icon: 'fa-solid fa-truck-fast',     label: 'Pedidos Entrantes', value: 12,  color: '#0074FF', bg: 'rgba(0,116,255,0.10)',   to: '/admin/pedidos-entrantes' },
  { icon: 'fa-solid fa-circle-check',   label: 'Atendidos Hoy',    value: 8,   color: '#249689', bg: 'rgba(36,150,137,0.10)',  to: '/admin/pedidos-atendidos' },
  { icon: 'fa-solid fa-star',           label: 'Calificados',      value: 5,   color: '#FFCF13', bg: 'rgba(255,207,19,0.15)',  to: '/admin/pedidos-calificados' },
  { icon: 'fa-solid fa-box',            label: 'Productos',        value: 148, color: '#EE8B60', bg: 'rgba(238,139,96,0.12)',  to: '/admin/productos' },
  { icon: 'fa-solid fa-users',          label: 'Clientes',         value: 234, color: '#52489C', bg: 'rgba(82,72,156,0.12)',   to: '/admin/clientes' },
  { icon: 'fa-solid fa-bullhorn',       label: 'Promociones',      value: 7,   color: '#59C3C3', bg: 'rgba(89,195,195,0.15)',  to: '/admin/promociones' },
]

const recentOrders = [
  { id: '#001', cliente: 'Juan Pérez',    monto: 'S/ 120.00', estado: 'Entrante',  fecha: '25/04/2026' },
  { id: '#002', cliente: 'María García',  monto: 'S/ 85.50',  estado: 'Atendido',  fecha: '25/04/2026' },
  { id: '#003', cliente: 'Carlos López',  monto: 'S/ 210.00', estado: 'Calificado',fecha: '24/04/2026' },
  { id: '#004', cliente: 'Ana Torres',    monto: 'S/ 56.00',  estado: 'Atendido',  fecha: '24/04/2026' },
  { id: '#005', cliente: 'Luis Ramírez',  monto: 'S/ 320.75', estado: 'Entrante',  fecha: '23/04/2026' },
]

const statusClass = { 'Entrante': 'info', 'Atendido': 'active', 'Calificado': 'pending' }

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="Resumen general del sistema"
      />

      {/* Stat cards */}
      <div className="dashboard-stats">
        {stats.map(s => (
          <div
            key={s.label}
            className="stat-card"
            onClick={() => navigate(s.to)}
            style={{ '--stat-color': s.color, '--stat-bg': s.bg }}
          >
            <div className="stat-card__icon">
              <i className={s.icon} />
            </div>
            <div className="stat-card__info">
              <span className="stat-card__value">{s.value}</span>
              <span className="stat-card__label">{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent orders */}
      <div className="card" style={{ marginTop: 24 }}>
        <div className="toolbar" style={{ marginBottom: 16 }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 17, fontWeight: 600 }}>
            Pedidos Recientes
          </h3>
          <button className="btn btn-secondary-sm" onClick={() => navigate('/admin/pedidos')}>
            Ver todos <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Monto</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(o => (
                <tr key={o.id}>
                  <td><strong>{o.id}</strong></td>
                  <td>{o.cliente}</td>
                  <td>{o.monto}</td>
                  <td><span className={`status-badge ${statusClass[o.estado]}`}>{o.estado}</span></td>
                  <td className="text-secondary">{o.fecha}</td>
                  <td>
                    <button className="btn-icon" onClick={() => navigate('/admin/pedidos/1')}>
                      <i className="fa-solid fa-eye" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
