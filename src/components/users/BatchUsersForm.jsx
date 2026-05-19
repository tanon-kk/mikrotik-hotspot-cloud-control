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
            pr-14
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
            w-12
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

  );
}