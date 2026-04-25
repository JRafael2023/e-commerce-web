import { useNavigate } from 'react-router-dom'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

const mock = [
  { id: '#P002', cliente: 'María García', monto: 'S/ 85.50',  items: 2, fecha: '25/04/2026' },
  { id: '#P004', cliente: 'Ana Torres',   monto: 'S/ 56.00',  items: 1, fecha: '24/04/2026' },
  { id: '#P007', cliente: 'Pedro Salas',  monto: 'S/ 140.00', items: 4, fecha: '24/04/2026' },
]

export default function PedidosAtendidos() {
  const navigate = useNavigate()
  return (
    <div>
      <PageHeader title="Pedidos Atendidos" subtitle="Pedidos completados y entregados" />
      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>ID</th><th>Cliente</th><th>Ítems</th><th>Monto</th><th>Fecha</th><th>Acciones</th></tr>
            </thead>
            <tbody>
              {mock.map(p => (
                <tr key={p.id}>
                  <td><strong>{p.id}</strong></td>
                  <td>{p.cliente}</td>
                  <td>{p.items}</td>
                  <td>{p.monto}</td>
                  <td className="text-secondary">{p.fecha}</td>
                  <td><button className="btn-icon" onClick={() => navigate('/admin/pedidos/1')}><i className="fa-solid fa-eye" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
