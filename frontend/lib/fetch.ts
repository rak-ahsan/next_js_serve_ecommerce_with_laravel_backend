import { cookies } from "next/headers";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function fetchWithAuth(
  url: string,
  options: RequestInit = {}
): Promise<any> {
  try {
    const token = getTokenFromCookie();

    const headers = new Headers(options.headers);

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    const response = await fetch(baseURL + url, { ...options, headers });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

function getTokenFromCookie(): string | undefined {
  const cookieStore = cookies();
  const tokenAll = cookieStore.get("token");
  return tokenAll?.value;
}
