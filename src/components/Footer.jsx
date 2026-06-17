import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Public Policy & Opinion Cell
            </div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              IIT Kanpur
              <br />
              Bridging public opinion and public policy through dialogue, research,
              and action.
            </div>
          </div>

          <div className="text-sm">
            <div className="font-semibold text-slate-900 dark:text-white">Explore</div>
            <div className="mt-2 grid gap-2 text-slate-600 dark:text-slate-300">
              <NavLink
                to="/policy-conclave"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                Policy Conclave
              </NavLink>
              <NavLink
                to="/projects"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                Projects
              </NavLink>
              <NavLink to="/events" className="hover:text-slate-900 dark:hover:text-white">
                Events
              </NavLink>
              <NavLink to="/team" className="hover:text-slate-900 dark:hover:text-white">
                Team
              </NavLink>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-semibold text-slate-900 dark:text-white">Contact</div>
            <div className="mt-2 grid gap-2 text-slate-600 dark:text-slate-300">
              <div>Email: ppoc@iitk.ac.in</div>
              <div>Campus: IIT Kanpur, Kanpur, UP</div>
              <a
                href="https://www.instagram.com/ppoc_iitk/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                Instagram: @ppoc_iitk
              </a>
              <NavLink to="/contact" className="hover:text-slate-900 dark:hover:text-white">
                Contact page
              </NavLink>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200/70 pt-6 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} PPOC, IIT Kanpur</div>
          <div>Built with React, React Router, and Tailwind CSS</div>
        </div>
      </div>
    </footer>
  )
}
