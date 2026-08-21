import { useLocation } from 'react-router-dom'
import { cn } from '../../lib/cn'

const FLOW = [
  { label: 'Hasil', match: ['/result'] },
  { label: 'Pahami', match: ['/understand'] },
  { label: 'Jalur', match: ['/personalize', '/pathway'] },
  { label: 'Lakukan', match: ['/actions', '/breathing'] },
  { label: 'Bantuan', match: ['/help'] },
]

export default function StepsBar() {
  const { pathname } = useLocation()
  const idx = FLOW.findIndex((f) => f.match.includes(pathname))
  if (idx < 0) return null

  return (
    <div className="flex items-center gap-2 mb-6 flex-wrap">
      {FLOW.map((f, i) => {
        const state = i < idx ? 'done' : i === idx ? 'on' : ''
        return (
          <div key={f.label} className="flex items-center gap-2">
            {i > 0 && <span className="w-4 h-px bg-slate-300 dark:bg-slate-700" />}
            <span
              className={cn(
                'flex items-center gap-1.5 text-[11.5px] font-semibold',
                state === 'on' && 'text-brand-deep dark:text-brand',
                state === 'done' && 'text-brand-deep dark:text-brand',
                state === '' && 'text-slate-400 dark:text-slate-600',
              )}
            >
              <span
                className={cn(
                  'w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold',
                  state === 'on' && 'bg-brand text-white',
                  state === 'done' && 'bg-brand/15 text-brand-deep dark:text-brand',
                  state === '' && 'bg-slate-200 dark:bg-slate-800',
                )}
              >
                {state === 'done' ? '✓' : i + 1}
              </span>
              {f.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
