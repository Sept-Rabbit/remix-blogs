import * as thisPost from "./javascript.this-in-javascript.mdx";
import * as hoistingPost from "./javascript.hoisting-in-javascript.mdx";
import { type LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { BlogPost } from "~/types/types";
import { postFromModule } from "~/utils/helper";

export const loader: LoaderFunction = () => {
  return [postFromModule(thisPost), postFromModule(hoistingPost)];
};

export default function JavascriptIndex() {
  const posts = useLoaderData();

  return (
    <div>
      <h2>Javascript Articles</h2>
      <ul>
        {posts.map((post: BlogPost) => (
          <li key={post.slug}>
            <Link to={post.slug.split(".")[1]}>{post.title}</Link>
            {post.description ? <p>{post.description}</p> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
