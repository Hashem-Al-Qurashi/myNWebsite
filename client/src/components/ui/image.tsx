
import React, { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export function Image({ src, alt, className, fallback = "./placeholder.jpg", ...props }: ImageProps) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? fallback : src}
      alt={alt || "Image"}
      className={className}
      onError={() => {
        console.error(`Failed to load image: ${src}`);
        setError(true);
      }}
      {...props}
    />
  );
}
