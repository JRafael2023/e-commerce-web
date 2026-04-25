import { useNavigate } from 'react-router-dom'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

export default function DetallePromocion() {
  const navigate = useNavigate()
  return (
    <div>
      <PageHeader title="Detalle Promoción" subtitle="2x1 en Abarrotes"
        actions={<button className="btn btn-secondary-sm" onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left" /> Volver</button>}
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 16 }}>
        <div className="card">
          <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: 16 }}>2x1 en Abarrotes</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[['Descuento','50%'],['Fecha inicio','01/05/2026'],['Fecha fin','15/05/2026'],['Estado','Activo'],['Usos totales','127'],['Descripción','Lleva 2 productos de la categoría abarrotes y paga solo 1.']].map(([k,v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--line-color)', fontSize: 14 }}>
                <span style={{ color: 'var(--text-secondary)' }}>{k}</span>
                <strong>{v}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: 16, fontSize: 15 }}>Acciones</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button className="btn btn-primary-sm btn-full" style={{ height: 44 }}><i className="fa-solid fa-pen" /> Editar</button>
            <button className="btn btn-danger btn-full" style={{ height: 44 }}><i className="fa-solid fa-xmark" /> Desactivar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
