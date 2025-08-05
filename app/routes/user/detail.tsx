import { useParams } from "react-router";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function UserDetail() {
  const { username } = useParams();
  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
}
