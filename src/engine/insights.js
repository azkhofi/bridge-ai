import { dateKey } from '../components/mood/MoodCalendar'

export function computeStreak(entries) {
  // entries: { 'YYYY-MM-DD': 0..4 }
  const now = new Date()
  let streak = 0
  for (let i = 0; ; i++) {
    const d = new Date(now)
    d.setDate(d.getDate() - i)
    const key = dateKey(d.getFullYear(), d.getMonth(), d.getDate())
    if (entries[key] !== undefined && entries[key] !== null) {
      streak++
    } else if (i === 0) {
      continue // hari ini belum diisi, masih bisa jadi streak
    } else {
      break
    }
  }
  return streak
}

export function weeklySummary(entries) {
  const now = new Date()
  const days = []
  let total = 0
  let count = 0
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now)
    d.setDate(d.getDate() - i)
    const key = dateKey(d.getFullYear(), d.getMonth(), d.getDate())
    const val = entries[key]
    days.push({ label: d.toLocaleDateString('id-ID', { weekday: 'short' }), mood: val })
    if (val !== undefined && val !== null) {
      total += val
      count++
    }
  }
  const avg = count ? total / count : null
  let insight = 'Catat mood kamu lebih rutin biar polanya makin terlihat.'
  if (avg !== null) {
    if (avg >= 3) insight = 'Mood kamu minggu ini cenderung baik. Pertahankan kebiasaan positifmu!'
    else if (avg >= 2) insight = 'Mood kamu minggu ini cukup stabil. Coba tambah aktivitas menyenangkan.'
    else insight = 'Mood kamu minggu ini terasa berat. Pertimbangkan bicara dengan orang yang kamu percaya.'
  }
  return { days, avg, insight }
}
