import { useState } from 'react'

function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
}

export default function SpeakersPage() {
  const speakers = [
    { name: 'Piyush Goyal', role: 'Public Affairs', image: '/Speakers/piyush_goyal.jpg' },
    { name: 'Dr. Subramanian Swamy', role: 'Economics & Policy', image: '/Speakers/subrimanyam.jpeg'  },
    { name: 'Durga Shankar Mishra', role: 'Administration', image: '/Speakers/durgashankar.jpg'  },
    { name: 'Shweta Singh', role: 'Journalism', image: '/Speakers/shweta.jpeg' },
    { name: 'Saurabh Dwivedi', role: 'Journalism', image: '/Speakers/saurabh.jpg'  },
    { name: 'Navika Kumar', role: 'Journalism', image: '/Speakers/navika.jpg'  },
  ]

  const [showAll, setShowAll] = useState(false)
  const visibleSpeakers = showAll ? speakers : speakers.slice(0, 3)

  return (
    <div className="py-12 sm:py-14">
      <Container>
        <div className="grid gap-8 section-fade-in">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/5">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
              Our Past Speakers
            </div>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Talks that shape policy thinking
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
              We host speakers across government, academia, and industry to discuss
              policy trade-offs and implementation insights.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3 section-fade-in" key={showAll ? 'all' : 'few'}>
            {visibleSpeakers.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5"
              >
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  className="h-72 w-full rounded-xl object-cover object-top"
                />
                <div className=" text-lg font-semibold text-slate-900 dark:text-white pt-3">
                  {s.name}
                </div>
                <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {s.role}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950"
            >
              {showAll ? 'Show fewer speakers' : 'View all speakers'}
              <span className="text-slate-500 dark:text-slate-300">
                {showAll ? '↑' : '↓'}
              </span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}
