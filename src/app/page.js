import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import UserTable from "../components/users/UserTable";

export default function Home() {

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

        {/* Main */}
        <div
          className="
          bg-[#121212]
          border
          border-white/5
          rounded-xl
          p-8
        "
        >

          {/* Header */}
          <div className="mb-8">

            <h1
              className="
              text-3xl
              font-semibold
              tracking-tight
            "
            >
              Dashboard
            </h1>

            <p
              className="
              text-zinc-400
              text-sm
              mt-2
            "
            >
              MikroTik Hotspot Cloud Control
            </p>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-4">

            <div
              className="
              bg-[#181818]
              border
              border-white/5
              rounded-lg
              p-6
            "
            >

              <p className="text-sm text-zinc-400">
                Online Users
              </p>

              <h2
                className="
                text-4xl
                font-semibold
                mt-4
                text-pink-400
              "
              >
                24
              </h2>

            </div>

            <div
              className="
              bg-[#181818]
              border
              border-white/5
              rounded-lg
              p-6
            "
            >

              <p className="text-sm text-zinc-400">
                Routers
              </p>

              <h2
                className="
                text-4xl
                font-semibold
                mt-4
                text-pink-400
              "
              >
                1
              </h2>

            </div>

            <div
              className="
              bg-[#181818]
              border
              border-white/5
              rounded-lg
              p-6
            "
            >

              <p className="text-sm text-zinc-400">
                Traffic
              </p>

              <h2
                className="
                text-4xl
                font-semibold
                mt-4
                text-pink-400
              "
              >
                128GB
              </h2>

            </div>

          </div>

          {/* Table */}
          <div className="mt-6">

            <UserTable />

          </div>

        </div>

      </div>

    </div>
  );
}