'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, ArrowRight, Award, Globe } from 'lucide-react';

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
    <section className="relative py-20 text-ramsha-accent overflow-hidden">
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
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
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
              Transform
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
              Your Corporate
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
              Events
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
            className="text-xl text-ramsha-accent mb-8"
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
              title: "Global Perspective",
              description: "International business insights adapted for your market context"
            },
            {
              icon: <Award className="w-12 h-12 text-ramsha-tertiary mb-4" />,
              title: "Proven Track Record",
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
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-ramsha-tertiary">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.a
            href="https://forms.gle/KV7NUaHJiVbQ3Js67"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-ramsha-accent bg-ramsha-tertiary to-blue-500 rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Apply to Book
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.a>
          <p className="mt-4 text-sm text-gray-400">
            Limited availability for exclusive engagements
          </p>
        </div>
      </div>
    </section>
  );
};

export default CorporateBooking;