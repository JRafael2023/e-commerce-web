import { useState } from 'react'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

const mockPuntos = [
  { id: 1, nombre: 'Arroz Premium 5kg',    precio: 'S/ 28.90', puntos: 30, activo: true },
  { id: 2, nombre: 'Aceite Vegetal 1L',    precio: 'S/ 12.50', puntos: 15, activo: true },
  { id: 3, nombre: 'Leche Evaporada 400g', precio: 'S/ 5.80',  puntos: 5,  activo: false },
  { id: 4, nombre: 'Detergente 2kg',       precio: 'S/ 18.00', puntos: 20, activo: true },
]

export default function PuntosProductos() {
  const [data, setData] = useState(mockPuntos)

  const toggle = (id) => setData(d => d.map(p => p.id === id ? {...p, activo: !p.activo} : p))

  return (
    <div>
      <PageHeader title="Puntos por Productos" subtitle="Configura los puntos que otorga cada producto" />
      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Producto</th><th>Precio</th><th>Puntos</th><th>Activo</th><th>Acción</th></tr>
            </thead>
            <tbody>
              {data.map(p => (
                <tr key={p.id}>
                  <td><strong>{p.nombre}</strong></td>
                  <td>{p.precio}</td>
                  <td>
                    <span style={{ background: 'rgba(255,207,19,0.2)', color: '#b8860b', padding: '4px 10px', borderRadius: 20, fontWeight: 600 }}>
                      <i className="fa-solid fa-trophy" style={{ marginRight: 4 }} />{p.puntos} pts
                    </span>
                  </td>
                  <td>
                    <button
                      className={`status-badge ${p.activo ? 'active' : 'error'}`}
                      style={{ border: 'none', cursor: 'pointer' }}
                      onClick={() => toggle(p.id)}
                    >
                      {p.activo ? 'Activo' : 'Inactivo'}
                    </button>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <button className="btn-icon"><i className="fa-solid fa-pen" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
