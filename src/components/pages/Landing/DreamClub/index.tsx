/**
 * This code was generated by Builder.io
 */
import React from "react";
import { BorderedSection } from "./BorderedSection";
import { TestimonialBox } from "./TestimonialBox";
import { SectionHeading } from "./SectionHeading";
import { SectionContent } from "./SectionContent";

const SomaticHealingSection: React.FC = () => {
  const sections = [
    {
      title: "Nervous System Expansion: Unlock Your Divine Feminine Through Somatic Healing",
      subtitle: "(Including Sacred Sister Circle & Energy Work)",
      content: "Discover how your body holds the key to profound spiritual and emotional transformation. Through gentle somatic practices and nervous system work, we'll release stored tension and trauma, allowing your natural feminine energy to flow freely. Learn how to embody the peace that comes from deep alignment with Allah's wisdom.",
      additionalInfo: "Includes guided somatic practices and spiritual healing sessions 🤲",
      testimonial: "SubhanAllah, the nervous system work has transformed my relationship with my body and faith. I feel a deeper connection to Allah and my feminine essence than ever before.",
      testimonialAuthor: "Noor H., Dubai",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/5824b0835135add18e300e38bbf31a9719e3e1af8bbaccf6979d6f23a504107e?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
      imageAlt: "Somatic healing visualization",
    },
    {
      title: "Embodied Business Success: Integrating Spiritual Wisdom with Feminine Leadership",
      content: "Learn how to lead your business from a place of embodied wisdom and spiritual alignment. We'll explore how somatic practices can enhance your decision-making, strengthen your boundaries, and help you create success that honors both your faith and feminine nature. Discover how to trust your body's wisdom while maintaining tawakkul (trust in Allah).",
      testimonial: "Alhamdulillah, I've learned to trust my body's wisdom while staying anchored in my faith. The combination of somatic work and spiritual guidance has transformed my business approach.",
      testimonialAuthor: "Amira K., London",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/49e46e317a28583c1fe12c7e48449f30e350c123f3b3f3b065381c3b572ce691?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
      imageAlt: "Embodied leadership illustration",
    },
    {
      title: "Sacred Nervous System Reset: Healing Generational Patterns Through Somatic Work",
      subtitle: "(Embracing Your Divine Design)",
      content: "Your nervous system carries both the wisdom and wounds of generations. Through gentle somatic practices and Islamic principles, we'll help you release inherited patterns that no longer serve you. Learn to regulate your nervous system while deepening your spiritual connection, creating space for new patterns aligned with your highest purpose.",
      additionalInfo: "Bismillah, we begin with intention 💝",
      testimonial: "The combination of somatic healing and Islamic wisdom has helped me break free from old patterns. My body feels lighter and my soul more connected, Alhamdulillah!",
      testimonialAuthor: "Zahra M., Malaysia",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/5500209c889bac6a566ecf1fbb4c91428b553cb586e8a240610b07ddd05f139a?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
      imageAlt: "Nervous system healing concepts",
    },
    {
      title: "Embodied Abundance: Somatic Practices for Spiritual & Material Wealth",
      content: "Experience how somatic healing can transform your relationship with abundance. Learn powerful nervous system practices that help you embody the truth that Allah is Al-Razzaq (The Provider). We'll explore how trauma and stress affect your ability to receive, and how to create new neural pathways for abundance through both spiritual and somatic practices.",
      testimonial: "MashAllah, understanding how my nervous system affects my relationship with rizq has been revolutionary. The somatic practices have helped me embody abundance while staying true to my faith.",
      testimonialAuthor: "Fatima R., Toronto",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/66dfad9d33ef3ae351efc187e6da1655efccc8eaa7e1843360a677b4883cc07a?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
      imageAlt: "Embodied abundance concept",
    },
    {
      title: "🌙 Advanced Integration: For Current Program Members",
      content: "An exclusive deep-dive into advanced somatic practices and spiritual integration work, available only to sisters currently in the program. Together, we'll explore the depths of feminine embodiment while maintaining strong spiritual foundations.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/752763e91f9b44e4850032505797dfc20597b9f1c65c57784f93a214592ae4ba?apiKey=48a1608e30b648c89bd5ed134a49b3b8&",
      imageAlt: "Advanced healing illustration",
    }
  ];

  return (
    <section className="flex flex-col items-center bg-ramsha-primary text-white">
      <div className="flex flex-col md:px-14 pt-20 pb-20 w-full max-md:px-5 max-md:max-w-full">
        <SectionHeading />
        {sections.map((section, index) => (
          <BorderedSection key={index}>
            <SectionContent
              title={section.title}
              subtitle={section.subtitle}
              content={section.content}
              additionalInfo={section.additionalInfo}
              imageSrc={section.imageSrc}
              imageAlt={section.imageAlt}
            >
              {section.testimonial && (
                <TestimonialBox
                  testimonial={section.testimonial}
                  author={section.testimonialAuthor}
                />
              )}
            </SectionContent>
          </BorderedSection>
        ))}
      </div>
    </section>
  );
};

export default SomaticHealingSection;
