import type { Route } from "./+types/home";
import Register from "~/features/auth/Register";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function RegisterPage() {
  return <Register />;
}
