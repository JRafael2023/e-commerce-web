import PageHeader from '../../components/common/PageHeader.jsx'
import '../../components/common/PageHeader.css'
import './Ajustes.css'

const sections = [
  {
    title: 'Notificaciones',
    icon: 'fa-bell',
    items: [
      { label: 'Nuevos pedidos', desc: 'Notificar cuando llega un pedido nuevo', active: true },
      { label: 'Pedidos atendidos', desc: 'Notificar cuando se atiende un pedido', active: false },
      { label: 'Stock bajo', desc: 'Alertar cuando el stock está por agotarse', active: true },
    ]
  },
  {
    title: 'Apariencia',
    icon: 'fa-palette',
    items: [
      { label: 'Modo oscuro', desc: 'Cambiar al tema oscuro', active: false },
      { label: 'Menú compacto', desc: 'Usar el menú lateral colapsado por defecto', active: false },
    ]
  },
  {
    title: 'Seguridad',
    icon: 'fa-shield-halved',
    items: [
      { label: 'Autenticación 2FA', desc: 'Verificación en dos pasos', active: false },
      { label: 'Sesión activa recordada', desc: 'Mantener sesión iniciada', active: true },
    ]
  }
]

export default function Ajustes() {
  return (
    <div>
      <PageHeader title="Ajustes" subtitle="Configuración del sistema" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {sections.map(s => (
          <div key={s.title} className="card">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 16, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              <i className={`fa-solid ${s.icon}`} style={{ color: 'var(--primary)' }} /> {s.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {s.items.map(item => (
                <div key={item.label} className="setting-row">
                  <div>
                    <p style={{ fontWeight: 500, fontSize: 14 }}>{item.label}</p>
                    <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>{item.desc}</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" defaultChecked={item.active} />
                    <span className="toggle__slider" />
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
