"use client";

import { useEffect, useRef, useState } from "react";

const users = [
  {
    username: "room101",
    profile: "1 Day",
    status: "online",
    usage: "2.4 GB",
    expires: "Today",
  },

  {
    username: "room102",
    profile: "7 Days",
    status: "offline",
    usage: "0 GB",
    expires: "Expired",
  },

  {
    username: "room103",
    profile: "30 Days",
    status: "online",
    usage: "12.8 GB",
    expires: "12 Jun 2026",
  },

  {
    username: "room104",
    profile: "VIP",
    status: "expired",
    usage: "1.2 GB",
    expires: "Expired",
  },
];

export default function UserTable() {

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);

  const menuRef = useRef(null);

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {

        setOpenMenu(null);

      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  const toggleUser = (username) => {

    if (selectedUsers.includes(username)) {

      setSelectedUsers(
        selectedUsers.filter(
          (user) => user !== username
        )
      );

    } else {

      setSelectedUsers([
        ...selectedUsers,
        username,
      ]);

    }
  };

  const toggleAllUsers = () => {

    if (selectedUsers.length === users.length) {

      setSelectedUsers([]);

    } else {

      setSelectedUsers(
        users.map((user) => user.username)
      );

    }
  };

  return (

    <div
      className="
      bg-[#121212]
      border
      border-white/5
      rounded-xl
      overflow-hidden
    "
    >

      {/* Top Info */}
      <div
        className="
        px-6
        py-3
        border-b
        border-white/5
        bg-white/5
        flex
        items-center
        justify-between
      "
      >

        <p
  className="
  text-sm
  text-zinc-500
"
>
  {users.length} Users

  <span className="mx-2 text-zinc-700">
    |
  </span>

  <span
    className={
      selectedUsers.length > 0
        ? "text-pink-400"
        : "text-zinc-500"
    }
  >
    {selectedUsers.length} Selected
  </span>

</p>

      </div>

      <table className="w-full">

        <thead
          className="
          border-b
          border-white/5
        "
        >

          <tr
            className="
            text-left
            text-sm
            text-zinc-500
          "
          >

            {/* Select All */}
            <th className="px-6 py-3.5">

              <input
                type="checkbox"
                checked={
                  selectedUsers.length === users.length
                }
                onChange={toggleAllUsers}
                className="
                w-4
                h-4
                accent-pink-500
              "
              />

            </th>

            <th className="px-6 py-3.5 font-medium">
              Username
            </th>

            <th className="px-6 py-3.5 font-medium">
              Profile
            </th>

            <th className="px-6 py-3.5 font-medium">
              Status
            </th>

            <th className="px-6 py-3.5 font-medium">
              Usage
            </th>

            <th className="px-6 py-3.5 font-medium">
              Expires
            </th>

            <th className="px-6 py-3.5 font-medium text-right">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {users.map((user, index) => (

            <tr
              key={index}
              className="
              border-b
              border-white/5
              hover:bg-white/5
              transition-all
            "
            >

              {/* Checkbox */}
              <td className="px-6 py-3.5">

                <input
                  type="checkbox"
                  checked={
                    selectedUsers.includes(user.username)
                  }
                  onChange={() => toggleUser(user.username)}
                  className="
                  w-4
                  h-4
                  accent-pink-500
                "
                />

              </td>

              {/* Username */}
              <td className="px-6 py-3.5">

                <div
                  className="
                  font-medium
                  text-white
                "
                >
                  {user.username}
                </div>

              </td>

              {/* Profile */}
              <td className="px-6 py-3.5">

                <span
                  className="
                  bg-white/5
                  border
                  border-white/5
                  px-2.5
                  py-1
                  rounded-md
                  text-xs
                  text-zinc-300
                "
                >
                  {user.profile}
                </span>

              </td>

              {/* Status */}
              <td className="px-6 py-3.5">

                <span
                  className={`
                    px-2.5
                    py-1
                    rounded-md
                    text-xs
                    capitalize

                    ${user.status === "online"
                      ? "bg-green-500/10 text-green-400"
                      : user.status === "offline"
                      ? "bg-zinc-500/10 text-zinc-400"
                      : "bg-red-500/10 text-red-400"
                    }
                  `}
                >
                  {user.status}
                </span>

              </td>

              {/* Usage */}
              <td
                className="
                px-6
                py-3.5
                text-zinc-300
                text-sm
              "
              >
                {user.usage}
              </td>

              {/* Expires */}
              <td
                className="
                px-6
                py-3.5
                text-zinc-400
                text-sm
              "
              >
                {user.expires}
              </td>

              {/* Actions */}
              <td className="px-6 py-3.5 text-right">

                <div
                  className="relative inline-block"
                  ref={menuRef}
                >

                  <button
                    onClick={() => {

                      if (openMenu === user.username) {

                        setOpenMenu(null);

                      } else {

                        setOpenMenu(user.username);

                      }
                    }}
                    className="
                    w-8
                    h-8
                    rounded-lg
                    hover:bg-white/5
                    transition-all
                    text-zinc-400
                    hover:text-white
                  "
                  >
                    ⋯
                  </button>

                  {/* Dropdown */}
                  {openMenu === user.username && (

                    <div
                      className="
                      absolute
                      right-0
                      top-10
                      w-40
                      bg-[#181818]
                      border
                      border-white/10
                      rounded-lg
                      shadow-2xl
                      overflow-hidden
                      z-50
                    "
                    >

                      <button
                        className="
                        w-full
                        px-4
                        py-2.5
                        text-left
                        text-sm
                        hover:bg-white/5
                        transition-all
                      "
                      >
                        Enable
                      </button>

                      <button
                        className="
                        w-full
                        px-4
                        py-2.5
                        text-left
                        text-sm
                        hover:bg-white/5
                        transition-all
                      "
                      >
                        Disable
                      </button>

                      <button
                        className="
                        w-full
                        px-4
                        py-2.5
                        text-left
                        text-sm
                        text-red-400
                        hover:bg-red-500/10
                        transition-all
                      "
                      >
                        Delete
                      </button>

                    </div>

                  )}

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}