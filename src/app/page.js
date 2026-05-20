"use client";

import AppLayout from "@/components/layout/AppLayout";
import PageHeader from "@/components/common/PageHeader";
import UserTable from "@/components/users/UserTable";

export default function Home() {

  return (

    <AppLayout>

      {/* Header */}
      <PageHeader
        title="Dashboard"
        description="MikroTik Hotspot Cloud Control"
      />

      {/* Main Content */}
      <div
        className="
        bg-[#121212]
        border
        border-white/5
        rounded-2xl
        p-8
      "
      >

        {/* Cards */}
        <div className="grid grid-cols-3 gap-4">

          {/* Online Users */}
          <div
            className="
            bg-[#181818]
            border
            border-white/5
            rounded-xl
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

          {/* Routers */}
          <div
            className="
            bg-[#181818]
            border
            border-white/5
            rounded-xl
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

          {/* Traffic */}
          <div
            className="
            bg-[#181818]
            border
            border-white/5
            rounded-xl
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

    </AppLayout>

  );

}