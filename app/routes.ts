import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),
  route("register", "routes/register.tsx"),
  route("user", "routes/user/index.tsx"),
  route("user/:username", "routes/user/detail.tsx"),
  route("murmurs/:id", "routes/murmurs/detail.tsx"),
] satisfies RouteConfig;
