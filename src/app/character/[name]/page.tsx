"use client";
import { Header } from "@/components/header/Header";
import { Char, charsInfos } from "@/data/chars";
import { useParams } from "next/navigation";

import { CharCard } from "@/components/charCard/CharCard";
export default function CharacterPage() {
  const params = useParams();
  console.log(params.name);
  const char: Char | undefined = charsInfos.find(
    (char) => char.name.toLowerCase() == params.name
  );

  return (
    <main>
      <Header />
      <CharCard char={char!} />
    </main>
  );
}
