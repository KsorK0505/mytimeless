import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));

export const publicRoute = [
  { path: "/logout", component: Home },
];