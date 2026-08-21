import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, ArrowLeft } from 'lucide-react'
import Card from '../components/ui/Card.jsx'
import { HELP_LADDER, HOTLINE } from '../data/helpResources.js'

export default function Help() {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
      <h1 className="text-2xl sm:text-3xl font-display text-slate-800 dark:text-slate-100">Ke mana kalau butuh bantuan?</h1>
      <p className="mt-2 text-[14.5px] text-slate-500 dark:text-slate-400 leading-relaxed">
        Minta bantuan itu langkah paling berani. Mulai dari yang paling dekat, naik perlahan sesuai kebutuhan.
      </p>

      <div className="mt-6 space-y-3">
        {HELP_LADDER.map((r, i) => (
          <div
            key={r.t}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 p-4"
          >
            <span className="w-9 h-9 rounded-xl bg-brand/10 text-brand-deep dark:text-brand flex items-center justify-center font-extrabold shrink-0">
              {i + 1}
            </span>
            <div className="min-w-0">
              <div className="font-bold text-slate-800 dark:text-slate-100">{r.t}</div>
              <div className="text-[12.5px] text-slate-500 dark:text-slate-400 leading-relaxed mt-0.5">{r.d}</div>
            </div>
            <span className="ml-auto shrink-0 text-[11px] font-extrabold text-brand-deep dark:text-brand bg-brand/10 px-2.5 py-1 rounded-full whitespace-nowrap">
              {r.tag}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl bg-slate-900 dark:bg-slate-900 border border-slate-800 text-white p-5 flex items-center gap-4 flex-wrap">
        <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
          <Phone size={20} />
        </div>
        <div className="min-w-0">
          <div className="text-2xl font-extrabold tracking-tight">{HOTLINE.number}</div>
          <div className="text-[12.5px] text-white/70">{HOTLINE.desc}</div>
        </div>
        <Link to="/safety" className="ml-auto">
          <button className="rounded-full border border-white/30 px-4 py-2 text-sm font-bold hover:bg-white/10 transition">
            Kondisi darurat?
          </button>
        </Link>
      </div>

      <div className="mt-5 rounded-2xl border border-blue-200/60 dark:border-blue-500/30 bg-blue-50/60 dark:bg-blue-500/5 p-5 text-[12.5px] leading-relaxed text-slate-600 dark:text-slate-300">
        <b className="text-brand-deep dark:text-brand">Kenali tanda darurat:</b> pikiran untuk menyakiti diri atau
        mengakhiri hidup, merasa nggak bisa mengendalikan diri, atau dalam krisis. Kalau iya, jangan ditunda — buka
        halaman bantuan darurat.
      </div>

      <div className="mt-6">
        <Link to="/">
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-brand-deep dark:hover:text-brand">
            <ArrowLeft size={16} /> Kembali ke beranda
          </button>
        </Link>
      </div>
    </motion.div>
  )
}
