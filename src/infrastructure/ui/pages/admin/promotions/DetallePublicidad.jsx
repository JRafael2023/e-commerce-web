import { useNavigate } from 'react-router-dom'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

export default function DetallePublicidad() {
  const navigate = useNavigate()
  return (
    <div>
      <PageHeader title="Detalle Publicidad" subtitle="Banner Verano 2026"
        actions={<button className="btn btn-secondary-sm" onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left" /> Volver</button>}
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 16 }}>
        <div className="card">
          <div style={{ width: '100%', height: 200, background: 'linear-gradient(135deg, var(--cabecera), var(--primary))', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
            <div style={{ textAlign: 'center', color: '#fff' }}>
              <i className="fa-solid fa-image" style={{ fontSize: 48, opacity: 0.8 }} />
              <p style={{ marginTop: 8, fontFamily: 'var(--font-heading)', fontSize: 18 }}>Banner Verano 2026</p>
            </div>
          </div>
          {[['Tipo','Banner'],['Vistas','1,240'],['Clics','342'],['CTR','27.6%'],['Estado','Activo'],['Fecha creación','01/04/2026']].map(([k,v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--line-color)', fontSize: 14 }}>
              <span style={{ color: 'var(--text-secondary)' }}>{k}</span><strong>{v}</strong>
            </div>
          ))}
        </div>
        <div className="card">
          <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: 16, fontSize: 15 }}>Acciones</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button className="btn btn-primary-sm btn-full" style={{ height: 44 }}><i className="fa-solid fa-pen" /> Editar</button>
            <button className="btn btn-warning btn-full" style={{ height: 44 }}><i className="fa-solid fa-pause" /> Pausar</button>
            <button className="btn btn-danger btn-full" style={{ height: 44 }}><i className="fa-solid fa-trash" /> Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
