"use server";

import { fetchWithAuth } from "@/lib/fetch";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
// const tokenCookie = cookies().get("token");
// const token = tokenCookie ? tokenCookie.value : null;
const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
const cookieStore = cookies();
const tokenAll = cookieStore.get("token");
const token = tokenAll?.value;

// export async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     headers: {
//       Authorization: `Bearer 2|sVhP30JKC4Lbm9Z0s50G6DSZxX6RZRK2ENVDcRox5e38ad35`,
//     },
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

export async function Login(data: { email: string; password: string }) {
  try {
    const res = await fetch(`${baseURL}/login`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await res.json();
    if (responseData.token) {
      cookies().set("token", responseData.token, {
        httpOnly: true,
        expires: new Date("2030-01-01"),
      });
    }

    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getDataUser() {
  try {
    const responseData = fetchWithAuth("/get", {
      method: "GET",
    });

    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function logOut() {
  try {
    const res = await fetch(`${baseURL}/log-out`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation: ", error);
  }
}

export async function getSingleUser(id: number) {
  const res = await fetch(`${baseURL}/get-single-user/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export async function loginUser(credentials: FormData) {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(errorMessage.message || "Login failed");
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function deleteUser(id: any) {
  revalidateTag("collection");
  const res = await fetch(`${baseURL}/destroy-single-user/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export async function update(data: any) {
  try {
    const rawFormData = {
      email: data.email,
      password: data.password,
      id: data.id,
    };
    const res = await fetch(`${baseURL}/update-single-user/${rawFormData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });

    revalidateTag("collection");
    const responseData = await res.json();
    console.log(responseData);

    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
