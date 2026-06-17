import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function NavItem({ to, children, end, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        [
          'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950',
          isActive
            ? 'bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white'
            : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white',
        ].join(' ')
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const location = useLocation()
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('ppoc-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setMobileOpen(false)
    }, 0)
    return () => window.clearTimeout(timeoutId)
  }, [location.pathname])

  useEffect(() => {
    const isDark = theme === 'dark'
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('ppoc-theme', theme)
  }, [theme])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <NavLink
          to="/"
          aria-label="PPOC"
          className="flex items-center gap-3 rounded-md px-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
        >
          <img
            src="/final-logoo4.png"
            alt="PPOC logo"
            className="size-20 rounded-md object-contain"
          />
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="/policy-conclave">Policy Conclave</NavItem>

          <NavItem to="/speakers">Speakers</NavItem>
          <NavItem to="/articles">Articles</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/events">Events</NavItem>
          <NavItem to="/team">Team</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="hidden items-center justify-center rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950 md:inline-flex"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950 md:hidden"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200/70 bg-white dark:border-white/10 dark:bg-slate-950 md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="grid gap-2">
              <NavItem to="/" end onClick={() => setMobileOpen(false)}>
                Home
              </NavItem>

              <button
                type="button"
                onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
                className="inline-flex h-11 items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                <span>Theme</span>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  {theme === 'dark' ? 'Dark' : 'Light'}
                </span>
              </button>

              <NavItem to="/policy-conclave" onClick={() => setMobileOpen(false)}>
                Policy Conclave
              </NavItem>

              <NavItem to="/speakers" onClick={() => setMobileOpen(false)}>
                Speakers
              </NavItem>
              <NavItem to="/articles" onClick={() => setMobileOpen(false)}>
                Articles
              </NavItem>
              <NavItem to="/projects" onClick={() => setMobileOpen(false)}>
                Projects
              </NavItem>
              <NavItem to="/events" onClick={() => setMobileOpen(false)}>
                Events
              </NavItem>
              <NavItem to="/team" onClick={() => setMobileOpen(false)}>
                Team
              </NavItem>
              <NavItem to="/contact" onClick={() => setMobileOpen(false)}>
                Contact
              </NavItem>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
