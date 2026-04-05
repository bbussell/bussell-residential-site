import Hero from './components/Hero';
import Link from "next/link";

const services = [
  {
    title: 'Buy',
    text: 'Neighborhood guidance, building insight, financing readiness, and offer strategy designed for a fast-moving Chicago market.',
  },
  {
    title: 'Sell',
    text: 'Thoughtful pricing, strong presentation, staging direction, and marketing that positions your home properly from day one.',
  },
  {
    title: 'Rent & Invest',
    text: 'Support for relocation clients, rentals, and investment-minded buyers who want practical guidance and sharper decision-making.',
  },
];

const neighborhoods = ['West Loop', 'Bucktown', 'Wicker Park', 'Lincoln Park', 'Gold Coast', 'Lakeview'];

const testimonials = [
  'Brittany anticipated every step before it happened. The process felt seamless, strategic, and incredibly well managed.',
  'Her attention to detail, design eye, and negotiation skill made all the difference.',
  'This was not generic real estate service. It was hands-on, thoughtful, and tailored from start to finish.',
];

export default function HomePage() {
  return (
    <main>
      <Hero />

     <section className="border-y border-black/10 bg-white/40">
  <div className="section-shell grid gap-10 py-20 lg:grid-cols-2">
    <div>
      <p className="eyebrow">About Brittany</p>
      <h2 className="mt-4 section-title">A hospitality mindset, applied to real estate.</h2>
    </div>
    <div className="space-y-5 body-copy">
      <p>
        Brittany Bussell built Bussell Residential Group around proactive service, elevated
        presentation, and the belief that clients deserve far more than basic representation.
      </p>
      <p>
        From staging strategy and contractor coordination to building analysis, timing, and
        negotiation terms, every detail is approached with care and intention.
      </p>
      <p>
        The result is a process that feels more thoughtful, more organized, and far less
        stressful than clients expect.
      </p>
    </div>
  </div>
</section>

      <section id="services" className="bg-white py-24 md:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-10">
    <div className="max-w-3xl">
      <p className="uppercase tracking-[0.35em] text-[11px] text-black/45">
        Services
      </p>
      <h2 className="font-display mt-6 text-3xl md:text-5xl leading-tight">
        Support that goes well beyond the transaction.
      </h2>
    </div>

    <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 lg:grid-cols-3">
      {services.map((item) => (
        <div key={item.title} className="bg-white p-8 md:p-10">
          <h3 className="font-display text-2xl md:text-3xl">{item.title}</h3>
          <p className="mt-5 text-base leading-8 text-black/70">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<section id="neighborhoods" className="bg-[#f7f3ee] py-24 md:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-10">
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p className="uppercase tracking-[0.35em] text-[11px] text-black/45">
          Neighborhoods
        </p>
        <h2 className="font-display mt-6 text-3xl md:text-5xl leading-tight">
          Chicago, with a more local point of view.
        </h2>
      </div>

      <p className="max-w-xl text-base leading-8 text-black/65">
        From West Loop to Lincoln Park, each neighborhood has its own rhythm.
        This section will expand into dedicated pages later for stronger search
        visibility and deeper local guidance.
      </p>
    </div>

    <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {neighborhoods.map((neighborhood) =>
        neighborhood === "West Loop" ? (
          <a
            key={neighborhood}
            href="/west-loop-real-estate"
            className="block rounded-[1.75rem] border border-black/10 bg-white p-8 transition hover:-translate-y-0.5"
          >
            <p className="font-display text-2xl">{neighborhood}</p>
          </a>
        ) : neighborhood === "Bucktown" ? (
          <a
            key={neighborhood}
            href="/bucktown-real-estate"
            className="block rounded-[1.75rem] border border-black/10 bg-white p-8 transition hover:-translate-y-0.5"
          >
            <p className="font-display text-2xl">{neighborhood}</p>
          </a>
        ) : neighborhood === "Wicker Park" ? (
          <a
            key={neighborhood}
            href="/wicker-park-real-estate"
            className="block rounded-[1.75rem] border border-black/10 bg-white p-8 transition hover:-translate-y-0.5"
          >
            <p className="font-display text-2xl">{neighborhood}</p>
          </a>
        ) : (
          <div
            key={neighborhood}
            className="rounded-[1.75rem] border border-black/10 bg-white p-8 transition hover:-translate-y-0.5"
          >
            <p className="font-display text-2xl">{neighborhood}</p>
          </div>
        )
      )}
    </div>
  </div>
</section>
      <section className="section-shell py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Client Experience</p>
          <h2 className="mt-4 section-title">What clients remember most is how supported they felt.</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((quote) => (
            <div key={quote} className="card p-8">
              <p className="text-lg leading-8">“{quote}”</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
