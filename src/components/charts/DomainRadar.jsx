import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts'
import { DOMAIN_LIST } from '../../data/domains'

export default function DomainRadar({ domainScores }) {
  const data = DOMAIN_LIST.map((d) => ({ domain: d.label, score: domainScores[d.key] ?? 0 }))

  return (
    <ResponsiveContainer width="100%" height={280}>
      <RadarChart data={data} outerRadius="72%">
        <PolarGrid stroke="#94a3b8" strokeOpacity={0.4} />
        <PolarAngleAxis dataKey="domain" tick={{ fill: '#64748b', fontSize: 12 }} />
        <PolarRadiusAxis domain={[0, 4]} tick={false} axisLine={false} />
        <Radar name="Skor" dataKey="score" stroke="#128f8a" fill="#128f8a" fillOpacity={0.35} strokeWidth={2} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
