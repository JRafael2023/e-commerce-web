import { useState } from 'react'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

const mockCanjeados = [
  { id: 1, nombre: 'Aceite 1L Gratis',       puntosReq: 100, stock: 10, canjes: 23 },
  { id: 2, nombre: 'Arroz 1kg Gratis',        puntosReq: 80,  stock: 15, canjes: 41 },
  { id: 3, nombre: 'Detergente 500g Gratis',  puntosReq: 60,  stock: 5,  canjes: 12 },
  { id: 4, nombre: 'Jabón x3 Gratis',         puntosReq: 40,  stock: 20, canjes: 67 },
]

export default function ProductosCanjeados() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <PageHeader
        title="Productos Canjeables"
        subtitle="Productos disponibles para canje con puntos"
        actions={<button className="btn btn-primary-sm" onClick={() => setShowModal(true)}><i className="fa-solid fa-plus" /> Agregar</button>}
      />
      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Producto</th><th>Puntos Requeridos</th><th>Stock</th><th>Total Canjes</th><th>Acciones</th></tr>
            </thead>
            <tbody>
              {mockCanjeados.map(p => (
                <tr key={p.id}>
                  <td><strong>{p.nombre}</strong></td>
                  <td>
                    <span style={{ color: 'var(--warning)', fontWeight: 600 }}>
                      <i className="fa-solid fa-trophy" style={{ marginRight: 4 }} />{p.puntosReq} pts
                    </span>
                  </td>
                  <td>{p.stock}</td>
                  <td>{p.canjes}</td>
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
            <div className="modal__header">
              <h3>Agregar Producto Canjeable</h3>
              <button className="modal__close" onClick={() => setShowModal(false)}><i className="fa-solid fa-xmark" /></button>
            </div>
            <div className="modal__body">
              {[['Producto','text','fa-box'],['Puntos requeridos','number','fa-trophy'],['Stock disponible','number','fa-warehouse']].map(([l,t,i]) => (
                <div className="form-group" key={l}>
                  <label className="form-label">{l}</label>
                  <div className="form-input-wrap">
                    <i className={`fa-solid ${i} form-icon`} />
                    <input className="form-input" type={t} placeholder={l} />
                  </div>
                </div>
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
