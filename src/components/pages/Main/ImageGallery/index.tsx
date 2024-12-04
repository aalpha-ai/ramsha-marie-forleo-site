/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";

const imageData = [
  [
    { src: "/gridImages/webp/image7.webp" },
    { src: "/gridImages/webp/image36.webp" },
  ],
  [
    { src: "/gridImages/webp/image8.webp" },
    { src: "/gridImages/webp/image23.webp" },
  ],
  [
    { src: "/gridImages/webp/image24.webp" },
    { src: "/gridImages/webp/image25.webp" },
  ],
  [
    { src: "/gridImages/webp/image28.webp" },
    { src: "/gridImages/webp/image31.webp" },
    { src: "/gridImages/webp/image10.webp" },
  ],
  [
    { src: "/gridImages/webp/image32.webp" },
    { src: "/gridImages/webp/image41.webp" },
    { src: "/gridImages/webp/image6.webp" },
  ],
];

export default function ImageGallery() {
  return (
    <section className="bg-white">
      <div className="w-full px-4 max-w-[1600px] mx-auto bg-white">
        {imageData.map((item, idx) => (
          <div
            key={idx + "root"}
            className="flex max-md:flex-col gap-5 pb-5"
          >
            {item.map((image, index) => (
              <BlurFade key={index} inViewMargin="-200px">
                <div className="relative md:flex-1">
                  <Image
                    src={image.src}
                    width={500}
                    height={400}
                    className="w-full md:h-[350px] lg:h-[450px] xl:h-[650px] object-cover rounded-sm transition-transform hover:scale-[1.02] duration-300"
                    alt="Gallery image"
                  />
                </div>
              </BlurFade>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
