import React, { useState, useRef, useEffect, FC, ReactNode } from "react";

interface FadeInContainerProps {
  children: ReactNode;
}

const FadeInContainer: FC<FadeInContainerProps> = (props) => {
  const { children } = props;
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setVisible(true));
    });

    const current = domRef.current;

    if (current) {
      observer.observe(current);

      return () => {
        observer.unobserve(current);
      };
    }
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-active" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInContainer;
