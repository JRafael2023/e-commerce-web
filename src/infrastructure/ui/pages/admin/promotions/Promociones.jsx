import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

const mockPromos = [
  { id: 1, titulo: '2x1 en Abarrotes',     descuento: '50%', inicio: '01/05/2026', fin: '15/05/2026', activo: true },
  { id: 2, titulo: 'Descuento Lácteos',     descuento: '20%', inicio: '05/05/2026', fin: '10/05/2026', activo: true },
  { id: 3, titulo: 'Promo Fin de Semana',   descuento: '15%', inicio: '10/05/2026', fin: '12/05/2026', activo: false },
]

export default function Promociones() {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  return (
    <div>
      <PageHeader
        title="Promociones"
        subtitle="Gestiona las promociones activas"
        actions={<button className="btn btn-primary-sm" onClick={() => setShowModal(true)}><i className="fa-solid fa-plus" /> Nueva Promoción</button>}
      />
      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Título</th><th>Descuento</th><th>Inicio</th><th>Fin</th><th>Estado</th><th>Acciones</th></tr>
            </thead>
            <tbody>
              {mockPromos.map(p => (
                <tr key={p.id}>
                  <td><strong>{p.titulo}</strong></td>
                  <td><span style={{ color: 'var(--error)', fontWeight: 600 }}>{p.descuento}</span></td>
                  <td className="text-secondary">{p.inicio}</td>
                  <td className="text-secondary">{p.fin}</td>
                  <td><span className={`status-badge ${p.activo ? 'active' : 'error'}`}>{p.activo ? 'Activo' : 'Inactivo'}</span></td>
                  <td>
                    <div className="flex gap-2">
                      <button className="btn-icon" onClick={() => navigate(`/admin/promociones/${p.id}`)}><i className="fa-solid fa-eye" /></button>
                      <button className="btn-icon"><i className="fa-solid fa-pen" /></button>
                      <button className="btn-icon danger"><i className="fa-solid fa-trash" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal__header">
              <h3>Nueva Promoción</h3>
              <button className="modal__close" onClick={() => setShowModal(false)}><i className="fa-solid fa-xmark" /></button>
            </div>
            <div className="modal__body">
              {[['Título','text','fa-bullhorn'],['Descuento (%)','number','fa-percent'],['Fecha inicio','date','fa-calendar'],['Fecha fin','date','fa-calendar-xmark']].map(([l,t,i]) => (
                <div className="form-group" key={l}>
                  <label className="form-label">{l}</label>
                  <div className="form-input-wrap"><i className={`fa-solid ${i} form-icon`} /><input className="form-input" type={t} placeholder={l} /></div>
                </div>
              ))}
              <div className="form-group">
                <label className="form-label">Descripción</label>
                <textarea className="form-textarea" rows={3} placeholder="Descripción de la promoción..." />
              </div>
            </div>
            <div className="modal__footer">
              <button className="btn btn-secondary-sm" onClick={() => setShowModal(false)}>Cancelar</button>
              <button className="btn btn-primary-sm" onClick={() => setShowModal(false)}>Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
