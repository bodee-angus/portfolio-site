import type { ImgHTMLAttributes, ReactNode, SyntheticEvent } from "react";
import { useState } from "react";

import { cn } from "../ui/utils";

type ImageWithFallbackProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: ReactNode;
};

export function ImageWithFallback({
  fallback,
  className,
  onError,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    onError?.(event);
  };

  if (hasError) {
    if (fallback) {
      return (
        <div className={cn("flex h-full w-full items-center justify-center bg-gray-100", className)}>
          {fallback}
        </div>
      );
    }

    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-gray-100 text-sm font-medium text-gray-500",
          className,
        )}
      >
        Image unavailable
      </div>
    );
  }

  return <img {...props} className={cn(className)} onError={handleError} />;
}
