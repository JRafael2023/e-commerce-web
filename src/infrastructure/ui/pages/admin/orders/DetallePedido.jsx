import { useNavigate } from 'react-router-dom'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'
import './DetallePedido.css'

const mockDetalle = {
  id: '#P001',
  cliente: 'Juan Pérez',
  telefono: '+51 987 654 321',
  direccion: 'Av. Los Laureles 234, Miraflores',
  fecha: '25/04/2026 09:15 AM',
  estado: 'Entrante',
  items: [
    { nombre: 'Arroz Premium 5kg',    cantidad: 2, precio: 'S/ 28.90', subtotal: 'S/ 57.80' },
    { nombre: 'Aceite Vegetal 1L',    cantidad: 1, precio: 'S/ 12.50', subtotal: 'S/ 12.50' },
    { nombre: 'Fideos Spaghetti 500g',cantidad: 3, precio: 'S/ 4.20',  subtotal: 'S/ 12.60' },
  ],
  subtotal: 'S/ 82.90',
  envio: 'S/ 10.00',
  total: 'S/ 92.90',
}

export default function DetallePedido() {
  const navigate = useNavigate()

  return (
    <div>
      <PageHeader
        title={`Pedido ${mockDetalle.id}`}
        subtitle={`Detalle completo del pedido`}
        actions={
          <button className="btn btn-secondary-sm" onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left" /> Volver
          </button>
        }
      />

      <div className="detalle-grid">
        {/* Info cliente */}
        <div className="card">
          <h3 className="card-section-title"><i className="fa-solid fa-user" /> Cliente</h3>
          <div className="info-row"><span>Nombre</span><strong>{mockDetalle.cliente}</strong></div>
          <div className="info-row"><span>Teléfono</span><strong>{mockDetalle.telefono}</strong></div>
          <div className="info-row"><span>Dirección</span><strong>{mockDetalle.direccion}</strong></div>
          <div className="info-row"><span>Fecha</span><strong>{mockDetalle.fecha}</strong></div>
          <div className="info-row">
            <span>Estado</span>
            <span className="status-badge info">{mockDetalle.estado}</span>
          </div>
        </div>

        {/* Acciones */}
        <div className="card">
          <h3 className="card-section-title"><i className="fa-solid fa-gear" /> Acciones</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button className="btn btn-success btn-full" style={{ height: 44 }}>
              <i className="fa-solid fa-check" /> Marcar como Atendido
            </button>
            <button className="btn btn-secondary-sm btn-full" style={{ height: 44 }}>
              <i className="fa-solid fa-print" /> Imprimir Pedido
            </button>
            <button className="btn btn-danger btn-full" style={{ height: 44 }}>
              <i className="fa-solid fa-xmark" /> Cancelar Pedido
            </button>
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="card" style={{ marginTop: 16 }}>
        <h3 className="card-section-title"><i className="fa-solid fa-box" /> Productos del Pedido</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Producto</th><th>Cantidad</th><th>Precio Unit.</th><th>Subtotal</th></tr>
            </thead>
            <tbody>
              {mockDetalle.items.map((item, i) => (
                <tr key={i}>
                  <td><strong>{item.nombre}</strong></td>
                  <td>{item.cantidad}</td>
                  <td>{item.precio}</td>
                  <td><strong>{item.subtotal}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="order-totals">
          <div className="total-row"><span>Subtotal</span><span>{mockDetalle.subtotal}</span></div>
          <div className="total-row"><span>Envío</span><span>{mockDetalle.envio}</span></div>
          <div className="total-row total-row--final"><span>Total</span><strong>{mockDetalle.total}</strong></div>
        </div>
      </div>
    </div>
  )
}
