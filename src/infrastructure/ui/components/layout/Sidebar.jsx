import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Sidebar.css'

const navItems = [
  { icon: 'fa-solid fa-house',            label: 'Inicio',              to: '/admin' },
  { icon: 'fa-solid fa-bell',             label: 'Notificaciones',      to: '/admin/notificaciones', badge: 3 },
  { icon: 'fa-solid fa-box',              label: 'Productos',           to: '/admin/productos' },
  { icon: 'fa-solid fa-warehouse',        label: 'Inventario',          to: '/admin/inventario-productos' },
  { icon: 'fa-solid fa-tags',             label: 'Categorías',          to: '/admin/categorias' },
  { icon: 'fa-solid fa-layer-group',      label: 'SubCategorías',       to: '/admin/subcategorias' },
  { icon: 'fa-solid fa-clipboard-list',   label: 'Pedidos',             to: '/admin/pedidos' },
  { icon: 'fa-solid fa-truck-fast',       label: 'Entrantes',           to: '/admin/pedidos-entrantes', badge: 5 },
  { icon: 'fa-solid fa-circle-check',     label: 'Atendidos',           to: '/admin/pedidos-atendidos' },
  { icon: 'fa-solid fa-star',             label: 'Calificados',         to: '/admin/pedidos-calificados' },
  { icon: 'fa-solid fa-users',            label: 'Clientes',            to: '/admin/clientes' },
  { icon: 'fa-solid fa-bullhorn',         label: 'Promociones',         to: '/admin/promociones' },
  { icon: 'fa-solid fa-percent',          label: 'Ofertas',             to: '/admin/ofertas' },
  { icon: 'fa-solid fa-rectangle-ad',     label: 'Publicidades',        to: '/admin/publicidades' },
  { icon: 'fa-solid fa-trophy',           label: 'Sis. Puntos',         to: '/admin/sistema-puntos' },
  { icon: 'fa-solid fa-gift',             label: 'Canjeados',           to: '/admin/productos-canjeados' },
  { icon: 'fa-solid fa-book-open',        label: 'Cursos',              to: '/admin/cursos' },
  { icon: 'fa-solid fa-shield-halved',    label: 'Roles',               to: '/admin/roles' },
]

const bottomItems = [
  { icon: 'fa-solid fa-user-circle',      label: 'Perfil',              to: '/admin/perfil' },
  { icon: 'fa-solid fa-gear',             label: 'Ajustes',             to: '/admin/ajustes' },
]

export default function Sidebar({ collapsed, onToggle }) {
  const navigate = useNavigate()

  return (
    <aside className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''}`}>
      <div className="sidebar__header">
        <button className="sidebar__toggle" onClick={onToggle} title="Colapsar menú">
          <i className="fa-solid fa-grip-lines" />
        </button>
        {!collapsed && (
          <div className="sidebar__logo" onClick={() => navigate('/admin')}>
            <span className="sidebar__logo-text">TaListo</span>
            <span className="sidebar__logo-accent">Admin</span>
          </div>
        )}
      </div>

      <nav className="sidebar__nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/admin'}
            className={({ isActive }) =>
              `sidebar__item ${isActive ? 'sidebar__item--active' : ''}`
            }
            title={collapsed ? item.label : undefined}
          >
            <span className="sidebar__icon">
              <i className={item.icon} />
              {item.badge && collapsed && (
                <span className="sidebar__badge sidebar__badge--dot" />
              )}
            </span>
            {!collapsed && <span className="sidebar__label">{item.label}</span>}
            {!collapsed && item.badge && (
              <span className="badge">{item.badge}</span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar__bottom">
        {bottomItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `sidebar__item ${isActive ? 'sidebar__item--active' : ''}`
            }
            title={collapsed ? item.label : undefined}
          >
            <span className="sidebar__icon"><i className={item.icon} /></span>
            {!collapsed && <span className="sidebar__label">{item.label}</span>}
          </NavLink>
        ))}
        <button
          className="sidebar__item sidebar__logout"
          onClick={() => navigate('/login')}
          title={collapsed ? 'Salir' : undefined}
        >
          <span className="sidebar__icon"><i className="fa-solid fa-right-from-bracket" /></span>
          {!collapsed && <span className="sidebar__label">Salir</span>}
        </button>
      </div>
    </aside>
  )
}
