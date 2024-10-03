"use client";
// import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AutProvider({ children }: Readonly<Props>) {
  // const router = useRouter();
  // const path = usePathname();
  // if (path != "/stock") {
  //   router.push("/stock");
  //   return <div>{children}</div>;
  // }
  // router.push("/stock");
  return <div>{children}</div>;
}
