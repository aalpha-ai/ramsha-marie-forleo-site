import * as React from "react";

type BiographyTextProps = {
  text: string[];
  heading: string[];
};

export const BiographyText: React.FC<BiographyTextProps> = ({
  text,
  heading,
}) => {
  return (
    <div className="flex flex-col gap-5 px-16 pt-12 pb-16 bg-white max-w-[625px] w-[596px] max-md:px-5">
      <div className="pt-2 pb-2.5 w-full text-base tracking-normal leading-8 text-black max-md:max-w-full">
        {text.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
      <div className="mt-6 w-full text-4xl tracking-wider leading-[62.4px] text-neutral-800 max-md:max-w-full">
        {heading.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
