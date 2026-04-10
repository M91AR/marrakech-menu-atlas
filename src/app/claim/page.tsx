import { BadgeCheck, Mail, MenuSquare, PhoneCall, Sparkles, Store } from "lucide-react";

const items = [
  {
    icon: Store,
    title: "Claim your venue",
    text: "Lock ownership before feen opens public verification and upgrades.",
  },
  {
    icon: MenuSquare,
    title: "Upload fresh menus",
    text: "Keep prices and menu pages aligned with what guests see in real life.",
  },
  {
    icon: PhoneCall,
    title: "Update contact details",
    text: "Add phone, WhatsApp, and opening hours without waiting on delivery partners.",
  },
  {
    icon: BadgeCheck,
    title: "Earn trust signals",
    text: "Verified freshness becomes one of the reasons users pick your venue.",
  },
];

export default function ClaimPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 pb-20 pt-8 lg:px-10">
      <section className="surface-card overflow-hidden rounded-[2.4rem]">
        <div className="grid gap-6 px-7 py-8 lg:grid-cols-[1fr_0.95fr] lg:px-9">
          <div>
            <div className="section-label">
              <Sparkles className="size-4" />
              Owners
            </div>
            <h1 className="display-font mt-4 text-5xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
              Add or claim your Marrakech venue
            </h1>
            <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
              feen is starting as a menu-first discovery layer. The owner side comes next: claim access, menu uploads, contact updates, and verified freshness.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="surface-soft rounded-[1.5rem] p-4">
                    <div className="grid size-11 place-items-center rounded-full bg-[var(--paper-strong)] text-[var(--accent)] shadow-sm">
                      <Icon className="size-5" />
                    </div>
                    <div className="mt-4 text-lg font-semibold text-[var(--ink)]">{item.title}</div>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[var(--green)] px-6 py-7 text-white shadow-[0_22px_60px_rgba(15,107,94,0.2)] lg:px-7">
            <div className="section-label border-white/20 bg-white/10 text-white">Early owner access</div>
            <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.05em]">
              Reach out now and get onto the first verified layer.
            </h2>
            <p className="mt-4 text-sm leading-8 text-white/80">
              No dashboard yet. For now, email directly and we’ll use this as the handoff path for early venues.
            </p>

            <a
              href="mailto:hello@feen.ma?subject=Claim%20my%20feen.ma%20listing"
              className="btn-secondary mt-6 w-full px-5 py-3 text-sm"
            >
              <Mail className="size-4" />
              Email hello@feen.ma
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
