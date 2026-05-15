import { cn } from "@/lib/utils";
import { useState, type ImgHTMLAttributes } from "react";

type CImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  skeletonClassName?: string;
  wrapperClassName?: string;

  /**
   * Fill parent container
   * mirip Next.js Image fill
   */
  fill?: boolean;
};

export default function CImage({
  className,
  skeletonClassName,
  wrapperClassName,
  onLoad,
  onError,
  fill = false,
  ...props
}: CImageProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div
      className={cn("relative overflow-hidden", fill ? "w-full h-full" : "", wrapperClassName || "")}
    >
      {/* Skeleton */}
      {loading && !error && (
        <div
          className={`
            absolute inset-0 z-10 animate-pulse bg-accent
            ${skeletonClassName || ""}
          `}
        />
      )}

      {/* Error */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-sm text-gray-500">
          Failed to load image
        </div>
      )}

      {/* Image */}
      <img
        {...props}
        className={`
          transition-opacity duration-300
          ${loading ? "opacity-0" : "opacity-100"}

          ${
            fill
              ? "absolute inset-0 w-full h-full object-cover"
              : ""
          }

          ${className || ""}
        `}
        onLoad={(e) => {
          setLoading(false);
          onLoad?.(e);
        }}
        onError={(e) => {
          setLoading(false);
          setError(true);
          onError?.(e);
        }}
      />
    </div>
  );
}