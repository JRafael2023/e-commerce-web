import { useState } from 'react'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

const mockOfertas = [
  { id: 1, producto: 'Arroz Premium 5kg',  precioNormal: 'S/ 28.90', precioOferta: 'S/ 22.00', descuento: '24%', activo: true },
  { id: 2, producto: 'Aceite Vegetal 1L',  precioNormal: 'S/ 12.50', precioOferta: 'S/ 9.90',  descuento: '21%', activo: true },
  { id: 3, producto: 'Detergente 2kg',     precioNormal: 'S/ 18.00', precioOferta: 'S/ 14.50', descuento: '19%', activo: false },
]

export default function Ofertas() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <PageHeader
        title="Ofertas"
        subtitle="Descuentos directos por producto"
        actions={<button className="btn btn-primary-sm" onClick={() => setShowModal(true)}><i className="fa-solid fa-plus" /> Nueva Oferta</button>}
      />
      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Producto</th><th>Precio Normal</th><th>Precio Oferta</th><th>Descuento</th><th>Estado</th><th>Acciones</th></tr>
            </thead>
            <tbody>
              {mockOfertas.map(o => (
                <tr key={o.id}>
                  <td><strong>{o.producto}</strong></td>
                  <td style={{ textDecoration: 'line-through', color: 'var(--text-secondary)' }}>{o.precioNormal}</td>
                  <td style={{ color: 'var(--success)', fontWeight: 600 }}>{o.precioOferta}</td>
                  <td><span className="status-badge error">{o.descuento} OFF</span></td>
                  <td><span className={`status-badge ${o.activo ? 'active' : 'error'}`}>{o.activo ? 'Activo' : 'Inactivo'}</span></td>
                  <td>
                    <div className="flex gap-2">
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
            <div className="modal__header"><h3>Nueva Oferta</h3><button className="modal__close" onClick={() => setShowModal(false)}><i className="fa-solid fa-xmark" /></button></div>
            <div className="modal__body">
              <div className="form-group"><label className="form-label">Producto</label><select className="form-input" style={{ paddingLeft: 14 }}><option>Arroz Premium 5kg</option><option>Aceite Vegetal 1L</option></select></div>
              {[['Precio oferta','number','fa-dollar-sign'],['Fecha inicio','date','fa-calendar'],['Fecha fin','date','fa-calendar-xmark']].map(([l,t,i]) => (
                <div className="form-group" key={l}><label className="form-label">{l}</label><div className="form-input-wrap"><i className={`fa-solid ${i} form-icon`} /><input className="form-input" type={t} /></div></div>
              ))}
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
