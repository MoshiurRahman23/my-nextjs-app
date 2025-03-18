"use client";
import createBLog from "@/actions/createBLog";
import { useForm } from "react-hook-form";

const PostBlogFormPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:5000/foods");
    const posts = await res.json();
    data.id = JSON.stringify(posts.length + 1);
    data.total_liks = "100";
    console.log(data);

    try {
      const res = await createBLog(data);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="py-10">
      <h1 className="text-center text-4xl">
        Post Your <span className="text-accent font-semibold">POST</span>
      </h1>
      <div className="hero min-h-screen">
        <div className="card w-[50%] shadow-xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className="text-center text-2xl text-accent font-semibold">
              Add Your Queries
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Title</span>
              </label>
              <input
                type="text"
                {...register("title")}
                placeholder="Title"
                className="input w-full input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Description</span>
              </label>
              <textarea
                {...register("description")}
                placeholder="Description"
                className="textarea w-full textarea-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Publish Date</span>
              </label>
              <input
                {...register("publish_date")}
                type="date"
                className="input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Author Name</span>
              </label>
              <input
                type="text"
                {...register("author_name")}
                placeholder="Author Name"
                className="input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold w-full">
                  Blog Image
                </span>
              </label>
              <input
                type="url"
                {...register("image")}
                placeholder="Image URL"
                className="input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn w-full btn-accent btn-outline"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostBlogFormPage;
