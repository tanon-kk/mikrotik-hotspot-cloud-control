"use client";

import {
  Globe,
  UserCircle,
} from "@phosphor-icons/react";

export default function Navbar() {

  return (

    <div
      className="
      h-16
      bg-[#121212]
      border
      border-white/5
      rounded-xl
      px-6
      flex
      items-center
      justify-between
    "
    >

      <h1
        className="
        text-lg
        font-semibold
        tracking-tight
      "
      >
        Black Pink Public Limited Company
      </h1>

      <div className="flex items-center gap-4">

        <button
          className="
          flex
          items-center
          gap-2
          text-zinc-400
          hover:text-white
          transition-all
        "
        >

          <Globe
            size={18}
            weight="duotone"
          />

          <span className="text-sm">
            EN
          </span>

        </button>

        <button
          className="
          w-10
          h-10
          rounded-full
          bg-white/5
          flex
          items-center
          justify-center
          hover:bg-white/10
          transition-all
        "
        >

          <UserCircle
            size={24}
            weight="duotone"
          />

        </button>

      </div>

    </div>
  );
}