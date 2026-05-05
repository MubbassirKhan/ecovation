/**
 * Lazy loading utility for images and components
 * Uses Intersection Observer for efficient image lazy loading
 */

import React from 'react';

export const useLazyImage = (ref, callback) => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, callback]);
};

/**
 * LazyImage component for responsive image loading
 * Usage: <LazyImage src="image.jpg" alt="Description" />
 */
export function LazyImage({ src, alt, className = '', width, height, ...props }) {
  const [imageSrc, setImageSrc] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const imgRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.01 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
      width={width}
      height={height}
      onLoad={() => setIsLoading(false)}
      loading="lazy"
      {...props}
    />
  );
}

/**
 * Utility to lazy load images in existing <img> tags
 * Call this on mount to enable lazy loading for all images
 */
export function enableLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  }, { threshold: 0.01 });

  images.forEach(img => imageObserver.observe(img));
}
