import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import './AdminLayout.css'

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="admin-layout">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />

      <div className="admin-layout__main">
        <header className="admin-layout__topbar">
          <div className="topbar__left">
            <h2 className="topbar__title">Panel de Administración</h2>
          </div>
          <div className="topbar__right">
            <button className="topbar__icon-btn" onClick={() => navigate('/admin/notificaciones')} title="Notificaciones">
              <i className="fa-solid fa-bell" />
              <span className="badge">3</span>
            </button>
            <button className="topbar__icon-btn" onClick={() => navigate('/admin/perfil')} title="Perfil">
              <i className="fa-solid fa-user-circle" />
            </button>
            <div className="topbar__user" onClick={() => navigate('/admin/perfil')}>
              <div className="topbar__avatar">A</div>
              <div className="topbar__user-info">
                <span className="topbar__user-name">Admin</span>
                <span className="topbar__user-role">Administrador</span>
              </div>
            </div>
          </div>
        </header>

        <main className="admin-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
