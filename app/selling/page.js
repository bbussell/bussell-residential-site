import PageIntro from '../../components/PageIntro';

export const metadata = {
  title: 'Selling in Chicago',
  description: 'Selling strategy, presentation, and preparation from Bussell Residential Group.',
};

const points = [
  'Pricing strategy based on timing, competition, and buyer behavior',
  'Staging guidance and contractor/vendor coordination',
  'High-quality marketing assets and listing presentation',
  'Negotiation strategy grounded in terms, leverage, and total outcome',
];

export default function SellingPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Selling"
        title="Selling is not just about exposure. It is about positioning."
        text="How a home is prepared, presented, and introduced to the market shapes the outcome. This process is designed to be strategic from the start."
      />

      <section className="section-shell grid gap-6 pb-20 lg:grid-cols-2">
        <div className="card p-8">
          <h2 className="font-serif text-2xl">What sets the process apart</h2>
          <p className="mt-5 body-copy">
            Brittany is known for being hands-on. That means details are addressed early, from the
            visual presentation of the home to the practical timeline that supports a stronger sale.
          </p>
        </div>
        <div className="card p-8">
          <h2 className="font-serif text-2xl">What sellers can expect</h2>
          <ul className="mt-5 space-y-4 text-black/70">
            {points.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
