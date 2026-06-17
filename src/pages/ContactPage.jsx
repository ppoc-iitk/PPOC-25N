function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
}

function Input({ label, ...props }) {
  return (
    <label className="grid gap-2 text-sm text-slate-700 dark:text-slate-200">
      <span className="font-medium text-slate-700 dark:text-slate-200">{label}</span>
      <input
        {...props}
        className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:focus-visible:ring-offset-slate-950"
      />
    </label>
  )
}

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-14">
      <Container>
        <div className="grid gap-8 section-fade-in">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/5">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
              Contact
            </div>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Reach PPOC
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
              Use this form for collaborations, speaker requests, or Policy Conclave
              queries.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/5 lg:col-span-3">
              <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="Name" placeholder="Your name" />
                  <Input label="Email" placeholder="you@example.com" type="email" />
                </div>
                <Input label="Subject" placeholder="What is this about?" />
                <label className="grid gap-2 text-sm text-slate-700 dark:text-slate-200">
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    Message
                  </span>
                  <textarea
                    placeholder="Write your message"
                    rows={6}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:focus-visible:ring-offset-slate-950"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 dark:focus-visible:ring-offset-slate-950"
                >
                  Send message
                </button>
              </form>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/5 lg:col-span-2">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Email
              </div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                ppoc@iitk.ac.in
              </div>
              <div className="mt-6 text-sm font-semibold text-slate-900 dark:text-white">
                Location
              </div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Indian Institute of Technology Kanpur
                <br />
                Kanpur, Uttar Pradesh
              </div>
              <div className="mt-6 text-sm font-semibold text-slate-900 dark:text-white">
                Social
              </div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Instagram:{' '}
                <a
                  href="https://www.instagram.com/ppoc_iitk/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-slate-900 underline underline-offset-4 hover:opacity-80 dark:text-white"
                >
                  @ppoc_iitk
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

