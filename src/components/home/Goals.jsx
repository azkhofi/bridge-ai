import { Link } from 'react-router-dom'
import { useApp } from '../../context/AppContext.jsx'
import { GOALS } from '../../data/goals.js'

export default function Goals() {
  const { goal, setGoal } = useApp()

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {GOALS.map((g) => (
        <Link
          key={g.id}
          to={g.to}
          onClick={() => setGoal(g.id)}
          className={`rounded-xl border p-4 text-center transition ${
            goal === g.id
              ? 'border-brand bg-brand/5'
              : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 hover:border-brand dark:hover:border-brand'
          }`}
        >
          <div className="text-2xl">{g.icon}</div>
          <div className="mt-2 text-sm font-bold text-slate-900 dark:text-white">{g.label}</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{g.desc}</div>
        </Link>
      ))}
    </div>
  )
}
