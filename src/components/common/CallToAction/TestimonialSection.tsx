


import React from "react";
import CallToAction from "./CallToAction";
import { TestimonialParallax } from "@/components/custom/testimonialParallax";
import { InfiniteMovingCards } from "@/components/custom/infinitiMovingCards";

const testimonials = [
  {
    name: "Alex Thomas",
    role: "Agency Owner",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cbd80bd14c75375910137678ce47ed298e75e3996e9d6aa9cda927a120617964?placeholderIfAbsent=true&apiKey=76b7c825d7b24462a7c58fd618f8eec6",
  },
  {
    name: "Johanna Lin",
    role: "Freelance Developer",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cbd80bd14c75375910137678ce47ed298e75e3996e9d6aa9cda927a120617964?placeholderIfAbsent=true&apiKey=76b7c825d7b24462a7c58fd618f8eec6",
  },
  {
    name: "Jessica Wood",
    role: "Writer",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bd9ecc092da859c19e8d37b4cdf8e1539aa9470bef29cd806367aad01ac293fc?placeholderIfAbsent=true&apiKey=76b7c825d7b24462a7c58fd618f8eec6",
  },
  {
    name: "Rachel Fox",
    role: "Business women",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e9356703816a1f8956ba09a42c7c5edf0de81737878b1dcad4c2693cf970eebf?placeholderIfAbsent=true&apiKey=76b7c825d7b24462a7c58fd618f8eec6",
  },
  {
    name: "Peter Smith",
    role: "Musician",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f74c194acb555348f3b51931e844fcb6f580529d279a87c21c66e90218527ea0?placeholderIfAbsent=true&apiKey=76b7c825d7b24462a7c58fd618f8eec6",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="flex flex-col py-20">
      <div className="flex flex-col self-center px-20 pb-16 max-w-full w-[1400px] max-md:px-4">
        <div className="flex flex-wrap gap-10 justify-center md:justify-between items-center w-full max-md:max-w-full">
          <h2 className="self-stretch pt-4 pb-6 my-auto text-4xl font-bold leading-tight min-w-[240px] text-zinc-800 max-md:max-w-full max-md:text-center">
            Join hundreds of happy people
          </h2>
          <CallToAction />
        </div>
      </div>

      <div className="max-md:hidden">
        <TestimonialParallax testimonials={testimonials} />
      </div>
      <div className="md:hidden">
        <InfiniteMovingCards testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialSection;
