import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const MoodContext = createContext(null)

export function MoodProvider({ children }) {
  // entries: { 'YYYY-MM-DD': 0..4 }
  const [entries, setEntries] = useLocalStorage('bridge_mood', {})

  const setMood = (dateKey, mood) => setEntries((e) => ({ ...e, [dateKey]: mood }))

  return <MoodContext.Provider value={{ entries, setMood }}>{children}</MoodContext.Provider>
}

export function useMood() {
  return useContext(MoodContext)
}
