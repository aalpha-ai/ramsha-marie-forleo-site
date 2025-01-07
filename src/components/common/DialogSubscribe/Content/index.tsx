'use client'

import React from 'react';
import SubscriptionForm from '@/components/common/SubscriptionForm';
import { motion } from 'framer-motion';

const Content = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="w-full max-w-lg mx-auto p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-white rounded-2xl shadow-xl relative overflow-hidden">
        <div className="p-6">
          <div className="text-center text-black">
            <h2 className="text-2xl font-bold mb-4 font-header">Join Our Community</h2>
            <p className="mb-6">Sign up to receive updates and exclusive content!</p>
            <SubscriptionForm />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Content;