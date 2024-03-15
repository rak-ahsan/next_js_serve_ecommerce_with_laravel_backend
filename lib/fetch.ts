import { cookies } from "next/headers";

const cookieStore = cookies();
const tokenAll = cookieStore.get("token");
const token = tokenAll?.value;

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function fetchWithAuth(
  url: string,
  options: RequestInit = {}
): Promise<any> {
  options.headers = new Headers(options.headers);
  options.headers.set("Authorization", `Bearer ${token}`);
  options.headers.set("Content-Type", "application/json");
  const response = await fetch(baseURL + url, options);
  const data = await response.json();

  return data;
}
