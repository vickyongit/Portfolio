import { useEffect } from 'react';

const useHashScroll = (sections) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const id = visible.target.getAttribute('id');
          window.history.replaceState(null, '', `${id}`);
        }
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);
};

export default useHashScroll;
