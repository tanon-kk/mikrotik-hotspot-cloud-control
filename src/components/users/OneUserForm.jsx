"use client";

import {
  CaretDown,
} from "@phosphor-icons/react";

export default function OneUserForm({
  enableUser,
  setEnableUser,
  enableTimeLimit,
  setEnableTimeLimit
}) {

  return (

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

        <div className="relative">

          <select
            className="
            w-full
            h-10
            pl-4
            pr-10
            rounded-lg
            appearance-none
            bg-[#181818]
            border
            border-white/10
            outline-none
            focus:border-pink-500
            text-sm
            cursor-pointer
          "
          >
            <option>all</option>
          </select>

          {/* Arrow */}
          <div
            className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            pointer-events-none
            text-zinc-500
          "
          >

            <CaretDown
              size={14}
              weight="bold"
            />

          </div>

        </div>

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

        <div className="relative">

          <select
            className="
            w-full
            h-10
            pl-4
            pr-10
            rounded-lg
            appearance-none
            bg-[#181818]
            border
            border-white/10
            outline-none
            focus:border-pink-500
            text-sm
            cursor-pointer
          "
          >
            <option>default</option>
          </select>

          {/* Arrow */}
          <div
            className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            pointer-events-none
            text-zinc-500
          "
          >

            <CaretDown
              size={14}
              weight="bold"
            />

          </div>

        </div>

      </div>

      {/* Limit Uptime */}
      <div>

        <label className="text-[13px] font-medium text-zinc-400 mb-2 block">
          Limit Uptime
        </label>

        <div className="relative">

          <select
            defaultValue="unlimited"
            className="
            w-full
            h-10
            pl-4
            pr-10
            rounded-lg
            appearance-none
            bg-[#181818]
            border
            border-white/10
            outline-none
            focus:border-pink-500
            text-sm
            cursor-pointer
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

          {/* Arrow */}
          <div
            className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            pointer-events-none
            text-zinc-500
          "
          >

            <CaretDown
              size={14}
              weight="bold"
            />

          </div>

        </div>

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

  );
}