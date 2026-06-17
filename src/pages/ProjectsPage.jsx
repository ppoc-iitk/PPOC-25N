function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
}

export default function ProjectsPage() {
  const projects = [
    // {
    //   title: 'Guesstimating GDP',
    //   description:
    //     'A project focused on understanding GDP and using data analytics to forecast India’s GDP.',
    //   image: '/Projects_Images/Guesstimating-GDP-img.png',
    // },
    // {
    //   title: 'Inside Out',
    //   description:
    //     'A deep dive into international ranking organizations: methodology, sources, and incentives.',
    //   image: '/Projects_Images/Inside-out.jpg',
    // },
    // {
    //   title: 'India’s Social Changes',
    //   description:
    //     'Exploring India’s social transformations across communities and changing norms.',
    //   image: '/Projects_Images/Indias-social-changes.png',
    // },
    {
      title: 'Guesstimating GDP',
      description:
        'A project focused on understanding GDP and using data analytics to forecast India’s GDP.',
      image: '/Projects_Images/Guesstimating-GDP-img.png',
    },
    {
      title: 'Inside Out',
      description:
        'A deep dive into international ranking organizations: methodology, sources, and incentives.',
      image: '/Projects_Images/Inside-out.jpg',
    },
    {
      title: 'India’s Social Changes',
      description:
        'Exploring India’s social transformations across communities and changing norms.',
      image: '/Projects_Images/Indias-social-changes.png',
    },
  ]

  return (
    <div className="py-12 sm:py-14">
      <Container>
        <div className="grid gap-8 section-fade-in">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/5">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
              Projects
            </div>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Research-led initiatives
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
              Our projects blend policy framing with evidence, data, and public
              communication.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5"
              >
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="h-72 w-full rounded-xl object-cover object-top"
                />
                <div className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                  {p.title}
                </div>
                <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {p.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
