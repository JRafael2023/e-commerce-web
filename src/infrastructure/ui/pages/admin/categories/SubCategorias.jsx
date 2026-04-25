import { useState } from 'react'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

const mockSub = [
  { id: 1, nombre: 'Cereales',      categoria: 'Abarrotes', productos: 12, activo: true },
  { id: 2, nombre: 'Conservas',     categoria: 'Abarrotes', productos: 8,  activo: true },
  { id: 3, nombre: 'Quesos',        categoria: 'Lácteos',   productos: 5,  activo: true },
  { id: 4, nombre: 'Yogures',       categoria: 'Lácteos',   productos: 9,  activo: true },
  { id: 5, nombre: 'Desengrasantes',categoria: 'Limpieza',  productos: 6,  activo: false },
]

export default function SubCategorias() {
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)

  const filtered = mockSub.filter(s =>
    s.nombre.toLowerCase().includes(search.toLowerCase()) ||
    s.categoria.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <PageHeader
        title="Sub-Categorías"
        subtitle="Gestiona las sub-categorías de productos"
        actions={<button className="btn btn-primary-sm" onClick={() => setShowModal(true)}><i className="fa-solid fa-plus" /> Nueva Sub-Categoría</button>}
      />
      <div className="card">
        <div className="toolbar">
          <div className="toolbar__left">
            <div className="search-bar">
              <i className="fa-solid fa-magnifying-glass" />
              <input placeholder="Buscar..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Sub-Categoría</th><th>Categoría Padre</th><th>Productos</th><th>Estado</th><th>Acciones</th></tr>
            </thead>
            <tbody>
              {filtered.map(s => (
                <tr key={s.id}>
                  <td><strong>{s.nombre}</strong></td>
                  <td><span className="status-badge info">{s.categoria}</span></td>
                  <td>{s.productos}</td>
                  <td><span className={`status-badge ${s.activo ? 'active' : 'error'}`}>{s.activo ? 'Activo' : 'Inactivo'}</span></td>
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
              <h3>Nueva Sub-Categoría</h3>
              <button className="modal__close" onClick={() => setShowModal(false)}><i className="fa-solid fa-xmark" /></button>
            </div>
            <div className="modal__body">
              <div className="form-group">
                <label className="form-label">Categoría padre</label>
                <select className="form-input" style={{ paddingLeft: 14 }}>
                  <option>Abarrotes</option><option>Lácteos</option><option>Limpieza</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <div className="form-input-wrap"><i className="fa-solid fa-layer-group form-icon" /><input className="form-input" placeholder="Nombre de la sub-categoría" /></div>
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
