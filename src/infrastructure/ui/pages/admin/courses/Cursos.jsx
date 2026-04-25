import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'
import './Cursos.css'

const mockCursos = [
  { id: 1, titulo: 'Atención al Cliente',        pasos: 5,  duracion: '2h 30m', nivel: 'Básico',     icon: 'fa-headset',       color: '#0074FF' },
  { id: 2, titulo: 'Manejo de Inventario',       pasos: 8,  duracion: '4h 00m', nivel: 'Intermedio', icon: 'fa-warehouse',     color: '#249689' },
  { id: 3, titulo: 'Técnicas de Ventas',         pasos: 6,  duracion: '3h 15m', nivel: 'Básico',     icon: 'fa-chart-line',    color: '#EE8B60' },
  { id: 4, titulo: 'Uso del Sistema E-Commerce', pasos: 10, duracion: '5h 00m', nivel: 'Básico',     icon: 'fa-display',       color: '#52489C' },
]

const nivelColor = { 'Básico': 'active', 'Intermedio': 'pending', 'Avanzado': 'error' }

export default function Cursos() {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  return (
    <div>
      <PageHeader
        title="Cursos de Capacitación"
        subtitle="Material de formación para el equipo"
        actions={<button className="btn btn-primary-sm" onClick={() => setShowModal(true)}><i className="fa-solid fa-plus" /> Nuevo Curso</button>}
      />

      <div className="cursos-grid">
        {mockCursos.map(c => (
          <div key={c.id} className="curso-card" onClick={() => navigate(`/admin/cursos/${c.id}`)}>
            <div className="curso-card__img" style={{ background: `linear-gradient(135deg, ${c.color}22, ${c.color}44)` }}>
              <i className={`fa-solid ${c.icon}`} style={{ fontSize: 48, color: c.color }} />
            </div>
            <div className="curso-card__body">
              <h3 className="curso-card__title">{c.titulo}</h3>
              <div className="curso-card__meta">
                <span><i className="fa-solid fa-list-check" /> {c.pasos} pasos</span>
                <span><i className="fa-solid fa-clock" /> {c.duracion}</span>
              </div>
              <div style={{ marginTop: 10 }}>
                <span className={`status-badge ${nivelColor[c.nivel]}`}>{c.nivel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal__header"><h3>Nuevo Curso</h3><button className="modal__close" onClick={() => setShowModal(false)}><i className="fa-solid fa-xmark" /></button></div>
            <div className="modal__body">
              {[['Título del curso','text','fa-book-open'],['Duración','text','fa-clock'],['URL de video','url','fa-video']].map(([l,t,i]) => (
                <div className="form-group" key={l}><label className="form-label">{l}</label><div className="form-input-wrap"><i className={`fa-solid ${i} form-icon`} /><input className="form-input" type={t} placeholder={l} /></div></div>
              ))}
              <div className="form-group"><label className="form-label">Nivel</label><select className="form-input" style={{ paddingLeft: 14 }}><option>Básico</option><option>Intermedio</option><option>Avanzado</option></select></div>
              <div className="form-group"><label className="form-label">Descripción</label><textarea className="form-textarea" rows={3} placeholder="Descripción del curso..." /></div>
            </div>
            <div className="modal__footer">
              <button className="btn btn-secondary-sm" onClick={() => setShowModal(false)}>Cancelar</button>
              <button className="btn btn-primary-sm" onClick={() => setShowModal(false)}>Crear Curso</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
