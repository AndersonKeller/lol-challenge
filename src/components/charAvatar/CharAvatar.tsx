import { Char } from "@/data/chars";
import asheAvatar from "@/imgs/ashe/ashe.svg";
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
        height={700}
        alt={char.class}
        src={
          char.name == "Jinx"
            ? jinxAvatar
            : char.name == "Ashe"
            ? asheAvatar
            : ""
        }
        style={{ maxHeight: "700px" }}
      />
      <StyledClassName>{char.class}</StyledClassName>
    </StyledAvatar>
  );
}
