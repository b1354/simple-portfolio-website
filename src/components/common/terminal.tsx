import { useEffect, useRef, useState } from "react";

function highlightJSON(val: unknown, indent = 0): string {
    const sp = " ".repeat(indent);
    const sp2 = " ".repeat(indent + 2);

    if (val === null) return `<span class="text-red-400">null</span>`;
    if (typeof val === "boolean") return `<span class="text-blue-400">${val}</span>`;
    if (typeof val === "number") return `<span class="text-orange-300">${val}</span>`;
    if (typeof val === "string") return `<span class="text-foreground-subtle">"${val}"</span>`;

    if (Array.isArray(val)) {
        const items = val
            .map((v) => `${sp2}${highlightJSON(v, indent + 2)}`)
            .join(",\n");
        return `<span class="text-purple-400">[</span>\n${items}\n${sp}<span class="text-purple-400">]</span>`;
    }

    if (typeof val === "object") {
        const entries = Object.entries(val as Record<string, unknown>)
            .map(([k, v]) => `${sp2}<span class="text-amber-500 dark:text-primary">"${k}"</span>: ${highlightJSON(v, indent + 2)}`)
            .join(",\n");
        return `<span class="text-foreground">{</span>\n${entries}\n${sp}<span class="text-foreground">}</span>`;
    }

    return String(val);
}

// Reveal HTML string karakter per karakter, tapi skip tag <span...> sekaligus
function revealHTML(html: string, charCount: number): string {
    let visible = 0;
    let result = "";
    let i = 0;

    while (i < html.length) {
        if (html[i] === "<") {
            // Ambil seluruh tag sekaligus, tidak dihitung sebagai karakter
            const close = html.indexOf(">", i);
            result += html.slice(i, close + 1);
            i = close + 1;
        } else {
            if (visible >= charCount) break;
            result += html[i];
            visible++;
            i++;
        }
    }

    return result;
}

export default function Terminal() {
    const jsonData = {
        response: 200,
        data: {
            name: "Bayu Rizki",
            isLookingForJob: true,
            lang: "id-ID",
            email: "bayurizkyseptiansyah@gmail.com",
            stack: ["Next.js", "TailwindCSS", "express.js", "postgreSQL"],
            timestamp: new Date().toISOString()
        }
    };

    const fullHTML = highlightJSON(jsonData);
    const totalChars = fullHTML.replace(/<[^>]*>/g, "").length;

    const [charCount, setCharCount] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const isDone = charCount >= totalChars;

    useEffect(() => {
        setCharCount(0);
        intervalRef.current = setInterval(() => {
            setCharCount((prev) => {
                if (prev >= totalChars) {
                    clearInterval(intervalRef.current!);
                    return prev;
                }
                return prev + 1; // naikkan untuk speed lebih cepat
            });
        }, 32); // ~60fps

        return () => clearInterval(intervalRef.current!);
    }, [totalChars]);

    const displayedHTML = revealHTML(fullHTML, charCount);

    return (
        <div className="flex items-center justify-center mt-12">
            <div className="w-full max-w-3xl rounded-2xl min-h-[400px] overflow-hidden shadow-2xl bg-secondary">
                {/* Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-accent">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-4 text-sm text-foreground-subtle font-mono select-none">
                        terminal.json
                    </span>
                </div>

                {/* Terminal Content */}
                <div className="p-5 font-mono text-[clamp(12px,2.5vw,14px)] overflow-x-auto">
                    <div className="text-green-400 mb-3">$ cat data.json</div>
                    <pre className="leading-7 text-foreground whitespace-pre-wrap break-words">
                        <code dangerouslySetInnerHTML={{ __html: displayedHTML }} />
                        <span
                            className={isDone ? "opacity-0" : "animate-pulse duration-500"}
                            aria-hidden="true"
                        >
                            &#9608;
                        </span>
                    </pre>
                </div>
            </div>
        </div>
    );
}