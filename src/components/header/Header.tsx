import logo from "@/imgs/League_of_Legends_Wild_Rift_logo.svg";
import Image from "next/image";
import { StyledHeader } from "./style";
export function Header() {
  return (
    <StyledHeader>
      <Image src={logo} alt="Logo" width={142} height={56} />
    </StyledHeader>
  );
}
