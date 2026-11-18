import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { CONSENT_COOKIE, site } from "@/lib/data";

export const metadata: Metadata = { title: "Privacy & Policy" };

export default function Privacy() {
  return (
    <>
      <PageHero title="Privacy & Policy" crumbs={[{ label: "Privacy & Policy" }]} />
      <section className="section">
        <div className="wrap">
          <h2>Cookies</h2>
          <p>
            This website sets a single cookie, <strong>{CONSENT_COOKIE}</strong>, once you accept the Bar Council of
            India terms shown when you first visit. It lasts six months, only records that you accepted, and is not
            used for tracking or advertising.
          </p>
          <h2>Information you send us</h2>
          <p>
            Details you send through the consultation form are used only to respond to your enquiry. Questions about
            your information can be sent to <a className="gold" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
