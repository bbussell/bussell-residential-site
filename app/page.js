import Hero from '../components/Hero';

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

      <section className="section-shell py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-4 section-title">Support that goes well beyond the transaction.</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((item) => (
            <div key={item.title} className="card p-8">
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-black/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/40">
        <div className="section-shell py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Neighborhoods</p>
              <h2 className="mt-4 section-title">Chicago, with a more local point of view.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-black/70">
              From West Loop to Lincoln Park, each neighborhood has its own rhythm. This section is
              set up to expand later into SEO-friendly neighborhood guides.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {neighborhoods.map((neighborhood) => (
              <div key={neighborhood} className="rounded-[1.5rem] border border-black/10 bg-sand px-6 py-8 text-lg shadow-soft">
                {neighborhood}
              </div>
            ))}
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
