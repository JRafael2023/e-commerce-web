import { useNavigate } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader.jsx'
import '../../components/common/PageHeader.css'

export default function CambioPassword() {
  const navigate = useNavigate()
  return (
    <div>
      <PageHeader title="Cambiar Contraseña" subtitle="Actualiza tu contraseña de acceso" />
      <div style={{ maxWidth: 480 }}>
        <div className="card">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[['Contraseña actual','fa-lock'],['Nueva contraseña','fa-key'],['Confirmar contraseña','fa-key']].map(([l,i]) => (
              <div className="form-group" key={l}>
                <label className="form-label">{l}</label>
                <div className="form-input-wrap">
                  <i className={`fa-solid ${i} form-icon`} />
                  <input className="form-input" type="password" placeholder="••••••••" />
                </div>
              </div>
            ))}
            <div style={{ padding: '12px 14px', background: 'rgba(0,116,255,0.08)', borderRadius: 8, fontSize: 13, color: 'var(--primary)' }}>
              <i className="fa-solid fa-circle-info" style={{ marginRight: 6 }} />
              La contraseña debe tener mínimo 8 caracteres, incluir mayúsculas y números.
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <button className="btn btn-secondary-sm" onClick={() => navigate(-1)}>Cancelar</button>
              <button className="btn btn-primary-sm" style={{ height: 44, padding: '0 28px' }}>
                <i className="fa-solid fa-floppy-disk" /> Actualizar Contraseña
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
