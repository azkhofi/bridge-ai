import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const JournalContext = createContext(null)

export function JournalProvider({ children }) {
  const [entries, setEntries] = useLocalStorage('bridge_journal', [])

  const addEntry = (entry) => setEntries((e) => [{ id: Date.now(), ...entry }, ...e])
  const removeEntry = (id) => setEntries((e) => e.filter((x) => x.id !== id))

  return <JournalContext.Provider value={{ entries, addEntry, removeEntry }}>{children}</JournalContext.Provider>
}

export function useJournal() {
  return useContext(JournalContext)
}
