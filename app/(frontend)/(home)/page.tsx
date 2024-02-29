import { getData, getDataUSer } from "@/data/route";
import InputForm from "../(auth)/login/page";
const HomePage = async () => {
  const  data  = await getDataUSer();
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
