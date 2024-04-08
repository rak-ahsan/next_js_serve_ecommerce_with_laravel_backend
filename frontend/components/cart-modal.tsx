"use client";
import * as React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog-cart";
import { XCircle } from "lucide-react";

export interface ModalsProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: any;
  text?: string;
  title?: string;
  open?: boolean;
  setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const ModalsCart: React.FC<ModalsProps> = ({
  children,
  icon,
  title,
  text,
  open,
  setOpenModal,
  ...props
}) => {
  return (
    <div>
      <AlertDialog open={open}>
        <div className="toptext flex justify-between ">
          <p className="text-[18px] ">{text}</p>
          <AlertDialogTrigger className="btn bg-green-600 p-1 rounded-md text-white w-32">
            {icon}
          </AlertDialogTrigger>
        </div>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="div flex justify-between bg-white pl-3 rounded-md items-center dark:bg-transparent">
              <AlertDialogTitle>{title}</AlertDialogTitle>
              <AlertDialogCancel className="justify-end bg-transparent border-none" onClick={() => setOpenModal && setOpenModal(false)}>
                <XCircle size={20} />
              </AlertDialogCancel>
            </div>
          </AlertDialogHeader>
          <AlertDialogDescription>{children}</AlertDialogDescription>
          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ModalsCart;
