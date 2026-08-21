import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Card from '../components/ui/Card.jsx'
import SectionLabel from '../components/ui/SectionLabel.jsx'

const DOS = [
  'Dengarkan tanpa menghakimi — kadang orang cuma butuh didengar.',
  'Tanyakan dengan tenang: "kamu lagi ngerasa gimana?"',
  'Validasi perasaannya: "wajar banget kamu ngerasa begitu."',
  'Tawarkan bantuan nyata, bukan sekadar "semangat ya".',
  'Jaga kerahasiaannya, kecuali menyangkut keselamatannya.',
]

const DONTS = [
  'Jangan bandingkan dengan orang lain ("yang lain lebih berat").',
  'Jangan buru-buru kasih solusi sebelum dia selesai cerita.',
  'Jangan menyepelekan ("ah, lebay").',
  'Jangan menjanjikan hal yang tidak bisa kamu tepati.',
]

const ESCALATE = [
  'Dia bicara tentang menyakiti diri atau mengakhiri hidup.',
  'Kondisinya memburuk dengan cepat.',
  'Dia menarik diri total dan menolak bantuan.',
]

export default function HelpFriend() {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Bantu teman yang kamu sayangi</h1>
      <p className="mt-2 text-[14.5px] text-slate-500 dark:text-slate-400 leading-relaxed">
        Kamu nggak harus jadi psikolog untuk menolong. Kadang, cukup jadi teman yang hadir dan mau mendengarkan.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <SectionLabel>Yang bisa kamu lakukan</SectionLabel>
          <ul className="space-y-2.5">
            {DOS.map((d, i) => (
              <li key={i} className="flex gap-2 text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                <span className="text-emerald-500 font-bold">✓</span> {d}
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <SectionLabel>Yang sebaiknya dihindari</SectionLabel>
          <ul className="space-y-2.5">
            {DONTS.map((d, i) => (
              <li key={i} className="flex gap-2 text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                <span className="text-rose-500 font-bold">✗</span> {d}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-4 rounded-xl border border-amber-300/60 dark:border-amber-500/40 bg-amber-50/70 dark:bg-amber-500/10 p-5">
        <div className="font-bold text-amber-700 dark:text-amber-400 mb-2">Kapan harus libatkan orang dewasa / bantuan</div>
        <ul className="space-y-2">
          {ESCALATE.map((e, i) => (
            <li key={i} className="flex gap-2 text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-300">
              <span className="text-amber-500 font-bold">!</span> {e}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[13px] text-slate-600 dark:text-slate-300">
          Dalam situasi darurat, jangan ditunda —{' '}
          <Link to="/safety" className="font-bold text-rose-500 underline">buka halaman bantuan darurat</Link> atau hubungi
          orang dewasa terpercaya segera.
        </p>
      </div>
    </motion.div>
  )
}
