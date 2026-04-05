export default function WestLoopPage() {
  return (
    <main className="bg-[#f7f3ee] text-black">

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 md:py-32">
          <p className="uppercase tracking-[0.35em] text-[11px] text-black/45">
            Chicago Neighborhood Guide
          </p>
          <h1 className="font-display mt-6 max-w-4xl text-4xl leading-tight md:text-6xl">
            West Loop real estate
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/70 md:text-xl">
            West Loop is one of Chicago’s most dynamic neighborhoods, known for
            its modern condo buildings, strong restaurant scene, and easy access
            to downtown.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">

          <div>
            <p className="uppercase tracking-[0.35em] text-[11px] text-black/45">
              Why buyers look here
            </p>
            <h2 className="font-display mt-6 text-3xl leading-tight md:text-5xl">
              A neighborhood that feels both established and still evolving.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-8 text-black/70">
            <p>
              West Loop appeals to buyers who want newer construction,
              elevator buildings, and a location that feels highly connected
              to the rest of the city.
            </p>
            <p>
              It is especially attractive to professionals, relocators, and
              buyers who prioritize walkability and lifestyle.
            </p>
          </div>

        </div>
      </section>

      <section className="border-y border-black/10 bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.35em] text-[11px] text-black/45">
              What to know
            </p>
            <h2 className="font-display mt-6 text-3xl leading-tight md:text-5xl">
              Housing, lifestyle, and buying considerations.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-4">

            <div className="bg-white p-8">
              <h3 className="font-display text-2xl">Housing</h3>
              <p className="mt-4 text-black/70">
                Primarily condos and newer construction.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-display text-2xl">Lifestyle</h3>
              <p className="mt-4 text-black/70">
                Restaurants, walkability, and strong energy.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-display text-2xl">Buyer profile</h3>
              <p className="mt-4 text-black/70">
                Professionals and relocation buyers.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-display text-2xl">Watch for</h3>
              <p className="mt-4 text-black/70">
                HOA strength, reserves, and noise.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
