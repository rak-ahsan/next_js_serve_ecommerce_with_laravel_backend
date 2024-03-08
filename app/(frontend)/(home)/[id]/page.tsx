import { getSingleUser } from "@/data/route";
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
  const data = await getSingleUser(id);

  return (
    <>
      <div>My email: {data.email}</div>
      <div>My password: {data.password}</div>
    </>
  );
}
