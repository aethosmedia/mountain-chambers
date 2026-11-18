import Link from "next/link";

export default function PageHero({ title, crumbs }: { title: string; crumbs?: { href?: string; label: string }[] }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <h1>{title}</h1>
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {crumbs?.map((c) => (
            <span key={c.label}> / {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}</span>
          ))}
        </nav>
      </div>
    </section>
  );
}
