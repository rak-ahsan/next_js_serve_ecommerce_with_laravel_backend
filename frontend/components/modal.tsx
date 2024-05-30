"use client";
import * as React from "react";

export interface Modals extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: any;
  text?: string;
  title?: string;
  open?: any;
  setOpenModal?: any;
  children: React.ReactNode;
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

const Modals: React.FC<Modals> = ({
  children,
  icon,
  title,
  text,
  open,
  ...props
}) => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <div>
      <AlertDialog>
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
              <AlertDialogCancel className="justify-end bg-transparent border-none">
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

export default Modals;
