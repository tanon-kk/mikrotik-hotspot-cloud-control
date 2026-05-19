import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AppLayout({ children }) {

  return (

    <div
      className="
      min-h-screen
      bg-[#0b0b0b]
      text-white
      flex
      gap-4
      p-4
    "
    >

      <Sidebar />

      <div className="flex-1 flex flex-col gap-4">

        <Navbar />

        <div
          className="
          bg-[#121212]
          border
          border-white/5
          rounded-xl
          p-8
          flex-1
        "
        >

          {children}

        </div>

      </div>

    </div>
  );
}