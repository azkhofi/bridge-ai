import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, BadgeCheck } from 'lucide-react'
import { ARTICLES } from '../data/articles.js'

export default function ArticleDetail() {
  const { slug } = useParams()
  const article = ARTICLES.find((a) => a.slug === slug)

  if (!article) return <Navigate to="/articles" replace />

  return (
    <motion.article initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
      <Link
        to="/articles"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-brand-deep dark:hover:text-brand mb-4"
      >
        <ArrowLeft size={16} /> Semua artikel
      </Link>

      <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider text-brand-deep dark:text-brand">
        <span className="text-base">{article.icon}</span> {article.category}
        <span className="ml-2 inline-flex items-center gap-1 text-slate-400 font-semibold normal-case tracking-normal">
          <Clock size={13} /> {article.readingTime} menit
        </span>
      </div>

      <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">{article.title}</h1>

      <div className="mt-6 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-6">
        <div className="space-y-4 max-w-2xl">
          {article.blocks.map((b, i) => {
            if (b.type === 'h') return <h2 key={i} className="text-lg font-bold text-slate-900 dark:text-white pt-2">{b.text}</h2>
            if (b.type === 'list')
              return (
                <ul key={i} className="space-y-2">
                  {b.items.map((it, j) => (
                    <li key={j} className="flex gap-2 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
                      <span className="text-brand">•</span> {it}
                    </li>
                  ))}
                </ul>
              )
            return <p key={i} className="text-[14.5px] leading-relaxed text-slate-600 dark:text-slate-300">{b.text}</p>
          })}
        </div>

        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-[12px] font-bold text-emerald-600 dark:text-emerald-400 mb-2">
            <BadgeCheck size={15} /> Ditinjau berdasarkan referensi terpercaya
          </div>
          <ul className="space-y-1">
            {article.references.map((r, i) => (
              <li key={i} className="text-[12px] text-slate-400 dark:text-slate-500">{r}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-rose-200/70 dark:border-rose-500/30 bg-rose-50/70 dark:bg-rose-500/10 p-5 text-[12.5px] leading-relaxed text-rose-700 dark:text-rose-300">
        <b>Konten ini bukan pengganti diagnosis profesional.</b> Kalau keluhanmu menetap atau mengganggu, pertimbangkan
        berbicara dengan konselor — <Link to="/help" className="font-bold underline">lihat jalur bantuan</Link>.
      </div>
    </motion.article>
  )
}
