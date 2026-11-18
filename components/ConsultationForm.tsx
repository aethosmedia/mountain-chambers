"use client";

import { FormEvent } from "react";
import { site } from "@/lib/data";

// No backend yet: submitting opens the visitor's email app with the message filled in.
// Swap handleSubmit for a fetch() to an API route / email service when ready.
export default function ConsultationForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Email: ${f.get("email")}`,
      `Area: ${f.get("area")}`,
      "",
      `${f.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Consultation request – " + f.get("area"),
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="row">
        <div><label htmlFor="name">Your name</label><input id="name" name="name" required autoComplete="name" /></div>
        <div><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" required autoComplete="tel" /></div>
      </div>
      <div className="row">
        <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
        <div>
          <label htmlFor="area">Area of law</label>
          <select id="area" name="area" defaultValue="Corporate Law">
            <option>Corporate Law</option>
            <option>Criminal Law</option>
            <option>Personal Injury</option>
          </select>
        </div>
      </div>
      <div><label htmlFor="message">How can we help?</label><textarea id="message" name="message" required /></div>
      <div><button className="btn" type="submit">Request consultation</button></div>
      <p className="note">Submitting this form does not create a client–attorney relationship.</p>
    </form>
  );
}
