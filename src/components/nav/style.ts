import tw from "tailwind-styled-components";
export const StyledNav = tw.nav`
  absolute
  text-white
  pl-0
  py-6
  sm:pl-[64px]
  sm:pb-6
  flex
  justify-around
  sm:justify-normal
  gap-[16px]
  z-[1]
  bottom-[-100px]
  left-6
  sm:left-0
`;
export const StyledBtn = tw.button`
  rounded-[50%]
  p-4
  border
  border-yellow-600
`;
