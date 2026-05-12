import { cn } from "@/lib/utils";
import React from "react";
import { FaGitAlt } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { SiDocker, SiMongodb, SiMysql, SiN8N, SiPhp, SiTailwindcss, SiTypescript } from "react-icons/si";

const SkillItem = ({ icon, label, classNameIcon }: { icon: React.ReactElement; label: string; classNameIcon?: string }) => (
    <div className="flex flex-col items-center justify-center overflow-hidden shrink-0">
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: cn("grayscale hover:grayscale-0 transition-all duration-500", classNameIcon) })}
        <p className="text-[clamp(14px,2.5vw,16px)] text-foreground-subtle text-center mt-4 font-medium">{label}</p>
    </div>
);

function SkillSection() {
    const skills = [
        { icon: <FaGitAlt size={50} />, label: "Git", classNameIcon: "text-[#F05033]" },
        { icon: <RiNextjsFill size={50} />, label: "Next.js", classNameIcon: "text-[#000] dark:text-white" },
        { icon: <RiReactjsFill size={50} />, label: "React", classNameIcon: "text-[#61DAFB]" },
        { icon: <SiTypescript size={50} />, label: "TypeScript", classNameIcon: "text-[#2240e3]" },
        { icon: <SiTailwindcss size={50} />, label: "Tailwind CSS", classNameIcon: "text-[#06B6D4]" },
        { icon: <SiMongodb size={50} />, label: "MongoDB", classNameIcon: "text-[#47A248]" },
        { icon: <SiDocker size={50} />, label: "Docker", classNameIcon: "text-[#2496ED]" },
        { icon: <SiPhp size={50} />, label: "PHP", classNameIcon: "text-[#777BB4]" },
        { icon: <FcLinux size={50} />, label: "Linux", classNameIcon: "" },
        { icon: <SiMysql size={50} />, label: "MySQL", classNameIcon: "text-[#00758F]" },
        { icon: <SiN8N size={50} />, label: "N8N", classNameIcon: "text-[#FF6B6B]" },
    ];

    return (
        <div className="relative mt-12 overflow-hidden">
            {/* Fade left */}
            <div
                className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to right, var(--background), transparent)",
                }}
            />

            {/* Fade right */}
            <div
                className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to left, var(--background), transparent)",
                }}
            />

            <div className="flex w-max animate-marquee">
                {/* first */}
                <div className="flex gap-10 pr-10 shrink-0">
                    {skills.map((skill, i) => (
                        <SkillItem
                            key={`first-${i}`}
                            icon={skill.icon}
                            label={skill.label}
                            classNameIcon={skill.classNameIcon}
                        />
                    ))}
                </div>

                {/* duplicate */}
                <div className="flex gap-10 shrink-0">
                    {skills.map((skill, i) => (
                        <SkillItem
                            key={`second-${i}`}
                            icon={skill.icon}
                            label={skill.label}
                            classNameIcon={skill.classNameIcon}
                        />
                    ))}
                </div>
            </div>
            <style>
            {`
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                    width: max-content;
                }

                @keyframes marquee {
                    from {
                    transform: translateX(0);
                    }

                    to {
                    transform: translateX(calc(-50% - 20px));
                    }
                }
            `}
            </style>
        </div>
    );
}

export default SkillSection