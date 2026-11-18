"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, practiceAreas, site } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => setOpen(false), [path]);

  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <ul>
            <li><a href={`tel:${site.phones[0]}`}>{site.phones.join("/")}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.hours}</li>
          </ul>
          <a className="call" href={`tel:${site.phones[0]}`}>Phone Consultation</a>
        </div>
      </div>

      <header className="header">
        <div className="wrap">
          <Link href="/" className="brand" aria-label="Mountain Chambers home">
            <Image
              src="/logo.png"
              alt="Mountain Chambers"
              width={220}
              height={56}
              priority
              className="brand-logo"
            />
            <span className="brand-name">Mountain Chambers</span>
          </Link>

          <button className="menu-btn" aria-expanded={open} aria-controls="main-nav" aria-label="Menu" onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>

          <ul id="main-nav" className={`nav${open ? " open" : ""}`}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link className="top" href={l.href} aria-current={isActive(l.href) ? "page" : undefined}>{l.label}</Link>
                {l.children && (
                  <div className="dropdown">
                    {practiceAreas.map((p) => (
                      <Link key={p.slug} href={`/practice-areas/${p.slug}`}>{p.title}</Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
