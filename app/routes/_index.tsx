import { type LoaderFunction, type V2_MetaFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { Card } from "~/components/Card";
import { Footer } from "~/components/navigation/Footer";
import { postFromModule } from "~/utils/helper";
import * as thisPost from "./javascript.this-in-javascript.mdx";
import * as hoistingPost from "./javascript.hoisting-in-javascript.mdx";
import { useStore } from "~/storeData/storeData";
import type { BlogPost } from "~/types/types";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "My Blog" },
    { name: "description", content: "Welcome to My Javascript Blog!" },
  ];
};

export const loader: LoaderFunction = () => {
  return [postFromModule(thisPost), postFromModule(hoistingPost)];
};

export default function Index() {
  const setBlogPosts = useStore((state) => state.setBlogPosts);
  const posts = useLoaderData();
  setBlogPosts(posts);

  return (
    <div className="relative bg-white flex flex-col h-full lg:h-full text-center">
      <main className="w-full px-20 h-full">
        <h1 className="text-gray-400 mt-10 text-2xl">
          Welcome to My Javascript Blog
        </h1>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5 space-y-10 lg:space-y-0 my-20 lg:px-10">
          {posts.map((post: BlogPost) => (
            <Card post={post} key={post.slug} />
          ))}
        </ul>
      </main>
      <div className="absolute bottom-5 w-full">
        <Footer />
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>{error.data.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
    </div>
  );
}
