import { Char, charsInfos } from "@/data/chars";
import { useParams, useRouter } from "next/navigation";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { StyledBtn, StyledNav } from "./style";
export function Nav() {
  const params = useParams();
  const router = useRouter();

  function nextChar() {
    const index = charsInfos.findIndex((char: Char) => {
      if (char.name.toLowerCase() == params.name) {
        return char;
      }
    });
    const nextChar =
      index == charsInfos.length - 1 ? charsInfos[0] : charsInfos[index + 1];
    router.push(`/character/${nextChar.name.toLowerCase()}`);
  }
  function prevChar() {
    const index = charsInfos.findIndex((char: Char) => {
      if (char.name.toLowerCase() == params.name) {
        return char;
      }
    });
    const nextChar =
      index == 0 ? charsInfos[charsInfos.length - 1] : charsInfos[index - 1];
    router.push(`/character/${nextChar.name.toLowerCase()}`);
  }
  return (
    <StyledNav>
      <StyledBtn onClick={prevChar}>
        <PiCaretLeftBold className="w-6 h-6 text-yellow-600" />
      </StyledBtn>
      <StyledBtn onClick={nextChar}>
        <PiCaretRightBold className="w-6 h-6 text-yellow-600" />
      </StyledBtn>
    </StyledNav>
  );
}
