import { NextResponse } from "next/server";
import { getActiveUsers } from "@/services/router.service";

export async function GET() {
  const router = {
    ipAddress: process.env.MIKROTIK_HOST,
    apiPort: Number(
      process.env.MIKROTIK_PORT || 8728
    ),
    username: process.env.MIKROTIK_USER,
    password: process.env.MIKROTIK_PASSWORD,
  };

  const result =
    await getActiveUsers(router);

  return NextResponse.json(result);
}