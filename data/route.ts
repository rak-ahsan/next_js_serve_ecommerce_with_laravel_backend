"use server";

import { revalidateTag } from "next/cache";

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

export async function POST(formData: any) {
  revalidateTag("collection");

  try {
    const rawFormData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const res = await fetch("http://127.0.0.1:8000/api/store", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    // Parse the response body as JSON
    const responseData = await res.json();

    // Stringify the response data if needed
    const responseString = JSON.stringify(responseData);
    console.log(responseString);

    return responseString;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
