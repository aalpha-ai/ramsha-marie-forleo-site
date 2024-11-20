/**
 * This code was generated by Builder.io.
 */
import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, ArrowDown } from 'lucide-react';
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import FormDisclaimer from "./FormDisclaimer";
import SuccessMessage from './SuccessMessage';

const SubscriptionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://free-website-club.vercel.app/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName || '',
          clientId: '1',
          tags: ['1'],
          source: 'learn_anything'
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);

      setFormData({ firstName: '', lastName: '', email: '' });
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError(
        err instanceof Error 
          ? err.message 
          : 'Failed to submit form. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return <SuccessMessage />;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 justify-center text-base text-white">
      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative mb-6"
          >
            <motion.div 
              className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg shadow-sm"
              animate={{ 
                x: [-4, 4, -4, 4, 0],
                transition: { duration: 0.5 }
              }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <AlertCircle className="h-5 w-5 text-red-400" />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-red-800">
                    Oops! Something went wrong
                  </h3>
                  <p className="mt-1 text-sm text-red-700">
                    {error}
                  </p>
                </div>

                <motion.div 
                  className="flex flex-col text-xs text-red-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-1">
                    <span>Try again</span>
                    <motion.div
                      animate={{ y: [0, 4, 0] }}
                      transition={{ 
                        duration: 1, 
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                    >
                      <ArrowDown className="h-3 w-3" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-3 justify-center w-full text-black max-md:max-w-full">
        <div className="flex flex-col md:flex-row gap-3 justify-center w-full text-black max-md:max-w-full">
          <FormInput
            label="First Name"
            type="text"
            id="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
            required
          />
          <FormInput
            label="Last Name"
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
          />
        </div>
        <FormInput
          label="Enter Your Email"
          type="email"
          id="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
        />
      </div>
      <SubmitButton text="GET INSTANT ACCESS" isSubmitting={isSubmitting} />
      <FormDisclaimer />
    </form>
  );
};

export default SubscriptionForm;
