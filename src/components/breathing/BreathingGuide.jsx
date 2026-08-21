import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, RotateCcw } from 'lucide-react'
import Button from '../ui/Button'

const PHASES = [
  { key: 'in', label: 'Tarik napas', seconds: 4, scale: 1.05 },
  { key: 'hold', label: 'Tahan', seconds: 7, scale: 1.05 },
  { key: 'out', label: 'Hembuskan', seconds: 8, scale: 0.55 },
]

export default function BreathingGuide() {
  const [running, setRunning] = useState(false)
  const [phase, setPhase] = useState(0)
  const [count, setCount] = useState(1)
  const timer = useRef(null)

  useEffect(() => {
    if (!running) return
    const current = PHASES[phase]
    timer.current = setTimeout(() => {
      if (phase === PHASES.length - 1) {
        setPhase(0)
        setCount((c) => c + 1)
      } else {
        setPhase((p) => p + 1)
      }
    }, current.seconds * 1000)
    return () => clearTimeout(timer.current)
  }, [running, phase])

  const stop = () => {
    setRunning(false)
    clearTimeout(timer.current)
  }

  const reset = () => {
    stop()
    setPhase(0)
    setCount(1)
  }

  const current = PHASES[phase]

  return (
    <div className="text-center">
      <div className="relative w-56 h-56 mx-auto my-8">
        <motion.div
          className="absolute inset-0 rounded-full bg-brand/20"
          animate={{ scale: current.scale, opacity: running ? 0.8 : 0.4 }}
          transition={{ duration: current.seconds, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-4 rounded-full bg-brand/30"
          animate={{ scale: current.scale }}
          transition={{ duration: current.seconds, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-8 rounded-full bg-gradient-to-br from-brand to-brand-deep flex items-center justify-center"
          animate={{ scale: current.scale }}
          transition={{ duration: current.seconds, ease: 'easeInOut' }}
        >
          <div className="text-white">
            <div className="text-sm font-semibold opacity-90">{running ? current.label : 'Siap?'}</div>
            <div className="text-3xl font-bold font-display">{running ? current.seconds : '4-7-8'}</div>
          </div>
        </motion.div>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        Teknik pernapasan <b>4–7–8</b> untuk menenangkan tubuh. Siklus ke-{count}.
      </p>

      <div className="flex items-center justify-center gap-3">
        {!running ? (
          <Button onClick={() => setRunning(true)}>
            <Play size={16} /> Mulai
          </Button>
        ) : (
          <Button variant="secondary" onClick={stop}>
            <Pause size={16} /> Jeda
          </Button>
        )}
        <Button variant="ghost" onClick={reset}>
          <RotateCcw size={16} /> Ulangi
        </Button>
      </div>
    </div>
  )
}
