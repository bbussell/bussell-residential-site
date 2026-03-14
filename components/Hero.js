export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center text-center text-white">
      <img
        src="/chicago-hero.jpg"
        alt="Chicago skyline"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/20"></div>

      <div className="relative max-w-5xl px-6 pt-24 md:pt-28">
        <p className="uppercase tracking-[0.35em] text-[11px] md:text-xs mb-8 text-white/80">
          Bussell Residential Group
        </p>

        <h1 className="font-display mx-auto max-w-4xl text-5xl md:text-6xl lg:text-7xl leading-[0.98] tracking-[-0.02em] font-light">
          Chicago real estate, handled with more care.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl leading-8 md:leading-9 text-white/85">
          Strategic guidance, elevated presentation, and a process designed to
          make buying or selling feel clear, calm, and exceptionally well
          managed.
        </p>

     <div className="mt-12">
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
