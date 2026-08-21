import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Send, Sparkles } from 'lucide-react'
import { useChat } from '../../context/ChatContext.jsx'

export default function ChatWidget() {
  const { messages, typing, send } = useChat()
  const inputRef = useRef(null)
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const submit = (e) => {
    e.preventDefault()
    const val = inputRef.current?.value
    if (val) {
      send(val)
      inputRef.current.value = ''
    }
  }

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
            <div
              className={
                m.role === 'user'
                  ? 'max-w-[80%] rounded-2xl rounded-br-sm bg-brand text-white px-4 py-2.5 text-sm'
                  : 'max-w-[85%] rounded-2xl rounded-bl-sm bg-slate-100 dark:bg-slate-700 px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100'
              }
            >
              {m.text}
              {m.crisis && (
                <div className="mt-2 rounded-lg bg-rose-500 text-white px-3 py-2 text-[12.5px] font-semibold">
                  Kamu nggak sendirian — buka bantuan darurat sekarang.
                </div>
              )}
              {m.actions && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {m.actions.map((a, j) =>
                    a.to ? (
                      <Link
                        key={j}
                        to={a.to}
                        className="rounded-full bg-white dark:bg-slate-600 border border-brand text-brand-deep dark:text-white text-xs font-semibold px-3 py-1.5"
                      >
                        {a.label}
                      </Link>
                    ) : a.href ? (
                      <a
                        key={j}
                        href={a.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-white dark:bg-slate-600 border border-brand text-brand-deep dark:text-white text-xs font-semibold px-3 py-1.5"
                      >
                        {a.label}
                      </a>
                    ) : (
                      <button
                        key={j}
                        onClick={() => send(a.reply)}
                        className="rounded-full bg-white dark:bg-slate-600 border border-brand text-brand-deep dark:text-white text-xs font-semibold px-3 py-1.5"
                      >
                        {a.label}
                      </button>
                    ),
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-sm bg-slate-100 dark:bg-slate-700 px-4 py-2.5 text-sm text-slate-500 flex gap-1">
              <span className="animate-bounce">●</span>
              <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>●</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>●</span>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <form onSubmit={submit} className="border-t border-slate-200 dark:border-slate-700 p-3 flex gap-2">
        <input
          ref={inputRef}
          placeholder="Ketik pesan…"
          className="flex-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
        />
        <button
          type="submit"
          className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center hover:bg-brand-deep transition"
          aria-label="Kirim"
        >
          <Send size={16} />
        </button>
      </form>

      <div className="px-4 py-2 text-[10px] text-slate-400 flex items-center gap-1">
        <Sparkles size={11} /> Simulasi rule-based — bukan psikolog, bukan diagnosis.
      </div>
    </div>
  )
}
