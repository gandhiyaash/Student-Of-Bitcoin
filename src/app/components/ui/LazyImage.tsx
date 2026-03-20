import { useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

export function LazyImage({ className = '', wrapperClassName = '', onLoad, ...props }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      <div
        className={`absolute inset-0 bg-gray-100 transition-opacity duration-300 ${
          loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />
      <img
        {...props}
        loading="lazy"
        decoding="async"
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={`transition-opacity duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      />
    </div>
  );
}
