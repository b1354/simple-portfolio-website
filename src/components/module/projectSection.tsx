import { useState } from "react";
import bg from "@/assets/boboplay.png";
import pustakaDigital from "@/assets/pustaka-digital.png";
import goFood from "@/assets/gofood-like-webapps.png";
import shopee from "@/assets/shopee-like-webapps.png";

interface Project {
    title: string;
    description: string;
    image: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
    const [hovered] = useState(false);

    return (
        <div
            className="relative rounded-2xl overflow-hidden select-none grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            style={{ aspectRatio: "4/3" }}
            // onMouseEnter={() => setHovered(true)}
            // onMouseLeave={() => setHovered(false)}
        >
            {/* Background Image */}
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
    );
}

export default function ProjectSection() {
    const project: Array<Project> = [
        {
            title: "ELibrary-Website",
            description: "A modern e-library website for managing and accessing digital books and resources.",
            image: pustakaDigital,
        },
        {
            title: "Gofood Clone",
            description: "",
            image: goFood,
        },
        {
            title: "Shopee Clone",
            description: "",
            image: shopee,
        },
        {
            title: "Boboplay",
            description: "Boboplay is a streaming platform that offers a wide range of movies, TV shows, and original content for users to enjoy. With a user-friendly interface and personalized recommendations, Boboplay provides an immersive entertainment experience for all audiences.",
            image: bg,
        }
    ]
    return (
        <div className="mt-12">
            <h2 className="text-[clamp(24px,4vw,44px)] font-medium text-foreground text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {project.map((proj, i) => (
                    <ProjectCard
                        key={i}
                        project={proj}
                    />
                ))}
            </div>
        </div>
    )
}
