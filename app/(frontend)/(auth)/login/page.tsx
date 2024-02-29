"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import DefaultInput from "@/components/ui/default-input";
import { POST, getDataUSer } from "@/data/route";
import HomePage from "../../(home)/page";

interface InputFormProps {
  action?: any;
}
const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function InputForm({ action }: InputFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        email: "",
      },
    }),
    { handleSubmit, control, setValue, formState } = form;

  return (
    <>
      <Form {...form}>
        <form action={POST}>
          <div className="w-72">
            <DefaultInput
              control={control}
              name={"email"}
              label={"Email"}
              placeholder={"input your email"}
              required={true}
              type={"email"}
            />
            <DefaultInput
              control={control}
              name={"password"}
              label={"Password"}
              placeholder={"input your password"}
              required={true}
              type={"password"}
            />
          </div>
          <Button>Submit</Button>
        </form>
      </Form>

      <div></div>
    </>
  );
}
