import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 text-center">
      <div className="surface-card rounded-[2.2rem] p-8">
        <div className="section-label">404</div>
        <h1 className="display-font mt-4 text-5xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
          This listing isn’t here yet.
        </h1>
        <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
          Go back to the Marrakech preview and explore the current sample dataset.
        </p>
        <Link href="/" className="btn-primary mt-6 px-5 py-3 text-sm">
          Back home
        </Link>
      </div>
    </main>
  );
}
