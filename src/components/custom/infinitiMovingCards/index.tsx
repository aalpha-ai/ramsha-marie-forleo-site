"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import TestimonialCard from "@/components/common/CallToAction/TestimonialCard";

export const InfiniteMovingCards = ({
  testimonials,

  pauseOnHover = true,
  className,
}: {
  testimonials: {
    name: string;
    role: string;
    testimonial: string;
    imageSrc: string;
  }[];
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setStart(true);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard {...testimonial} key={idx} />
        ))}
      </div>
    </div>
  );
};
