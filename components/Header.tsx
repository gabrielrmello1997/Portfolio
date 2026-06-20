"use client";

import { FiArrowUpRight } from "react-icons/fi";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const id = href.slice(1);
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header className="flex justify-center sm:justify-end items-center gap-4 sm:gap-10 md:gap-[60px] text-xs sm:text-lg md:text-[20px] uppercase leading-[120%] tracking-[1%] mb-8 md:mb-[68px] w-full max-w-[1600px] mx-auto">
      {navLinks.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          onClick={(event) => handleClick(event, href)}
          className={`hover:text-primary-orange transition-colors${href === "#contact" ? " flex items-center gap-2" : ""}`}
        >
          {label}
          {href === "#contact" && (
            <FiArrowUpRight className="text-base sm:text-[24px]" />
          )}
        </a>
      ))}
    </header>
  );
}
