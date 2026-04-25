import PageHeader from '../../components/common/PageHeader.jsx'
import '../../components/common/PageHeader.css'
import './Notificaciones.css'

const mockNoti = [
  { id: 1, tipo: 'pedido',     msg: 'Nuevo pedido #P006 de Sofía Vega',         tiempo: 'hace 5 min',   leido: false },
  { id: 2, tipo: 'pedido',     msg: 'Nuevo pedido #P007 de Pedro Salas',         tiempo: 'hace 12 min',  leido: false },
  { id: 3, tipo: 'stock',      msg: 'Stock bajo: Detergente 2kg (12 unidades)',  tiempo: 'hace 1 hora',  leido: false },
  { id: 4, tipo: 'calificado', msg: 'Pedido #P003 fue calificado con 5 estrellas', tiempo: 'hace 2 horas', leido: true },
  { id: 5, tipo: 'stock',      msg: 'Sin stock: Jabón de Tocador',               tiempo: 'hace 3 horas', leido: true },
  { id: 6, tipo: 'pedido',     msg: 'Pedido #P002 fue atendido correctamente',   tiempo: 'ayer',         leido: true },
]

const tipoIcon  = { 'pedido': 'fa-truck-fast', 'stock': 'fa-warehouse', 'calificado': 'fa-star' }
const tipoColor = { 'pedido': 'var(--primary)', 'stock': 'var(--warning)', 'calificado': '#FFCF13' }

export default function Notificaciones() {
  const noLeidas = mockNoti.filter(n => !n.leido).length

  return (
    <div>
      <PageHeader
        title="Notificaciones"
        subtitle={`${noLeidas} notificaciones sin leer`}
        actions={<button className="btn btn-secondary-sm"><i className="fa-solid fa-check-double" /> Marcar todas como leídas</button>}
      />
      <div className="card">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {mockNoti.map(n => (
            <div key={n.id} className={`noti-item ${!n.leido ? 'noti-item--unread' : ''}`}>
              <div className="noti-icon" style={{ background: tipoColor[n.tipo] + '22', color: tipoColor[n.tipo] }}>
                <i className={`fa-solid ${tipoIcon[n.tipo]}`} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, fontWeight: n.leido ? 400 : 600 }}>{n.msg}</p>
                <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 3 }}>{n.tiempo}</p>
              </div>
              {!n.leido && <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
