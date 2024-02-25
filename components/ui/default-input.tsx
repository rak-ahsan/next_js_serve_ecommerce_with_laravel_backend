import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "./label";

interface Props {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  type: string;
}

const DefaultInput: React.FC<Props> = ({
  control,
  name,
  label,
  placeholder,
  type,
  required,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="gap-2">
          <FormItem className="grid gap-2">
            <div>
              <FormControl>
                <div className="grid w-full items-center pb-2 gap-2">
                  <Label htmlFor={name} className="font-semibold text-md">
                    {label}{" "}
                    {required && <span className="text-[#e32] "> * </span>}
                  </Label>
                  <Input
                    className="text-md dark:text-dark-text-80  dark:bg-dark-bg-70 dark:focus-visible:ring-1"
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </div>
          </FormItem>
        </div>
      )}
    />
  );
};

export default DefaultInput;
