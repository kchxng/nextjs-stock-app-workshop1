"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  return (
    <div className="py-4 flex">
      <div className="main">
        <h1>Home Page</h1>
        <Button
          onClick={() => {
            route.push("/login");
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
