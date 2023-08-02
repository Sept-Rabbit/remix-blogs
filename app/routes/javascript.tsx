import styles from "highlight.js/styles/a11y-dark.css";
import { Outlet } from "@remix-run/react";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function Javascript() {
  return (
    <div className="prose lg-prose-xl py-10 mx-auto lg:w-4/5">
      <Outlet />
    </div>
  );
}
