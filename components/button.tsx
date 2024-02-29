"use client";

import { deleteUser } from "@/data/route";

interface Props {
  id: number;
}

const ButtonTest: React.FC<Props> = ({ id }) => {
  const destroy = async () => {
    const res = await deleteUser(id);

    alert("success");
  };

  return <button onClick={destroy}>button</button>;
};

export default ButtonTest;
