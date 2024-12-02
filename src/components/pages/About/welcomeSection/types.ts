export interface TextBlockProps {
  content: string;
}

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export interface InsiderFormProps {
  title: string;
  description: string[];
}

export interface TrainingCardProps {
  title: string[];
  description: string[];
  imageSrc: string;
}
