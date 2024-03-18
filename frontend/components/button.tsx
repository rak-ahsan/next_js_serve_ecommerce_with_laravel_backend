"use client";

import { deleteUser } from "@/data/route";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

interface Props {
  id: number;
}

const ButtonTest: React.FC<Props> = ({ id }) => {
  const destroy = async () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await deleteUser(id);
          if (response.errors) {
            const errorMessages = Object.values(response.errors).flat();
            toast.error(errorMessages.join(", "));
          } else {
            toast.success(response.message);
          }
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
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
