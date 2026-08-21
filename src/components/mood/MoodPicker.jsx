import { cn } from '../../lib/cn'
import { MOODS, MOOD_LABELS } from '../../lib/constants'

export default function MoodPicker({ value, onChange, size = 'md' }) {
  return (
    <div className="flex gap-2">
      {MOODS.map((m, i) => (
        <button
          key={i}
          type="button"
          aria-label={MOOD_LABELS[i]}
          onClick={() => onChange(i)}
          className={cn(
            'rounded-xl border flex items-center justify-center transition cursor-pointer',
            size === 'md' ? 'w-11 h-11 text-xl' : 'w-8 h-8 text-base',
            value === i
              ? 'border-brand bg-brand/10'
              : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-brand',
          )}
        >
          {m}
        </button>
      ))}
    </div>
  )
}
