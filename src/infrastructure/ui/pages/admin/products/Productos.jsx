import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

const mockProductos = [
  { id: 1, nombre: 'Arroz Premium 5kg',     categoria: 'Abarrotes',    precio: 'S/ 28.90', stock: 120, estado: 'Activo' },
  { id: 2, nombre: 'Aceite Vegetal 1L',     categoria: 'Abarrotes',    precio: 'S/ 12.50', stock: 85,  estado: 'Activo' },
  { id: 3, nombre: 'Leche Evaporada 400g',  categoria: 'Lácteos',      precio: 'S/ 5.80',  stock: 200, estado: 'Activo' },
  { id: 4, nombre: 'Detergente 2kg',        categoria: 'Limpieza',     precio: 'S/ 18.00', stock: 45,  estado: 'Activo' },
  { id: 5, nombre: 'Jabón de Tocador',      categoria: 'Higiene',      precio: 'S/ 3.50',  stock: 0,   estado: 'Sin stock' },
  { id: 6, nombre: 'Fideos Spaghetti 500g', categoria: 'Abarrotes',    precio: 'S/ 4.20',  stock: 310, estado: 'Activo' },
]

export default function Productos() {
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const filtered = mockProductos.filter(p =>
    p.nombre.toLowerCase().includes(search.toLowerCase()) ||
    p.categoria.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <PageHeader
        title="Productos"
        subtitle="Gestiona el catálogo de productos"
        actions={
          <button className="btn btn-primary-sm" onClick={() => setShowModal(true)}>
            <i className="fa-solid fa-plus" /> Nuevo Producto
          </button>
        }
      />

      <div className="card">
        <div className="toolbar">
          <div className="toolbar__left">
            <div className="search-bar">
              <i className="fa-solid fa-magnifying-glass" />
              <input
                placeholder="Buscar producto..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="toolbar__right">
            <button className="btn btn-secondary-sm">
              <i className="fa-solid fa-filter" /> Filtrar
            </button>
            <button className="btn btn-secondary-sm" onClick={() => navigate('/admin/inventario-productos')}>
              <i className="fa-solid fa-warehouse" /> Inventario
            </button>
          </div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id}>
                  <td className="text-secondary">{p.id}</td>
                  <td><strong>{p.nombre}</strong></td>
                  <td>{p.categoria}</td>
                  <td>{p.precio}</td>
                  <td>{p.stock}</td>
                  <td>
                    <span className={`status-badge ${p.estado === 'Activo' ? 'active' : 'error'}`}>
                      {p.estado}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <button className="btn-icon" title="Ver"><i className="fa-solid fa-eye" /></button>
                      <button className="btn-icon" title="Editar"><i className="fa-solid fa-pen" /></button>
                      <button className="btn-icon danger" title="Eliminar"><i className="fa-solid fa-trash" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && <ProductoModal onClose={() => setShowModal(false)} />}
    </div>
  )
}

function ProductoModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal__header">
          <h3>Nuevo Producto</h3>
          <button className="modal__close" onClick={onClose}><i className="fa-solid fa-xmark" /></button>
        </div>
        <div className="modal__body">
          {[['Nombre del producto','text','fa-box'],['Categoría','text','fa-tags'],['Precio','number','fa-dollar-sign'],['Stock inicial','number','fa-warehouse']].map(([label,type,icon]) => (
            <div className="form-group" key={label}>
              <label className="form-label">{label}</label>
              <div className="form-input-wrap">
                <i className={`fa-solid ${icon} form-icon`} />
                <input className="form-input" type={type} placeholder={label} />
              </div>
            </div>
          ))}
          <div className="form-group">
            <label className="form-label">Descripción</label>
            <textarea className="form-textarea" rows={3} placeholder="Descripción del producto..." />
          </div>
        </div>
        <div className="modal__footer">
          <button className="btn btn-secondary-sm" onClick={onClose}>Cancelar</button>
          <button className="btn btn-primary-sm" onClick={onClose}>Guardar Producto</button>
        </div>
      </div>
    </div>
  )
}
