import { cn } from '../../lib/cn'

export default function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-xl p-6',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
