import { GoStack } from "react-icons/go";
import { LuMonitorSmartphone } from "react-icons/lu";
import { IoExtensionPuzzleOutline } from "react-icons/io5";

const cards = [
  {
    icon: GoStack,
    title: "Scalable Applications",
    description:
      "Building maintainable web apps designed to grow with your business.",
  },
  {
    icon: LuMonitorSmartphone,
    title: "Responsive Experiences",
    description:
      "Interfaces that look and perform consistently across multiples screens.",
  },
  {
    icon: IoExtensionPuzzleOutline,
    title: "Tailor-made Solutions",
    description:
      "Custom solutions built around specific business goals and workflows.",
  },
];

export default function Introduction({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-[52px]">
      <div className="w-full max-w-[479px] flex flex-col gap-2 sm:gap-[8px]">
        <h1 className="text-[52px] sm:text-[72px] md:text-[90px] lg:text-[110px] leading-[100%] tracking-[10%]">
          Software <span className="text-primary-orange">Engineer</span>
        </h1>
        <p className="text-sm sm:text-[16px] leading-[140%] tracking-[1%] text-paragraph-grey">
          I build fast, scalable and maintainable web experiences with a strong
          focus on usability, performance and clean architecture.
        </p>
      </div>

      {children}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[30px]">
        {cards.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col bg-primary-blue rounded-[20px] p-6 sm:p-[32px] border border-[#a8a8a82d]"
          >
            <Icon className="text-[32px] sm:text-[40px] text-primary-orange mb-4 sm:mb-[22px]" />
            <p className="text-lg sm:text-[20px] leading-[120%] tracking-[1%] mb-5 sm:mb-[30px]">
              {title}
            </p>
            <p className="text-sm sm:text-[14px] leading-[125%] tracking-[1%] text-paragraph-grey">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
