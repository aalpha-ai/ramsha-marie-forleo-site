/**
 * This code was generated by Builder.io
 */
import React from "react";

const listItems = [
  "Attended countless Islamic conferences and spiritual retreats, yet still feel disconnected from your divine feminine essence and true purpose.",
  "Invested in various Islamic coaching programs and spiritual guidance, but struggle to bridge the gap between traditional wisdom and modern feminine leadership.",
  "Tried different approaches to self-care and wellness within Islamic boundaries, but haven't found that deep, lasting connection to your feminine power.",
  "Filled your library with Islamic self-development books and spiritual guides, yet still feel uncertain about how to embody their wisdom in today's world.",
  "Explored everything from Islamic meditation to energy healing that's halal, but haven't yet discovered how to fully activate your spiritual gifts while honoring your deen.",
];

const List: React.FC = () => {
  return (
    <ul className="list-disc ml-10 font-light">
      {listItems.map((item, index) => (
        <li
          key={index}
          className={`w-full max-md:max-w-full${index > 0 ? " mt-2" : ""}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
