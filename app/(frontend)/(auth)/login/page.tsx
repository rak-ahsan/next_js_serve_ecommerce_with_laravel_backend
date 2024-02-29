"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import DefaultInput from "@/components/ui/default-input";
import { POST, getDataUSer } from "@/data/route";
import { useState } from "react";

interface InputFormProps {
  action?: any;
  datas?: any;
}
const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function InputForm({ datas }: InputFormProps) {
  console.log(datas);

  const [error, setError] = useState<any>();
  const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        email: datas?.email,
        password: datas?.password,
      },
    }),
    { handleSubmit, control, setValue, formState } = form;
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    
    try {
      const response = await POST(data);
      if (response.errors) {
        const errorMessages = Object.values(response.errors).flat();
        setError(errorMessages);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      {datas && datas.id && <p>{datas.id}</p>}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          {error && <span className="bg-red-800 h-30">{error}</span>}

          <div className="w-72">
            <DefaultInput
              control={control}
              name={"email"}
              label={"Email"}
              placeholder={"input your email"}
              required={true}
              type={"email"}
            />
            {error && error}
            <DefaultInput
              control={control}
              name={"password"}
              label={"Password"}
              placeholder={"input your password"}
              required={true}
              type={"password"}
            />
          </div>
          {!datas ? (
            <Button>Submit</Button>
          ) : (
            <Button formAction={update}>Update</Button>
          )}
        </form>
      </Form>
    </>
  );
}
