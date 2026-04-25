import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

const mockAds = [
  { id: 1, titulo: 'Banner Verano 2026',    tipo: 'Banner',   vistas: 1240, activo: true },
  { id: 2, titulo: 'Promo Semana Santa',    tipo: 'Popup',    vistas: 870,  activo: true },
  { id: 3, titulo: 'Campaña Navidad 2025',  tipo: 'Banner',   vistas: 4500, activo: false },
]

export default function Publicidades() {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  return (
    <div>
      <PageHeader
        title="Publicidades"
        subtitle="Gestiona banners y publicidades"
        actions={<button className="btn btn-primary-sm" onClick={() => setShowModal(true)}><i className="fa-solid fa-plus" /> Nueva Publicidad</button>}
      />
      <div className="card">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Título</th><th>Tipo</th><th>Vistas</th><th>Estado</th><th>Acciones</th></tr></thead>
            <tbody>
              {mockAds.map(a => (
                <tr key={a.id}>
                  <td><strong>{a.titulo}</strong></td>
                  <td><span className="status-badge info">{a.tipo}</span></td>
                  <td>{a.vistas.toLocaleString()}</td>
                  <td><span className={`status-badge ${a.activo ? 'active' : 'error'}`}>{a.activo ? 'Activo' : 'Inactivo'}</span></td>
                  <td>
                    <div className="flex gap-2">
                      <button className="btn-icon" onClick={() => navigate(`/admin/publicidades/${a.id}`)}><i className="fa-solid fa-eye" /></button>
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
            <div className="modal__header"><h3>Nueva Publicidad</h3><button className="modal__close" onClick={() => setShowModal(false)}><i className="fa-solid fa-xmark" /></button></div>
            <div className="modal__body">
              {[['Título','text','fa-rectangle-ad'],['URL de imagen','url','fa-image']].map(([l,t,i]) => (
                <div className="form-group" key={l}><label className="form-label">{l}</label><div className="form-input-wrap"><i className={`fa-solid ${i} form-icon`} /><input className="form-input" type={t} placeholder={l} /></div></div>
              ))}
              <div className="form-group"><label className="form-label">Tipo</label><select className="form-input" style={{ paddingLeft: 14 }}><option>Banner</option><option>Popup</option></select></div>
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
