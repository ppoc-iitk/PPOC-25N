import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
}

function Container1({ children }) {
  return <div className="lg:absolute lg:top-10 lg:left-20 bg-slate-100/60 dark:bg-sky-950/50 mx-auto w-full max-w-4xl px-4 rounded-3xl sm:left-5 sm:top-2 sm:absolute">{children}</div>
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

function Card({ title, meta, children, to, href, imageSrc }) {
  const Inner = (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt=""
          loading="lazy"
          className="h-96 w-full rounded-xl object-cover object-top"
        />
      ) : null}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className=" text-base font-semibold text-slate-900 dark:text-white mt-3">
            {title}
          </div>
          {meta ? (
            <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {meta}
            </div>
          ) : null}
        </div>
        <div className="rounded-full border border-slate-200 bg-white px-2 py-1 text-[11px] text-slate-600 transition group-hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:group-hover:bg-white/10 mt-3">
          View
        </div>
      </div>
      {children ? (
        <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          {children}
        </div>
      ) : null}
    </div>
  )

  if (to) {
    return (
      <NavLink
        to={to}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
      >
        {Inner}
      </NavLink>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
      >
        {Inner}
      </a>
    )
  }

  return Inner
}

export default function HomePage() {
  const [currentSponsor, setCurrentSponsor] = useState(0)
  const speakers = [
    { name: 'Piyush Goyal', meta: 'Public Affairs' , ImageSrc: '/Speakers/piyush_goyal.jpg'},
    { name: 'Dr. Subramanian Swamy', meta: 'Economics & Policy' , ImageSrc: '/Speakers/subrimanyam.jpeg' },
    { name: 'Durga Shankar Mishra', meta: 'Administration' , ImageSrc: '/Speakers/durgashankar.jpg' },
  ]

  const projects = [
    {
      title: 'Guesstimating GDP',
      meta: 'Data analytics & ML',
      description:
        'Understanding GDP and predicting India’s GDP by blending economic context with quantitative modeling.',
      to: '/projects',
      image:'/Projects_Images/Guesstimating-GDP-img.png',
    },
    {
      title: 'Inside Out',
      meta: 'International rankings',
      description:
        'Examining how ranking organizations operate: methodology, data sources, and transparency.',
      to: '/projects',
      image:'/Projects_Images/Inside-out.jpg',
    },
    {
      title: 'India’s Social Changes',
      meta: 'Society & demographics',
      description:
        'Exploring India’s evolving social landscape across communities, identities, and norms.',
      to: '/projects',
      image:'/Projects_Images/Indias-social-changes.png',
    },
  ]

  const sponsors = [
    {
      name: 'FORUM IAS',
      logo: 'Sponsor_Images/forumIAS_logo.jpg',
    },
    {
      name: 'Vision IAS',
      logo: 'Sponsor_Images/visionias_logo.jpg',
    },
    {
      name: 'Dainik Jagran',
      logo: 'Sponsor_Images/Dainik-Jagran-newspaper-logo.jpg',
    },
    {
      name: 'Sponsor-4',
      logo: 'Sponsor_Images/Sponsor-4.jpg',
    },
    {
      name: 'PPOC Moolya',
      logo: 'Sponsor_Images/moolya.png',
    },
    {
      name: 'D2C',
      logo: 'Sponsor_Images/D2C.png',
    },
    {
      name: 'C3S',
      logo: 'Sponsor_Images/C3s.jpg',
    },
      {
      name: 'PPOC Mark',
      logo: 'Sponsor_Images/unnamed.jpg',
    },
    {
      name: 'PPOC Mark',
      logo: 'Sponsor_Images/wp-favicon3-1.png',
    },
    {
      name: 'Taghive',
      logo: 'Sponsor_Images/Taghive.png',
    },
    {
      name: 'School of Politics',
      logo: 'Sponsor_Images/School-Of-Politics.png',
    },
    {
      name: 'Janta ka Mood',
      logo: 'Sponsor_Images/JantaMood.png',
    },
    {
      name: 'Simactricals',
      logo: 'Sponsor_Images/simactricals.jpg',
    },
  ]

  const recentArticles = [
    {
      title: 'Delhi Red Fort Blast',
      href: 'https://www.instagram.com/p/DQ40M1fE1G5/?hl=en&img_index=1',
      image: '/Articles_Images/Delhi_Red_Fort_Blast.png',
    },
    {
      title: 'ISRO’s ‘Bahubali’ LVM3-M5',
      href: 'https://www.instagram.com/p/DQon8Sfj1dT/?hl=en&img_index=1',
      image: '/Articles_Images/ISRO_Bahubali .png',
    },
    {
      title: 'US Government Shutdown',
      href: 'https://www.instagram.com/p/DQm1g3tE0h6/?hl=en&img_index=1',
      image:'/Articles_Images/US_Government_Shutdown.png',
    },
  ]

  useEffect(() => {
    if (!sponsors.length) return undefined
    const id = window.setInterval(() => {
      setCurrentSponsor((index) => (index + 1) % sponsors.length)
    }, 3500)
    return () => window.clearInterval(id)
  }, [sponsors.length])

  return (
    <div>
      <div className="relative overflow-hidden border-b border-slate-200/70 dark:border-white/10">
        {/* <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_20%_0%,rgba(99,102,241,0.20),rgba(255,255,255,0.0)),radial-gradient(80%_60%_at_80%_10%,rgba(34,211,238,0.16),rgba(255,255,255,0.0))] dark:bg-[radial-gradient(90%_60%_at_20%_0%,rgba(99,102,241,0.35),rgba(2,6,23,0.0)),radial-gradient(80%_60%_at_80%_10%,rgba(34,211,238,0.25),rgba(2,6,23,0.0))]" /> */}
        <img
          src="Parliament.jpg"
          className="hero-image w-full object-cover"
          alt=""
        />
        <Container1>
          <div className="relative top-0 py-16 sm:py-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 dark:border-white/30 dark:bg-white/70 dark:text-slate-800">
              <span className="size-2 rounded-full bg-emerald-500" />
              IIT Kanpur
            </div>
            <h1 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Public Policy and Opinion Cell
            </h1>
            <p className= "text-xl mt-4 max-w-2xl leading-6 text-slate-900 dark:text-white sm:text-base">
              There&apos;s tremendous gap between public opinion and public policy.
              We work to narrow it through discourse, research, and policy-focused
              initiatives.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <NavLink
                to="/policy-conclave"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 dark:focus-visible:ring-offset-slate-950"
              >
                Explore Policy Conclave
              </NavLink>
            </div>
          </div>
        </Container1>
      </div>

      <div className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 section-fade-in">
            <div className="grid gap-6">
              <SectionTitle
                title="Recent Articles"
                subtitle="Highlights from our latest explainers and opinion pieces."
              />
              <div className="grid gap-4 md:grid-cols-3">
                {recentArticles.map((a) => (
                  <Card
                    key={a.title}
                    title={a.title}
                    href={a.href}
                    imageSrc={a.image}
                  >
                  </Card>
                ))}
              </div>
              <div>
                <NavLink
                  to="/articles"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  View more articles
                  <span className="text-slate-500 dark:text-slate-300">→</span>
                </NavLink>
              </div>
            </div>

            <div className="grid gap-6">
              <SectionTitle
                title="Past Speakers"
                subtitle="Leaders across governance, economics, and administration."
              />
              <div className="grid gap-6 md:grid-cols-3">
                {speakers.map((s) => (
                  <div
                    key={s.name}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition hover:bg-slate-100 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                  >
                    <img
                      src={s.ImageSrc}
                      alt=""
                      loading="lazy"
                      className="h-72 w-full rounded-xl object-cover object-top"
                    />
                    <div className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                      {s.name}
                    </div>
                    <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {s.meta}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <NavLink
                  to="/speakers"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  View all speakers
                  <span className="text-slate-500 dark:text-slate-300">→</span>
                </NavLink>
              </div>
            </div>
            <div className="grid gap-6">
              <SectionTitle
                title="Our Projects"
                subtitle="Longer-term work that blends research, data, and policy thinking."
              />
              <div className="grid gap-4 md:grid-cols-3">
                {projects.map((p) => (
                  <Card key={p.title} title={p.title} meta={p.meta} to={p.to} imageSrc={p.image}>
                    {p.description}
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <SectionTitle
                title="Our Past Sponsors"
                subtitle="Organisations and initiatives that have supported our events."
              />
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentSponsor((index) =>
                        index === 0 ? sponsors.length - 1 : index - 1,
                      )
                    }
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950"
                    aria-label="Previous sponsors"
                  >
                    ‹
                  </button>
                  <div
                    key={currentSponsor}
                    className="flex flex-1 flex-wrap items-center justify-center gap-4 sm:gap-6 carousel-fade-in"
                  >
                    {Array.from({ length: Math.min(sponsors.length, 8) }).map((_, offset) => {
                      const index = (currentSponsor + offset) % sponsors.length
                      const sponsor = sponsors[index]
                      return (
                        <div
                          key={`${sponsor.name}-${index}`}
                          className="flex h-24 w-24 items-center justify-center rounded-xl bg-white/100 p-3 text-xs font-semibold text-slate-700 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md dark:white dark:text-slate-200"
                        >
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="max-h-20 w-full object-contain"
                          />
                        </div>
                      )
                    })}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentSponsor((index) => (index + 1) % sponsors.length)
                    }
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950"
                    aria-label="Next sponsors"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-600/10 via-sky-500/10 to-slate-100/10 p-8 dark:border-white/10 dark:from-indigo-600/20">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Get involved
              </div>
              <div className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-200 sm:text-base">
                Join the Policy Conclave competitions and contribute to policy
                conversations at IIT Kanpur.
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <NavLink
                  to="/policy-conclave"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                >
                  Competitions & Overview
                </NavLink>
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  Contact PPOC
                </NavLink>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
