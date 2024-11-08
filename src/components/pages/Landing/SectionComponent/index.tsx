/**
 * This code was generated by Builder.io
 */
import React from "react";
import Container from "./Container";
import BackgroundBorder from "./BackgroundBorder";
import Heading from "./Heading";
import TextContent from "./TextContent";
import List from "./List";
import Emphasis from "./Emphasis";
import BottomContent from "./BottomContent";

interface SectionComponentProps {}

const SectionComponent: React.FC<SectionComponentProps> = () => {
  return (
    <section className="flex flex-col">
      <Container>
        <BackgroundBorder>
          <Heading />
          <TextContent />
          <List />
          <Emphasis />
          <BottomContent />
        </BackgroundBorder>
      </Container>
    </section>
  );
};

export default SectionComponent;
