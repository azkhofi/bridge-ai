import { motion } from 'framer-motion'
import { DOMAIN_LIST } from '../../data/domains'
import { MAX_DOMAIN_SCORE } from '../../lib/constants'

export default function DomainBars({ domainScores }) {
  return (
    <div className="space-y-4">
      {DOMAIN_LIST.map((d, i) => {
        const score = domainScores[d.key] ?? 0
        return (
          <div key={d.key} className="flex items-center gap-3">
            <div className="w-28 shrink-0">
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">{d.label}</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">{d.desc}</div>
            </div>
            <div className="flex-1 h-2.5 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: d.color }}
                initial={{ width: 0 }}
                animate={{ width: `${(score / MAX_DOMAIN_SCORE) * 100}%` }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
              />
            </div>
            <div className="w-9 text-right text-sm font-bold text-slate-600 dark:text-slate-300">
              {score}/{MAX_DOMAIN_SCORE}
            </div>
          </div>
        )
      })}
    </div>
  )
}
