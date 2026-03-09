export default function Hero() {
  return (
    <section className="section-shell grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
      <div className="flex flex-col justify-center">
        <p className="eyebrow">Bussell Residential Group</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
          Chicago real estate, handled with more care.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
          Strategic guidance, elevated presentation, and a process designed to make buying or
          selling feel clear, calm, and exceptionally well managed.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/contact" className="rounded-full bg-black px-6 py-3 text-sm text-white transition hover:-translate-y-0.5">
            Start the conversation
          </a>
          <a href="/selling" className="rounded-full border border-black px-6 py-3 text-sm transition hover:-translate-y-0.5">
            See how we sell
          </a>
        </div>
      </div>

      <div className="grid gap-5">
        <div className="card min-h-[440px] p-6">
          <div
            className="flex h-full items-end rounded-[1.5rem] bg-cover bg-center p-6"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.2)), url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80')",
            }}
          >
            <div className="max-w-sm rounded-2xl bg-white/90 p-4">
              <p className="eyebrow">Chicago lifestyle</p>
              <p className="mt-2 text-lg leading-7">
                Editorial, minimal, and rooted in the way you actually work: highly personal,
                design-aware, and hands-on from start to finish.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="card p-6">
            <p className="font-serif text-3xl">Top 3%</p>
            <p className="mt-2 text-sm text-black/60">Among peers</p>
          </div>
          <div className="card p-6">
            <p className="font-serif text-3xl">Hands-on</p>
            <p className="mt-2 text-sm text-black/60">From prep to closing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
