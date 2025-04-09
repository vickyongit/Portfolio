import { Line } from 'rc-progress';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const AnimatedProgressBar = ({ percent, color = "grey", strokeWidth = 2 }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (inView) {
      setProgress(0); // Reset before starting animation

      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= percent) {
            clearInterval(interval);
            return percent;
          }
          return prev + 0.5; // Increase speed here (1 = smooth)
        });
      }, 10); // Animation speed
    } else {
      setProgress(0); // Reset when out of view
    }

    return () => clearInterval(interval);
  }, [inView, percent]);

  return (
    <div ref={ref} style={{ margin: "12px 0" }}>
      <Line percent={progress} strokeWidth={strokeWidth} strokeColor={color} />
    </div>
  );
};

export default AnimatedProgressBar;