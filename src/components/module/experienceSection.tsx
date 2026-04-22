import type React from "react";

const ExperienceItem = ({
    company,
    companyLink,
    companyLogo,
    title,
    duration,
    description
}: {
    title: string;
    company: string;
    companyLink?: string;
    companyLogo?: string;
    duration: string;
    description?: string[];
}) => (
    <div className="">
        <div className="flex gap-[20px] mb-2">
            <div className="bg-primary h-[20px] w-[20px] rounded-full mt-[5px]"></div>
            <div className="flex justify-between w-full">
                {companyLink ? (
                    <a href={companyLink} target="_blank" rel="noopener noreferrer" className="text-[clamp(16px,2vw,22px)] font-bold underline">
                        {company}
                    </a>
                ) : (
                    <h3 className="text-[clamp(16px,2vw,22px)] font-bold underline">{company}</h3>
                )}
                {/* {companyLogo && <img src={companyLogo} alt={`${company} logo`} className="w-[50px] h-[50px] object-contain rounded-full bg-amber-100" />} */}
            </div>
        </div>
        <div className="flex gap-[20px]">
            <div className="w-[20px] items-stretch">
                <div className="border-0 border-primary border-l-4 border-dashed h-full w-[2px] mx-auto"></div>
            </div>

            <div className="flex flex-col gap-[8px]">
                <div className="">
                    <h4 className="text-[clamp(16px,2.5vw,18px)] font-bold">{title}</h4>
                    <p className="text-[clamp(12px,1.5vw,16px)] font-bold">{duration}</p>
                </div>
                <ul className="list-disc list-outside space-y-2 ml-5 text-justify">
                    {description && description.map((desc, i) => (
                        <li key={i} className="text-[clamp(14px,2vw,18px)] text-foreground">
                            {desc}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

function ExperienceSection() {
    return (
        <div className="mt-12">
            <h2 className="text-[clamp(24px,4vw,44px)] font-medium text-foreground text-center">My Works Experience</h2>
            <div className="mt-8 flex flex-col gap-8">
                <ExperienceItem
                    company="Urban Access"
                    title="Intern Network Engineer"
                    duration="Aug 2021 - Sep 2021"
                    description={[
                        "maintain and configure servers, including Linux-based systems, to ensure optimal performance and security.",
                        "Deployed and configured network infrastructure, encompassing routers, switches, firewalls, and other network devices."
                    ]}
                />
                <ExperienceItem
                    company="Oxinos"
                    title="Intern Frontend Developer"
                    duration="Jun 2025 - Sep 2025"
                    description={[
                        "Developed responsive and user-friendly websites based on UI/UX design mockups.",
                        "Integrating front-end components with RESTful APIs to deliver dynamic and interactive features.",
                        "Collaborated with designers and back-end developers to improve workflows and deliver high-quality products.",
                        "Applied version control using Git."
                    ]}
                    companyLogo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsl0Hv_hIJgRf-u-QHmcwVnYayYMEgPB1Aw&s"
                    companyLink="https://oxinos.id"
                />
            </div>
        </div>
    )
}

export default ExperienceSection