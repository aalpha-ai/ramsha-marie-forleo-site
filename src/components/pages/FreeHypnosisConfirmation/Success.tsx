import React from "react";
import ImageSection from "../FreeHypnosisLead/ImageSection";
import { motion } from "framer-motion";
import { Sparkles, Mail, Gift } from 'lucide-react';

const Success: React.FC = () => {
  return (
    <section className="container mx-auto max-w-5xl">
      <div className="flex flex-col items-center text-center px-8 py-12">
        <motion.div
          className="relative flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Floating mail icon */}
          <motion.div
            className="text-ramsha-tertiary"
            animate={{ 
              y: [-5, 5, -5],
              rotate: [-5, 5, -5]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Mail className="w-12 h-12" />
          </motion.div>

          {/* Main heading with gradient and animations */}
          <motion.h2 
            className="text-4xl md:text-5xl font-montserrat-bold text-center relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* <motion.span
              className="absolute -left-8 top-1/2 -translate-y-1/2"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.span> */}

            <span className="bg-gradient-to-r from-ramsha-tertiary via-purple-600 to-ramsha-tertiary bg-clip-text text-transparent">
              Check Your Inbox
            </span>
            <br/>
            <span className="relative">
              for Your
              <motion.span
                className="inline-block ml-2"
                animate={{ 
                  y: [-2, 2, -2],
                  x: [-1, 1, -1],
                  rotate: [-5, 5, -5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Gift className="w-8 h-8 inline text-ramsha-tertiary" />
              </motion.span>
            </span>
            <br className="md:hidden" />
            <motion.span
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Free Gift
              {/* <motion.div
                className="absolute -top-1 -right-4"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ✨
              </motion.div> */}
            </motion.span>
          </motion.h2>

          {/* Decorative underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-ramsha-tertiary to-transparent rounded-full w-32"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "8rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center md:mt-10 lg:mt-0">
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