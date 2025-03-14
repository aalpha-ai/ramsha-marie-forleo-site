'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, Rocket, Crown, ArrowRight } from 'lucide-react';
import PrimaryButton from '@/components/common/PrimaryButton';

const RichReceiver = () => {
  return (
    <section className="relative text-black bg-white overflow-hidden">
      <div className="min-h-screen via-black">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-center mb-4"
              >
                <Flame className="w-12 h-12 animate-pulse text-ramsha-tertiary" />
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="text-5xl font-header mb-6 bg-clip-text"
              >
                Rich Receiver
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl italic text-ramsha-tertiary"
              >
                Ignite Your Divine Feminine Power
              </motion.p>
            </div>

            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-ramsha-accent backdrop-blur-lg rounded-2xl p-8 mb-12 border border-amber-500/20 text-white"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-6"
              >
                <Sparkles className="w-6 h-6 text-ramsha-tertiary" />
                <h2 className="text-2xl font-header font-bold">Transform Your Destiny</h2>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg mb-6 leading-relaxed"
              >
                Unlock the frequency of overflow and become the woman who makes history. Rich Receiver is not just a program—it's a soul activation designed for trailblazing CEOs ready to alter their destiny.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-6 mb-8 text-black">
                {[
                  {
                    Icon: Crown,
                    title: "Divine Alignment",
                    description: "Grow intimate with the Infinite Source and manifest your heart's desires effortlessly."
                  },
                  {
                    Icon: Rocket,
                    title: "Rapid Meditation",
                    description: "Bypass decades of growth in your marriage, business, and life with our proven method."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl border border-amber-500/10"
                  >
                    <item.Icon className="w-8 h-8 mb-4 text-ramsha-tertiary" />
                    <h3 className="text-xl font-header mb-3 font-bold">{item.title}</h3>
                    <p className="">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="p-[1px] rounded-xl">
                <div className="bg-ramsha-accent rounded-xl p-8">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="text-2xl font-header mb-4 font-bold"
                  >
                    Rich Receiver Meditation is now $111
                  </motion.h3>
                  
                  <PrimaryButton icon={Flame} afterIcon={ArrowRight} href="https://buy.stripe.com/8wMeXK6dC06f34seXJ" text="Claim Rich Receiver Meditation" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RichReceiver;
