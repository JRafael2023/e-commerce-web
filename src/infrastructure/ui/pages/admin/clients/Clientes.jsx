import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

const mockClientes = [
  { id: 1, nombre: 'Juan Pérez',    email: 'juan@mail.com',   telefono: '+51 987 654 321', pedidos: 12, puntos: 340, rol: 'Cliente' },
  { id: 2, nombre: 'María García',  email: 'maria@mail.com',  telefono: '+51 912 345 678', pedidos: 8,  puntos: 210, rol: 'Cliente' },
  { id: 3, nombre: 'Carlos López',  email: 'carlos@mail.com', telefono: '+51 956 789 012', pedidos: 25, puntos: 680, rol: 'VIP' },
  { id: 4, nombre: 'Ana Torres',    email: 'ana@mail.com',    telefono: '+51 934 567 890', pedidos: 3,  puntos: 80,  rol: 'Cliente' },
  { id: 5, nombre: 'Luis Ramírez',  email: 'luis@mail.com',   telefono: '+51 978 901 234', pedidos: 45, puntos: 1200,rol: 'VIP' },
]

const rolColor = { 'Cliente': 'info', 'VIP': 'pending', 'Admin': 'active' }

export default function Clientes() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const filtered = mockClientes.filter(c =>
    c.nombre.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <PageHeader title="Clientes" subtitle="Gestión de clientes registrados" />
      <div className="card">
        <div className="toolbar">
          <div className="toolbar__left">
            <div className="search-bar">
              <i className="fa-solid fa-magnifying-glass" />
              <input placeholder="Buscar cliente..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
          </div>
          <div className="toolbar__right">
            <button className="btn btn-secondary-sm" onClick={() => navigate('/admin/roles')}>
              <i className="fa-solid fa-shield-halved" /> Roles
            </button>
            <button className="btn btn-secondary-sm">
              <i className="fa-solid fa-file-excel" /> Exportar
            </button>
          </div>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Cliente</th><th>Email</th><th>Teléfono</th><th>Pedidos</th><th>Puntos</th><th>Rol</th><th>Acciones</th></tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                        {c.nombre[0]}
                      </div>
                      <strong>{c.nombre}</strong>
                    </div>
                  </td>
                  <td className="text-secondary">{c.email}</td>
                  <td>{c.telefono}</td>
                  <td>{c.pedidos}</td>
                  <td>
                    <span style={{ color: 'var(--warning)', fontWeight: 600 }}>
                      <i className="fa-solid fa-trophy" style={{ marginRight: 4 }} />{c.puntos}
                    </span>
                  </td>
                  <td><span className={`status-badge ${rolColor[c.rol]}`}>{c.rol}</span></td>
                  <td>
                    <div className="flex gap-2">
                      <button className="btn-icon"><i className="fa-solid fa-eye" /></button>
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
