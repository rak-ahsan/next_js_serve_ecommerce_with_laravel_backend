import ButtonTest from "@/components/button";
import { Button } from "@/components/ui/button";
import { getSingleUser } from "@/data/route";

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
