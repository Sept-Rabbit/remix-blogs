import styles from "highlight.js/styles/a11y-dark.css";
import { Outlet } from "@remix-run/react";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function Javascript() {
  return (
    <div className="prose prose-2xl lg:prose-lg py-10 sm:px-10 lg:px-0 mx-auto lg:w-2/3">
      <Outlet />
    </div>
  );
}
