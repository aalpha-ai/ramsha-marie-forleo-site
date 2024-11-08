/**
 * This code was generated by Builder.io
 */
import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

const testimonials = [
  {
    quote: "‟Marie is not just about making money (although that's part of it). It's about how to live and work in a way that gives you more control. She helps you make healthy, intelligent decisions about sales and marketing.",
    author: "Sarah S.",
    image: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/a2873e36d397b0bbf45ace820a1d839a4317bbf1c2a104dc03ac5a2e03313aac?apiKey=48a1608e30b648c89bd5ed134a49b3b8&"
  },
];

const TestimonialCarouselWrapper: React.FC = () => {
  return <TestimonialCarousel testimonials={testimonials} />;
};

export default TestimonialCarouselWrapper;