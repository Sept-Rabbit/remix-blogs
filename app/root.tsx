import stylesheet from "~/tailwind.css";
import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Sidebar } from "./components/navigation/Sidebar";
import { SearchModal } from "./components/SearchModal";
import { useState } from "react";

export const meta: V2_MetaFunction = () => [
  {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
  },
];

export interface DocumentType {
  title?: string;
  children: React.ReactNode;
}

function Document({ title, children }: DocumentType) {
  // const matches = useMatches();

  // const disableJS = matches.some((match) => match.handle?.disableJS);

  return (
    <html lang="en">
      <head>
        {title && <title>{title}</title>}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const [searchClicked, setSearchClicked] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar
        searchClicked={searchClicked}
        setSearchClicked={setSearchClicked}
      />
      {searchClicked && (
        <SearchModal
          searchClicked={searchClicked}
          setSearchClicked={setSearchClicked}
        />
      )}
      <div className="w-4/5">{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];
