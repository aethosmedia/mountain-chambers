import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { practiceAreas, site } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((p) => p.slug === slug);
  return { title: area?.title ?? "Practice Area" };
}

export default async function PracticeArea({ params }: Props) {
  const { slug } = await params;
  const area = practiceAreas.find((p) => p.slug === slug);
  if (!area) notFound();

  return (
    <>
      <PageHero
        title={area.title}
        crumbs={[{ href: "/practice-areas", label: "Practice Areas" }, { label: area.title }]}
      />
      <section className="section">
        <div className="wrap detail">
          <div>
            <h2>Expert Legal Service</h2>
            {area.intro.length > 0 ? (
              area.intro.map((t, i) => <p key={i}>{t}</p>)
            ) : (
              <p>Speak to our team about {area.title} matters. We will get back to you within 1 business day.</p>
            )}

            {area.specializations.length > 0 && (
              <>
                <h3 style={{ marginTop: "1.6em" }}>Areas of Specialization</h3>
                <ul className="spec-list">
                  {area.specializations.map((s) =>
                    typeof s === "string" ? (
                      <li key={s}>{s}</li>
                    ) : (
                      <li key={s.title}>
                        <strong>{s.title}</strong>
                        <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
                      </li>
                    ),
                  )}
                </ul>
              </>
            )}
          </div>

          <aside className="aside">
            <h3>Let us help you!</h3>
            <p>If you need any help, please feel free to contact us. We will get back to you within 1 business day. Or if in a hurry, just call us now.</p>
            <div className="nums">
              {site.phones.map((p) => <a key={p} href={`tel:${p}`}>{p}</a>)}
            </div>
            <p style={{ marginTop: 12 }}><a href={`mailto:${site.email}`}>{site.email}</a><br />Mon – Fri 09:00-17:00</p>
            <Link href="/contact" className="btn">Contact Us</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
