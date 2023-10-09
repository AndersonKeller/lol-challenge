import { Char } from "@/data/chars";
import asheAvatar from "@/imgs/ashe/ashe.png";
import garenAvatar from "@/imgs/garen/garen.png";
import jinxAvatar from "@/imgs/jinx/jinx.png";
import Image from "next/image";
import { StyledAvatar, StyledClassName } from "./style";
interface CharAvatarProps {
  char: Char;
}
export function CharAvatar({ char }: CharAvatarProps) {
  return (
    <StyledAvatar>
      <Image
        width={762}
        height={600}
        alt={char.class}
        src={
          char.name == "Jinx"
            ? jinxAvatar
            : char.name == "Ashe"
            ? asheAvatar
            : garenAvatar
        }
        style={{
          width: "auto",
          height: "auto",
          maxHeight: "600px",
          objectFit: "contain",
        }}
        priority={true}
      />
      <StyledClassName>{char.class}</StyledClassName>
    </StyledAvatar>
  );
}
