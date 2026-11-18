import Link from "next/link";
import Image from "next/image";
import ConsultationForm from "@/components/ConsultationForm";
import { featuredPractice, pillars, posts, site, skills, team, testimonials } from "@/lib/data";

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function Home() {
  const founder = team[0];
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="kicker">Professional Law Firm</p>
          <h1>Welcome to Mountain Chambers</h1>
          <hr className="rule" />
          <p>We are a leading law firm in financial &amp; business industry. With more than 20 years of experience</p>
          <Link href="/contact" className="btn">Contact Now</Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap cols-3">
          {pillars.map((p) => (
            <div key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>About Mountain Chambers</h2>
            <p>
              Mountain Chambers is a distinguished law firm dedicated to providing exceptional legal services across
              diverse practice areas, including corporate law, litigation, and family law. With a team of experienced
              attorneys, we offer personalized strategies tailored to meet each client&rsquo;s unique needs. Our
              commitment to excellence, integrity, and results has earned us a trusted reputation in the legal
              community.
            </p>
            <Link href="/about-us" className="link-arrow">Read our story</Link>
          </div>
          <div className="founder">
            <div className="founder-photo">
              <Image
                src="/team/founder.png"
                alt="Adv. Biswajit Das, Founder of Mountain Chambers"
                fill
                sizes="(max-width: 880px) 100vw, 40vw"
                priority
              />
            </div>
            {/* <div className="monogram" aria-hidden>BD</div> */}
            <h3>{founder.name}</h3>
            <p className="founder-role">Founder, Mountain Chambers</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head-row">
            <h2>Legal Practices Area</h2>
            <Link href="/practice-areas" className="link-arrow">All practice areas</Link>
          </div>
          <div className="index">
            {featuredPractice.map((p) => (
              <Link key={p.slug} href={`/practice-areas/${p.slug}`}>
                {p.title}<span>Read More</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="wrap">
          <div>
            <p style={{ margin: 0 }}>Are you looking for someone to help?</p>
            <h2>Let us help you! Call Now : {site.phones.join("/")}</h2>
            <p>{site.email} &nbsp;·&nbsp; Mon – Sat 11:00am-08:00pm</p>
          </div>
          <Link href="/contact" className="btn">Contact us</Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head-row">
            <h2>Our Team</h2>
            <Link href="/our-team" className="link-arrow">View All People</Link>
          </div>
          <div className="team-grid">
            {[team[0], team[1]].map((m) => (
              <div className="member" key={m.slug}>
                <div className="portrait"><span className="monogram">{m.name.replace("Adv. ", "").split(" ").map((w) => w[0]).join("").slice(0, 2)}</span></div>
                <div className="member-body"><h3>{m.name}</h3><p>{m.role}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Mountainchambers&rsquo;s Skills</h2>
            <p>Mountain Chambers Kolkata is a premier legal firm offering expert counsel and comprehensive legal solutions across diverse practice areas.</p>
          </div>
          <div className="skills">
            {skills.map((s) => (
              <div key={s.label}>
                <div className="skill-top"><span>{s.label}</span><span className="gold">{s.value}%</span></div>
                <div className="bar" role="presentation"><i style={{ width: `${s.value}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Words From Clients</h2>
          <div className="quotes">
            {testimonials.map((t) => (
              <figure className="quote" key={t.name} style={{ margin: 0 }}>
                <blockquote style={{ margin: 0 }}><p>&ldquo;{t.text}&rdquo;</p></blockquote>
                <figcaption><cite>{t.name}</cite></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Free Consultation</h2>
            <p>Law is complicate matter. It can cause you a big problem. Let us help you!</p>
          </div>
          <ConsultationForm />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head-row">
            <h2>Legal Alerts</h2>
            <Link href="/blog" className="link-arrow">Read All News</Link>
          </div>
          <div className="posts">
            {posts.map((p) => (
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
