import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export default function AnimateSlideUp({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const { ref, isInView } = useInView({rootMargin: "-180px"})

    return (
        <div
            ref={ref}
            className={cn("opacity-0 translate-y-10 transition-all duration-500", isInView && "translate-y-0 opacity-100", className)}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}