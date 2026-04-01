import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
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
                "rounded-full px-4 py-2 transition",
                isActive
                  ? "bg-cyan-400 text-slate-950"
                  : "text-slate-300 hover:bg-white/10 hover:text-white",
              ].join(" ")
            }
          >
            Home
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
