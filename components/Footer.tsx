import Link from "next/link";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <h4>Mountain Chambers</h4>
          <p>{site.tagline}</p>
        </div>
        <div>
          <h4>Contact Info</h4>
          <ul>
            {site.offices.map((o) => (
              <li key={o.name}>
                <strong style={{ color: "#fff", fontWeight: 500 }}>{o.name}</strong><br />
                {o.address.join(" ")}
              </li>
            ))}
            <li><a href={`tel:${site.phones[0]}`}>{site.phones.join("/")}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/our-team">Our Team</Link></li>
            <li><Link href="/practice-areas">Practice Areas</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="legal">
        <div className="wrap">
          <span>{site.copyright}</span>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/terms-and-conditions">Terms &amp; Condition</Link>
            <Link href="/privacy-policy">Privacy &amp; Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
