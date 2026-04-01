import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 sm:px-10">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              React Starter
            </p>
            <h1 className="text-lg font-semibold text-white">
              TypeScript + Router + Tailwind
            </h1>
          </div>

          <nav className="flex items-center gap-2 text-sm">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                [
                  'rounded-full px-4 py-2 transition',
                  isActive
                    ? 'bg-cyan-400 text-slate-950'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white',
                ].join(' ')
              }
            >
              Home
            </NavLink>
          </nav>
        </header>

        <main className="flex flex-1 items-center py-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
