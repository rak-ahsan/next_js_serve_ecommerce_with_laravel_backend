import { getSingleUser } from "@/data/route";
import { fetchWithAuth } from "@/lib/fetch";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: number };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const datas = await getSingleUser(id);
  return {
    title: datas.email.toString(),
  };
}

export default async function Layout({
  params: { id },
}: {
  params: { id: number };
}) {
  const data = await fetchWithAuth(`/get-single-user/${id}`);
  return (
    <>
      <div>My email: {data.email}</div>
      <div>My password: {data.password}</div>
    </>
  );
}
