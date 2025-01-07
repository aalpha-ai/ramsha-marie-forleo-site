'use client';

import React from "react";
import { motion } from "framer-motion";
import { Mail, Home } from 'lucide-react';
import PrimaryButton from "@/components/common/PrimaryButton";

export default function UnsubscribeContent() {
  return (
    <section className="font-body">
      <section className="flex flex-col items-center bg-ramsha-accent border-ramsha-accent m-4 md:m-10 border-[10px] xl:px-[10px] xl:pt-[56px] xl:pb-[54px] px-[0px] pt-[45px] pb-[55px] rounded-[30px]">
        <div className="flex flex-col items-center text-center px-8 pt-16 relative overflow-hidden max-w-4xl">
          {/* Status Message */}
          <motion.p 
            className="font-subheader text-ramsha-tertiary tracking-wider pb-8 text-2xl relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            UNSUBSCRIBE SUCCESSFUL
          </motion.p>

          {/* Main heading */}
          <motion.h1 
            className="text-4xl md:text-5xl pb-12 font-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            You've been successfully unsubscribed from our mailing list
          </motion.h1>

          {/* Message content */}
          <motion.div
            className="flex flex-col items-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Mail className="w-12 h-12 text-ramsha-tertiary" />
            
            <p className="text-xl max-w-2xl">
              We're sorry to see you go! You will no longer receive emails from us. 
              If you changed your mind, you can always subscribe again from our website.
            </p>

            <p className="text-gray-600 text-sm">
              If you have any questions or concerns, please contact us at{' '}
              <a 
                href="mailto:info@glowingfemme.com"
                className="text-ramsha-tertiary hover:underline"
              >
                info@glowingfemme.com
              </a>
            </p>
          </motion.div>

          {/* Return Home Button */}
          <PrimaryButton text="Return to Homepage" icon={Home} href="/" />
        </div>
      </section>
    </section>
  );
} 