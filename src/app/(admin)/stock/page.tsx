"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function StockPage() {
  const route = useRouter();
  return (
    <div>
      <h1>Stock Page</h1>
      <Button onClick={() => route.push("/")}>Home</Button>
    </div>
  );
}
