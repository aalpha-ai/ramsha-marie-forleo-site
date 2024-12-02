export interface TextBlockProps {
  text: string;
  isBold?: boolean;
}

export interface IntroSectionProps {
  mainText: string;
  subTexts: TextBlockProps[];
  highlightText: string;
  imageSrc: string;
}
