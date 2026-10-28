"use client";

import { useState } from "react";
import { services } from "@/lib/content";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

/**
 * Contact form that composes a WhatsApp message — no backend required.
 * The page itself stays server-rendered; this is the only client piece.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [interest, setInterest] = useState(services[0].title);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      setError("Please add your name and a phone or email so we can reply.");
      return;
    }
    setError("");
    const text = [
      `Hi Sunhaven Solar! My name is ${name.trim()}.`,
      `I'm interested in: ${interest}.`,
      message.trim() ? `Message: ${message.trim()}` : "",
      `You can reach me at: ${contact.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full rounded-2xl border border-line bg-cream px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-forest";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-line bg-white p-6 md:p-8"
      aria-label="Contact form"
    >
      <h2 className="text-xl font-bold text-ink">Send us a message</h2>
      <p className="mt-1 text-sm text-muted">
        This opens WhatsApp with your message ready to send — nothing is stored
        on this site.
      </p>

      <div className="mt-6 grid gap-4">
        <div>
          <label htmlFor="cf-name" className="text-sm font-semibold text-ink">
            Your name *
          </label>
          <input
            id="cf-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className={`${inputClass} mt-1.5`}
          />
        </div>

        <div>
          <label htmlFor="cf-contact" className="text-sm font-semibold text-ink">
            Phone or email *
          </label>
          <input
            id="cf-contact"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="512-555-0134 or you@email.com"
            className={`${inputClass} mt-1.5`}
          />
        </div>

        <div>
          <label htmlFor="cf-interest" className="text-sm font-semibold text-ink">
            I&apos;m interested in
          </label>
          <select
            id="cf-interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className={`${inputClass} mt-1.5 appearance-none`}
          >
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="cf-message" className="text-sm font-semibold text-ink">
            Message
          </label>
          <textarea
            id="cf-message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your roof, your bill, or ask anything…"
            className={`${inputClass} mt-1.5 resize-y`}
          />
        </div>

        {error ? (
          <p role="alert" className="text-sm font-semibold text-red-600">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          className="group mt-1 inline-flex items-center justify-center gap-2.5 rounded-full bg-wa px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-wa-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Send via WhatsApp
        </button>
      </div>
    </form>
  );
}
