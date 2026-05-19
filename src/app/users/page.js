"use client";

import { useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import UserTable from "../../components/users/UserTable";
import CreateUserModal from "../../components/users/CreateUserModal";

export default function UsersPage() {

  const [openModal, setOpenModal] = useState(false);

  return (

    <AppLayout>

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>

          <h1
            className="
            text-3xl
            font-semibold
            tracking-tight
          "
          >
            Users
          </h1>

          <p
            className="
            text-sm
            text-zinc-500
            mt-2
          "
          >
            Manage hotspot accounts
          </p>

        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="
          bg-pink-500
          hover:bg-pink-600
          px-5
          py-2.5
          rounded-lg
          text-sm
          font-medium
          transition-all
        "
        >
          Create User
        </button>

      </div>

      {/* Search */}
      <div
  className="
  mb-6
  flex
  gap-4
  items-center
"
>

  {/* Search */}
  <input
    type="text"
    placeholder="Search users..."
    className="
    flex-1
    bg-[#181818]
    border
    border-white/5
    rounded-lg
    px-4
    py-3
    outline-none
    text-sm
    placeholder:text-zinc-500
    focus:border-pink-500/40
  "
  />

  {/* Status Filter */}
  <select
    className="
    bg-[#181818]
    border
    border-white/5
    rounded-lg
    px-4
    py-3
    text-sm
    outline-none
    focus:border-pink-500/40
  "
  >

    <option>All Status</option>
    <option>Online</option>
    <option>Offline</option>
    <option>Expired</option>

  </select>

  {/* Profile Filter */}
  <select
    className="
    bg-[#181818]
    border
    border-white/5
    rounded-lg
    px-4
    py-3
    text-sm
    outline-none
    focus:border-pink-500/40
  "
  >

    <option>All Profiles</option>
    <option>1 Day</option>
    <option>7 Days</option>
    <option>30 Days</option>
    <option>VIP</option>

  </select>

</div>

      {/* Table */}
      <UserTable />

      {/* Modal */}
      <CreateUserModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

    </AppLayout>

  );
}