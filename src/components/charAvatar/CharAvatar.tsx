import { Char } from "@/data/chars";
import jinxAvatar from "@/imgs/jinx/jinx.svg";
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
        height={830}
        alt={char.class}
        src={char.name == "Jinx" ? jinxAvatar : ""}
      />
      <StyledClassName>{char.class}</StyledClassName>
    </StyledAvatar>
  );
}
