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
  datas?: any;
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

export default function InputForm({ datas }: InputFormProps) {
  const [error, setError] = useState<any>();
  const [imageFile, setImageFile] = useState<File | null>(null); // State to hold the selected image file
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });
  const { handleSubmit, control, formState, reset } = form;
  const router = useRouter();

  async function onSubmit(data: any) {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    const response = await Login(data);
    if (response.message) {
      router.push("/");
    } else {
      setError(response.error);
    }
  }

  const update = async (formdata: FormData) => {
    error.preventDefault();
  };

  const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  return (
    <>
      {datas && datas.id && <p>{datas.id}</p>}
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 space-y-6">
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
