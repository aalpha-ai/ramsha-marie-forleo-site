import React from "react";
import ImageSection from "../FreeHypnosisLeadMagnet/ImageSection";
import { motion } from "framer-motion";

const Success: React.FC = () => {
  return (
    <section className="container mx-auto max-w-5xl">
      <div className="flex flex-col items-center text-center px-8 py-12">
        <motion.h2 
          className="text-4xl font-montserrat-bold mb-16 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span
            className="inline-block"
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {'>>'}
          </motion.span>
          {' Check Your Inbox for Your Free Gift '}
          <motion.span
            className="inline-block"
            animate={{ x: [2, -2, 2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {'<<'}
          </motion.span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ImageSection />
          </motion.div>

          <motion.div 
            className="flex flex-col items-center text-center space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.p 
                className="text-2xl font-montserrat-bold"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Open your welcome email <span className="font-montserrat">from me</span>
              </motion.p>
              <motion.p 
                className="text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                [subject: "Bismillah! Here's your Free Hypnosis Audio download"]
              </motion.p>
            </motion.div>

            <motion.p 
              className="text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Don't forget to add me to your contacts so you never miss an important update or special surprise!
            </motion.p>

            <motion.p 
              className="text-2xl italic font-bold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
            >
              XOXO, Ramsha
            </motion.p>

            <motion.p 
              className="text-gray-600 text-sm max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Can't find your welcome email? We're here to help if you have a problem – just write{' '}
              <motion.a 
                href="mailto:info@glowingfemme.com"
                className="text-ramsha-tertiary hover:underline"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                info@glowingfemme.com
              </motion.a>
              {' '}and we'll take care of you right away.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Success; 