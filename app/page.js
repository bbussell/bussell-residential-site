import Link from "next/link";
import Hero from "../components/Hero";

const services = [
  {
    title: "Buy",
    text: "Clear strategy, neighborhood guidance, building and HOA insight, and strong offer positioning for a market that rarely rewards hesitation.",
  },
  {
    title: "Sell",
    text: "Thoughtful pricing, elevated presentation, staging direction, vendor coordination, and marketing that positions your home properly from day one.",
  },
  {
    title: "Rent & Invest",
    text: "Support for rentals, relocations, and investment-minded clients who want practical guidance and sharper decision-making.",
  },
];

const neighborhoods = [
  "West Loop",
  "Bucktown",
  "Wicker Park",
  "Lincoln Park",
  "Gold Coast",
  "Lakeview",
];

const neighborhoodLinks = {
  "West Loop": "/west-loop-real-estate",
  "Bucktown": "/bucktown-real-estate",
  "Wicker Park": "/wicker-park-real-estate",
  "Lincoln Park": "/lincoln-park-real-estate",
};

const testimonials = [
  {
    quote:
      "Brittany anticipated every step before it happened. The process felt seamless, strategic, and incredibly well managed.",
    name: "Client Review",
  },
  {
    quote:
      "Her attention to detail, design eye, and negotiation skill made all the difference.",
    name: "Buyer Client",
  },
  {
    quote:
      "This was not generic real estate service. It was hands-on, thoughtful, and tailored from start to finish.",
    name: "Seller Client",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f2ede7] text-black">
      <Hero />

      <section id="about" className="bg-[#f2ede7] py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="uppercase tracking-[0.35em] text-[11px] text-black/45">
              About Brittany
            </p>
            <h2 className="font-display mt-6 text-3xl leading-tight md:text-5xl">
              A hospitality mindset, applied to real estate.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-8 text-black/70">
            <p>
              Brittany Bussell built Bussell Residential Group around proactive
              service, elevated presentation, and the belief that clients deserve
              far more than basic representation.
            </p>
            <p>
              From staging strategy and contractor coordination to building
              analysis, timing, and negotiation terms, every detail is approached
              with care and intention.
            </p>
            <p>
              The result is a process that feels more thoughtful, more organized,
              and far less stressful than clients expect.
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
            <h2 className="font-display mt-6 text-3xl leading-tight md:text-5xl">
              Support that goes well beyond the transaction.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 lg:grid-cols-3">
            {services.map((item) => (
              <div key={item.title} className="bg-white p-8 md:p-10">
                <h3 className="font-display text-2xl md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-black/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="neighborhoods"
        className="relative bg-[#f7f3ee] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="uppercase tracking-[0.35em] text-[11px] text-black/45">
                Neighborhoods
              </p>
              <h2 className="font-display mt-6 text-3xl leading-tight md:text-5xl">
                Chicago, with a more local point of view.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-black/65">
              From West Loop to Lincoln Park, each neighborhood has its own
              rhythm. This section will expand into dedicated pages later for
              stronger search visibility and deeper local guidance.
            </p>
          </div>
<div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  <Link href="/west-loop-real-estate" className="block rounded-[1.75rem] border border-black/10 bg-white p-8">
    West Loop
  </Link>

  <Link href="/bucktown-real-estate" className="block rounded-[1.75rem] border border-black/10 bg-white p-8">
    Bucktown
  </Link>

  <Link href="/wicker-park-real-estate" className="block rounded-[1.75rem] border border-black/10 bg-white p-8">
    Wicker Park
  </Link>

  <Link href="/lincoln-park-real-estate" className="block rounded-[1.75rem] border border-black/10 bg-white p-8">
    Lincoln Park
  </Link>

<Link href="/gold-coast-real-estate" className="block rounded-[1.75rem] border border-black/10 bg-white p-8">
  Gold Coast
</Link>

  <div className="rounded-[1.75rem] border border-black/10 bg-white p-8">
    Lakeview
  </div>
</div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.35em] text-[11px] text-black/45">
              Client Experience
            </p>
            <h2 className="font-display mt-6 text-3xl leading-tight md:text-5xl">
              What clients remember most is how supported they felt.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.quote}
                className="rounded-[2rem] border border-black/10 bg-[#f7f3ee] p-8"
              >
                <p className="text-lg leading-8">“{item.quote}”</p>
                <p className="mt-6 text-sm uppercase tracking-[0.25em] text-black/45">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
