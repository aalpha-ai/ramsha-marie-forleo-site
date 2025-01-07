'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, ArrowRight, Award, Globe, Power } from 'lucide-react';
import PrimaryButton from '@/components/common/PrimaryButton';
const CorporateBooking = () => {
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 0.1,
      transition: { duration: 1 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2 + index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.6
      }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="relative py-20 text-white overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <div className="absolute rotate-45 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[800px] h-[800px] border-2 border-white/20 rounded-full" />
        <div className="absolute rotate-45 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[600px] h-[600px] border-2 border-white/20 rounded-full" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-header mb-6 leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 0.2
              }}
              viewport={{ once: true }}
            >
              Elevate
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 0.3
              }}
              viewport={{ once: true }}
            >
              Your Company's
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 0.4
              }}
              viewport={{ once: true }}
            >
              Vibe
            </motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.5,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            className="text-xl text-white mb-8"
          >
            Elevate your next corporate event with impactful insights and actionable strategies
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Briefcase className="w-12 h-12 text-ramsha-tertiary mb-4" />,
              title: "Executive Expertise",
              description: "Industry-proven strategies and transformative insights for your organization"
            },
            {
              icon: <Globe className="w-12 h-12 text-ramsha-tertiary mb-4" />,
              title: "Feminine Leadership",
              description: "Empower your team with feminine energy and leadership"
            },
            {
              icon: <Award className="w-12 h-12 text-ramsha-tertiary mb-4" />,
              title: "Seminars",
              description: "Trusted by leading organizations worldwide"
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              {card.icon}
              <h3 className="text-3xl font-header mb-2">{card.title}</h3>
              <p className="">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <PrimaryButton icon={Calendar} afterIcon={ArrowRight} href="https://forms.gle/KV7NUaHJiVbQ3Js67" text="Apply to Book" />
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: 0.7,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            className="mt-4 text-sm text-gray-400"
          >
            Limited availability for exclusive engagements
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CorporateBooking;