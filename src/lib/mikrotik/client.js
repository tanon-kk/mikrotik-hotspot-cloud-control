import { RouterOSAPI } from "node-routeros";

export function createRouterClient({
  host,
  user,
  password,
  port = 8728,
}) {
  return new RouterOSAPI({
    host,
    user,
    password,
    port,
  });
}