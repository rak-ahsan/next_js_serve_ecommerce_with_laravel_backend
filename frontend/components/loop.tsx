"use client";
import { loop } from "@/data/route";
import React, { useState, useEffect, useRef } from "react";

interface props {
  response?: any;
}

const InfinitePosts: React.FC<props> = ({ }) => {
  const [posts, setPosts] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const isFetching = useRef(false);
  const hasScrolled = useRef(false);

  const fetchPosts = async (pageNum: number) => {
    if (loading) return; // Prevent duplicate calls

    isFetching.current = true;
    setLoading(true);
    console.log(`Fetching page ${pageNum}`);
    try {
      const response = await loop(pageNum);
      const newPosts = response;
      if (newPosts.length === 0) {
        setHasMore(false);
      } else {
        setPosts((prevPosts: any) => [...prevPosts, ...newPosts]);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      isFetching.current = false;
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 100 &&
      !loading &&
      hasMore
    ) {
      if (!hasScrolled.current) {
        hasScrolled.current = true;
        setPage(2);
      } else {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    if (hasScrolled.current) {
      fetchPosts(page);
    }
  }, [page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts.map((post: any) => (
          <div key={post.id}>
            <h2>{post.id}</h2>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      {loading && <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>}
      {!hasMore && <p>No more posts to load.</p>}
    </div>
  );
};

export default InfinitePosts;
