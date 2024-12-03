import { QuoteWithImage } from "./QuoteWithImage";

export const QuoteWithImageSection: React.FC = () => {
  const paragraphText = "Through spiritual guidance and somatic practices, we help you reconnect with your body's wisdom and soul's purpose, creating a life of peace and divine alignment.";

  return (
    <div className="flex flex-col items-center">
      <QuoteWithImage 
        paragraphText={paragraphText}
        quoteText={[
          "Divine healing flows",
          "through mind, body,",
          "and soul."
        ]}
      />
    </div>
  );
};

export default QuoteWithImageSection;