import * as React from "react";
import { IntroSection } from "./IntroSection";

const ProfilePage: React.FC = () => {
  const introData = {
    mainText: "Assalamu alaikum, I'm Ramsha. A somatic healer, spiritual guide, and embodiment coach.",
    subTexts: "Dedicated to helping Muslimahs embrace their divine feminine power through faith-aligned healing.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/69b9ebea6da3819e0c1ea0f7a054a3fa0f03bc7662466e84000d2518429eedbe?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
  };

  return (
    <div className="flex flex-col pt-6 lg:pt-12 bg-ramsha-primary text-white">
      {/* <IntroSection {...introData} /> */}
      
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-lg">
        <section>
          <h2 className="text-3xl font-header mb-6">The Revolutionary Visionary Behind Glowing Femme</h2>
          <p className="mb-4">
            Ramsha is not just a leader—she is a force of nature, a catalyst for transformation, and a voice for the wild, untamed visionaries who are ready to reclaim their power. A soul-led entrepreneur, multiple award-winning therapist, and celebrated author, she is the founder of the globally renowned soul-led coaching brand, Glowing Femme, and the CEO of IQRA Dream Inc.
          </p>
          <p>
            Her story is an anthem for those who feel called to rise beyond limits, a testament to what's possible when you let faith, courage, and divine love guide your path.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-header mb-4">The Alchemist of Divine Transformation</h3>
          <p className="mb-4">
            Ramsha speaks directly to the soul of the woman who has always felt too much, too bold, or too unconventional. Through her signature Let Go, Let God Method, she invites you to surrender the weight of expectations and transmute the pain of not belonging into a power that transforms everything it touches.
          </p>
          <p>
            Glowing Femme is not just a program or a brand—it's a homecoming for your soul. Imagine stepping into a space where your wild heart is celebrated, your brilliance amplified, and your deepest dreams honored.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-header mb-4">A Home for the Untamed</h3>
          <p className="mb-4">
            Glowing Femme is more than a movement; it's a revolution of self-worth, personal power, and divine reliance. When you join, you enter a world where:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Your glow becomes unstoppable</li>
            <li>You are filled to overflow with God's love and abundance</li>
            <li>You reclaim your power and step into alignment</li>
            <li>You are surrounded by a community of visionaries</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-header mb-4">A Legacy of Fierce Love and Faith</h3>
          <p className="mb-4">
            Ramsha's work is deeply personal and profoundly spiritual. She offers transformative experiences like the Rich Receiver Experience, exclusive meditations, and the Tawakkul Circle, all designed to help you rise in faith and flourish in purpose.
          </p>
          <p>
            Her teachings are infused with the timeless wisdom of the Quran, integrating the poetry of Rumi and Iqbal, as well as her own divine downloads, guiding you to surrender fully to God's plan.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-header mb-4">Join the Uprising</h3>
          <p>
            Ramsha doesn't just inspire—she awakens. She calls you to step boldly into your light, reclaim your divine power, and create a life of radiant possibility. If you've ever felt the fire within you but didn't know how to let it burn brightly, Glowing Femme is your answer.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
