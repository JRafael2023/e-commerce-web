import { useNavigate } from 'react-router-dom'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

const mock = [
  { id: '#P003', cliente: 'Carlos López', monto: 'S/ 210.00', calificacion: 5, comentario: 'Excelente servicio!' },
  { id: '#P006', cliente: 'Sofía Vega',   monto: 'S/ 95.00',  calificacion: 4, comentario: 'Muy bueno, llegó rápido.' },
  { id: '#P009', cliente: 'Marco Fuentes',monto: 'S/ 67.50',  calificacion: 3, comentario: 'Regular, algo demorado.' },
]

const Stars = ({ n }) => (
  <span>
    {[1,2,3,4,5].map(i => (
      <i key={i} className={`fa-${i <= n ? 'solid' : 'regular'} fa-star`} style={{ color: '#FFCF13', fontSize: 14 }} />
    ))}
  </span>
)

export default function PedidosCalificados() {
  const navigate = useNavigate()
  return (
    <div>
      <PageHeader title="Pedidos Calificados" subtitle="Pedidos con calificación del cliente" />
      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>ID</th><th>Cliente</th><th>Monto</th><th>Calificación</th><th>Comentario</th><th>Acción</th></tr>
            </thead>
            <tbody>
              {mock.map(p => (
                <tr key={p.id}>
                  <td><strong>{p.id}</strong></td>
                  <td>{p.cliente}</td>
                  <td>{p.monto}</td>
                  <td><Stars n={p.calificacion} /></td>
                  <td className="text-secondary" style={{ maxWidth: 200 }}>{p.comentario}</td>
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
