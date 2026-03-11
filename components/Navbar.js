export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a
          href="/"
          className="text-xs uppercase tracking-[0.32em] text-white/90"
        >
          Bussell Residential Group
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/85">
          <a href="/about" className="transition hover:text-white">
            About
          </a>
          <a href="/buying" className="transition hover:text-white">
            Buying
          </a>
          <a href="/selling" className="transition hover:text-white">
            Selling
          </a>
          <a href="/neighborhoods" className="transition hover:text-white">
            Neighborhoods
          </a>
          <a
            href="/contact"
            className="rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-white hover:bg-white hover:text-black"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
