import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

const mockClientes = ['Juan Pérez','María García','Carlos López','Ana Torres','Luis Ramírez']
const mockPorCliente = {
  'Juan Pérez': [{ id: '#P001', monto: 'S/ 120.00', estado: 'Entrante', fecha: '25/04/2026' }],
  'María García': [{ id: '#P002', monto: 'S/ 85.50', estado: 'Atendido', fecha: '25/04/2026' }],
}

export default function PedidosClientes() {
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()

  return (
    <div>
      <PageHeader title="Pedidos por Cliente" subtitle="Filtra pedidos por cliente específico" />
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 16 }}>
        <div className="card">
          <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 12, color: 'var(--text-secondary)' }}>CLIENTES</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {mockClientes.map(c => (
              <button key={c}
                onClick={() => setSelected(c)}
                style={{
                  padding: '10px 12px', borderRadius: 8, border: 'none', textAlign: 'left',
                  background: selected === c ? 'var(--nav-active)' : 'transparent',
                  color: selected === c ? '#fff' : 'var(--text-primary)',
                  cursor: 'pointer', fontSize: 14, transition: 'var(--transition)'
                }}
              >
                <i className="fa-solid fa-user" style={{ marginRight: 8 }} />{c}
              </button>
            ))}
          </div>
        </div>
        <div className="card">
          {selected ? (
            <>
              <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: 16 }}>Pedidos de {selected}</h3>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>ID</th><th>Monto</th><th>Estado</th><th>Fecha</th><th>Acción</th></tr></thead>
                  <tbody>
                    {(mockPorCliente[selected] || [{ id: '#P010', monto: 'S/ 50.00', estado: 'Atendido', fecha: '22/04/2026' }]).map(p => (
                      <tr key={p.id}>
                        <td><strong>{p.id}</strong></td>
                        <td>{p.monto}</td>
                        <td><span className={`status-badge ${p.estado === 'Atendido' ? 'active' : 'info'}`}>{p.estado}</span></td>
                        <td className="text-secondary">{p.fecha}</td>
                        <td><button className="btn-icon" onClick={() => navigate('/admin/pedidos/1')}><i className="fa-solid fa-eye" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 200, color: 'var(--text-secondary)' }}>
              <i className="fa-solid fa-user" style={{ fontSize: 40, marginBottom: 12 }} />
              <p>Selecciona un cliente para ver sus pedidos</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
