import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Flame } from 'lucide-react'
import Card from '../ui/Card.jsx'
import MoodPicker from '../mood/MoodPicker.jsx'
import { useMood } from '../../context/MoodContext.jsx'
import { dateKey } from '../mood/MoodCalendar.jsx'
import { computeStreak } from '../../engine/insights.js'
import { MOOD_LABELS } from '../../lib/constants.js'

export default function DailyCheckIn() {
  const { entries, setMood } = useMood()
  const now = new Date()
  const todayKey = dateKey(now.getFullYear(), now.getMonth(), now.getDate())
  const todayMood = entries[todayKey]
  const [justSet, setJustSet] = useState(false)
  const streak = computeStreak(entries)

  const handle = (m) => {
    setMood(todayKey, m)
    setJustSet(true)
    setTimeout(() => setJustSet(false), 2500)
  }

  return (
    <Card className="flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex-1">
        <div className="font-bold text-slate-900 dark:text-white">Gimana perasaanmu hari ini?</div>
        <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-1">
          {todayMood !== undefined && todayMood !== null
            ? `Tercatat: kamu merasa ${MOOD_LABELS[todayMood].toLowerCase()}.`
            : 'Satu klik untuk mencatat mood — bantu kamu lihat polanya.'}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <MoodPicker value={todayMood ?? null} onChange={handle} size="sm" />
        <Link
          to="/mood"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-deep dark:text-brand whitespace-nowrap"
        >
          <Flame size={14} /> {streak} hari
        </Link>
      </div>
      {justSet && <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Tersimpan ✓</span>}
    </Card>
  )
}
