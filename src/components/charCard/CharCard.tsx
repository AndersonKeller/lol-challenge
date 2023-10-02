import { Char } from "@/data/chars";
import asheWallpaper from "@/imgs/ashe/letter2.png";
import garenWallpapper from "@/imgs/garen/letter2.png";
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
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "1",
          boxShadow: "black -10px -220px 500px 60px inset",
        }}
      >
        {" "}
      </div>
      <Image
        src={
          char.name == "Jinx"
            ? jinxWallpaper
            : char.name == "Ashe"
            ? asheWallpaper
            : garenWallpapper
        }
        alt={char.name}
        width={900}
        height={900}
        priority={true}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "0",
        }}
      />

      <StyledCharCard>
        <CharAvatar char={char} />
        <CharInfos char={char} />
      </StyledCharCard>
    </>
  );
}
