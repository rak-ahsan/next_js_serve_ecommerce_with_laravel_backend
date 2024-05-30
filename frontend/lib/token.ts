import { cookies } from "next/headers";

export const getToken = () => {
  const cookieStore = cookies();
  const tokenAll = cookieStore.get("token");
  const token = tokenAll?.value;
  return token;
};

