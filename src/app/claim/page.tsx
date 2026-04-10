export default function ClaimPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 pb-20 pt-8 lg:px-10">
      <section className="rounded-[2.1rem] border border-white/10 bg-white/5 p-7 lg:p-9">
        <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f2b66d]">Owners</div>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white">Add or claim your Marrakech venue</h1>
        <p className="mt-4 text-sm leading-7 text-white/70">
          This first preview does not include live owner accounts yet. The next step is a real claim flow with menu uploads,
          WhatsApp details, opening hours, and verified listing updates.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Claim your listing",
            "Upload fresh menus",
            "Update phone + WhatsApp",
            "Feature your venue later",
          ].map((item) => (
            <div key={item} className="rounded-[1.4rem] border border-white/10 bg-black/15 px-4 py-4 text-sm text-white/72">
              {item}
            </div>
          ))}
        </div>

        <a
          href="mailto:hello@feen.ma?subject=Claim%20my%20feen.ma%20listing"
          className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-95"
        >
          Email hello@feen.ma
        </a>
      </section>
    </main>
  );
}

