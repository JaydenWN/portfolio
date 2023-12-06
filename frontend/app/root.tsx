import { cssBundleHref } from "@remix-run/css-bundle";

import Navbar from './components/Navbar.jsx'

import rootStyles from './styles/rootStyles.css'

import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";


export const links: LinksFunction = () => 
[{rel: "stylesheet", href: rootStyles },
{rel: 'preconnect', href:"https://fonts.googleapis.com"},
{rel: 'preconnect', href:"https://fonts.gstatic.com", crossorigin: true},
{rel: 'stylesheet', href:"https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300;9..40,1000&family=Poppins:wght@200;400;700&display=swap"},
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar/>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
