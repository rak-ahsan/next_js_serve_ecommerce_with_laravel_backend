"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
const tokenCookie = cookies().get("token");
const token = tokenCookie ? tokenCookie.value : null;
const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

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

export async function Login(data: FormData) {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: data,
    });
    const responseData = await res.json();
    console.log(responseData);
    cookies().set("token", responseData.access_token);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
export async function getDataUSer() {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/get", {
      cache: "no-store",
      next: { tags: ["collection"] },
      headers: {
        Authorization: `Bearer ${token} `,
      },
    });

    return res.json();
  } catch (error) {
    console.error("Error:", error);
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

export async function POST(data: FormData) {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/registration", {
      method: "POST",
      body: data,
    });

    revalidateTag("collection");
    const responseData = await res.json();
    return responseData;

    console.log(responseData);
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
