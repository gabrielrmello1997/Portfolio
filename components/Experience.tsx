const experiences = [
  {
    period: "2025 - 2026",
    company: "The Casely Group",
    role: "Software Engineer & Maintenance Lead",
    highlights: [
      "Led maintenance and support of production web applications, ensuring stability and performance.",
      "Bridged clients and the development team, turning unclear requests into structured technical tasks.",
      "Used AI tools and modern technologies to streamline workflows and improve efficiency."
    ],
  },
  {
    period: "2025 - Present",
    company: "Freelance Software Engineer and Designer",
    role: "Owner",
    highlights: [
      "Build and design websites, web apps and custom solutions from start to finish.",
      "Handle everything: development, design, integrations, CMS and deployment.",
      "Work closely with clients to deliver fast, scalable and high-quality results.",
    ],
  },
];

export default function Experience() {
  return (
    <div id="experience" className="w-full mx-auto flex flex-col gap-[15px] scroll-mt-6 md:scroll-mt-10">
      <h1 className="text-[40px] sm:text-[50px] md:text-[60px] leading-[120%] tracking-[1%] mb-4 md:mb-[25px]">
        Experience
      </h1>

      <div className="relative flex flex-col">
        <div className="pointer-events-none absolute left-0 lg:left-[160px] top-[80px] lg:top-[15px] bottom-2 w-px bg-[#a8a8a84d]" />

        {experiences.map((experience, index) => (
          <div key={experience.company} className="flex flex-col lg:flex-row">
            <p className="w-full lg:w-[160px] shrink-0 pt-1 sm:pt-[4px] pr-3 sm:pr-[20px] pl-[20px] md:pl-[28px] lg:pl-0 text-[16px] leading-[130%] tracking-[1%] text-primary-orange my-[16px]">
              {experience.period}
            </p>

            <div
              className={`relative flex-1 pl-5 sm:pl-[28px] min-w-0 ${
                index < experiences.length - 1 ? "pb-8 sm:pb-[48px]" : "pb-2 sm:pb-[8px]"
              }`}
            >
              <div className="absolute -left-[6px] top-[8px] z-10 h-[14px] w-[14px] rounded-full border-2 border-primary-orange bg-background" />

              <div
                className={
                  index < experiences.length - 1
                    ? "border-b border-[#a8a8a82d] pb-8 sm:pb-[48px]"
                    : ""
                }
              >
                <h3 className="text-lg sm:text-xl md:text-[24px] leading-[130%] tracking-[1%]">
                  {experience.company}
                </h3>
                <p className="mt-3 sm:mt-[16px] text-sm sm:text-base md:text-[16px] leading-[130%] tracking-[1%] text-primary-orange">
                  {experience.role}
                </p>
                <ul className="mt-3 sm:mt-[16px] ml-2 sm:ml-[12px] flex flex-col gap-4 sm:gap-[28px]">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 sm:gap-[12px] text-sm sm:text-base md:text-[16px] leading-[130%] tracking-[1%] text-paragraph-grey"
                    >
                      <span className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-paragraph-grey" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
