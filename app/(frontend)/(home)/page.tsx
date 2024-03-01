import { getData, getDataUSer } from "@/data/route";
import InputForm from "../(auth)/login/page";
import Link from "next/link";
import ButtonTest from "@/components/button";
import Modals from "@/components/modal";
import InputFormEdit from "../(auth)/login/edit";
const HomePage = async () => {
  const data = await getDataUSer();
  return (
    <>
      <InputForm />
      <div className="container grid grid-cols-4">
        {data?.length > 0 ? (
          data.map((item: any) => (
            <div
              key={item.id}
              className="p-5 shadow-md w-auto grid content-center text-center grid-cols-1"
            >
              <span>{item?.id}</span>
              <span>{item?.email}</span>
              <span>{item?.password}</span>
              <span>
                <Link href={`/${item?.id}`}>more</Link>
              </span>
              <div className=" grid grid-cols-2">
                <ButtonTest id={item?.id} />
                <Modals icon={"open"}>
                  <InputFormEdit datas={item} />
                </Modals>
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
