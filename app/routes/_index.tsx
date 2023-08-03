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
    <div className="bg-white flex flex-col px-20 overflow-hidden">
      <div className="flex flex-col">
        <div>
          <h1 className="text-gray-400 mt-10 ml-10 text-3xl">
            Welcome to My Javascript Blog
          </h1>

          <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 space-y-10 lg:space-y-0 my-20 lg:px-10">
            {posts.map((post: BlogPost) => (
              <Card post={post} key={post.slug} />
            ))}
          </ul>
        </div>
      </div>
      <footer className="text-center mt-auto mb-20">
        <p className="text-sm sm:text-lg text-gray-800">
          Blog content courtey of my dearest TA:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline"
            href="https://israynotarray.com"
          >
            Ray.
          </a>{" "}
          Please visit and support him.
        </p>
      </footer>
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
