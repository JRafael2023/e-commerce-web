import { useState } from 'react'
import PageHeader from '../../components/common/PageHeader.jsx'
import '../../components/common/PageHeader.css'

const mockRoles = [
  { id: 1, nombre: 'Juan Pérez',   email: 'juan@mail.com',   rolActual: 'Cliente', rolNuevo: 'Cliente' },
  { id: 2, nombre: 'María García', email: 'maria@mail.com',  rolActual: 'VIP',     rolNuevo: 'VIP' },
  { id: 3, nombre: 'Carlos López', email: 'carlos@mail.com', rolActual: 'Admin',   rolNuevo: 'Admin' },
]

export default function Roles() {
  const [data, setData] = useState(mockRoles)

  const changeRol = (id, val) => setData(d => d.map(r => r.id === id ? {...r, rolNuevo: val} : r))

  return (
    <div>
      <PageHeader title="Gestión de Roles" subtitle="Asigna roles a los usuarios del sistema" />
      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Usuario</th><th>Email</th><th>Rol Actual</th><th>Nuevo Rol</th><th>Acción</th></tr>
            </thead>
            <tbody>
              {data.map(r => (
                <tr key={r.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--plump-purple, #52489C)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                        {r.nombre[0]}
                      </div>
                      <strong>{r.nombre}</strong>
                    </div>
                  </td>
                  <td className="text-secondary">{r.email}</td>
                  <td><span className="status-badge info">{r.rolActual}</span></td>
                  <td>
                    <select
                      value={r.rolNuevo}
                      onChange={e => changeRol(r.id, e.target.value)}
                      style={{ padding: '6px 10px', borderRadius: 8, border: '1.5px solid var(--line-color)', fontSize: 13, background: 'var(--bg-primary)' }}
                    >
                      <option>Cliente</option>
                      <option>VIP</option>
                      <option>Admin</option>
                    </select>
                  </td>
                  <td>
                    <button className="btn btn-primary-sm" style={{ height: 32, padding: '0 14px', fontSize: 13 }}>
                      Guardar
                    </button>
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
