import { NavLink } from 'react-router-dom'

function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
}

export default function CompetitionPage({ title, subtitle , registerHref, image }) {
  const containerStyle = image
    ? {
        backgroundImage: `url("${image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined

  return (
    <div className="bg-[url('/texture3.png')] bg-repeat py-12 sm:py-14">
      <Container>
        <div className="grid gap-8 section-fade-in">
          <div
            className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/40 dark:bg-white/5"
            style={containerStyle}
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-200 dark:text-slate-300">
              Policy Conclave
            </div>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white dark:text-white sm:text-4xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200 dark:text-slate-300 sm:text-base">
                {subtitle}
              </p>
            ) : null}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <NavLink
                to="/policy-conclave"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Back to overview
              </NavLink>
              <a
                href={registerHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
              >
                Register
              </a>
            </div>
          </div>


        </div>
      </Container>
    </div>
  )
}
