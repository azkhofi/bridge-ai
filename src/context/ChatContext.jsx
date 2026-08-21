import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { chatReply } from '../engine/chatEngine'
import { useApp } from './AppContext.jsx'

const INITIAL = [
  {
    role: 'bot',
    text: 'Halo! Aku BRIDGE-AI, asisten virtualmu. Aku bisa bantu menjelaskan hasil skrining, menyarankan latihan menenangkan diri, atau mengarahkanmu ke bantuan.',
    actions: [
      { label: 'Apa arti hasil skriningku?', reply: 'hasil' },
      { label: 'Aku lagi cemas', reply: 'cemas' },
      { label: 'Aku susah tidur', reply: 'tidur' },
    ],
  },
]

const ChatContext = createContext(null)

export function ChatProvider({ children }) {
  const { result } = useApp()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useLocalStorage('bridge_chat', INITIAL)
  const [typing, setTyping] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const send = (text) => {
    const clean = (text || '').trim()
    if (!clean || typing) return
    setMessages((m) => [...m, { role: 'user', text: clean }])
    setTyping(true)
    const reply = chatReply(clean, { category: result?.category })
    timer.current = setTimeout(() => {
      setMessages((m) => [...m, { role: 'bot', ...reply }])
      setTyping(false)
    }, 650)
  }

  const value = {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((o) => !o),
    messages,
    typing,
    send,
  }

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export function useChat() {
  return useContext(ChatContext)
}
