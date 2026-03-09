import PageIntro from '../../components/PageIntro';

export const metadata = {
  title: 'Chicago Neighborhoods',
  description: 'Explore neighborhood-focused real estate guidance from Bussell Residential Group.',
};

const neighborhoods = [
  {
    name: 'West Loop',
    text: 'Modern condos, restaurant energy, strong demand, and a market that rewards sharp preparation.',
  },
  {
    name: 'Bucktown',
    text: 'Tree-lined streets, architectural character, and a blend of lifestyle and long-term value.',
  },
  {
    name: 'Wicker Park',
    text: 'Creative energy, established appeal, and a broad range of housing stock with strong buyer interest.',
  },
  {
    name: 'Lincoln Park',
    text: 'Classic Chicago appeal with parks, schools, and enduring demand across multiple price points.',
  },
  {
    name: 'Gold Coast',
    text: 'Historic prestige, full-service buildings, and a luxury market where presentation and terms matter.',
  },
  {
    name: 'Lakeview',
    text: 'A diverse housing mix, neighborhood convenience, and strong appeal for both end users and investors.',
  },
];

export default function NeighborhoodsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Neighborhoods"
        title="Chicago neighborhoods, with more texture and local context."
        text="This page gives you a strong starting point now, and it is designed so individual neighborhood pages can be added later for SEO and deeper market guidance."
      />

      <section className="section-shell grid gap-6 pb-20 md:grid-cols-2">
        {neighborhoods.map((item) => (
          <div key={item.name} className="card p-8">
            <h2 className="font-serif text-2xl">{item.name}</h2>
            <p className="mt-4 body-copy">{item.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
