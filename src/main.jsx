import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './theme/ThemeProvider.jsx'
import { AppProvider } from './context/AppContext.jsx'
import { ChatProvider } from './context/ChatContext.jsx'
import { MoodProvider } from './context/MoodContext.jsx'
import { JournalProvider } from './context/JournalContext.jsx'
import { SettingsProvider, useSettings } from './context/SettingsContext.jsx'
import { CommunityProvider } from './context/CommunityContext.jsx'
import FloatingChat from './components/layout/FloatingChat.jsx'
import Onboarding from './components/layout/Onboarding.jsx'

function MotionWrapper({ children }) {
  const { reduceMotion } = useSettings()
  return <MotionConfig reducedMotion={reduceMotion ? 'always' : 'never'}>{children}</MotionConfig>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsProvider>
      <ThemeProvider>
        <AppProvider>
          <ChatProvider>
            <MoodProvider>
              <JournalProvider>
                <CommunityProvider>
                  <MotionWrapper>
                    <HashRouter>
                      <App />
                      <FloatingChat />
                      <Onboarding />
                    </HashRouter>
                  </MotionWrapper>
                </CommunityProvider>
              </JournalProvider>
            </MoodProvider>
          </ChatProvider>
        </AppProvider>
      </ThemeProvider>
    </SettingsProvider>
  </React.StrictMode>,
)
