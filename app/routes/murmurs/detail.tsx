import { useParams } from "react-router";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function MurmursDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>Murmurs: {id}</h1>
    </div>
  );
}
