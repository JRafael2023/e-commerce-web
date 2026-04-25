import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Auth.css'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPass, setShowPass] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/admin')
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-card__logo">
          <span className="auth-logo-text">TaListo</span>
          <span className="auth-logo-accent">Admin</span>
        </div>
        <h1 className="auth-card__title">Iniciar Sesión</h1>
        <p className="auth-card__subtitle">Ingresa tus credenciales para continuar</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Correo electrónico</label>
            <div className="form-input-wrap">
              <i className="fa-solid fa-envelope form-icon" />
              <input
                className="form-input"
                type="email"
                placeholder="correo@ejemplo.com"
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <div className="form-input-wrap">
              <i className="fa-solid fa-lock form-icon" />
              <input
                className="form-input"
                type={showPass ? 'text' : 'password'}
                placeholder="••••••••"
                value={form.password}
                onChange={e => setForm({...form, password: e.target.value})}
              />
              <button
                type="button"
                className="form-eye"
                onClick={() => setShowPass(s => !s)}
              >
                <i className={`fa-solid ${showPass ? 'fa-eye-slash' : 'fa-eye'}`} />
              </button>
            </div>
          </div>

          <button type="submit" className="btn-primary btn-full">
            Iniciar Sesión
          </button>
        </form>

        <p className="auth-footer">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="auth-link">Regístrate</Link>
        </p>
      </div>
    </div>
  )
}
