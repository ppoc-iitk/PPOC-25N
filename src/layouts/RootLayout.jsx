import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

export default function RootLayout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-dvh bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

