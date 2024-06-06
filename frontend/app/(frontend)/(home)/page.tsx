import { getDataUser } from "@/data/route";
import InputForm from "../(auth)/login/page";
import Link from "next/link";
import ButtonTest from "@/components/button";
import Modals from "@/components/modal";
import InputFormEdit from "../(auth)/login/edit";
import Image from "next/image";
import DataInput from "../(auth)/registration/page";
import Rating from "../rating/page";
import { ShoppingCart } from "lucide-react";
import CartIcon from "@/components/utilities/cart";
const HomePage = async () => {
  const data = await getDataUser();

  return (
    <>
      <DataInput />
      <div className="container grid lg:grid-cols-4">
        <p>hi</p>
        {data?.length > 0 ? (
          data.map((item: any) => (
            <div
              key={item.id}
              className="p-5 shadow-md w-auto grid content-center text-center grid-cols-1"
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
              <div className=" grid grid-cols-2 justify-center gap-4 items-center">
                <ButtonTest id={item.id} />
                <Modals icon={"Edit "}>
                  <InputFormEdit datas={item} />
                </Modals>
                <Rating id={item?.id} />
                <CartIcon product={item} />
              </div>
            </div>
          ))
        ) : (
          <p>no value</p>
        )}
      </div>
    </>
  );
};

export default HomePage;
