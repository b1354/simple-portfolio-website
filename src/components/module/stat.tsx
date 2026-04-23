const StatItem = ({number, title}:{number: string; title: string}) => {
    return (
        <div className="flex flex-col gap-[4px] w-[125px] text-center">
            <p className="text-[clamp(18px,4vw,24px)] font-medium">{number}</p>
            <p className="text-[clamp(16px,2.5vw,22px)] text-foreground-subtle">{title}</p>
        </div>
    )
}

function Stat() {
    return (
        <div className="flex justify-evenly mt-12">
            <StatItem number="1" title="Years of experience" />
            <StatItem number="5+" title="Projects Completed" />
        </div>
    )
}

export default Stat