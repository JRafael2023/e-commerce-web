import { useNavigate } from 'react-router-dom'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

const mock = [
  { id: '#P001', cliente: 'Juan Pérez',   monto: 'S/ 120.00', items: 3, hora: '09:15 AM' },
  { id: '#P005', cliente: 'Luis Ramírez', monto: 'S/ 320.75', items: 7, hora: '08:42 AM' },
  { id: '#P008', cliente: 'Rosa Díaz',    monto: 'S/ 78.20',  items: 2, hora: '07:30 AM' },
]

export default function PedidosEntrantes() {
  const navigate = useNavigate()
  return (
    <div>
      <PageHeader title="Pedidos Entrantes" subtitle="Pedidos nuevos pendientes de atención" />
      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>ID</th><th>Cliente</th><th>Ítems</th><th>Monto</th><th>Hora</th><th>Acciones</th></tr>
            </thead>
            <tbody>
              {mock.map(p => (
                <tr key={p.id}>
                  <td><strong>{p.id}</strong></td>
                  <td>{p.cliente}</td>
                  <td>{p.items}</td>
                  <td>{p.monto}</td>
                  <td className="text-secondary">{p.hora}</td>
                  <td>
                    <div className="flex gap-2">
                      <button className="btn btn-success btn" style={{ height: 32, padding: '0 12px', fontSize: 13 }} onClick={() => navigate('/admin/pedidos/1')}>
                        <i className="fa-solid fa-check" /> Atender
                      </button>
                      <button className="btn-icon" onClick={() => navigate('/admin/pedidos/1')}><i className="fa-solid fa-eye" /></button>
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
