/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface CourseLink {
  text: string;
  href: string;
  subItems?: string[];
}

const courseLinks: CourseLink[] = [
  { text: "Theory of Everything", href: "https://www.amazon.com/Submission-Theory-Everything-Dr-Peace-ebook/dp/B08BR4X6P1" },
  { text: "Awakened Feminine", href: "#" },
];

const CoursesAndBooks: React.FC = () => {
  return (
    <section className="flex flex-col grow shrink pt-6 text-sm tracking-wide leading-7 text-ramsha-accent">
      <h2 className="text-xs font-extrabold leading-5 uppercase tracking-[2.16px]">
        Courses & Books
      </h2>
      <nav className="mt-3">
        <ul className="flex flex-col items-start w-full">
          {courseLinks.map((link, index) => (
            <li key={index} className="flex flex-col items-start w-full">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pb-px"
              >
                {link.text}
              </a>
              {link.subItems && (
                <ul className="z-10 flex flex-col pl-2.5">
                  {link.subItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="flex flex-col items-start pb-0.5 w-full"
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default CoursesAndBooks;
