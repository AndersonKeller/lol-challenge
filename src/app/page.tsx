"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/character/jinx");
  }, 50);
  return <main>Main</main>;
}
