function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
}

function normalizeWebUrl(url) {
  if (!url || typeof url !== 'string') return null
  const trimmed = url.trim()
  if (!trimmed) return null
  if (trimmed.startsWith('https://') || trimmed.startsWith('http://')) return trimmed
  if (trimmed.startsWith('ttps://')) return `h${trimmed}`
  if (trimmed.startsWith('www.')) return `https://${trimmed}`
  return trimmed
}

function normalizeEmailHref(email, name) {
  if (!email || typeof email !== 'string') return null
  const trimmed = email.trim()
  if (!trimmed) return null
  if (trimmed.startsWith('mailto:')) return trimmed
  if (trimmed.includes('@')) {
    const subject = name ? `?subject=${encodeURIComponent(`Reaching out to ${name}`)}` : ''
    return `mailto:${trimmed}${subject}`
  }
  return trimmed
}

function IconButton({ href, label, children }) {
  if (!href) return null

  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
      aria-label={label}
      className={[
        'inline-flex size-10 items-center justify-center rounded-xl border transition',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        'border-slate-200 bg-white text-slate-900 hover:bg-slate-100',
        'dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950',
      ].join(' ')}
    >
      {children}
    </a>
  )
}

function ContactButtons({ email, instagram, linkedin, name }) {
  const emailHref = normalizeEmailHref(email, name)
  const instagramHref = normalizeWebUrl(instagram)
  const linkedinHref = normalizeWebUrl(linkedin)

  return (
    <div className="mt-5 flex items-center justify-between gap-2">
      <IconButton href={emailHref} label="Email">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      </IconButton>

      <IconButton href={instagramHref} label="Instagram">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" />
          <path d="M12 11.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" />
          <path d="M17.5 6.5h.01" />
        </svg>
      </IconButton>

      <IconButton href={linkedinHref} label="LinkedIn">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 9h4v11H4z" />
          <path d="M6 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
          <path d="M10 9h4v2c.6-1.2 2-2.2 3.9-2.2 3 0 4.1 1.9 4.1 5V20h-4v-5c0-1.7-.3-3-1.8-3-1.2 0-2.2.8-2.2 2.6V20h-4z" />
        </svg>
      </IconButton>
    </div>
  )
}

function MemberCard({ name, role, imageSrc, email, instagram, linkedin }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-200/60 dark:bg-white/10">
        <img
          src={imageSrc}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
        {name}
      </div>
      {role ? (
        <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{role}</div>
      ) : null}
      <ContactButtons
        name={name}
        email={email}
        instagram={instagram}
        linkedin={linkedin}
      />
    </div>
  )
}

export default function TeamPage() {
  const facultyAdvisor = {
    name: 'Himanshu Yadav',
    imageSrc: '/Team25/HimanshuYadav.jpg',
  }

  const coordinators = [
    {
      name: 'Peeyush Agarwal',
      imageSrc: '/Team25/Peeyush.jpg',
      Instagram:"https://www.instagram.com/peeyushag5/",
      email:"mailto:peeyusha23@iitk.ac.in",
      linkedin:"https://www.linkedin.com/in/peeyush-agarwal-a02726285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: 'Krishna Goyal',
      imageSrc: '/Team25/Krishna.jpg',
      Instagram:"https://www.instagram.com/krishnagoyal4637/profilecard/?igsh=MXY5aGFka3hweTAyZQ==",
      email:"mailto:krishnag23@iitk.ac.in",
      linkedin:"https://www.linkedin.com/in/krishna-goyal-48a180280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
  ]

  const members = [
    {
      name: 'Vikash Yadav',
      role: 'Policy Research',
      imageSrc: '/Team25/Vikash.jpg',
      Instagram:"https://www.instagram.com/vikashyadav_2723?igsh=ZTgzZDRkeThsYnFt",
      email:"mailto:vikashy23@iitk.ac.in",
      linkedin:"https://www.linkedin.com/in/vikash-yadav-7360062b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: 'Tanmay Sahare',
      role: 'Policy Research',
      imageSrc: '/Team25/Tanmay.jpg',
      Instagram:"https://www.instagram.com/tanmaysahare/?__pwa=1",
      email:"mailto:tanmayka23@iitk.ac.in",
      linkedin:"https://www.linkedin.com/in/tanmay-sahare-9a361329a/"
    },
    {
      name: 'Chandrakanth Belodhiya',
      role: 'Events',
      imageSrc: '/Team25/Chandrakant.jpg',
      Instagram:"https://www.instagram.com/chandrakant_9187?igsh=MTZmY3RpeGs4ZDVibg==",
      email:"mailto:bchandra23@iitk.ac.in",
      linkedin:"https://www.linkedin.com/in/chandrakant-belodhiya-aa5751321/"
    },
    {
      name: 'Yogesh Verma',
      role: 'Design',
      imageSrc: '/Team25/Yogesh.jpeg',
      Instagram:"https://www.instagram.com/y.o.g.e.s.h_09/profilecard/?igsh=eHVmemMzOHZwOGRl",
      email:"mailto:yogeshv23@iitk.ac.in",
      linkedin:"https://www.linkedin.com/in/yogesh-verma-311358322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: 'Rahul',
      role: 'Finance & Marketing',
      imageSrc: '/Team25/RAHUL.png',
      Instagram:"ttps://www.instagram.com/rahulshishram?igsh=MWF1bjJtZW5uM2gzeg==",
      email:"mailto:rahul23@iitk.ac.in",
      linkedin:"https://www.linkedin.com/in/rahul-mahala-b544b9347"
    },
    {
      name: 'Abhay Tripathi',
      role: 'Web Manager',
      imageSrc: '/Team25/Abhay.jpg',
      Instagram:"https://www.instagram.com/abhaytripathi122/?hl=en",
      email:"mailto:abhayt23@iitk.ac.in",
      linkedin:"https://www.linkedin.com/in/abhay-tripathi-5733b7293/"
    },
  ]

  return (
    <div className="py-8 sm:py-14">
      <Container>
        <div className="grid gap-8 section-fade-in">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/5">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
              Team
            </div>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              The people behind PPOC
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
              A student-led cell building policy literacy and engagement at IIT
              Kanpur.
            </p>
          </div>

          <div className="mt-2 text-center text-xl font-semibold text-slate-900 dark:text-white">
            Faculty Advisor
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <MemberCard
                name={facultyAdvisor.name}
                imageSrc={facultyAdvisor.imageSrc}
                email={facultyAdvisor.email}
                instagram={facultyAdvisor.Instagram ?? facultyAdvisor.instagram}
                linkedin={facultyAdvisor.linkedin}
              />
            </div>
          </div>

          <div className="mt-2 text-center text-xl font-semibold text-slate-900 dark:text-white">
            Overall Coordinators
          </div>

          <div className="mx-auto grid w-full max-w-3xl gap-4 md:grid-cols-2">
            {coordinators.map((c) => (
              <MemberCard
                key={c.name}
                name={c.name}
                imageSrc={c.imageSrc}
                email={c.email}
                instagram={c.Instagram ?? c.instagram}
                linkedin={c.linkedin}
              />
            ))}
          </div>

          <div className="mt-2 text-center text-xl font-semibold text-slate-900 dark:text-white">
            Managers
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {members.map((m) => (
              <MemberCard
                key={m.name}
                name={m.name}
                role={m.role}
                imageSrc={m.imageSrc}
                email={m.email}
                instagram={m.Instagram ?? m.instagram}
                linkedin={m.linkedin}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
