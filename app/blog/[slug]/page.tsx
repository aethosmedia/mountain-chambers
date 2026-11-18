import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { posts } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post?.title ?? "Blog" };
}

function Block({ heading, items }: { heading: string; items: { title: string; text: string }[] }) {
  return (
    <>
      <h2>{heading}</h2>
      <ol>
        {items.map((it) => (
          <li key={it.title}><strong>{it.title}</strong><span>{it.text}</span></li>
        ))}
      </ol>
    </>
  );
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const idx = posts.findIndex((p) => p.slug === slug);
  if (idx < 0) notFound();
  const post = posts[idx];
  const others = posts.filter((_, i) => i !== idx);

  return (
    <>
      <PageHero title={post.title} crumbs={[{ href: "/blog", label: "Blog" }, { label: "Case study" }]} />
      <section className="section">
        <div className="wrap">
          <article className="article">
            <p className="muted"><time dateTime={post.date}>{fmt(post.date)}</time></p>
            <h2 style={{ marginTop: 0 }}>Introduction</h2>
            <p>{post.intro}</p>
            <Block heading="Challenges" items={post.challenges} />
            <Block heading="Process" items={post.process} />
            <Block heading="Result" items={post.result} />
            <h2>Conclusion</h2>
            <p>{post.conclusion}</p>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2>Related Posts</h2>
          <div className="posts two">
            {others.map((p) => (
              <article className="post" key={p.slug}>
                <time dateTime={p.date}>{fmt(p.date)}</time>
                <h3><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
