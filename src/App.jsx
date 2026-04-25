import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from './infrastructure/ui/components/layout/AdminLayout.jsx'

// Auth
import Login from './infrastructure/ui/pages/auth/Login.jsx'
import Register from './infrastructure/ui/pages/auth/Register.jsx'

// Admin
import Dashboard from './infrastructure/ui/pages/admin/Dashboard.jsx'
import Perfil from './infrastructure/ui/pages/admin/Perfil.jsx'
import Ajustes from './infrastructure/ui/pages/admin/Ajustes.jsx'
import CambioPassword from './infrastructure/ui/pages/admin/CambioPassword.jsx'
import Notificaciones from './infrastructure/ui/pages/admin/Notificaciones.jsx'
import Roles from './infrastructure/ui/pages/admin/Roles.jsx'

// Products
import Productos from './infrastructure/ui/pages/admin/products/Productos.jsx'
import InventarioProductos from './infrastructure/ui/pages/admin/products/InventarioProductos.jsx'
import PuntosProductos from './infrastructure/ui/pages/admin/products/PuntosProductos.jsx'
import ProductosCanjeados from './infrastructure/ui/pages/admin/products/ProductosCanjeados.jsx'

// Categories
import Categorias from './infrastructure/ui/pages/admin/categories/Categorias.jsx'
import SubCategorias from './infrastructure/ui/pages/admin/categories/SubCategorias.jsx'
import InventarioSubCategorias from './infrastructure/ui/pages/admin/categories/InventarioSubCategorias.jsx'

// Orders
import Pedidos from './infrastructure/ui/pages/admin/orders/Pedidos.jsx'
import PedidosEntrantes from './infrastructure/ui/pages/admin/orders/PedidosEntrantes.jsx'
import PedidosAtendidos from './infrastructure/ui/pages/admin/orders/PedidosAtendidos.jsx'
import PedidosCalificados from './infrastructure/ui/pages/admin/orders/PedidosCalificados.jsx'
import PedidosClientes from './infrastructure/ui/pages/admin/orders/PedidosClientes.jsx'
import DetallePedido from './infrastructure/ui/pages/admin/orders/DetallePedido.jsx'

// Clients
import Clientes from './infrastructure/ui/pages/admin/clients/Clientes.jsx'

// Promotions
import Promociones from './infrastructure/ui/pages/admin/promotions/Promociones.jsx'
import DetallePromocion from './infrastructure/ui/pages/admin/promotions/DetallePromocion.jsx'
import Ofertas from './infrastructure/ui/pages/admin/promotions/Ofertas.jsx'
import Publicidades from './infrastructure/ui/pages/admin/promotions/Publicidades.jsx'
import DetallePublicidad from './infrastructure/ui/pages/admin/promotions/DetallePublicidad.jsx'

// Points
import SistemaPuntos from './infrastructure/ui/pages/admin/points/SistemaPuntos.jsx'

// Courses
import Cursos from './infrastructure/ui/pages/admin/courses/Cursos.jsx'
import DetalleCurso from './infrastructure/ui/pages/admin/courses/DetalleCurso.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="ajustes" element={<Ajustes />} />
          <Route path="cambio-password" element={<CambioPassword />} />
          <Route path="notificaciones" element={<Notificaciones />} />
          <Route path="roles" element={<Roles />} />

          <Route path="productos" element={<Productos />} />
          <Route path="inventario-productos" element={<InventarioProductos />} />
          <Route path="puntos-productos" element={<PuntosProductos />} />
          <Route path="productos-canjeados" element={<ProductosCanjeados />} />

          <Route path="categorias" element={<Categorias />} />
          <Route path="subcategorias" element={<SubCategorias />} />
          <Route path="inventario-subcategorias" element={<InventarioSubCategorias />} />

          <Route path="pedidos" element={<Pedidos />} />
          <Route path="pedidos-entrantes" element={<PedidosEntrantes />} />
          <Route path="pedidos-atendidos" element={<PedidosAtendidos />} />
          <Route path="pedidos-calificados" element={<PedidosCalificados />} />
          <Route path="pedidos-clientes" element={<PedidosClientes />} />
          <Route path="pedidos/:id" element={<DetallePedido />} />

          <Route path="clientes" element={<Clientes />} />

          <Route path="promociones" element={<Promociones />} />
          <Route path="promociones/:id" element={<DetallePromocion />} />
          <Route path="ofertas" element={<Ofertas />} />
          <Route path="publicidades" element={<Publicidades />} />
          <Route path="publicidades/:id" element={<DetallePublicidad />} />

          <Route path="sistema-puntos" element={<SistemaPuntos />} />

          <Route path="cursos" element={<Cursos />} />
          <Route path="cursos/:id" element={<DetalleCurso />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
