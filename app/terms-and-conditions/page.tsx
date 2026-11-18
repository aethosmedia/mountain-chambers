import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { disclaimer } from "@/lib/data";

export const metadata: Metadata = { title: "Terms & Condition" };

export default function Terms() {
  return (
    <>
      <PageHero title="Terms Agreement" crumbs={[{ label: "Terms & Condition" }]} />
      <section className="section">
        <div className="wrap"><p>{disclaimer}</p></div>
      </section>
    </>
  );
}
