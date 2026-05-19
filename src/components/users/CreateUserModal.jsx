"use client";

import { useState } from "react";
import OneUserForm from "./OneUserForm";
import BatchUsersForm from "./BatchUsersForm";

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
            <OneUserForm
              enableUser={enableUser}
              setEnableUser={setEnableUser}
              enableTimeLimit={enableTimeLimit}
              setEnableTimeLimit={setEnableTimeLimit}
            />
          )}

          {/* BATCH USERS */}
          {tab === "batch" && (
            <BatchUsersForm
              batchCount={batchCount}
              setBatchCount={setBatchCount}
              enableTimeLimit={enableTimeLimit}
              setEnableTimeLimit={setEnableTimeLimit}
            />
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