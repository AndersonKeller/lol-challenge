import { Char } from "@/data/chars";
import jinxWallpaper from "@/imgs/jinx/letter2.png";
import Image from "next/image";
import { CharAvatar } from "../charAvatar/CharAvatar";
import { CharInfos } from "../charInfos/CharInfos";
import { StyledCharCard } from "./style";
interface CharCardProps {
  char: Char;
}
export function CharCard({ char }: CharCardProps) {
  return (
    <StyledCharCard>
      <Image
        src={char.name == "Jinx" ? jinxWallpaper : ""}
        alt={char.name}
        width={900}
        height={900}
        style={{
          height: "100vh",
          width: "100%",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "0",
          objectFit: "cover",
        }}
      />

      <CharAvatar char={char} />
      <CharInfos char={char} />
    </StyledCharCard>
  );
}
