import tw from "tailwind-styled-components";
export const StyledCharInfos = tw.div`
    relative
    w-full
    flex
    flex-col
    gap-4
    z-[1]
    items-center
    text-center
    sm:w-1/2
    sm:text-justify
    sm:items-start
`;
export const StyledName = tw.h2`
  italic
  font-bold
  text-[72px]
  sm:text-[90px]
  font-spiegelItalic
  uppercase
  text-transparent

`;
export const StyledSubtitle = tw.h6`
  font-semibold
  text-display-md
  
`;
export const StyledResume = tw.p`
  font-normal
  text-xl
  text-gray-300
`;
