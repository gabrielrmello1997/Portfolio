import ImageCard from "@/components/ImageCard";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 xl:gap-[90px] w-full max-w-[1600px] mx-auto">
      <div className="order-1 lg:hidden">
        <Introduction>
          <ImageCard />
        </Introduction>
      </div>

      <aside className="hidden lg:block lg:order-1 w-full lg:w-auto lg:sticky lg:top-[80px] lg:self-start shrink-0">
        <ImageCard />
      </aside>

      <div className="order-2 lg:order-2 flex flex-col gap-10 md:gap-[60px] flex-1 min-w-0 w-full">
        <div className="hidden lg:block">
          <Introduction />
        </div>
        <Projects />
        <Experience />
        <Technologies />
        <Contact />
      </div>
    </div>

  );
}
