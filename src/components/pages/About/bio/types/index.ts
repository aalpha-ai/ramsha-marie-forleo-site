export interface TextBlockProps {
  content: string;
  className?: string;
}

export interface LinkTextProps {
  href: string;
  text: string;
  className?: string;
}

export interface BioSectionProps {
  text: string;
  link?: {
    href: string;
    text: string;
  };
  additionalText?: string;
}
