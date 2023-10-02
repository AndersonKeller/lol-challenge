import { Char, charsInfos } from "@/data/chars";
import { useParams, useRouter } from "next/navigation";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { StyledNav } from "./style";
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
      <button
        style={{
          borderRadius: "50%",
          padding: "14px",
          border: "1px solid #c89b3c",
        }}
        onClick={prevChar}
      >
        <PiCaretLeftBold
          style={{ width: "24px", height: "24px", color: " #c89b3c" }}
        />
      </button>
      <button
        style={{
          borderRadius: "50%",
          padding: "14px",
          border: "1px solid #c89b3c",
        }}
        onClick={nextChar}
      >
        <PiCaretRightBold
          style={{ width: "24px", height: "24px", color: " #c89b3c" }}
        />
      </button>
    </StyledNav>
  );
}
