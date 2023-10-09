import { Char } from "@/data/chars";
import {
  StyledCharInfos,
  StyledName,
  StyledResume,
  StyledSubtitle,
} from "./style";

interface CharInfosProps {
  char: Char;
}
export function CharInfos({ char }: CharInfosProps) {
  return (
    <StyledCharInfos>
      <StyledName style={{ WebkitTextStroke: "1px #fff" }}>
        {char.name}
      </StyledName>
      <StyledSubtitle>{char.subtitle}</StyledSubtitle>
      <StyledResume>{char.resume}</StyledResume>
    </StyledCharInfos>
  );
}
