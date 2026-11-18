"use client";

import { useEffect, useState } from "react";
import { CONSENT_COOKIE, disclaimer } from "@/lib/data";

// Where people go if they decline the Bar Council terms.
const EXIT_URL = "https://www.google.com";
const SIX_MONTHS = 60 * 60 * 24 * 180;

export default function ConsentGate({ accepted }: { accepted: boolean }) {
  const [open, setOpen] = useState(!accepted);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("locked", open);
    return () => document.body.classList.remove("locked");
  }, [open]);

  if (!open) return null;

  const agree = () => {
    document.cookie = `${CONSENT_COOKIE}=1; max-age=${SIX_MONTHS}; path=/; SameSite=Lax`;
    setOpen(false);
  };

  return (
    <div className="gate" role="dialog" aria-modal="true" aria-labelledby="gate-title">
      <div className="gate-card">
        <h2 id="gate-title">Terms Agreement</h2>
        <p className="gate-text">{disclaimer}</p>

        <section className="gate-cookies" aria-labelledby="cookie-title">
          <h3 id="cookie-title">Cookie details</h3>
          <p>
            This website uses one small cookie to remember that you have accepted the terms above, so the
            message is not shown on every page. It does not track you, is not used for advertising, and is
            not shared with anyone. If you decline, no cookie is set.
          </p>
          <table className="cookie-table">
            <thead>
              <tr><th>Name</th><th>Purpose</th><th>Duration</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>{CONSENT_COOKIE}</td>
                <td>Remembers that you accepted the Bar Council of India terms</td>
                <td>6 months</td>
              </tr>
            </tbody>
          </table>
        </section>

        <div className="gate-action">
          <label className="gate-check">
            <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} autoFocus />
            I accept the above.
          </label>
          <div className="gate-buttons">
            <button className="btn" onClick={agree} disabled={!checked}>I Agree</button>
            <button className="btn ghost" onClick={() => (window.location.href = EXIT_URL)}>I Do Not Agree</button>
          </div>
        </div>
      </div>
    </div>
  );
}
