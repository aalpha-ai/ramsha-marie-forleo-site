'use client'

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { TextBlock } from "./TextBlock";
import { ImageComponent } from "./ImageComponent";
import { InsiderForm } from "./InsiderForm";
import { TrainingCard } from "./TrainingCard";
import LearnAnything from "../../Main/LearnAnything";

export const WelcomeSection: React.FC = () => {
  const insiderFormData = {
    title: "Join Our Sacred\nSisterhood",
    description: [
      "Receive weekly spiritual guidance, early access to",
      "healing circles, exclusive duas and dhikr practices,",
      "plus sister-only resources to support your",
      "journey, bi'ithnillah.",
    ],
  };

  const trainingCardData = {
    title: ["Experience Our", "FREE Somatic", "Practice."],
    description: [
      "Download this blessed guided practice to discover",
      "3 gentle ways to regulate your nervous system",
      "while deepening your connection with Allah ﷻ.",
    ],
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/48a1608e30b648c89bd5ed134a49b3b8/9ad77acad7532b8892d592c5daa400bb489639dab7baec2da4e86da34e7a7e1a?apiKey=3445d620e72b4cd99c6f91e1d18e316a&",
  };

  // Create refs for each element you want to animate
  const textBlockRef1 = React.useRef(null);
  const textBlockRef2 = React.useRef(null);
  const insiderFormRef = React.useRef(null);
  const trainingCardRef = React.useRef(null);
  const imageComponentRef = React.useRef(null);

  // Use the useInView hook to determine if the elements are in view
  const textBlockInView1 = useInView(textBlockRef1, { once: true });
  const textBlockInView2 = useInView(textBlockRef2, { once: true });
  const insiderFormInView = useInView(insiderFormRef, { once: true });
  const trainingCardInView = useInView(trainingCardRef, { once: true });
  const imageComponentInView = useInView(imageComponentRef, { once: true });

  return (
    <div className="container mx-auto flex flex-col items-center py-10">
      <div className="flex flex-col items-center px-14 w-full max-md:px-5 max-md:max-w-full">
        <motion.div
          ref={textBlockRef1}
          className="flex flex-col w-full tracking-normal leading-8 max-md:max-w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={textBlockInView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <TextBlock content="Yes, this is a healing business, Alhamdulillah. Yes, we offer premium programs. And yes, we're deeply grateful that Allah has blessed us to serve sisters through this work. But you should know that we strive to make much of our spiritual guidance and somatic practices available at no cost, seeking only Allah's pleasure." />
        </motion.div>

        <motion.div
          className="flex flex-col max-w-full font-bold text-orange-700 py-10"
          initial={{ opacity: 0, y: 20 }}
          animate={textBlockInView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="self-end">
            To learn more about our spiritual approach to business, click here.
          </div>
        </motion.div>

        <motion.div
          ref={textBlockRef2}
          className="flex flex-col pb-6 w-full tracking-normal leading-8 max-md:max-w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={textBlockInView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <TextBlock content="I'm not a perfect teacher, and I don't claim to have all the answers. Like you, I'm on this journey of growth, facing challenges and seeking Allah's guidance. Some days are filled with light, others test our faith - this is the beautiful nature of our spiritual path." />
        </motion.div>

        <motion.div
          ref={insiderFormRef}
          className="flex z-10 flex-col pt-2.5 pb-9 pl-1.5 mt-0 w-full border-t border-b border-solid border-y-stone-300 max-md:max-w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={insiderFormInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col items-start w-full max-md:pr-5">
            <InsiderForm {...insiderFormData} />
          </div>
        </motion.div>

        <motion.div
          ref={trainingCardRef}
          initial={{ opacity: 0, y: 20 }}
          animate={trainingCardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <LearnAnything />
        </motion.div>
      </div>
    </div>
  );
};
