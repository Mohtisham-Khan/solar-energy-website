import { waLink, site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

/**
 * Floating WhatsApp chat button — fixed bottom-right, visible on every page.
 * Plain anchor: works as a Server Component, zero client JS.
 * Respects iOS/Android safe areas and WCAG target-size guidance.
 */
export function WhatsAppFloat() {
  const label = "Chat with Sunhaven Solar on WhatsApp";
  return (
    <a
      href={waLink(
        "Hi Sunhaven Solar! I'd like to learn more about going solar.",
      )}
      aria-label={label}
      title="Chat on WhatsApp"
      className="group fixed right-4 z-50 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-wa px-4 py-3 font-semibold text-white shadow-lg shadow-forest/25 transition-colors hover:bg-wa-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest md:right-6 md:px-5"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <WhatsAppIcon className="h-6 w-6" />
      
    </a>
  );
}

/** Inline WhatsApp CTA copy helper used across pages. */
export const defaultWaMessage = `Hi ${site.name}! I'd like to learn more about going solar.`;
