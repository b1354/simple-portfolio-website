import { cn } from "@/lib/utils";
import React from "react";
import { FaGitAlt } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { SiDocker, SiMongodb, SiMysql, SiPhp, SiTailwindcss, SiTypescript } from "react-icons/si";

const SkillItem = ({ icon, label, classNameIcon }: { icon: React.ReactElement; label: string; classNameIcon?: string }) => (
     <div className="flex flex-col items-center justify-center overflow-hidden shrink-0">
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: cn("grayscale hover:grayscale-0 transition-all duration-500", classNameIcon) })}
        <p className="text-[clamp(14px,2.5vw,16px)] text-foreground-subtle text-center mt-4 font-medium">{label}</p>
    </div>
);

function SkillSection() {
    const skills = [
        { icon: <FaGitAlt size={60} />, label: "Git", classNameIcon: "text-[#F05033]" },
        { icon: <RiNextjsFill size={60} />, label: "Next.js", classNameIcon: "text-[#000] dark:text-white" },
        { icon: <RiReactjsFill size={60} />, label: "React", classNameIcon: "text-[#61DAFB]" },
        { icon: <SiTypescript size={60} />, label: "TypeScript", classNameIcon: "text-[#2240e3]" },
        { icon: <SiTailwindcss size={60} />, label: "Tailwind CSS", classNameIcon: "text-[#06B6D4]" },
        { icon: <SiMongodb size={60} />, label: "MongoDB", classNameIcon: "text-[#47A248]" },
        { icon: <SiDocker size={60} />, label: "Docker", classNameIcon: "text-[#2496ED]" },
        { icon: <SiPhp size={60} />, label: "PHP", classNameIcon: "text-[#777BB4]" },
        { icon: <FcLinux size={60} />, label: "Linux", classNameIcon: "" },
        { icon: <SiMysql size={60} />, label: "MySQL", classNameIcon: "text-[#00758F]" },
    ];

    return (
        <div className="mt-12">
            <h2 className="text-[clamp(24px,4vw,44px)] font-medium text-foreground text-center">Skills</h2>

            {/* Marquee container */}
            <div className="relative mt-12 overflow-hidden">

                {/* Fade left */}
                <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to right, var(--background), transparent)" }} />

                {/* Fade right */}
                <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to left, var(--background), transparent)" }} />

                {/* Scrolling track */}
                <div
                    className="flex gap-10 w-max"
                    style={{
                        animation: "marquee 20s linear infinite",
                    }}
                >
                    {/* Render twice for seamless loop */}
                    {[...skills, ...skills].map((skill, i) => (
                        <SkillItem
                            key={i}
                            icon={skill.icon}
                            label={skill.label}
                            classNameIcon={skill.classNameIcon}
                        />
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
}

export default SkillSection