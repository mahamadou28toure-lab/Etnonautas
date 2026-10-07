import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  containerClassName?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  priority = false,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#233975] ${containerClassName}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover ${className}`}
          {...props}
        />
      ) : (
        <div
          className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-pmp-corporate"
          role="img"
          aria-label={alt}
        >
          <Sparkles className="w-8 h-8 text-white mb-3 opacity-90" aria-hidden="true" />
          <span className="font-serif text-lg text-white/95 max-w-xs">{alt}</span>
        </div>
      )}
    </div>
  );
};
