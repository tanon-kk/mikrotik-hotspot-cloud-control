import { createRouterClient } from "@/lib/mikrotik/client";

export async function getHotspotUsers(router) {
  const client = createRouterClient({
    host: router.ipAddress,
    user: router.username,
    password: router.password,
    port: router.apiPort,
  });

  try {
    await client.connect();

    const users =
      await client.write("/ip/hotspot/user/print");

    client.close();

    const formattedUsers = users.map((user) => ({
      id: user[".id"],
      username: user.name,
      profile: user.profile || "-",
      uptime: user.uptime || "0s",
      disabled: user.disabled === "true",
      comment: user.comment || "",
    }));

    return {
      success: true,
      total: formattedUsers.length,
      users: formattedUsers,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}