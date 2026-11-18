import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ConsultationForm from "@/components/ConsultationForm";
import { skills } from "@/lib/data";

export const metadata: Metadata = { title: "About Us" };

export default function About() {
  return (
    <>
      <PageHero title="About Us" crumbs={[{ label: "About Us" }]} />
      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Our History</h2>
            <p>Since 2009 Mountain Chamber provide comprehensive legal services, with specialized teams dedicated to various legal areas such as Real Estate, Matrimonial Disputes, Corporate Documentation, Civil and Criminal Litigation, Taxation, Cyber laws, Intellectual Property Laws, Banking Laws, Arbitration Laws.</p>
            <p>Mountain Chamber is a leading full service/multi-disciplinary Indian law firm, we pride ourselves on delivering exceptional legal services with integrity, expertise, and a client-focused approach. Our firm has built a reputation for excellence, providing tailored legal solutions to individuals, businesses, and organizations.</p>
            <p>Mountain Chamber is a full-service law firm committed to addressing the diverse legal needs of our clients. Our team of experienced attorneys brings a wealth of knowledge across various practice areas, ensuring that we can handle even the most complex legal matters with confidence and care. We believe in building strong relationships with our clients, grounded in trust and a deep understanding of their unique circumstances.</p>
            <p>At Mountain Chamber, we understand that legal issues can be overwhelming. That&rsquo;s why we strive to make the legal process as smooth and transparent as possible. Our attorneys take the time to listen, explain, and advocate tirelessly works on your behalf. Whether you&rsquo;re seeking preventative advice or require representation in high-stakes litigation, you can count on us to deliver results.</p>
            <p>Let us Guiding you through every legal challenge with confidence, precision, care and peace of mind. Reach out to Mountain Chambers today to schedule a consultation and discover how we can assist you. Together, we can achieve the best possible outcome for your case.</p>
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
            <h3>Founder</h3>
            <p className="founder-role">Mountain Chambers</p>
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
        <div className="wrap split">
          <div>
            <h2>Free Consultation</h2>
            <p>Law is complicate matter. It can cause you a big problem if you ignore it. Let us help you!</p>
          </div>
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}
