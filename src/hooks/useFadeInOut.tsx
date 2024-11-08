import { useState, useEffect, useCallback } from 'react';
import { Fade } from 'react-awesome-reveal';

const useFadeInOut = (duration: number = 1500) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleVisibilityChange = useCallback((inView: boolean) => {
    setIsVisible(inView);
  }, []);

  const FadeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Fade
      delay={duration/2}
      duration={duration/2}
      triggerOnce={false}
      onVisibilityChange={handleVisibilityChange}
      // reverse={!isVisible}
      fraction={0.01}
      // className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </Fade>
  );

  return { FadeWrapper, isVisible };
};

export default useFadeInOut;