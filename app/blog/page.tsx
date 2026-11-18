import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { posts } from "@/lib/data";

export const metadata: Metadata = { title: "Blog" };

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function Blog() {
  return (
    <>
      <PageHero title="Our Blog" crumbs={[{ label: "Blog" }]} />
      <section className="section">
        <div className="wrap">
          <div className="posts two">
            {posts.map((p) => (
              <article className="post" key={p.slug}>
                <time dateTime={p.date}>{fmt(p.date)}</time>
                <h3><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
                <p>{p.excerpt}</p>
                <Link className="link-arrow" href={`/blog/${p.slug}`}>Read More</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
