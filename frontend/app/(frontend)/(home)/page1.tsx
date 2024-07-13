'use client'
import { useState } from "react";
import { getDataUser } from "@/data/route";
import InputForm from "../(auth)/login/page";
import Link from "next/link";
import ButtonTest from "@/components/button";
import Modals from "@/components/modal";
import InputFormEdit from "../(auth)/login/edit";
import Image from "next/image";
import DataInput from "../(auth)/registration/page";
import Rating from "../rating/page";
import CartIcon from "@/components/utilities/cart";
import DialogDemo from "@/components/cart/cart";

const HomePage = ({ data }: any) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Link href="/loop">loop</Link>
      <DialogDemo />
      <DataInput />
      <div className="container lg:grid lg:grid-cols-4">
        {data?.length > 0 ? (
          data.map((item: any, index: number) => (
            <div
              key={index}
              className="p-5 shadow-md w-full grid content-center text-center grid-cols-1"
            >
              <span>{item?.id}</span>
              <Image
                src={item?.image ?? "/demo.png"}
                height={500}
                width={500}
                alt={"data Image"}
              />
              <span>{item?.email}</span>
              <span className="overflow-hidden">{item?.password}</span>
              <span>
                <Link href={`/${item?.id}`}>more</Link>
              </span>
              <div className="grid grid-cols-2 justify-center gap-4 items-center">
                <ButtonTest id={item.id} />
                <p onClick={() => { setSelectedItem(item); setOpenModal(true); }}>edit</p>
                <Rating id={item?.id} />
                <CartIcon product={item} />
              </div>
            </div>
          ))
        ) : (
          <p>no value</p>
        )}
      </div>
      {openModal && selectedItem && (
        <Modals openModal={openModal} setOpenModal={setOpenModal}>
          <InputFormEdit datas={selectedItem} />
        </Modals>
      )}
    </>
  );
};

export default HomePage;
