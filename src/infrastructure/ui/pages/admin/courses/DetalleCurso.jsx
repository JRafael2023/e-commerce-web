import { useNavigate } from 'react-router-dom'
import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'
import './DetalleCurso.css'

const mockCurso = {
  titulo: 'Atención al Cliente',
  descripcion: 'Aprende las mejores técnicas para brindar una excelente atención al cliente y fidelizarlos.',
  duracion: '2h 30m',
  nivel: 'Básico',
  pasos: [
    { num: 1, titulo: 'Introducción a la atención al cliente',    duracion: '15 min', completado: true },
    { num: 2, titulo: 'Comunicación efectiva con el cliente',     duracion: '25 min', completado: true },
    { num: 3, titulo: 'Manejo de quejas y reclamos',              duracion: '30 min', completado: false },
    { num: 4, titulo: 'Técnicas de fidelización',                 duracion: '20 min', completado: false },
    { num: 5, titulo: 'Evaluación final y certificación',         duracion: '20 min', completado: false },
  ]
}

export default function DetalleCurso() {
  const navigate = useNavigate()

  return (
    <div>
      <PageHeader
        title={mockCurso.titulo}
        subtitle={`${mockCurso.nivel} · ${mockCurso.duracion} · ${mockCurso.pasos.length} pasos`}
        actions={<button className="btn btn-secondary-sm" onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left" /> Volver</button>}
      />

      <div className="detalle-curso-layout">
        {/* Video placeholder */}
        <div>
          <div className="curso-video">
            <i className="fa-solid fa-play" />
            <p>Video de introducción</p>
          </div>
          <div className="card" style={{ marginTop: 16 }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: 10, fontSize: 16 }}>Descripción</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.6 }}>{mockCurso.descripcion}</p>
          </div>
        </div>

        {/* Pasos */}
        <div className="card">
          <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: 16, fontSize: 16 }}>Pasos del Curso</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {mockCurso.pasos.map(p => (
              <div key={p.num} className={`paso-item ${p.completado ? 'paso-item--done' : ''}`}>
                <div className="paso-num">
                  {p.completado ? <i className="fa-solid fa-check" /> : p.num}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 500, fontSize: 14 }}>{p.titulo}</p>
                  <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>
                    <i className="fa-solid fa-clock" style={{ marginRight: 4 }} />{p.duracion}
                  </p>
                </div>
                <button className={`btn btn-${p.completado ? 'secondary-sm' : 'primary-sm'}`} style={{ height: 32, padding: '0 14px', fontSize: 12 }}>
                  {p.completado ? 'Revisar' : 'Iniciar'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
