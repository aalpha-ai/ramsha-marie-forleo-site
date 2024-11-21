/**
 * This code was generated by Builder.io
 */
import React from "react";
import Header from "./Header";
import FeatureCard from "./FeatureCard";
import BlurFade from "@/components/magicui/blur-fade";

interface FeatureCardProps {
  title: string;
  content: string;
}

const featureCardsData: FeatureCardProps[] = [
  {
    title: "Sacred Sisterhood & Divine Support",
    content:
      "Join a blessed circle of spiritually-aligned sisters who understand your journey. Transform loneliness into divine connection through authentic sisterhood and spiritual support, just as the Prophet ﷺ taught us about the power of good company.",
  },
  {
    title: "Spiritual Wisdom, Transformative Results",
    content:
      "Access deep spiritual practices and proven healing techniques that blend Islamic wisdom with somatic healing. Experience the powerful combination of divine guidance (tawakkul) and practical transformation (amal).",
  },
  {
    title: "Nurture Your Complete Being",
    content:
      "True success in Islam encompasses dunya and akhirah. Together, we'll nurture your mind, body, and soul to create a life of barakah, inner peace, and authentic abundance, aligned with your highest purpose.",
  },
];

const DreamClubComponent: React.FC = () => {
  return (
    <div className="bg-landing-stone-pattern">
      <main className="flex flex-col text-center max-w-5xl.5 mx-auto md:px-10 px-5 ">
        <Header />
        <BlurFade>
          <section className="flex max-md:flex-col gap-5 p-5">
            {featureCardsData.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                content={card.content}
              />
            ))}
          </section>
        </BlurFade>
      </main>
    </div>
  );
};

export default DreamClubComponent;
