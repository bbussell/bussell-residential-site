export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center text-center text-white">
      <img
        src="/chicago-hero.jpg"
        alt="Chicago skyline"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/20"></div>

      <div className="relative max-w-3xl px-6">
        <p className="uppercase tracking-[0.3em] text-sm mb-6">
          Bussell Residential Group
        </p>

        <h1 className="font-display text-5xl md:text-7xl leading-tight font-light">
          Chicago real estate, handled with more care.
        </h1>

        <p className="mt-6 text-lg opacity-90">
          Strategic guidance, elevated presentation, and a process designed to
          make buying or selling feel clear, calm, and exceptionally well
          managed.
        </p>

        <div className="mt-10">
          <a
            href="#contact"
            className="border border-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition"
          >
            Start the conversation
          </a>
        </div>
      </div>
    </section>
  );
}
