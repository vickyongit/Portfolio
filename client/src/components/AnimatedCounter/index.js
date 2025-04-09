import { useEffect, useState, useRef, useCallback } from 'react';

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  const animateCount = useCallback(() => {
    let start = 0;
    const increment = end / (duration / 30);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.ceil(start));
    }, 30);
  }, [end, duration]);

  useEffect(() => {
    const currentRef = counterRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, animateCount]);

  return <span ref={counterRef}>{count}+</span>;
};

export default AnimatedCounter;
