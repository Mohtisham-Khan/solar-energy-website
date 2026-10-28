"use client";

import { useState } from "react";
import { ArrowUpRight } from "@/components/icons";
import { mailLink, site } from "@/lib/site";

/**
 * Footer email capture — no backend, hands off to the visitor's mail app
 * with a prefilled subject/body.
 */
export function FooterSubscribe() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    const href = `${mailLink}?subject=${encodeURIComponent(
      "Keep me posted",
    )}&body=${encodeURIComponent(
      `Please add ${email} to your updates list.`,
    )}`;
    // Hand off to the visitor's mail app via a real anchor (mailto: is external).
    const a = document.createElement("a");
    a.href = href;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setDone(true);
  }

  if (done) {
    return (
      <p className="mt-5 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-ink">
        Thank you! Your request has been received.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 flex max-w-md gap-2">
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="min-w-0 flex-1 rounded-full border border-cream/20 bg-cream/10 px-5 py-3 text-sm text-cream outline-none transition-colors placeholder:text-cream/50 focus:border-lime"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="group/sub grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full bg-lime text-ink transition-colors hover:bg-lime-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
      >
        <span className="relative grid h-5 w-5 place-items-center overflow-hidden">
          <span className="absolute inset-0 grid place-items-center transition-transform duration-300 group-hover/sub:-translate-y-full">
            <ArrowUpRight className="h-4 w-4" />
          </span>
          <span className="absolute inset-0 grid translate-y-full place-items-center transition-transform duration-300 group-hover/sub:translate-y-0">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </span>
      </button>
      <span className="sr-only">{site.email}</span>
    </form>
  );
}
