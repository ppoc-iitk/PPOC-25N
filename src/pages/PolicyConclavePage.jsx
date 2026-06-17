import { NavLink } from 'react-router-dom'

function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
}

function CompetitionCard({ title, description, to, registerHref, image }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6  dark:border-white/30 dark:bg-slate-950/70">
      <div className="flex items-start justify-between gap-3">
        <div className="text-xl font-semibold text-slate-900 dark:text-white">
          {title}
        </div>
        <NavLink
          to={to}
          registerHref={registerHref}
          image={image}
          className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950"
        >
          Details
        </NavLink>
      </div>
      <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {description}
      </div>
      <div className="mt-4 text-xs text-slate-600 dark:text-slate-300">
        For registering to this event follow this{' '}
        <a
          href={registerHref}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-300"
        >
          link
        </a>
        .
      </div>
    </div>
  )
}

export default function PolicyConclavePage() {
  const competitions = [
    {
      title: 'Ecocraft',
      description:
        'Sustainable Product and Policy Innovation Challenge.',
      to: '/policy-conclave/ecocraft',
      registerHref: 'https://unstop.com/competitions/ecocraft-sustainable-product-challenge-iit-kanpur-1615917',
      image: '/Others/Ecocraft2.png',
    },
    {
      title: 'Rajneeti',
      description:
        'Domestic Policy and Governance Competition',
      to: '/policy-conclave/rajneeti',
      registerHref: 'https://unstop.com/competitions/rajneeti-a-political-case-study-competition-iit-kanpur-1615896',
      image: '/Others/Rajneeti.png',
    },
    {
      title: 'Videshneeti',
      description:
        'Diplomacy and Foreign Policy Strategy Simulation',
      to: '/policy-conclave/videshneeti',
      registerHref: 'https://unstop.com/competitions/videsh-neeti-a-foreign-diplomacy-case-study-challenge-iit-kanpur-1615893',
      image: '/Others/Videshneeti.png',
    },
    {
      title: 'Brahmastra',
      description:
        'National Policy Case Competition',
      to: '/policy-conclave/brahmastra',
      registerHref: 'https://unstop.com/competitions/brahmastra-iit-kanpur-1615438',
      image: '/Others/Brahmastra.png',
    },
    {
      title: 'MUN',
      description:
        'Model United Nations with a focus on human rights, diplomacy, and structured negotiation.',
      to: '/policy-conclave/mun',
      registerHref: 'https://unstop.com/workshops-webinars/model-united-nations-mun26-policy-conclave26-annual-flagship-event-ppociit-kanpur-iit-kanpur-1616475',
      image: '/Others/MUN.png',
    },
    {
      title: 'Policy Hackathon',
      description:
        'Intensive, collaborative event where participants design innovative, data-driven solutions to real-world public policy challenges within a limited timeframe.',
      to: '/policy-conclave/policy-hackathon',
      registerHref: 'https://unstop.com/hackathons/policy-hackathon-innovating-governance-iit-kanpur-1616462',
      image: '/Others/Policy Hackathon.png',
    },
  ]

  return (
    <div className="overflow-hidden bg-[url('/texture3.png')] bg-repeat">
      <img
        src="/1.png"
        className="hero-image mx-auto w-full max-w-3xl object-contain sm:mx-0 sm:max-w-none sm:h-[115vh] sm:w-[100vw] sm:object-cover"
        alt=""
      />
      <Container>
        <div className="grid gap-10 section-fade-in">
          <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/30 dark:bg-slate-950/70">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
              Policy Conclave
            </div>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Policy Conclave '26: Axonas Symfonias
            </h1>
            <div className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-200 sm:text-base">
              The Axis of Accord. The Symphony of Governance. 
            </div>
            <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
              As we commemorate 75 glorious years since the adoption of the Indian
              Constitution, Axonas Symfonius: Policy Conclave 2026 stands as a beacon of
              reflection, dialogue, and vision for India&apos;s policy landscape.
              This momentous milestone invites policymakers, academics, students,
              and thought leaders to converge, discuss, and ideate the evolving
              fabric of governance, democracy, and nation-building in India.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 dark:focus-visible:ring-offset-slate-950"
              >
                Contact PPOC
              </NavLink>
              <NavLink
                to="/events"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950"
              >
                See events
              </NavLink>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-white/30 dark:bg-slate-950/70">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              About
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
              Policy Conclave is the premier annual event of the Public Policy and Opinion Club (PPOC), IIT Kanpur. Held every January, it provides a comprehensive platform to engage students, professionals, and thought leaders in the realm of policymaking and public discourse. Over three vibrant days, the event features an exciting lineup of:
              
              <ul className="mt-3 list-disc pl-6 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
                <li>Webinars: Interactive webinars by distinguished policymakers and scholars.</li>
                <li>Competitions to hone analytical and problem-solving skills.</li>
                <li>Workshops to delve deep into real-world policy challenges.</li>
              </ul>
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
              Policy Conclave inspires participants to explore the intricacies of governance, economics, and public administration. It serves as a one-stop destination for college students who aspire to make a meaningful impact in shaping public opinion and its implementation in society.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-white/30 dark:bg-slate-950/70">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Theme
            </h2>
            <div className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-200 sm:text-base">
              Why &apos;Axonas Symfonias&apos;?
            </div>
            <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
              Through Axonas Symfonius, Policy Conclave 2026 seeks to explore how diverse perspectives—academia, governance, civil society, industry, and youth—can converge to form a unified policy discourse. The theme underscores the belief that sustainable solutions arise not from isolated efforts, but from synchronized dialogue and collective reasoning.
            </p>
          </div>

          <div className='mb-6'>
            <h2 className="text-2xl font-semibold text-white dark:text-white">
              Competitions
            </h2>
            <div className="mt-5 mb-5 grid gap-6 md:grid-cols-2 ">
              {competitions.map((c) => (
                <CompetitionCard
                  key={c.title}
                  title={c.title}
                  description={c.description}
                  to={c.to}
                  registerHref={c.registerHref}
                  image={c.image}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
