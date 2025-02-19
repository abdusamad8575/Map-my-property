"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import CustomButton from "../ui/CustomButton";
import HeroSection from "./HeroSection";
import { Icons } from "../common/Icons";
import { BlogType } from "@/utils/interface";
import toast from "react-hot-toast";
import { getBlogs } from "@/utils/api";

const BlogPage = () => {
  const [index, setIndex] = useState(4);
  const [data, setData] = useState<BlogType[] | []>([]);
  const handleLoad = () => {
    const pos = index + 4;
    if (index < data?.length) {
      setIndex(pos);
    }
  };
  const fetchData = async () => {
    try {
      const res = await getBlogs({});
      const data = res?.data?.data || null;
      setData(data);
    } catch (error: any) {
      toast.error(
        error.message || "Something went wrong. Please try again later."
      );
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-4 mt-20 md:mt-28 lg:mt-32 mb-12 p-2 w-full min-h-screen">
      <HeroSection />
      <div className="py-8 flex-col items-center">
        <p className="text-center text-3xl lg:text-4xl p-8">
          Explore Popular Blogs
        </p>
        <div className="grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-1">
          {data?.slice(0, index)?.map((item, index) => (
            <React.Fragment key={`parent-${index}`}>
              <div
                key={`card-${index}`}
                className="col-span-2 border-2 p-0.5 rounded-2xl"
              >
                <BlogCard data={item} />
              </div>
            </React.Fragment>
          ))}
        </div>
        {index <= data?.length && (
          <div className="flex justify-center items-center pt-8">
            <CustomButton type="primary" onClick={handleLoad}>
              view more <Icons.rightArrow />
            </CustomButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
