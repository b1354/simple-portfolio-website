import { useState } from "react";
import bg from "@/assets/boboplay.png";
import pustakaDigital from "@/assets/pustaka-digital.png";
import goFood from "@/assets/gofood-like-webapps.png";
import shopee from "@/assets/shopee-like-webapps.png";
import traffic from "@/assets/traffic-jam.png";
import kangPantau from "@/assets/kang-pantau-bot.png";
import { cn } from "@/lib/utils";

interface Project {
    title: string;
    description: string;
    image: string;
    link?: string
}

const ProjectCard = ({ project }: { project: Project }) => {
    const [hovered] = useState(false);

    return (
        <a href={project.link || "#"} target="_blank" rel="noopener noreferrer">
            <div
                className="relative rounded-2xl overflow-hidden select-none grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                style={{ aspectRatio: "4/3" }}
            // onMouseEnter={() => setHovered(true)}
            // onMouseLeave={() => setHovered(false)}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
                />

                {/* Hover Overlay */}
                <div
                    className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-400 hover:bg-primary/80"
                    style={!hovered ? { background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)" } : undefined}
                >
                    {/* Title always visible */}
                    <h3
                        className="text-white font-semibold mb-1 transition-all duration-300"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "clamp(16px, 2vw, 20px)",
                            transform: hovered ? "translateY(-8px)" : "translateY(0)",
                        }}
                    >
                        {project.title}
                    </h3>

                    {/* Description - slides up on hover */}
                    <p
                        className="text-white/80 text-sm leading-relaxed transition-all duration-300"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            maxHeight: hovered ? "80px" : "0px",
                            opacity: hovered ? 1 : 0,
                            overflow: "hidden",
                            transform: hovered ? "translateY(0)" : "translateY(10px)",
                        }}
                    >
                        {project.description}
                    </p>
                </div>
            </div>
        </a>
    );
}

export default function ProjectSection() {
    const [showAll, setShowAll] = useState(false);

    const project: Array<Project> = [
        {
            title: "ELibrary-Website",
            description: "A modern e-library website for managing and accessing digital books and resources.",
            image: pustakaDigital,
            link: "https://github.com/b1354/pustaka_digital_php_mvc"
        },
        {
            title: "Gofood Clone",
            description: "",
            image: goFood,
            link: "https://github.com/b1354/gofood-clone"
        },
        {
            title: "Shopee Clone",
            description: "",
            image: shopee,
            link: "https://github.com/b1354/shopee-clone"
        },
        {
            title: "Boboplay",
            description: "Boboplay is a streaming platform that offers a wide range of movies, TV shows, and original content for users to enjoy. With a user-friendly interface and personalized recommendations, Boboplay provides an immersive entertainment experience for all audiences.",
            image: bg,
        },
        {
            title: "Traffic Jam Detection",
            description: "",
            image: traffic,
            link: "https://github.com/b1354/traffic-jam-detection"
        },
        {
            title: "KangPantau Bot",
            description: "Ask up-to date crypto prices in telegram with this bot",
            image: kangPantau,
            link: "https://github.com/b1354/kangPantauBot"
        }
    ]
    return (
        <div className="mt-12">
            <h2 className="text-[clamp(24px,4vw,44px)] font-medium text-foreground text-center">Projects</h2>
            <div className={cn("transition-all duration-300 relative grid grid-cols-1 md:grid-cols-2 gap-8 mt-12", showAll ? "pb-[150px]":"max-h-[800px] md:max-h-[670px] overflow-y-hidden")}>
                {project.map((proj, i) => (
                    <ProjectCard
                        key={i}
                        project={proj}
                    />
                ))}
                <div className="flex items-center justify-center absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-background from-70% to-transparent">
                    <span className="cursor-pointer" onClick={() => setShowAll(!showAll)}>
                        {showAll ? "Show Less" : "Show More"}
                    </span>
                </div>
            </div>
        </div>
    )
}
