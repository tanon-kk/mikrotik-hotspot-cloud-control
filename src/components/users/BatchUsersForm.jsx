import { CaretDown } from "@phosphor-icons/react";

export default function BatchUsersForm({
  batchCount,
  setBatchCount,
  enableTimeLimit,
  setEnableTimeLimit,
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

      {/* Number of Users */}
      <div>

        <label className="text-[13px] font-medium text-zinc-400 mb-2 block">
          Number of Users (Max 500)
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
            type="text"
            inputMode="numeric"
            value={batchCount}
            onChange={(e) => {

              const value = Number(e.target.value);

              if (value > 500) {
                setBatchCount(500);
              } else {
                setBatchCount(e.target.value);
              }
            }}    

            className="
            w-full
            h-full
            px-4
            pr-14
            bg-transparent
            outline-none
            text-sm
          "
          />

          {/* Dropdown */}
          <div className="relative w-12 h-full">

            <select
              value=""
              onChange={(e) => {
                if (e.target.value) {
                  setBatchCount(e.target.value);
                }
              }}
              className="
              appearance-none
              w-full
              h-full
              bg-[#181818]
              text-zinc-400
              outline-none
              border-l
              border-white/10
              cursor-pointer
              text-sm
              px-3
            "
            >

              <option value=""></option>

              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="500">500</option>

            </select>

            <CaretDown
              size={14}
              weight="bold"
              className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-zinc-500
              pointer-events-none
            "
            />

          </div>

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

        <div className="relative">

          <select
            defaultValue="6"
            className="
            appearance-none
            w-full
            h-10
            px-4
            pr-10
            rounded-lg
            bg-[#181818]
            border
            border-white/10
            outline-none
            focus:border-pink-500
            text-sm
            cursor-pointer
          "
          >
            <option>4</option>
            <option>6</option>
            <option>8</option>
            <option>10</option>
            <option>12</option>
            <option>16</option>
          </select>

          <CaretDown
            size={14}
            weight="bold"
            className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-zinc-500
            pointer-events-none
          "
          />

        </div>

      </div>

      {/* Password Length */}
      <div>

        <label className="text-[13px] font-medium text-zinc-400 mb-2 block">
          Password Length
        </label>

        <div className="relative">

          <select
            defaultValue="6"
            className="
            appearance-none
            w-full
            h-10
            px-4
            pr-10
            rounded-lg
            bg-[#181818]
            border
            border-white/10
            outline-none
            focus:border-pink-500
            text-sm
            cursor-pointer
          "
          >
            <option>4</option>
            <option>6</option>
            <option>8</option>
            <option>10</option>
            <option>12</option>
            <option>16</option>
          </select>

          <CaretDown
            size={14}
            weight="bold"
            className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-zinc-500
            pointer-events-none
          "
          />

        </div>

      </div>

      {/* Profile */}
      <div>

        <label className="text-[13px] font-medium text-zinc-400 mb-2 block">
          Profile
        </label>

        <div className="relative">

          <select
            className="
            appearance-none
            w-full
            h-10
            px-4
            pr-10
            rounded-lg
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

          <CaretDown
            size={14}
            weight="bold"
            className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-zinc-500
            pointer-events-none
          "
          />

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
            appearance-none
            w-full
            h-10
            px-4
            pr-10
            rounded-lg
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

          <CaretDown
            size={14}
            weight="bold"
            className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-zinc-500
            pointer-events-none
          "
          />

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