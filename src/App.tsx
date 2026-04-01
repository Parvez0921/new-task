import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 sm:px-10">
        <Header />

        <main className="flex flex-1 items-center py-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
