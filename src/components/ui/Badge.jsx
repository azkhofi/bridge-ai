import { cn } from '../../lib/cn'

const styles = {
  low: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  mid: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
  high: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300',
}

const dot = {
  low: 'bg-emerald-500',
  mid: 'bg-amber-500',
  high: 'bg-rose-500',
}

export default function Badge({ category = 'low', label, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold',
        styles[category],
        className,
      )}
    >
      <span className={cn('w-2 h-2 rounded-full', dot[category])} />
      {label || category}
    </span>
  )
}
