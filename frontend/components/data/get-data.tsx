"use server";

interface Props {}
const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
