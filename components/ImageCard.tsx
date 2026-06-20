import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import Link from "next/link";




export default function ImageCard() {
  return (
    <div className="w-full lg:max-w-[344px] mx-auto lg:mx-0 h-fit leading-[120%] tracking-[1%] flex flex-col sm:flex-row lg:flex-col gap-5 sm:gap-[26px] p-5 sm:p-[24px] bg-primary-blue rounded-[20px] border border-[#a8a8a82d]">
      <div className="w-full overflow-hidden rounded-[20px] bg-[linear-gradient(180deg,#0A0D12_0%,#2B130B_13%,#F26A3D_100%)]">
        <Image
          src="/images/gabriel.png"
          alt="Gabriel Mello"
          width={344}
          height={500}
          className="object-cover w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-5 sm:gap-[26px]">
        <div className="flex flex-col gap-3 sm:gap-4">
          <p className="text-[28px] sm:text-[34px]">Gabriel Mello</p>
          <p className="text-base sm:text-[18px] text-primary-orange">Web Developer</p>
        </div>
        <p className="text-sm sm:text-[16px] text-paragraph-grey">
          Specialized in creating scalable and efficient websites and software
          applications.
        </p>
        <p className="text-sm sm:text-[16px] text-paragraph-grey flex items-center gap-2">
          <LuMapPin className="text-[16px] text-primary-orange shrink-0" /> São Paulo, SP, Brasil
        </p>

        <div className="w-full h-px bg-[#a8a8a81c]"></div>
        <div className="flex gap-10 sm:gap-[71px] text-2xl sm:text-[30px] text-primary-orange items-center justify-center">
          <Link href="https://github.com/gabrielrmello1997" target="_blank" className="hover:scale-110 transition-all duration-300">
            <IoLogoGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/gabriel-mello-963a3b1b0" target="_blank" className="hover:scale-110 transition-all duration-300">
            <FaLinkedinIn />
          </Link>
          <Link href="mailto:gabrielrmello1997@gmail.com" target="_blank" className="hover:scale-110 transition-all duration-300">
            <MdOutlineMailOutline />
          </Link>
        </div>
      </div>
    </div>
  );
}
