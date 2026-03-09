export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-black text-white">
      <div className="section-shell grid gap-10 py-16 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/45">Bussell Residential Group</p>
          <h3 className="mt-4 font-serif text-3xl">Chicago real estate, handled with more care.</h3>
          <p className="mt-4 max-w-xl text-white/70">
            A custom website foundation for bussellresidentialgroup.com, built to feel elevated,
            direct, and highly personal.
          </p>
        </div>
        <div className="space-y-3 text-white/80">
          <p>Brittany Bussell</p>
          <p>@properties Christie’s International Real Estate</p>
          <p>312.898.3269</p>
          <p>bbussell@atproperties.com</p>
          <p>bussellresidentialgroup.com</p>
        </div>
      </div>
    </footer>
  );
}
