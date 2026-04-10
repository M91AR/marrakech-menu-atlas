import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 text-center">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
        <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f2b66d]">404</div>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white">This listing doesn’t exist yet.</h1>
        <p className="mt-4 text-sm leading-7 text-white/68">Go back to the Marrakech preview and explore the current dataset.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">
          Back home
        </Link>
      </div>
    </main>
  );
}

