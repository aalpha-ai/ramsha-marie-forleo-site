import { QuoteWithImage } from "./QuoteWithImage";

export const QuoteWithImageSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center max-md:px-5 text-xl">
      <QuoteWithImage 
        paragraphText="From years of spiritual seeking and deep personal healing, to intensive study with renowned somatic practitioners, to training in nervous system regulation and trauma healing, to guiding hundreds of Muslim women through embodied transformation, to creating a sacred space where feminine wisdom meets Islamic principles, Alhamdulillah, I am living proof that..."
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