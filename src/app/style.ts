import tw from "tailwind-styled-components";
interface LoadingNameProps {
  $image: string;
}
export const MainStyled = tw.main`
  flex
  bg-black       
  h-full
  text-yellow-600
`;
export const SectionLoading = tw.section`
  flex
  items-center
  justify-center
  w-full
  h-full
  absolute
  top-0
  `;
export const LoadingName = tw.h1<LoadingNameProps>`
${(prop) =>
  prop.$image == "Jinx"
    ? "bg-[url('../imgs/jinx/letter.png')]"
    : prop.$image == "Ashe"
    ? "bg-[url('../imgs/ashe/letter.png')]"
    : "bg-[url('../imgs/garen/letter.png')]"}
text-transparent
text-[25vw]
font-extrabold
bg-clip-text
bg-top
bg-cover
fill-none
uppercase
`;
export const LoadingClasse = tw.h3`
  absolute
  text-yellow-600
  z-[1]
  bottom-[64px]
  left-[64px]
  font-spiegel
  text-4xl
`;
