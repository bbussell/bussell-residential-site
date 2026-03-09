import PageIntro from '../../components/PageIntro';

export const metadata = {
  title: 'About Brittany',
  description: 'Learn more about Brittany Bussell and the service philosophy behind Bussell Residential Group.',
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="About"
        title="Thoughtful strategy, elevated presentation, and service that feels personal."
        text="Brittany Bussell built her business around care, preparation, and the belief that every client deserves a process that feels clear, steady, and exceptionally well managed."
      />

      <section className="section-shell grid gap-8 pb-20 lg:grid-cols-2">
        <div className="card p-8">
          <h2 className="font-serif text-2xl">What defines the brand</h2>
          <div className="mt-5 space-y-4 text-black/70">
            <p>Hospitality-driven service and proactive communication.</p>
            <p>Strong pricing, timing, and negotiation strategy.</p>
            <p>Hands-on support with staging, vendors, prep, and presentation.</p>
            <p>A more tailored, less generic approach to real estate in Chicago.</p>
          </div>
        </div>
        <div className="card p-8">
          <h2 className="font-serif text-2xl">The experience clients get</h2>
          <p className="mt-5 body-copy">
            Clients often describe Brittany as organized, responsive, and deeply invested in the
            outcome. The process is designed to feel steady and strategic, with details handled
            early so fewer issues appear later.
          </p>
        </div>
      </section>
    </main>
  );
}
