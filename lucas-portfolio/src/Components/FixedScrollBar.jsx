import { HiHome } from "react-icons/hi2";
import { MdPerson } from "react-icons/md";
import { PiBrain } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";

export const FixedScrollBar = () => {
  return (
    <div className="fixed flex flex-col items-center justify-around right-10 top-40 w-[64px] h-[300px] dark-gradient-bg rounded-full shadow-long shadow-black z-30">
      <a
        href="#presentation"
        className="flex justify-center font-titles-kumbh-sans text-white w-fit scroll-smooth hover:animate-pulse"
      >
        <HiHome className="h-[24px] w-[24px] text-white" />
      </a>

      <a
        href="#aboutme"
        className="flex justify-center font-titles-kumbh-sans text-white w-fit scroll-smooth hover:animate-pulse"
      >
        <MdPerson className="h-[26px] w-[26px] text-white hover:animate-pulse hover:text-blue-400" />
      </a>

      <a
        href="#knowledge"
        className="flex justify-center font-titles-kumbh-sans text-white w-fit scroll-smooth hover:animate-pulse"
      >
        <PiBrain className="h-[24px] w-[24px] text-white hover:animate-pulse hover:text-pink-400" />
      </a>

      <a
        href="#projects"
        className="flex justify-center font-titles-kumbh-sans w-fit hover:animate-pulse scroll-smooth"
      >
        <HiOutlineLightBulb className="h-[24px] w-[24px] text-white hover:animate-pulse hover:text-yellow-300" />
      </a>
    </div>
  );
};
