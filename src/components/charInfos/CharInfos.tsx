import { Char } from "@/data/chars";
import { StyledCharInfos } from "./style";

interface CharInfosProps {
  char: Char;
}
export function CharInfos({ char }: CharInfosProps) {
  return (
    <StyledCharInfos>
      <h2>{char.name}</h2>
      <h6>{char.subtitle}</h6>
      <p>{char.resume}</p>
    </StyledCharInfos>
  );
}
