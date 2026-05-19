"use client";

import { useState } from "react";

export default function CreateUserModal({
  open,
  onClose,
}) {

  const [tab, setTab] = useState("one");
  const [enableUser, setEnableUser] = useState(true);
  const [enableTimeLimit, setEnableTimeLimit] = useState(false);
  const [batchCount, setBatchCount] = useState("10");
  const handleClose = () => {setTab("one"); setEnableUser(true); setEnableTimeLimit(false); setBatchCount("10"); onClose();};

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
        rounded-xl
        shadow-2xl
        p-6
      "
      >

        {/* Header */}
        <div className="flex items-start justify-between mb-6">

          {/* Left */}
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

            <p
              className="
              text-sm
              text-zinc-500
              mt-1
            "
            >
              Create hotspot users for MikroTik router
            </p>

          </div>

          {/* Right */}
          <div className="flex items-center gap-3">

            {/* Tabs */}
            <div
              className="
              flex
              items-center
              gap-1
              bg-[#141414]
              border
              border-white/5
              rounded-lg
              p-1
            "
            >

              <button
                onClick={() => setTab("one")}
                className={`
                  px-5
                  h-9
                  rounded-md
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
                  h-9
                  rounded-md
                  text-sm
                  transition-all

                  ${tab === "batch"
                    ? "bg-pink-500 text-white"
                    : "text-zinc-400 hover:text-white"}
                `}
              >
                Batch Users
              </button>

            </div>

            {/* Close */}
            <button
              onClick={handleClose}
              className="
              w-9
              h-9
              flex
              items-center
              justify-center
              rounded-lg
              text-zinc-500
              hover:text-white
              hover:bg-white/5
              transition-all
            "
            >
              ✕
            </button>

          </div>

        </div>

        {/* Content */}
        <div
          className="
          min-h-[420px]
          flex
          items-start
        "
        >

          {/* ONE USER */}
          {tab === "one" && (

            <div
              className="
              grid
              grid-cols-2
              gap-x-5
              gap-y-4
              w-full
            "
            >

              {/* Enabled */}
              <div className="col-span-2 flex items-center gap-3">

                <input
                  type="checkbox"
                  checked={enableUser}
                  onChange={() => setEnableUser(!enableUser)}
                  className="
                  w-4
                  h-4
                  accent-pink-500
                  cursor-pointer
                "
                />

                <span className="text-[13px] font-medium text-zinc-300">
                  Enabled
                </span>

              </div>

              {/* Description */}
              <div>

                <label className="text-[13px] font-medium text-zinc-400 mb-2 block">
                  Description
                </label>

                <input
                  type="text"
                  className="
                  w-full
                  h-10
                  px-4
                  rounded-lg
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

                <label className="text-[13px] font-medium text-zinc-400 mb-2 block">
                  Server
                </label>

                <select
                  className="
                  w-full
                  h-10
                  px-4
                  rounded-lg
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

                <label className="text-[13px] font-medium text-zinc-400 mb-2 block">
                  Username
                </label>

                <input
                  type="text"
                  placeholder="user-a001"
                  className="
                  w-full
                  h-10
                  px-4
                  rounded-lg
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

                <label className="text-[13px] font-medium text-zinc-400 mb-2 block">
                  Password
                </label>

                <input
                  type="text"
                  placeholder="••••••••"
                  className="
                  w-full
                  h-10
                  px-4
                  rounded-lg
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

                <label className="text-[13px] font-medium text-zinc-400 mb-2 block">
                  Profile
                </label>

                <select
                  className="
                  w-full
                  h-10
                  px-4
                  rounded-lg
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                >
                  <option>default</option>
                </select>

              </div>

              {/* Limit Uptime */}
              <div>

                <label className="text-[13px] font-medium text-zinc-400 mb-2 block">
                  Limit Uptime
                </label>

                <select
                  defaultValue="unlimited"
                  className="
                  w-full
                  h-10
                  px-4
                  rounded-lg
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                >
                  <option>unlimited</option>
                  <option>1 Hour</option>
                  <option>12 Hours</option>
                  <option>1 Day</option>
                  <option>7 Days</option>
                  <option>30 Days</option>
                  <option>6 Months</option>
                  <option>12 Months</option>
                </select>

              </div>

              {/* Expire Date */}
              <div className="col-span-2">

                <div className="flex items-center gap-2 mb-2">

                  <label className="text-[13px] font-medium text-zinc-400">
                    Expire Date
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      setEnableTimeLimit(!enableTimeLimit)
                    }
                    className={`
                      relative
                      w-9
                      h-5
                      rounded-full
                      transition-all
                      duration-300

                      ${enableTimeLimit
                        ? "bg-pink-500"
                        : "bg-zinc-700"}
                    `}
                  >

                    <div
                      className={`
                        absolute
                        top-[2px]
                        w-4
                        h-4
                        rounded-full
                        bg-white
                        transition-all
                        duration-300

                        ${enableTimeLimit
                          ? "translate-x-4"
                          : "translate-x-0.5"}
                      `}
                    />

                  </button>

                </div>

                <input
                  type="datetime-local"
                  lang="en-GB"
                  disabled={!enableTimeLimit}
                  className={`
                    w-full
                    max-w-[360px]
                    h-10
                    px-4
                    rounded-lg
                    border
                    outline-none
                    text-sm
                    transition-all
                    [color-scheme:dark]

                    ${enableTimeLimit
                      ? `
                        bg-[#181818]
                        border-pink-500/20
                        text-white
                        focus:border-pink-500
                      `
                      : `
                        bg-[#141414]
                        border-white/5
                        text-zinc-600
                        opacity-50
                        cursor-not-allowed
                      `}
                  `}
                />

              </div>

            </div>

          )}

          {/* BATCH USERS */}
          {tab === "batch" && (

            <div
              className="
              grid
              grid-cols-2
              gap-x-5
              gap-y-4
              w-full
            "
            >

{/* Number of Users */}
<div>

  <label className="text-[13px] font-medium text-zinc-400 mb-2 block">
    Number of Users
  </label>

  <div
    className="
    relative
    flex
    items-center
    h-10
    rounded-lg
    bg-[#181818]
    border
    border-white/10
    overflow-hidden
    focus-within:border-pink-500
    transition-all
  "
  >

    {/* Input */}
    <input
      type="number"
      value={batchCount}
      onChange={(e) =>
        setBatchCount(e.target.value)
      }
      className="
      w-full
      h-full
      px-4
      pr-16
      bg-transparent
      outline-none
      text-sm
    "
    />

    {/* Dropdown */}
    <select
      value=""
      onChange={(e) => {
        if (e.target.value) {
          setBatchCount(e.target.value);
        }
      }}
      className="
      absolute
      right-0
      top-0
      w-14
      h-full
      bg-[#181818]
      text-zinc-400
      outline-none
      border-l
      border-white/10
      cursor-pointer
      text-sm
    "
    >

      <option value=""></option>

      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>

    </select>

  </div>

</div>

              {/* Username Prefix */}
              <div>

                <label className="text-[13px] font-medium text-zinc-400 mb-2 block">
                  Username Prefix
                </label>

                <input
                  type="text"
                  className="
                  w-full
                  h-10
                  px-4
                  rounded-lg
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

                <label className="text-[13px] font-medium text-zinc-400 mb-2 block">
                  Username Length
                </label>

                <select
                  defaultValue="6"
                  className="
                  w-full
                  h-10
                  px-4
                  rounded-lg
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                >
                  <option>4</option>
                  <option>6</option>
                  <option>8</option>
                  <option>10</option>
                  <option>12</option>
                  <option>16</option>
                </select>

              </div>

              {/* Password Length */}
              <div>

                <label className="text-[13px] font-medium text-zinc-400 mb-2 block">
                  Password Length
                </label>

                <select
                  defaultValue="6"
                  className="
                  w-full
                  h-10
                  px-4
                  rounded-lg
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                >
                  <option>4</option>
                  <option>6</option>
                  <option>8</option>
                  <option>10</option>
                  <option>12</option>
                  <option>16</option>
                </select>

              </div>

              {/* Profile */}
              <div>

                <label className="text-[13px] font-medium text-zinc-400 mb-2 block">
                  Profile
                </label>

                <select
                  className="
                  w-full
                  h-10
                  px-4
                  rounded-lg
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                >
                  <option>default</option>
                </select>

              </div>

              {/* Limit Uptime */}
              <div>

                <label className="text-[13px] font-medium text-zinc-400 mb-2 block">
                  Limit Uptime
                </label>

                <select
                  defaultValue="unlimited"
                  className="
                  w-full
                  h-10
                  px-4
                  rounded-lg
                  bg-[#181818]
                  border
                  border-white/10
                  outline-none
                  focus:border-pink-500
                  text-sm
                "
                >
                  <option>unlimited</option>
                  <option>1 Hour</option>
                  <option>12 Hours</option>
                  <option>1 Day</option>
                  <option>7 Days</option>
                  <option>30 Days</option>
                  <option>6 Months</option>
                  <option>12 Months</option>
                </select>

              </div>

              {/* Expire Date */}
              <div className="col-span-2">

                <div className="flex items-center gap-2 mb-2">

                  <label className="text-[13px] font-medium text-zinc-400">
                    Expire Date
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      setEnableTimeLimit(!enableTimeLimit)
                    }
                    className={`
                      relative
                      w-9
                      h-5
                      rounded-full
                      transition-all
                      duration-300

                      ${enableTimeLimit
                        ? "bg-pink-500"
                        : "bg-zinc-700"}
                    `}
                  >

                    <div
                      className={`
                        absolute
                        top-[2px]
                        w-4
                        h-4
                        rounded-full
                        bg-white
                        transition-all
                        duration-300

                        ${enableTimeLimit
                          ? "translate-x-4"
                          : "translate-x-0.5"}
                      `}
                    />

                  </button>

                </div>

                <input
                  type="datetime-local"
                  lang="en-GB"
                  disabled={!enableTimeLimit}
                  className={`
                    w-full
                    max-w-[360px]
                    h-10
                    px-4
                    rounded-lg
                    border
                    outline-none
                    text-sm
                    transition-all
                    [color-scheme:dark]

                    ${enableTimeLimit
                      ? `
                        bg-[#181818]
                        border-pink-500/20
                        text-white
                        focus:border-pink-500
                      `
                      : `
                        bg-[#141414]
                        border-white/5
                        text-zinc-600
                        opacity-50
                        cursor-not-allowed
                      `}
                  `}
                />

              </div>

            </div>

          )}

        </div>

        {/* Footer */}
        <div
          className="
          flex
          justify-end
          gap-2
          mt-6
          pt-4
          border-t
          border-white/5
        "
        >

          <button
            onClick={handleClose}
            className="
            h-10
            px-5
            rounded-lg
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
            h-10
            px-5
            rounded-lg
            bg-white/5
            border
            border-white/10
            hover:bg-white/10
            hover:border-pink-500/30
            transition-all
            font-medium
          "
          >
            Apply
          </button>

          <button
            className="
            h-10
            px-5
            rounded-lg
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