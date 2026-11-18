import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ConsultationForm from "@/components/ConsultationForm";
import { site } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <PageHero title="Contact Us" crumbs={[{ label: "Get In Touch" }]} />
      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            {site.offices.map((o) => (
              <div className="office" key={o.name}>
                <iframe src={o.map} title={`${o.name} office map`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                <div className="office-body">
                  <h3>{o.name}</h3>
                  <p>{o.address.join(" ")}</p>
                  <p>Tel : <a href={`tel:${o.phone}`}>{o.phone}</a></p>
                  <p>Email : <a href={`mailto:${site.email}`}>{site.email}</a></p>
                </div>
              </div>
            ))}
          </div>
          <div className="split">
            <div>
              <h2>Leave us your info</h2>
              <p>and we will get back to you.</p>
            </div>
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
