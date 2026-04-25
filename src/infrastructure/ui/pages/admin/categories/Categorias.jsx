import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

const mockCategorias = [
  { id: 1, nombre: 'Abarrotes',   icono: 'fa-box',         productos: 45, subcategorias: 5, activo: true },
  { id: 2, nombre: 'Lácteos',     icono: 'fa-bottle-water',productos: 18, subcategorias: 3, activo: true },
  { id: 3, nombre: 'Limpieza',    icono: 'fa-spray-can',   productos: 22, subcategorias: 4, activo: true },
  { id: 4, nombre: 'Higiene',     icono: 'fa-soap',        productos: 30, subcategorias: 6, activo: true },
  { id: 5, nombre: 'Bebidas',     icono: 'fa-wine-bottle', productos: 15, subcategorias: 2, activo: false },
]

export default function Categorias() {
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const filtered = mockCategorias.filter(c => c.nombre.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <PageHeader
        title="Categorías"
        subtitle="Gestiona las categorías de productos"
        actions={<button className="btn btn-primary-sm" onClick={() => setShowModal(true)}><i className="fa-solid fa-plus" /> Nueva Categoría</button>}
      />
      <div className="card">
        <div className="toolbar">
          <div className="toolbar__left">
            <div className="search-bar">
              <i className="fa-solid fa-magnifying-glass" />
              <input placeholder="Buscar categoría..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
          </div>
          <div className="toolbar__right">
            <button className="btn btn-secondary-sm" onClick={() => navigate('/admin/subcategorias')}>
              <i className="fa-solid fa-layer-group" /> Sub-Categorías
            </button>
          </div>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Categoría</th><th>Productos</th><th>Sub-Categorías</th><th>Estado</th><th>Acciones</th></tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: 16 }}>
                        <i className={`fa-solid ${c.icono}`} />
                      </div>
                      <strong>{c.nombre}</strong>
                    </div>
                  </td>
                  <td>{c.productos}</td>
                  <td>{c.subcategorias}</td>
                  <td><span className={`status-badge ${c.activo ? 'active' : 'error'}`}>{c.activo ? 'Activo' : 'Inactivo'}</span></td>
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
              <h3>Nueva Categoría</h3>
              <button className="modal__close" onClick={() => setShowModal(false)}><i className="fa-solid fa-xmark" /></button>
            </div>
            <div className="modal__body">
              <div className="form-group">
                <label className="form-label">Nombre de la categoría</label>
                <div className="form-input-wrap"><i className="fa-solid fa-tags form-icon" /><input className="form-input" placeholder="Ej: Abarrotes" /></div>
              </div>
              <div className="form-group">
                <label className="form-label">Descripción</label>
                <textarea className="form-textarea" rows={3} placeholder="Descripción..." />
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
