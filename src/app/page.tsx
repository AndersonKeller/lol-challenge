"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/character/jinx");
    }, 50);
  }, []);
  return <main>Main</main>;
}
