"use client";
import { loop } from "@/data/route";
import React, { useState, useEffect } from "react";
import Map from "./map";

interface props {
  pageNum?: any;
}

const InfinitePosts: React.FC<props> = ({ }) => {
  const [posts, setPosts] = useState<any[]>([]); // Initialize posts as an empty array
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async (pageNum: number) => {
    if (loading) return;

    setLoading(true);
    console.log(`Fetching page ${pageNum}`);
    try {
      const response = await loop(pageNum);
      const newPosts = response;
      if (newPosts.length === 0) {
        setHasMore(false);
      } else {
        //@ts-ignore
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100 &&
      !loading &&
      hasMore
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div>
      <h1>Posts</h1>
      <Map posts={posts}/>
      {loading && <p>Loading more posts...</p>}
      {!hasMore && <p>No more posts to load.</p>}
    </div>
  );
};

export default InfinitePosts;
