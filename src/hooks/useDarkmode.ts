import {useState, useEffect} from "react";

export default function useDarkMode():[boolean, React.Dispatch<React.SetStateAction<boolean>>] {
    const [isDark, setIsDark] = useState(() => {
        const stored = localStorage.getItem('theme');
        if (stored) return stored === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark])

    return [isDark, setIsDark];
}   