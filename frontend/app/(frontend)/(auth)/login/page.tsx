"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import DefaultInput from "@/components/ui/default-input";
import { Login } from "@/data/route";
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { getToken } from "@/lib/token";

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
  image: z.any(),
});

export default function InputForm() {
  const [error, setError] = useState<any>();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });
  const { handleSubmit, control, formState, reset } = form;

  async function onSubmit(data: any) {
    const response = await Login(data);
    if (response.error) {
      setError(response.error);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 space-y-6">
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
      <span className="text-red-600">{error}</span>
    </>
  );
}
