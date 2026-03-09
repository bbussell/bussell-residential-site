import PageIntro from '../../components/PageIntro';

export const metadata = {
  title: 'Contact',
  description: 'Contact Brittany Bussell and Bussell Residential Group.',
};

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contact"
        title="Let’s talk about your next move."
        text="Whether you are planning ahead, actively buying, or preparing to sell, the first step is a straightforward conversation."
      />

      <section className="section-shell grid gap-6 pb-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card p-8">
          <h2 className="font-serif text-2xl">Contact details</h2>
          <div className="mt-5 space-y-4 text-black/75">
            <p>Brittany Bussell</p>
            <p>Bussell Residential Group</p>
            <p>@properties Christie’s International Real Estate</p>
            <p>312.898.3269</p>
            <p>bbussell@atproperties.com</p>
            <p>bussellresidentialgroup.com</p>
          </div>
        </div>

        <div className="card p-8">
          <h2 className="font-serif text-2xl">Recommended next step</h2>
          <p className="mt-5 body-copy">
            For now, this starter site uses direct contact links rather than a form integration. That
            keeps setup simple while the site goes live. Once deployed, a contact form, newsletter
            signup, home valuation page, or booking link can be added.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:bbussell@atproperties.com" className="rounded-full bg-black px-6 py-3 text-sm text-white">
              Email Brittany
            </a>
            <a href="tel:3128983269" className="rounded-full border border-black px-6 py-3 text-sm">
              Call 312.898.3269
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
