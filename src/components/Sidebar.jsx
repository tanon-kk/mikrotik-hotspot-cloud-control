"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  SquaresFour,
  UsersThree,
  Stack,
  WifiHigh,
  QrCode,
} from "@phosphor-icons/react";

export default function Sidebar() {

  const pathname = usePathname();

  const menus = [
    {
      name: "Dashboard",
      icon: SquaresFour,
      path: "/",
    },
    {
      name: "Users",
      icon: UsersThree,
      path: "/users",
    },
    {
      name: "Profiles User",
      icon: Stack,
      path: "/profiles",
    },
    {
      name: "Active",
      icon: WifiHigh,
      path: "/active",
    },
    {
      name: "QR Codes",
      icon: QrCode,
      path: "/qrcodes",
    },
  ];

  return (

    <div
      className="
      w-64
      bg-[#121212]
      border
      border-white/5
      rounded-xl
      p-6
    "
    >

      {/* Logo */}
      <div className="mb-10">

        <h1
          className="
          text-2xl
          font-semibold
          tracking-tight
        "
        >
          MikroTik
        </h1>

        <p
          className="
          text-sm
          text-zinc-500
          mt-1
        "
        >
          Hotspot Cloud Control
        </p>

      </div>

      {/* Menus */}
      <div className="space-y-1">

        {menus.map((menu, index) => {

          const Icon = menu.icon;

          return (

            <Link
              href={menu.path}
              key={index}
              className={`
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-lg
                cursor-pointer
                transition-all

                ${pathname === menu.path
                  ? "bg-pink-500 text-white"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
                }
              `}
            >

              <Icon
                size={18}
                weight={pathname === menu.path
                  ? "fill"
                  : "duotone"
                }
              />

              <span className="text-[15px] font-medium">
                {menu.name}
              </span>

            </Link>

          );
        })}

      </div>

    </div>
  );
}