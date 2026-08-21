import { useEffect, useState } from 'react'

export function useTypewriter(text, speed = 14) {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    setTyped('')
    if (!text) return
    let i = 0
    const iv = setInterval(() => {
      i += 1
      setTyped(text.slice(0, i))
      if (i >= text.length) clearInterval(iv)
    }, speed)
    return () => clearInterval(iv)
  }, [text, speed])

  return typed
}
