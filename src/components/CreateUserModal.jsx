export default function CreateUserModal({
  open,
  onClose,
}) {

  if (!open) return null;

  return (

    <div
      className="
      fixed
      inset-0
      bg-black/60
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-50
    "
    >

      {/* Modal */}
      <div
        className="
        w-full
        max-w-lg
        bg-[#121212]
        border
        border-white/10
        rounded-xl
        p-8
        shadow-2xl
      "
      >

        {/* Header */}
        <div className="flex justify-between items-center mb-8">

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
              mt-2
            "
            >
              Add new hotspot user
            </p>

          </div>

          <button
            onClick={onClose}
            className="
            text-zinc-500
            hover:text-white
            text-xl
          "
          >
            ✕
          </button>

        </div>

        {/* Form */}
        <div className="space-y-5">

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
              bg-[#181818]
              border
              border-white/5
              rounded-lg
              px-4
              py-3
              outline-none
              text-sm
              focus:border-pink-500/40
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
              type="password"
              placeholder="••••••••"
              className="
              w-full
              bg-[#181818]
              border
              border-white/5
              rounded-lg
              px-4
              py-3
              outline-none
              text-sm
              focus:border-pink-500/40
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
              bg-[#181818]
              border
              border-white/5
              rounded-lg
              px-4
              py-3
              outline-none
              text-sm
              focus:border-pink-500/40
            "
            >

              <option>1 Day</option>
              <option>7 Days</option>
              <option>30 Days</option>
              <option>VIP</option>

            </select>

          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="
            px-5
            py-2.5
            rounded-lg
            bg-white/5
            hover:bg-white/10
            transition-all
          "
          >
            Cancel
          </button>

          <button
            className="
            px-5
            py-2.5
            rounded-lg
            bg-pink-500
            hover:bg-pink-600
            transition-all
            font-medium
          "
          >
            Create User
          </button>

        </div>

      </div>

    </div>
  );
}