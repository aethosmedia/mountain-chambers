import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { team } from "@/lib/data";

export const metadata: Metadata = { title: "Our Team" };

const initials = (n: string) => n.replace("Adv. ", "").replace("#", "").split(" ").map((w) => w[0]).join("").slice(0, 2);

export default function Team() {
  return (
    <>
      <PageHero title="Our Team" crumbs={[{ label: "Team of Advocates" }]} />
      <section className="section">
        <div className="wrap">
          <h2>About Our Team</h2>
          <p>At Mountain Chambers, we pride ourselves on providing top-tier legal expertise, strategic counsel, and personalized solutions tailored to your unique needs. Our team is a dedicated group of professionals with diverse legal backgrounds, united by a common goal, delivering exceptional results for our clients. Our attorneys bring years of experience across a wide array of practice areas, ensuring comprehensive legal support. From corporate law to litigation, estate planning to regulatory compliance, our team combines deep knowledge with practical insights to guide you through complex legal landscapes.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2>Team</h2>
          <div className="team-grid">
            {team.map((m) => (
              <div className="member" key={m.slug}>
                <div className="portrait ">
                  {m.photo ? <img src={m.photo} alt={m.name} /> : <span className="monogram" aria-hidden>{initials(m.name)}</span>}
                </div>
                <div className="member-body"><h3>{m.name}</h3><p>{m.role}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
