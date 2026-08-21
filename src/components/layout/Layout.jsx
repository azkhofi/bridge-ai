import { Outlet } from 'react-router-dom'
import Topbar from './Topbar.jsx'
import Footer from './Footer.jsx'
import StepsBar from './StepsBar.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-10 2xl:px-16 py-6 sm:py-10">
        <StepsBar />
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
