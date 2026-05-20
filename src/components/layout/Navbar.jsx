"use client";

import { useRouterContext, } from "@/context/RouterContext";
import {Globe, UserCircle, CaretDown, } from "@phosphor-icons/react";
import routers from "@/data/routers";

export default function Navbar() {
  const { selectedRouter, setSelectedRouter, } = useRouterContext();

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

        {/* Router Selector */}
        <div className="flex items-center gap-3">

          {/* Status */}
          <div className="relative group">

            <div
              className="
              w-2.5
              h-2.5
              rounded-full
              bg-green-400
              animate-pulse
              cursor-pointer
            "
            />

            {/* Tooltip */}
            <div
              className="
              absolute
              left-1/2
              -translate-x-1/2
              top-5
              px-3
              h-7
              rounded-lg
              bg-green-500/10
              border
              border-green-500/10
              flex
              items-center
              gap-2
              whitespace-nowrap
              opacity-0
              invisible
              group-hover:opacity-100
              group-hover:visible
              transition-all
              duration-200
              z-50
            "
            >

              {/* Status Dot */}
              <div
                className="
                w-2
                h-2
                rounded-full
                bg-green-400
              "
              />

              <span
                className="
                text-xs
                font-medium
                text-green-400
              "
              >
                Connected
              </span>

            </div>

          </div>

          <span
            className="
            text-sm
            text-zinc-300
            font-medium
          "
          >
            Active Router:
          </span>

          {/* Router Dropdown */}
          <div className="relative">

            <select
              value={selectedRouter.id}
              onChange={(e) => {

                const router = routers.find(
                  (r) => r.id === Number(e.target.value)
                );

                setSelectedRouter(router);

              }}
              className="
                h-12
                pl-4
                pr-10
                rounded-lg
                bg-[#141414]
                border
                border-white/10
                outline-none
                appearance-none
                text-sm
                text-white
                hover:border-pink-500/40
                focus:border-pink-500
                transition-all
                cursor-pointer
              "
            >

              {routers.map((router) => (

                <option
                  key={router.id}
                  value={router.id}
                >
                  {router.name}
                </option>

              ))}

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

        {/* Language */}
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

        {/* User */}
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