"use client";
import FilterPage from "@/app/(frontend)/filter/page";
import { loop } from "@/data/route";
import { Cross, LucideMessageCircleX, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Post {
  id: number;
  email: string;
  body: string;
}

interface Props {
  response?: Post[];
}

const InfinitePosts: React.FC<Props> = ({ response = [] }) => {
  const [posts, setPosts] = useState<Post[]>(response);
  const [filterValues, setFilterValues] = useState([]);
  const [priceValues, setPriceValues] = useState([]);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const router = useRouter()
  const fetchPosts = async (pageNum: number) => {
    setLoading(true);
    try {
      const response = await loop(pageNum);
      console.log(`Fetching page ${pageNum}`);

      const newPosts = response.data;
      if (newPosts.length === 0) {
        setHasMore(false);
      } else {
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // console.log(filterValues);
  // console.log(priceValues);


  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, hasMore, loading]);

  useEffect(() => {

    if (filterValues.length > 0 && priceValues.length > 0) {
      router.push(`loop?filter=${filterValues}&price=${priceValues}`);
    } else if (filterValues.length > 0) {
      router.push(`loop?filter=${filterValues}`);
    } else if (priceValues.length > 0) {
      router.push(`loop?price=${priceValues}`);
    }


  }, [filterValues, router, priceValues])


  return (
    <div className="lg:flex md:grid grid-cols-2 space-x-4">
      <div className="filter mb-3 p-3">
        <FilterPage setFilterValues={setFilterValues} setPriceValues={setPriceValues} />
      </div>
      <div className="overflow-y-scroll h-screen scrollbar-none lg:w-full" style={{ scrollbarWidth: "thin", scrollbarColor: "transparent transparent", margin: '0px' }}>
        <h1 className="text-center text-lg">Products</h1>
        <div className="flex space-x-4">
          <div className="flex space-x-4">
            {filterValues.map((item, index) => (
              <div key={index} className=" bg-gray-400 p-1 pl-2 rounded-full flex text-white">
                <span className="pr-3">{item}</span>
                <span onClick={() => {
                  const updatedValues = [...filterValues];
                  updatedValues.splice(index, 1);
                  setFilterValues(updatedValues);
                }} className="bg-green-600 rounded-full cursor-pointer">
                  <X />
                </span>
              </div>
            ))}
          </div>
          <div className="flex space-x-4">
            {priceValues.map((item, index) => (
              <div key={index} className=" bg-red-600 p-1 rounded-full flex text-white">
                <span className="pr-3">{item}</span>
                <span onClick={() => {
                  const updatedValues = [...filterValues];
                  updatedValues.splice(index, 1);
                  setPriceValues(updatedValues);
                }} className="bg-green-600 rounded-full">
                  <X />
                </span>
              </div>
            ))}
          </div>

        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 text-center gap-4 ">
          {posts.map((post, index) => (
            <div key={index} ref={index === posts.length - 1 ? ref : null} className="bg-gray-100 text-ellipsis shadow-md h-48 flex flex-col justify-center items-center rounded-md">
              <h2>{post.id}</h2>
              <h2 className="text-ellipsis">{post.email}</h2>
            </div>
          ))}
        </div>
        {loading && (
          <div className="flex justify-center">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        )}
        {!hasMore && <p>No more posts to load.</p>}
      </div>
    </div>
  );
};

export default InfinitePosts;
