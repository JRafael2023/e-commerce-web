import PageHeader from '../../../components/common/PageHeader.jsx'
import '../../../components/common/PageHeader.css'

const mockRanking = [
  { pos: 1, nombre: 'Luis Ramírez',  puntos: 1200, nivel: 'Oro' },
  { pos: 2, nombre: 'Carlos López',  puntos: 680,  nivel: 'Plata' },
  { pos: 3, nombre: 'Juan Pérez',    puntos: 340,  nivel: 'Bronce' },
  { pos: 4, nombre: 'María García',  puntos: 210,  nivel: 'Bronce' },
  { pos: 5, nombre: 'Ana Torres',    puntos: 80,   nivel: 'Básico' },
]

const nivelColor = { 'Oro': '#FFD700', 'Plata': '#C0C0C0', 'Bronce': '#CD7F32', 'Básico': '#95A1AC' }
const nivelIcon  = { 'Oro': 'fa-trophy', 'Plata': 'fa-medal', 'Bronce': 'fa-medal', 'Básico': 'fa-star' }

export default function SistemaPuntos() {
  return (
    <div>
      <PageHeader title="Sistema de Puntos" subtitle="Ranking y configuración de puntos" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 24 }}>
        {[['Total Puntos Emitidos','4,510','fa-trophy','#FFCF13'],['Puntos Canjeados','1,200','fa-gift','#59C3C3'],['Clientes con Puntos','234','fa-users','#0074FF'],['Promedio por Cliente','192','fa-chart-bar','#52489C']].map(([l,v,i,c]) => (
          <div key={l} className="card" style={{ borderLeft: `4px solid ${c}`, display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{ width: 44, height: 44, borderRadius: 8, background: c+'22', display: 'flex', alignItems: 'center', justifyContent: 'center', color: c, fontSize: 20 }}>
              <i className={`fa-solid ${i}`} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700 }}>{v}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{l}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: 16 }}>Ranking de Clientes</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>#</th><th>Cliente</th><th>Puntos</th><th>Nivel</th></tr>
            </thead>
            <tbody>
              {mockRanking.map(r => (
                <tr key={r.pos}>
                  <td>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: r.pos <= 3 ? nivelColor[r.nivel] : 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, color: r.pos <= 3 ? '#fff' : 'var(--text-secondary)' }}>
                      {r.pos}
                    </div>
                  </td>
                  <td><strong>{r.nombre}</strong></td>
                  <td>
                    <span style={{ color: 'var(--warning)', fontWeight: 600 }}>
                      <i className="fa-solid fa-trophy" style={{ marginRight: 4 }} />{r.puntos}
                    </span>
                  </td>
                  <td>
                    <span style={{ color: nivelColor[r.nivel], fontWeight: 600 }}>
                      <i className={`fa-solid ${nivelIcon[r.nivel]}`} style={{ marginRight: 4 }} />{r.nivel}
                    </span>
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
