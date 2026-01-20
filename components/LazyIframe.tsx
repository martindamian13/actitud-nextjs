'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyIframeProps {
  src: string;
  title: string;
  width?: string;
  height?: string;
  className?: string;
  allowFullScreen?: boolean;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

/**
 * Lazy-loading iframe component using Intersection Observer
 * Only loads the iframe when it's about to enter the viewport
 */
export default function LazyIframe({
  src,
  title,
  width = '100%',
  height = '100%',
  className = '',
  allowFullScreen = false,
  referrerPolicy = 'no-referrer-when-downgrade',
}: LazyIframeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once loaded, stop observing
          observer.disconnect();
        }
      },
      {
        // Start loading when iframe is 200px away from viewport
        rootMargin: '200px',
        threshold: 0,
      }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={iframeRef} className={className} style={{ width, height }}>
      {isVisible ? (
        <iframe
          src={src}
          width={width}
          height={height}
          style={{ border: 0 }}
          allowFullScreen={allowFullScreen}
          loading="lazy"
          referrerPolicy={referrerPolicy}
          title={title}
        />
      ) : (
        <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
          <p className="text-gray-500">Cargando mapa...</p>
        </div>
      )}
    </div>
  );
}
