import { useEffect, useMemo, useState, type ImgHTMLAttributes, type ReactNode, type SyntheticEvent } from "react";

import { cn } from "../ui/utils";

type ImageWithFallbackProps = ImgHTMLAttributes<HTMLImageElement> & {
  /**
   * Optional React node to render when the image fails to load.
   * When omitted, the component will render a subtle default placeholder.
   */
  fallback?: ReactNode;
};

const defaultFallback = (
  <div className="flex flex-col items-center justify-center gap-2 text-gray-500">
    <span className="text-sm font-medium">Image unavailable</span>
    <span className="text-xs text-gray-400">Unable to load preview</span>
  </div>
);

export const ImageWithFallback = ({
  fallback,
  className,
  onError,
  src,
  ...props
}: ImageWithFallbackProps) => {
  const [hasError, setHasError] = useState(false);

  // Reset the error state when the source changes so new images can render.
  useEffect(() => {
    setHasError(false);
  }, [src]);

  const handleError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    onError?.(event);
  };

  const shouldShowFallback = hasError || !src;

  const fallbackContent = useMemo(() => fallback ?? defaultFallback, [fallback]);

  if (shouldShowFallback) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-gray-100",
          className,
        )}
      >
        {fallbackContent}
      </div>
    );
  }

  return <img {...props} src={src} className={cn("h-full w-full object-cover", className)} onError={handleError} />;
};
