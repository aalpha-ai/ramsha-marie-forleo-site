export interface ArticleCardProps {
  category: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
}

export interface SearchInputProps {
  onSearch: (value: string) => void;
}
