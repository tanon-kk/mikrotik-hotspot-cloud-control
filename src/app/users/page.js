"use client";

import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import UserTable from "../../components/users/UserTable";
import CreateUserModal from "../../components/users/CreateUserModal";
import PageHeader from "@/components/common/PageHeader";

export default function UsersPage() {

  const [openModal, setOpenModal] =
    useState(false);

  return (

    <AppLayout>

      {/* Header */}
      <div
        className="
        flex
        items-start
        justify-between
        mb-8
      "
      >

        <PageHeader
          title="Users"
          description="Manage hotspot accounts"
        />

        {/* Create User */}
        <button
          onClick={() =>
            setOpenModal(true)
          }
          className="
          bg-pink-500
          hover:bg-pink-600
          px-5
          py-2.5
          rounded-xl
          text-sm
          font-medium
          transition-all
        "
        >
          Create User
        </button>

      </div>

      {/* Search Toolbar */}
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
          h-11
          bg-[#181818]
          border
          border-white/5
          rounded-xl
          px-4
          outline-none
          text-sm
          placeholder:text-zinc-500
          focus:border-pink-500/40
          transition-all
        "
        />

        {/* Status Filter */}
        <select
          className="
          h-11
          bg-[#181818]
          border
          border-white/5
          rounded-xl
          px-4
          text-sm
          outline-none
          focus:border-pink-500/40
          transition-all
        "
        >

          <option>
            All Status
          </option>

          <option>
            Online
          </option>

          <option>
            Offline
          </option>

          <option>
            Expired
          </option>

        </select>

        {/* Profile Filter */}
        <select
          className="
          h-11
          bg-[#181818]
          border
          border-white/5
          rounded-xl
          px-4
          text-sm
          outline-none
          focus:border-pink-500/40
          transition-all
        "
        >

          <option>
            All Profiles
          </option>

          <option>
            1 Day
          </option>

          <option>
            7 Days
          </option>

          <option>
            30 Days
          </option>

          <option>
            VIP
          </option>

        </select>

      </div>

      {/* Table */}
      <UserTable />

      {/* Modal */}
      <CreateUserModal
        open={openModal}
        onClose={() =>
          setOpenModal(false)
        }
      />

    </AppLayout>

  );

}