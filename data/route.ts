"use server";

import { revalidateTag } from "next/cache";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getDataUSer() {
  const res = await fetch("http://127.0.0.1:8000/api/get", {
    cache: "no-store",
    next: { tags: ["collection"] },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
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

export async function POST(data: any) {
  try {
    const rawFormData = {
      email: data.email,
      password: data.password,
    };

    const res = await fetch("http://127.0.0.1:8000/api/store", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });
    revalidateTag("collection");
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function deleteUser(id: any) {
  const res = await fetch(`${baseURL}/destroy-single-user/${id}`, {
    method: "DELETE",
  });
  revalidateTag("collection");
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
