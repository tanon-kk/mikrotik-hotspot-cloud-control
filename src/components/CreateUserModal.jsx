"use client";

import { useState } from "react";

export default function CreateUserModal({
  open,
  onClose,
}) {

  const [tab, setTab] = useState("one");

  if (!open) return null;

  return (

    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/60
      backdrop-blur-sm
    "
    >

      {/* Modal */}
      <div
        className="
        w-full
        max-w-4xl
        bg-[#111111]
        border
        border-white/10
        rounded-2xl
        shadow-2xl
        p-8
      "
      >

        {/* Header */}
        <div className="flex items-center justify-between mb-8">

          <div>

            <h2
              className="
              text-2xl
              font-semibold
              tracking-tight
            "
            >
              Create User
            </h2>

            <p className="text-sm text-zinc-400 mt-1">
              Create hotspot users for MikroTik router
            </p>

          </div>

          <button
            onClick={onClose}
            className="
            text-zinc-500
            hover:text-white
            transition-all
            text-xl
          "
          >
            ✕
          </button>

        </div>

        {/* Tabs */}
        <div
          className="
          flex
          gap-2
          mb-8
          bg-white/5
          p-1
          rounded-xl
          border
          border-white/5
          w-fit
        "
        >

          <button
            onClick={() => setTab("one")}
            className={`
              px-5
              py-2
              rounded-lg
              text-sm
              transition-all

              ${tab === "one"
                ? "bg-pink-500 text-white"
                : "text-zinc-400 hover:text-white"}
            `}
          >
            One User
          </button>

          <button
            onClick={() => setTab("batch")}
            className={`
              px-5
              py-2
              rounded-lg
              text-sm
              transition-all

              ${tab === "batch"
                ? "bg-pink-500 text-white"
                : "text-zinc-400 hover:text-white"}
            `}
          >
            Batch Users
          </button>

          <button
            onClick={() => setTab("auto")}
            className={`
              px-5
              py-2
              rounded-lg
              text-sm
              transition-all

              ${tab === "auto"
                ? "bg-pink-500 text-white"
                : "text-zinc-400 hover:text-white"}
            `}
          >
            Auto Generate
          </button>

        </div>

        {/* Content Wrapper */}
        <div className="min-h-[320px]">

          {/* ONE USER */}
          {tab === "one" && (

            <div className="grid grid-cols-2 gap-5">

              {/* Description */}
              <div>

                <label
                  className="
                  text-sm
                  text-zinc-400
                  mb-2
                  block
                "
                >
                  Description
                </label>

                <input
                  type="text"
                  placeholder="Room 101"
                  className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                />

              </div>

              {/* Server */}
              <div>

                <label
                  className="
                  text-sm
                  text-zinc-400
                  mb-2
                  block
                "
                >
                  Server
                </label>

                <select
                  className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                >
                  <option>all</option>
                </select>

              </div>

              {/* Username */}
              <div>

                <label
                  className="
                  text-sm
                  text-zinc-400
                  mb-2
                  block
                "
                >
                  Username
                </label>

                <input
                  type="text"
                  placeholder="room101"
                  className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                />

              </div>

              {/* Password */}
              <div>

                <label
                  className="
                  text-sm
                  text-zinc-400
                  mb-2
                  block
                "
                >
                  Password
                </label>

                <input
                  type="text"
                  placeholder="••••••••"
                  className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                />

              </div>

              {/* Profile */}
              <div>

                <label
                  className="
                  text-sm
                  text-zinc-400
                  mb-2
                  block
                "
                >
                  Profile
                </label>

                <select
                  className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                >
                  <option>Unlimit</option>
                </select>

              </div>

              {/* MAC Address */}
              <div>

                <label
                  className="
                  text-sm
                  text-zinc-400
                  mb-2
                  block
                "
                >
                  MAC Address
                </label>

                <input
                  type="text"
                  placeholder="00:11:22:33:44:55"
                  className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                />

              </div>

            </div>

          )}

          {/* BATCH USERS */}
          {tab === "batch" && (

            <div className="grid grid-cols-2 gap-5">

              {/* Number of Users */}
              <div>

                <label className="text-sm text-zinc-400 mb-2 block">
                  Number of Users
                </label>

                <input
                  type="number"
                  placeholder="100"
                  className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                />

              </div>

              {/* Username Prefix */}
              <div>

                <label className="text-sm text-zinc-400 mb-2 block">
                  Username Prefix
                </label>

                <input
                  type="text"
                  placeholder="room"
                  className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                />

              </div>

              {/* Password Length */}
              <div>

                <label className="text-sm text-zinc-400 mb-2 block">
                  Password Length
                </label>

                <input
                  type="number"
                  placeholder="8"
                  className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                />

              </div>

              {/* Profile */}
              <div>

                <label className="text-sm text-zinc-400 mb-2 block">
                  Profile
                </label>

                <select
                  className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                >
                  <option>Unlimit</option>
                </select>

              </div>

            </div>

          )}

          {/* AUTO GENERATE */}
          {tab === "auto" && (

            <div className="grid grid-cols-2 gap-5">

              {/* Number */}
              <div>

                <label className="text-sm text-zinc-400 mb-2 block">
                  Number of Users
                </label>

                <input
                  type="number"
                  placeholder="50"
                  className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                />

              </div>

              {/* Prefix */}
              <div>

                <label className="text-sm text-zinc-400 mb-2 block">
                  Username Prefix
                </label>

                <input
                  type="text"
                  placeholder="room"
                  className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                />

              </div>

              {/* Username Length */}
              <div>

                <label className="text-sm text-zinc-400 mb-2 block">
                  Username Length
                </label>

                <input
                  type="number"
                  placeholder="6"
                  className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                />

              </div>

              {/* Password Length */}
              <div>

                <label className="text-sm text-zinc-400 mb-2 block">
                  Password Length
                </label>

                <input
                  type="number"
                  placeholder="8"
                  className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                />

              </div>

              {/* Profile */}
              <div>

                <label className="text-sm text-zinc-400 mb-2 block">
                  Profile
                </label>

                <select
                  className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                >
                  <option>Unlimit</option>
                </select>

              </div>

            </div>

          )}

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-10">

          <button
            onClick={onClose}
            className="
            h-11
            px-5
            rounded-xl
            border
            border-white/10
            hover:bg-white/5
            transition-all
          "
          >
            Cancel
          </button>

          <button
            className="
            h-11
            px-5
            rounded-xl
            bg-white/5
            border
            border-white/10
            hover:bg-white/15
            hover:border-pink-500/30
            transition-all
            font-medium
          "
          >
            Apply
          </button>

          <button
            className="
            h-11
            px-5
            rounded-xl
            bg-pink-500
            hover:bg-pink-400
            transition-all
            font-medium
          "
          >
            OK
          </button>

        </div>

      </div>

    </div>
  );
}