import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { practiceAreas } from "@/lib/data";

export const metadata: Metadata = { title: "Practice Areas" };

export default function PracticeAreas() {
  return (
    <>
      <PageHero title="Practice Areas" crumbs={[{ label: "Our Services" }]} />
      <section className="section">
        <div className="wrap">
          <h2>Legal Practice Areas</h2>
          <div className="index">
            {practiceAreas.map((p) => (
              <Link key={p.slug} href={`/practice-areas/${p.slug}`}>
                {p.title}<span>Read More</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
