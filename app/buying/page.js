import PageIntro from '../../components/PageIntro';

export const metadata = {
  title: 'Buying in Chicago',
  description: 'Buying guidance from Bussell Residential Group for clients purchasing in Chicago.',
};

const points = [
  'Neighborhood fit, building fit, and long-term resale considerations',
  'Lender coordination and early financing preparation',
  'Showing strategy in a low-inventory environment',
  'Offer terms that account for seller priorities, timing, and leverage',
];

export default function BuyingPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Buying"
        title="A buying process built around preparation, timing, and smart decision-making."
        text="The right home is only part of the equation. The strategy around it matters just as much — especially in Chicago."
      />

      <section className="section-shell grid gap-6 pb-20 lg:grid-cols-2">
        <div className="card p-8">
          <h2 className="font-serif text-2xl">How Brittany approaches buying</h2>
          <p className="mt-5 body-copy">
            Buyers need more than door-opening. They need market context, a sharp read on value,
            and guidance on terms, building information, timing, and next steps before pressure is
            high.
          </p>
        </div>
        <div className="card p-8">
          <h2 className="font-serif text-2xl">What this includes</h2>
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
