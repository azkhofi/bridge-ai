import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import SectionLabel from '../components/ui/SectionLabel.jsx'
import { useApp } from '../context/AppContext.jsx'
import { CKG_CODES } from '../data/ckgCodes.js'
import { CATEGORY_META } from '../lib/constants.js'

export default function ResultInput() {
  const { name, setName, submitResult } = useApp()
  const navigate = useNavigate()
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  const pick = (k) => {
    setCode(k)
    setError('')
  }

  const submit = (e) => {
    e.preventDefault()
    const value = code.trim().toUpperCase()
    if (!CKG_CODES[value]) {
      setError('Kode nggak dikenali. Coba salah satu kode demo di bawah.')
      return
    }
    const ok = submitResult(value)
    if (ok) navigate('/understand')
  }

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
      <h1 className="text-2xl sm:text-3xl font-display text-slate-800 dark:text-slate-100">
        Masukkan hasil skriningmu
      </h1>
      <p className="mt-2 text-[14.5px] text-slate-500 dark:text-slate-400 leading-relaxed">
        Ketik kode dari hasil CKG kamu. Nggak punya? Coba salah satu kode demo di bawah.
      </p>

      <form onSubmit={submit}>
        <Card className="mt-6">
          <SectionLabel>Nama panggilan (opsional)</SectionLabel>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="mis. Raka"
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
          />

          <div className="mt-5">
            <SectionLabel>Kode hasil CKG</SectionLabel>
            <input
              type="text"
              value={code}
              onChange={(e) => {
                setCode(e.target.value)
                setError('')
              }}
              placeholder="MH-S2"
              maxLength={10}
              className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-4 text-center text-xl font-extrabold tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
            />
            <div className="h-5 mt-1.5 text-xs font-semibold text-rose-500">{error}</div>
          </div>

          <SectionLabel>Coba kode demo</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {Object.keys(CKG_CODES).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => pick(k)}
                className="rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-[13px] font-bold hover:border-brand dark:hover:border-brand transition"
              >
                {k} · <span className="text-brand-deep dark:text-brand">{CATEGORY_META[CKG_CODES[k].category].label}</span>
              </button>
            ))}
          </div>
        </Card>

        <div className="mt-6">
          <Button type="submit">
            Analisis hasilku <ArrowRight size={16} />
          </Button>
        </div>
      </form>
    </motion.div>
  )
}
