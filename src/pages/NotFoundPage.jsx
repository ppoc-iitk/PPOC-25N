import { NavLink } from 'react-router-dom'

function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
}

export default function NotFoundPage() {
  return (
    <div className="py-16">
      <Container>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center dark:border-white/10 dark:bg-white/5">
          <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">
            404
          </div>
          <div className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
            Page not found
          </div>
          <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            The page you’re looking for doesn’t exist or has moved.
          </div>
          <div className="mt-8">
            <NavLink
              to="/"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
            >
              Go home
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  )
}
