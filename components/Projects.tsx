"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight, FiChevronDown, FiChevronUp } from "react-icons/fi";

const INITIAL_VISIBLE = 3;

const projects = [
  {
    title: "Rose Salomé",
    description:
      "A responsive portfolio website for a professional artist, combining artwork showcases, art classes and commission requests in a clean, elegant experience.",
    href: "https://google.com",
    image: "/images/rose-salome.png",
  },
  {
    title: "Jocearts",
    description:
      "Designed and developed a custom website for a family-owned artisan brand, showcasing pieces through a warm, nature-inspired visual identity.",
    href: "#",
    image: "/images/jocearts.png",
  },
  {
    title: "PARRIS Law Firm",
    description:
      "A conversion-focused legal landing page powered by Sanity, designed to drive consultations and qualified leads.",
    href: "https://parris.com/",
    image: "/images/parris.png",
  },
  {
    title: "test Law Firm",
    description:
      "A conversion-focused legal landing page powered by Sanity, designed to drive consultations and qualified leads.",
    href: "https://parris.com/",
    image: "/images/parris.png",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const hasMoreProjects = projects.length > INITIAL_VISIBLE;
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE);

  return (
    <div id="projects" className="w-full mx-auto flex flex-col gap-[15px] scroll-mt-6 md:scroll-mt-10">
      <h1 className="text-[40px] sm:text-[50px] md:text-[60px] leading-[120%] tracking-[1%] mb-4 md:mb-[25px]">
        Projects
      </h1>
      {visibleProjects.map((project, index) => (
        <div key={index}>
          <div className="w-full flex flex-col sm:flex-row bg-primary-blue gap-5 sm:gap-[36px] rounded-[20px] p-4 sm:p-[18px] border border-[#a8a8a82d]">
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={1000}
              className="object-cover rounded-[10px] w-full sm:w-auto sm:max-w-[200px] md:max-w-none max-h-[186px] shrink-0"
            />
            <div className="flex flex-col justify-between min-w-0">
              <div className="flex flex-col gap-3 sm:gap-[12px]">
                <h3 className="text-2xl sm:text-[30px] leading-[120%] tracking-[1%]">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-[15px] leading-[125%] tracking-[1%] text-paragraph-grey">
                  {project.description}
                </p>
              </div>
              <div className="w-full flex justify-start sm:justify-end text-primary-orange text-sm sm:text-[14px] leading-[125%] tracking-[1%] mt-5 sm:mt-[28px]">
                <Link
                  href={project.href}
                  target="_blank"
                  className="flex items-center gap-1 sm:gap-[4px] hover:scale-110 transition-all duration-300"
                >
                  View Project <FiArrowUpRight className="text-base sm:text-[16px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      {hasMoreProjects && (
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="flex items-center justify-center gap-1 sm:gap-[4px] mx-auto mt-2 sm:mt-[10px] text-primary-orange text-sm sm:text-[14px] leading-[125%] tracking-[1%] hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          {showAll ? "Show less projects" : "Show more projects"}
          {showAll ? (
            <FiChevronUp className="text-base sm:text-[16px]" />
          ) : (
            <FiChevronDown className="text-base sm:text-[16px]" />
          )}
        </button>
      )}
    </div>
  );
}
