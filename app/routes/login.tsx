import type { Route } from "./+types/home";
import Login from "~/features/auth/Login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function LoginPage() {
  return <Login />;
}
