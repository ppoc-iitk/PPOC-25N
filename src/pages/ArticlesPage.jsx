function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
}

export default function ArticlesPage() {
  const recentArticles = [
    {
      title: 'Delhi Red Fort Blast',
      href: 'https://www.instagram.com/p/DQ40M1fE1G5/?hl=en&img_index=1',
      image: '/Articles_Images/Delhi_Red_Fort_Blast.png',
    },
    {
      title: "ISRO’s ‘Bahubali’ LVM3-M5 Successfully Launches India’s Heaviest Satellite",
      href: 'https://www.instagram.com/p/DQon8Sfj1dT/?hl=en&img_index=1',
      image: '/Articles_Images/ISRO_Bahubali .png',
    },
    {
      title: 'US Government Shutdown',
      href: 'https://www.instagram.com/p/DQm1g3tE0h6/?hl=en&img_index=1',
      image:'/Articles_Images/US_Government_Shutdown.png',
    },
    {
      title: 'Pakistan-Afghanistan Conflict and Ceasefire',
      href: 'https://www.instagram.com/p/DQHi-9_jwFQ/?hl=en&img_index=1',
      image: '/Articles_Images/Pakistan_vs_Afghanistan_War.png',
    },
    {
      title: 'Western India Vs. Eastern Inida',
      href: 'https://www.instagram.com/p/DOG6ExwD9Qj/?hl=en&img_index=1',
      image: '/Articles_Images/The-East-West-Divide-in-India.png',
    },
    {
      title: 'Israel-Iran Conflict',
      href: 'https://www.instagram.com/p/DLk5PBfsQnR/?hl=en&img_index=1',
      image:'/Articles_Images/Israel_vs_Iran.png',
    },
    {
      title: 'India Strikes Pakistan',
      href: 'https://www.instagram.com/p/DJVLtVYIAuo/?hl=en&img_index=1',
      image: '/Articles_Images/Operation_Sindoor.png',
    },
    {
      title: 'Abrogation of Article 370',
      href: 'https://www.instagram.com/ppoc_iitk/?hl=en',
      image: '/Articles_Images/Article370.jpg',
    },
    {
      title: 'Interim Budget Article - Developed India @ 2047',
      href: 'https://www.instagram.com/ppoc_iitk/?hl=en',
      image:'/Articles_Images/Interimbudget2047.jpg',
    },
    {
      title: "Navigating the Global Economic Storm: India's Resilience Amidst Recessionary Fears",
      href: 'https://www.instagram.com/ppoc_iitk/?hl=en',
      image:'/Articles_Images/GlobalEconomicStorm.png',
    },
    {
      title: 'Delhi Ordinance Bill',
      href: 'https://www.instagram.com/ppoc_iitk/?hl=en',
      image: '/Articles_Images/DelhiOrdinanceBill.jpg',
    },
    {
      title: 'Sedition Law Bharat',
      href: 'https://www.instagram.com/ppoc_iitk/?hl=en',
      image:'/Articles_Images/SeditionLawBharat.png',
    },
    {
      title: "Adani Group - The Hindenburg Report",
      href: 'https://www.instagram.com/ppoc_iitk/?hl=en',
      image:'/Articles_Images/hindenburg.jpg',
    },
    {
      title: 'Women In Indian Armed Forces',
      href: 'https://www.instagram.com/ppoc_iitk/?hl=en',
      image: '/Articles_Images/WomenInIndianArmedForces.png',
    },
    {
      title: 'G20 Presidency of India : New Opportunities?',
      href: 'https://www.instagram.com/ppoc_iitk/?hl=en',
      image:'/Articles_Images/G20.jpg',
    },
    {
      title: "Uniform Civil Code : Past and Present",
      href: 'https://www.instagram.com/ppoc_iitk/?hl=en',
      image:'/Articles_Images/Uniform-Civil-Code.png',
    },
  ]

  return (
    <div className="py-12 sm:py-14">
      <Container>
        <div className="grid gap-8 section-fade-in">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/5">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
              Articles
            </div>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Our Blogs
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
              Thoughts, Ideas, Insights and Other Stuff.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="text-lg font-semibold text-slate-900 dark:text-white">
              Recent Articles
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {recentArticles.map((a) => (
                <a
                  key={a.title}
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950"
                >
                  <img
                    src={a.image}
                    alt=""
                    loading="lazy"
                    className="h-96 w-full object-cover object-top"
                  />
                  <div className="p-5">
                    <div className="text-base font-semibold text-slate-900 dark:text-white">
                      {a.title}
                    </div>
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      View full article
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              For seeing more of our articles, visit our instagram handle -{' '}
              <a
                href="https://www.instagram.com/ppoc_iitk/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-slate-900 underline underline-offset-4 hover:opacity-80 dark:text-white"
              >
                PPOC
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
