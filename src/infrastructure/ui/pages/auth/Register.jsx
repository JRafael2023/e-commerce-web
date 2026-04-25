import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Auth.css'

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nombre: '', apellido: '', telefono: '', direccion: '', email: '', password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/login')
  }

  const field = (key, label, type = 'text', icon, placeholder) => (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <div className="form-input-wrap">
        <i className={`fa-solid ${icon} form-icon`} />
        <input
          className="form-input"
          type={type}
          placeholder={placeholder}
          value={form[key]}
          onChange={e => setForm({...form, [key]: e.target.value})}
        />
      </div>
    </div>
  )

  return (
    <div className="auth-page">
      <div className="auth-card auth-card--wide">
        <div className="auth-card__logo">
          <span className="auth-logo-text">E-Commerce</span>
          <span className="auth-logo-accent">Admin</span>
        </div>
        <h1 className="auth-card__title">Crear Cuenta</h1>
        <p className="auth-card__subtitle">Completa el formulario para registrarte</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-grid">
            {field('nombre',    'Nombre',    'text',  'fa-user',        'Tu nombre')}
            {field('apellido',  'Apellido',  'text',  'fa-user',        'Tu apellido')}
            {field('telefono',  'Teléfono',  'tel',   'fa-phone',       '+51 999 999 999')}
            {field('direccion', 'Dirección', 'text',  'fa-location-dot','Tu dirección')}
          </div>
          {field('email',    'Correo electrónico', 'email',    'fa-envelope', 'correo@ejemplo.com')}
          {field('password', 'Contraseña',          'password', 'fa-lock',     '••••••••')}

          <button type="submit" className="btn-primary btn-full">
            Crear Cuenta
          </button>
        </form>

        <p className="auth-footer">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="auth-link">Inicia sesión</Link>
        </p>
      </div>
    </div>
  )
}
