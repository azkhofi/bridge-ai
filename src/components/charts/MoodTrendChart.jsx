import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { MOOD_LABELS } from '../../lib/constants'

export default function MoodTrendChart({ data }) {
  if (!data || data.length === 0) {
    return <p className="text-sm text-slate-400 text-center py-8">Belum ada data mood untuk ditampilkan.</p>
  }

  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={data} margin={{ top: 8, right: 8, left: -24, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" strokeOpacity={0.25} />
        <XAxis dataKey="label" tick={{ fill: '#64748b', fontSize: 11 }} />
        <YAxis domain={[0, 4]} ticks={[0, 1, 2, 3, 4]} tick={{ fill: '#64748b', fontSize: 11 }} />
        <Tooltip
          formatter={(value) => [MOOD_LABELS[value] ?? value, 'Mood']}
          labelStyle={{ color: '#0f172a' }}
          contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0' }}
        />
        <Line type="monotone" dataKey="mood" stroke="#128f8a" strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
