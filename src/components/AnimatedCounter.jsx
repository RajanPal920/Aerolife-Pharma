import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedCounter component
 * Smoothly animates numbers from initial state (0) to their target value
 * when scrolled into viewport using requestAnimationFrame and IntersectionObserver.
 */
export default function AnimatedCounter({
  target = 0,
  duration = 1600,
  prefix = '',
  suffix = '',
  decimals = 0,
  separator = true,
  className = ''
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Parse numeric target from string or number
    let numericTarget = 0;
    if (typeof target === 'number') {
      numericTarget = target;
    } else {
      const cleaned = String(target).replace(/[^0-9.-]+/g, '');
      numericTarget = parseFloat(cleaned) || 0;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic/quartic for smooth deceleration at the end
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeOutProgress * numericTarget;

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(numericTarget);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  // Format value
  const formattedCount = separator
    ? Math.round(count).toLocaleString('en-IN', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })
    : Math.round(count).toFixed(decimals);

  return (
    <span ref={elementRef} className={`inline-block tabular-nums ${className}`}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
}
