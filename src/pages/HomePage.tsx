export function HomePage() {
  return (
    <section className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300/80">
          Project Initialized
        </p>
        <div className="space-y-4">
          <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            A React + TypeScript foundation with routing and Tailwind already in place.
          </h2>
          <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            The root layout lives in <code className="rounded bg-white/10 px-2 py-1 text-sm text-cyan-200">App.tsx</code>
            {' '}and renders an <code className="rounded bg-white/10 px-2 py-1 text-sm text-cyan-200">Outlet</code> so you can drop in nested pages next.
          </p>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur">
        <p className="text-sm font-medium text-cyan-300">Included setup</p>
        <div className="mt-6 space-y-4 text-slate-200">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Framework</p>
            <p className="mt-2 text-lg font-semibold">React 19 + TypeScript</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Routing</p>
            <p className="mt-2 text-lg font-semibold">React Router with index route</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Styling</p>
            <p className="mt-2 text-lg font-semibold">Tailwind CSS via Vite plugin</p>
          </div>
        </div>
      </div>
    </section>
  )
}
