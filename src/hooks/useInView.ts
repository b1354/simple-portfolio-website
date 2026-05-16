import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

interface UseInViewReturn<T extends Element> {
  ref: React.RefObject<T | null>;
  isInView: boolean;
  reset: () => void;
}

export function useInView<T extends Element = HTMLDivElement>(
  options: UseInViewOptions = {}
): UseInViewReturn<T> {
  const { rootMargin = "0px", threshold = 0.1, once = true } = options;

  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  const reset = () => setIsInView(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return { ref, isInView, reset };
}