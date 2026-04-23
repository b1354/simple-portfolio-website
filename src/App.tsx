import ExperienceSection from "./components/module/experienceSection";
import Heading from "./components/module/heading";
import ProjectSection from "./components/module/projectSection";
import SkillSection from "./components/module/skillSection";
import Stat from "./components/module/stat";
import useDarkMode from "./hooks/useDarkmode";
import { Button } from "./components/ui/button";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";
import { cn } from "./lib/utils";

export default function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="container max-w-[700px] p-5 mx-auto pt-[50px] pt-[100px]">
      <div className="flex justify-center fixed bottom-3 right-3 md:bottom-5 md:right-5 z-20">
        <Button
          onClick={() => setIsDark(!isDark)}
          className="flex gap-[15px] justify-center cursor-pointer text-foreground-subtle rounded-full 
          w-[50px] h-[50px] md:w-[60px] md:h-[60px] overflow-hidden" variant="secondary"
        >
          <TbMoonFilled className={cn(
            "transition-all ease-spring duration-300 !w-[20px] !h-[20px] md:!w-[30px] md:!h-[30px]",
            isDark ? "-translate-x-10/12 md:-translate-x-9/12" : "translate-x-10/12 md:translate-x-9/12"
          )} />
          <TbSunFilled className={cn(
            "transition-all ease-spring duration-300 !w-[20px] !h-[20px] md:!w-[30px] md:!h-[30px]",
            !isDark ? " translate-x-10/12 md:translate-x-9/12" : "-translate-x-10/12 md:-translate-x-9/12"
          )} />
        </Button>
      </div>

      <Heading />

      <div>
        <p className="text-[clamp(16px,2.5vw,22px)] text-foreground-subtle text-center mt-12">
          Hi, I'm Bayu Rizki — a passionate Junior Web & Software Developer based in Indonesia,
          specializing in modern JavaScript technologies. I build responsive, performant, and maintainable web applications
        </p>
      </div>

      <Stat />

      <div className="flex gap-[38px] justify-center mt-12">
        <a href="./cv.pdf" target="_blank">
          <Button
            variant="default"
            className="text-[clamp(16px,2.5vw,22px)] w-[135px] h-[60px] md:w-[290px] md:h-[80px] cursor-pointer font-light">
            Download CV
          </Button>
        </a>
        <a href="mailto:bayurizkyseptiansyah@gmail.com">
          <Button
            variant="secondary"
            className="text-[clamp(16px,2.5vw,22px)] w-[135px] h-[60px] md:w-[290px] md:h-[80px] cursor-pointer font-light text-foreground-subtle">
            Contact Me
          </Button>
        </a>
      </div>

      <ProjectSection />

      <SkillSection />

      <ExperienceSection />

      <footer className="text-center mt-16 text-foreground-subtle">
        <p>Copyright © 2024 Bayu Rizki. All rights reserved.</p>
      </footer>
    </div>
  )
}
