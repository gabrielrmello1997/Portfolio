import { SiNextdotjs } from "react-icons/si";
import { SiTypescript, SiMongodb, SiSanity  } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { FaPython, FaFigma, FaReact } from "react-icons/fa";

const technologies = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: FaReact, name: "React" },
  { icon: SiTypescript, name: "Typescript" },
  { icon: RiTailwindCssFill, name: "Tailwind CSS" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiSanity, name: "Sanity CMS" },
  { icon: IoLogoVercel, name: "Vercel" },
  { icon: FaPython, name: "Python" },
  { icon: FaFigma, name: "Figma" },
];

export default function Technologies() {
  return (
    <div className="w-full mx-auto flex flex-col gap-[15px]">
      <h1 className="text-[40px] sm:text-[50px] md:text-[60px] leading-[120%] tracking-[1%] mb-4 md:mb-[25px]">
        Technologies
      </h1>
      <div className="flex gap-x-3 sm:gap-x-[16px] gap-y-2 sm:gap-y-[10px] flex-wrap">
        {technologies.map(({ icon: Icon, name }) => (
          <div
            key={name}
            className="flex w-[calc(50%-6px)] sm:w-auto sm:max-w-[180px] items-center gap-3 sm:gap-[14px] px-4 sm:px-[18px] py-2 sm:py-[10px] bg-primary-blue rounded-[10px] border border-[#a8a8a82d]"
          >
            <Icon className="text-xl sm:text-[24px] text-primary-orange shrink-0" />
            <p className="text-sm sm:text-[16px] leading-[125%] tracking-[1%] text-paragraph-grey truncate">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
