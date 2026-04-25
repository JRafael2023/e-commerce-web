import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

const mock = [
  { id: 1, subcategoria: 'Cereales',       categoria: 'Abarrotes', stock: 120, estado: 'Normal' },
  { id: 2, subcategoria: 'Conservas',      categoria: 'Abarrotes', stock: 8,   estado: 'Bajo' },
  { id: 3, subcategoria: 'Quesos',         categoria: 'Lácteos',   stock: 0,   estado: 'Sin stock' },
  { id: 4, subcategoria: 'Desengrasantes', categoria: 'Limpieza',  stock: 55,  estado: 'Normal' },
]

const sc = { 'Normal': 'active', 'Bajo': 'pending', 'Sin stock': 'error' }

export default function InventarioSubCategorias() {
  return (
    <div>
      <PageHeader title="Inventario Sub-Categorías" subtitle="Control de stock por sub-categoría" />
      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Sub-Categoría</th><th>Categoría</th><th>Stock</th><th>Estado</th><th>Acción</th></tr>
            </thead>
            <tbody>
              {mock.map(s => (
                <tr key={s.id}>
                  <td><strong>{s.subcategoria}</strong></td>
                  <td>{s.categoria}</td>
                  <td><strong style={{ color: s.stock === 0 ? 'var(--error)' : s.stock < 10 ? '#b8860b' : 'var(--success)' }}>{s.stock}</strong></td>
                  <td><span className={`status-badge ${sc[s.estado]}`}>{s.estado}</span></td>
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
