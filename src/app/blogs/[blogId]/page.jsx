"use client";
import CardDetails from "@/components/CardDetails/CardDetails";
import { useGetPostsQuery } from "@/redux/api/baseApi";

const BlogsIdPage = () => {
  const { data: foods, isLoading, isError, error } = useGetPostsQuery("");
  // console.log(ProductDetails);
  return (
    <div>
      <h1 className="text-center text-4xl">
        Post Your{" "}
        <span className="text-accent font-semibold">Posts Details</span>
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 my-2 justify-items-center mx-auto">
        {foods?.map((food) => (
          <CardDetails key={food._id} food={food}></CardDetails>
        ))}
      </div>
    </div>
  );
};

export default BlogsIdPage;
