import ExperienceSection from "./components/module/experienceSection";
import Heading from "./components/module/heading";
import ProjectSection from "./components/module/projectSection";
import SkillSection from "./components/module/skillSection";
import Stat from "./components/module/stat";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="container max-w-[700px] p-5 mx-auto pt-[100px]">
      <Heading />

      <div>
        <p className="text-[clamp(16px,2.5vw,22px)] text-foreground-subtle text-center mt-12">
          Hi, I'm Bayu Rizki — a passionate Junior Web & Software Developer based in Indonesia,
          specializing in modern JavaScript technologies. I build responsive, performant, and maintainable web applications
        </p>
      </div>

      <Stat />

      <div className="flex gap-[38px] justify-center mt-12">
        <Button
          variant="default"
          className="w-[150px] h-[60px] md:w-[290px] md:h-[80px] cursor-pointer">
          Download CV
        </Button>
        <a href="mailto:bayurizkyseptiansyah@gmail.com">
          <Button
            variant="secondary"
            className="w-[150px] h-[60px] md:w-[290px] md:h-[80px] cursor-pointer">
            Contact Me
          </Button>
        </a>
      </div>

      <ProjectSection />

      <SkillSection />

      <ExperienceSection />

      <footer className="text-center mt-12 text-foreground-subtle">
        <p>Copyright © 2024 Bayu Rizki. All rights reserved.</p>
      </footer>
    </div>
  )
}
