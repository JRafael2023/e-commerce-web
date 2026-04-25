import { useState } from 'react'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

const mockInventario = [
  { id: 1, nombre: 'Arroz Premium 5kg',     stock: 120, minimo: 20, maximo: 300, unidad: 'Bolsa',  estado: 'Normal' },
  { id: 2, nombre: 'Aceite Vegetal 1L',     stock: 85,  minimo: 15, maximo: 200, unidad: 'Botella', estado: 'Normal' },
  { id: 3, nombre: 'Leche Evaporada 400g',  stock: 200, minimo: 30, maximo: 400, unidad: 'Lata',   estado: 'Normal' },
  { id: 4, nombre: 'Detergente 2kg',        stock: 12,  minimo: 20, maximo: 100, unidad: 'Bolsa',  estado: 'Bajo' },
  { id: 5, nombre: 'Jabón de Tocador',      stock: 0,   minimo: 10, maximo: 150, unidad: 'Unidad', estado: 'Sin stock' },
  { id: 6, nombre: 'Fideos Spaghetti 500g', stock: 310, minimo: 50, maximo: 500, unidad: 'Bolsa',  estado: 'Alto' },
]

const stockClass = { 'Normal': 'active', 'Bajo': 'pending', 'Sin stock': 'error', 'Alto': 'info' }

export default function InventarioProductos() {
  const [search, setSearch] = useState('')
  const filtered = mockInventario.filter(p => p.nombre.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <PageHeader title="Inventario de Productos" subtitle="Control de stock y niveles de inventario" />
      <div className="card">
        <div className="toolbar">
          <div className="toolbar__left">
            <div className="search-bar">
              <i className="fa-solid fa-magnifying-glass" />
              <input placeholder="Buscar producto..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
          </div>
          <div className="toolbar__right">
            <button className="btn btn-secondary-sm"><i className="fa-solid fa-file-excel" /> Exportar</button>
          </div>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Producto</th><th>Stock Actual</th><th>Mínimo</th><th>Máximo</th><th>Unidad</th><th>Estado</th><th>Acción</th></tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id}>
                  <td><strong>{p.nombre}</strong></td>
                  <td><strong style={{ color: p.stock === 0 ? 'var(--error)' : p.stock < p.minimo ? '#b8860b' : 'var(--success)' }}>{p.stock}</strong></td>
                  <td className="text-secondary">{p.minimo}</td>
                  <td className="text-secondary">{p.maximo}</td>
                  <td>{p.unidad}</td>
                  <td><span className={`status-badge ${stockClass[p.estado]}`}>{p.estado}</span></td>
                  <td><button className="btn-icon"><i className="fa-solid fa-arrows-rotate" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
