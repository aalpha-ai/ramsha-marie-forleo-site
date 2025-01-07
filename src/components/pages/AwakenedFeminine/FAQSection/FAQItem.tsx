/**
 * This code was generated by Builder.io
 */
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-l-[3px] border-l-ramsha-tertiary bg-ramsha-primary text-white">
        <AccordionTrigger className="flex flex-1 px-5 text-sm font-bold tracking-widest leading-6 uppercase hover:no-underline">
          {question}
        </AccordionTrigger>
        <AccordionContent className="px-5">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQItem;
