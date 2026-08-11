# React Router Refresher

## Installation
```
npm i react-router

```
##
- BrowserRouter, Routes, Route are the main building blocks
```
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
);

```
- Routes can be nested in other routes and then be used by the <Outlet/> component
```
<Routes>
  <Route path="dashboard" element={<Dashboard />}>
    <Route index element={<Home />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>

```
- the dashboard route is the parent route and renders two components - <Home/> at "/dashboard" route and <Settings/> at "/dashboard/settings" route
- Child routes are rendered through the <Outlet/> in the parent route.
```
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* will either be <Home/> or <Settings/> */}
      <Outlet />
    </div>
  );
}

```
- Index routes render into their parent's <Outlet/> at their parent's URL (like a default child route). They are configured with the index prop:

- Dynamic segments in the route starts with ":" symbol
```
<Route path="teams/:teamId" element={<Team />} />

```
- To extract the dynamic segments from the URL , useParams() is used
```
import { useParams } from "react-router";

export default function Team() {
  let params = useParams();
  // params.teamId
}

```
- Multiple dynamic segments and optional segments can be added to the route
```
<Route path="users/:userId/:edit?" element={<User />} />

```
- If a route path pattern ends with /* then it will match any characters following the /
```
<Route path="files/*" element={<File />} />

```
```
let params = useParams();
// params["*"] will contain the remaining URL after files/
let filePath = params["*"];

```
[OR]
```
let { "*": splat } = useParams();

```
- Link & NavLink work the same except NavLink has "isActive" state inbuilt
```
import { NavLink, Link } from "react-router";

function Header() {
  return (
    <nav>
      {/* NavLink makes it easy to show active states */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Home
      </NavLink>

      <Link to="/concerts/salt-lake-city">Concerts</Link>
    </nav>
  );
}

```