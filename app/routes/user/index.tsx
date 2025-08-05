import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function User() {
  return (
    <div>
      <h1>Users</h1>
    </div>
  );
}
