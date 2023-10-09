"use client";
import { Header } from "@/components/header/Header";
import { Char, charsInfos } from "@/data/chars";
import { useParams } from "next/navigation";

import Loading from "@/app/loading";
import { CharCard } from "@/components/charCard/CharCard";
import { Nav } from "@/components/nav/Nav";
import { useEffect, useState } from "react";
export default function CharacterPage() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const char: Char | undefined = charsInfos.find(
    (char) => char.name.toLowerCase() == params.name
  );

  return (
    <main>
      <Header />
      {loading ? (
        <Loading char={char!} />
      ) : (
        <>
          <CharCard char={char!} />
          <Nav />
        </>
      )}
    </main>
  );
}
