import { useNavigate } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader.jsx'
import '../../components/common/PageHeader.css'

export default function Perfil() {
  const navigate = useNavigate()
  return (
    <div>
      <PageHeader title="Mi Perfil" subtitle="Información de tu cuenta" />
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 16 }}>
        {/* Avatar */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textAlign: 'center' }}>
          <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, fontFamily: 'var(--font-heading)', fontWeight: 700 }}>A</div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18 }}>Admin Usuario</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Administrador</p>
          </div>
          <button className="btn btn-secondary-sm btn-full"><i className="fa-solid fa-camera" /> Cambiar foto</button>
          <button className="btn btn-secondary-sm btn-full" onClick={() => navigate('/admin/cambio-password')}>
            <i className="fa-solid fa-lock" /> Cambiar contraseña
          </button>
        </div>

        {/* Datos */}
        <div className="card">
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 17, marginBottom: 20 }}>Datos personales</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[['Nombre','text','fa-user','Admin'],['Apellido','text','fa-user','Usuario'],['Teléfono','tel','fa-phone','+51 999 999 999'],['Dirección','text','fa-location-dot','Lima, Perú']].map(([l,t,i,v]) => (
              <div className="form-group" key={l}>
                <label className="form-label">{l}</label>
                <div className="form-input-wrap">
                  <i className={`fa-solid ${i} form-icon`} />
                  <input className="form-input" type={t} defaultValue={v} />
                </div>
              </div>
            ))}
          </div>
          <div className="form-group" style={{ marginTop: 4 }}>
            <label className="form-label">Correo electrónico</label>
            <div className="form-input-wrap">
              <i className="fa-solid fa-envelope form-icon" />
              <input className="form-input" type="email" defaultValue="admin@talisto.com" />
            </div>
          </div>
          <div style={{ marginTop: 20, display: 'flex', justifyContent: 'flex-end' }}>
            <button className="btn btn-primary-sm" style={{ height: 44, padding: '0 28px' }}>
              <i className="fa-solid fa-floppy-disk" /> Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
