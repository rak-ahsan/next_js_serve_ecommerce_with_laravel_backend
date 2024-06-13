"use client";
import * as React from "react";

export interface Modals extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: any;
  text?: string;
  title?: string;
  open?: any;
  data?: any;
  setOpenModal?: (data: boolean) => void;
  openModal?: boolean;
  children?: React.ReactNode;
}

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { XCircle } from "lucide-react";
import { Item } from "@radix-ui/react-navigation-menu";

const ModalsProduct: React.FC<Modals> = ({
  children,
  icon,
  title,
  text,
  open,
  data,
  openModal,
  setOpenModal,
  ...props
}) => {
  return (
    <div>
      <AlertDialog open={openModal}>
        <div className="toptext flex justify-between ">
          <p className="text-[18px] ">{text}</p>
        </div>
        <AlertDialogContent className="lg:min-w-[70%] min-w-full">
          <AlertDialogHeader>
            <div className="div flex justify-between bg-white pl-3 rounded-md datas-center dark:bg-transparent">
              <AlertDialogTitle>{title}</AlertDialogTitle>
              <AlertDialogCancel
                className="justify-end bg-transparent border-none"
                onClick={() => {
                  if (setOpenModal) {
                    setOpenModal(false);
                  }
                }}

              >
                <XCircle size={20} />
              </AlertDialogCancel>
            </div>
          </AlertDialogHeader>
          <AlertDialogDescription>

            <div className="w-72 bg-white shadow-md rounded-xl duration-500 ">
              <a href="#">
                <img
                  src={`${data.image}`}
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    {data.category}
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {data.title}
                  </p>
                  <div className="flex datas-center justify-between">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      $ {data.price}
                    </p>
                  </div>
                </div>
              </a>
              <div className="p-3">{data.description}</div>

            </div>
          </AlertDialogDescription>
          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ModalsProduct;
