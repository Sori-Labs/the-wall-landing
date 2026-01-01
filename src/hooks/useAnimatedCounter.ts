import { useState, useEffect, useRef } from 'react';

interface UseAnimatedCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  easing?: 'linear' | 'easeOut' | 'easeInOut' | 'bounce';
}

export function useAnimatedCounter({
  start = 0,
  end,
  duration = 2500,
  delay = 0,
  easing = 'easeOut',
}: UseAnimatedCounterOptions) {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const easingFunctions = {
    linear: (t: number) => t,
    easeOut: (t: number) => 1 - Math.pow(1 - t, 4),
    easeInOut: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    bounce: (t: number) => {
      if (t < 0.2) return 25 * t * t;
      if (t < 0.5) return 1 - Math.pow(-2 * t + 1, 2) * 0.5;
      if (t < 0.8) return 1 + Math.pow(-2 * t + 1.6, 2) * 0.1;
      return 1 - Math.pow(-2 * t + 2, 4) * 0.05;
    },
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAnimating(true);
      startTimeRef.current = null;

      const animate = (timestamp: number) => {
        if (startTimeRef.current === null) {
          startTimeRef.current = timestamp;
        }

        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easingFunctions[easing](progress);

        const currentValue = Math.floor(start + (end - start) * easedProgress);
        setCount(currentValue);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
          setIsAnimating(false);
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, delay, easing, start]);

  return { count, isAnimating };
}

export function formatNumber(num: number): string {
  return num.toLocaleString('en-US');
}
