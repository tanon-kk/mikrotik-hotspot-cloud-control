"use client";

import { useEffect, useRef, useState } from "react";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);

  const menuRef = useRef(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "/api/router/hotspot-users"
        );

        const data = await response.json();

        if (data.success) {
          setUsers(data.users);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

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

  if (loading) {
    return (
      <div
        className="
        bg-[#121212]
        border
        border-white/5
        rounded-xl
        p-6
      "
      >
        Loading users...
      </div>
    );
  }

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
            <th className="px-6 py-3.5">
              <input
                type="checkbox"
                checked={
                  users.length > 0 &&
                  selectedUsers.length ===
                    users.length
                }
                onChange={toggleAllUsers}
                className="
                w-4
                h-4
                accent-pink-500
              "
              />
            </th>

            <th className="px-6 py-3.5">
              Username
            </th>

            <th className="px-6 py-3.5">
              Profile
            </th>

            <th className="px-6 py-3.5">
              Uptime
            </th>

            <th className="px-6 py-3.5">
              Comment
            </th>

            <th className="px-6 py-3.5">
              Status
            </th>

            <th className="px-6 py-3.5 text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="
              border-b
              border-white/5
              hover:bg-white/5
            "
            >
              <td className="px-6 py-3.5">
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(
                    user.username
                  )}
                  onChange={() =>
                    toggleUser(user.username)
                  }
                  className="
                  w-4
                  h-4
                  accent-pink-500
                "
                />
              </td>

              <td className="px-6 py-3.5">
                <div className="font-medium text-white">
                  {user.username}
                </div>
              </td>

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
                "
                >
                  {user.profile}
                </span>
              </td>

              <td className="px-6 py-3.5 text-sm text-zinc-300">
                {user.uptime}
              </td>

              <td className="px-6 py-3.5 text-sm text-zinc-400">
                {user.comment || "-"}
              </td>

              <td className="px-6 py-3.5">
                <span
                  className="
                  px-2.5
                  py-1
                  rounded-md
                  text-xs
                  bg-green-500/10
                  text-green-400
                "
                >
                  active
                </span>
              </td>

              <td className="px-6 py-3.5 text-right">
                <div
                  className="relative inline-block"
                  ref={menuRef}
                >
                  <button
                    onClick={() =>
                      setOpenMenu(
                        openMenu === user.id
                          ? null
                          : user.id
                      )
                    }
                    className="
                    w-8
                    h-8
                    rounded-lg
                    hover:bg-white/5
                    text-zinc-400
                  "
                  >
                    ⋯
                  </button>

                  {openMenu === user.id && (
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
                      overflow-hidden
                      z-50
                    "
                    >
                      <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-white/5">
                        Enable
                      </button>

                      <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-white/5">
                        Disable
                      </button>

                      <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-white/5">
                        QR Code
                      </button>

                      <button className="w-full px-4 py-2.5 text-left text-sm text-red-400 hover:bg-red-500/10">
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