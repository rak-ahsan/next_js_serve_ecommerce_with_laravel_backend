"use client";

import { deleteUser } from "@/data/route";
import { toast } from "react-toastify";

interface Props {
  id: number;
}

const ButtonTest: React.FC<Props> = ({ id }) => {
  const destroy = async () => {
    const res = await deleteUser(id);
    console.log(res);
    
  };

  return (
    <button
      onClick={destroy}
      className="btn bg-red-600 p-1 rounded-md text-white"
    >
      Delete
    </button>
  );
};

export default ButtonTest;
