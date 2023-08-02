import { Link } from "@remix-run/react";
import type { BlogPost } from "~/types/types";

type PostProp = {
  post: BlogPost;
};

export const Card = ({ post }: PostProp) => {
  return (
    <div className="text-left lg:px-10 px-16 py-5 flex flex-col shadow-lg rounded-lg border border-gray-100 border-t-8 border-t-blue-100">
      <h5 className="font-semibold text-2xl">{post.title}</h5>
      <p className="my-5">{post.description}</p>
      <Link
        to={`/javascript/${post.slug.split(".")[1]}`}
        className="flex  justify-end text-sm cursor-pointer"
      >
        <p>Read more...</p>
      </Link>
    </div>
  );
};
