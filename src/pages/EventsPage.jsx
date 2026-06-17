function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
}

export default function EventsPage() {
  const events = [
    {
      title: 'Policy Conclave (Flagship Event)',
      date: 'Jan (annual)',
      description: 'Competitions, MUN simulations, and speaker sessions.',
    },
    {
      title: 'UPSC Sessions',
      date: 'Periodic',
      description:
        'Guidance sessions and discussions focused on UPSC preparation and public administration.',
    },
    {
      title: 'Speaker Sessions',
      date: 'Throughout the semester',
      description: 'Talks and discussions with policymakers and practitioners.',
    },
    {
      title: 'Workshops',
      date: 'Periodic',
      description: 'Writing, research, and policy analysis skill-building sessions.',
    },
  ]

  return (
    <div className="py-8 sm:py-14">
      <Container>
        <div className="grid gap-8 section-fade-in">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/5">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
              Events
            </div>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              What we host
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
              Events that connect research, public discourse, and policy practice.
            </p>
          </div>

          <div className="grid gap-4">
            {events.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-base font-semibold text-slate-900 dark:text-white">
                    {e.title}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {e.date}
                  </div>
                </div>
                <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {e.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
