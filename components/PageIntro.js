export default function PageIntro({ eyebrow, title, text }) {
  return (
    <section className="section-shell py-20 lg:py-24">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-5 max-w-4xl display-title">{title}</h1>
      <p className="mt-6 max-w-3xl body-copy">{text}</p>
    </section>
  );
}
