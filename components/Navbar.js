export default function Navbar() {
  const links = [
    { href: '/about', label: 'About' },
    { href: '/buying', label: 'Buying' },
    { href: '/selling', label: 'Selling' },
    { href: '/neighborhoods', label: 'Neighborhoods' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-sand/90 backdrop-blur">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="/" className="block">
          <p className="text-sm uppercase tracking-[0.3em]">Bussell Residential Group</p>
          <p className="mt-1 text-xs text-black/55">Chicago real estate with a more thoughtful approach</p>
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:opacity-60">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
