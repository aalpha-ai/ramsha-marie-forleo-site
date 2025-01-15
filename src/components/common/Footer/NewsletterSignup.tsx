/**
 * This code was generated by Builder.io.
 */
import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, ArrowDown } from 'lucide-react';
import SuccessMessage from "@/components/common/SubscriptionForm/Form/SuccessMessage";
import PrimaryButton from "../PrimaryButton";

const NewsletterSignup: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const email = formData.email; 
      const firstName = formData.firstName;

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
          source: 'footer_subscription',
          tags: [process.env.NEXT_PUBLIC_FREE_HYPNOSIS_TAG_ID],
        }),
      });
      
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }
    } catch (error) {
      console.log('Subscription error:', error);
    } finally {
      setFormData({ firstName: '', email: '' });
      setIsSubmitted(true);
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-white">
        <SuccessMessage />
      </div>
    )
  }

  return (
    <section className="flex flex-col pt-6 text-[16px] text-white">
      <h2 className="font-subheader leading-5 uppercase tracking-[2.16px]">
        Join Glowing Femme
      </h2>
      
      <p className="mt-3 tracking-normal leading-5">
        Sign up for exclusive content, emails & things Ramsha doesn&apos;t <br />{" "}
        share anywhere else.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 min-w-[240px]">
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
                  <AlertCircle className="h-5 w-5 text-red-400" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* First Name Input */}
        <div className="bg-white min-h-[50px] px-4 py-3">
          <label htmlFor="firstName" className="sr-only">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
            className="w-full outline-none text-black"
          />
        </div>

        {/* Email Input */}
        <div className="bg-white min-h-[50px] px-4 py-3">
          <label htmlFor="email" className="sr-only">
            Enter Your Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            required
            className="w-full outline-none text-black"
          />
        </div>

        {/* Submit Button */}
        <PrimaryButton text="Sign Up for the Sacred Waitlist" disabled={isSubmitting} isSubmittingMessage="SENDING..." isSubmitting={isSubmitting} />

        {/* Disclaimer */}
        <p className="text-xs leading-5 max-w-[385px]">
          By entering your email, you'll agree to join Glowing Femme
          for FREE access to exclusive insights and offers delivered with love to your inbox.
          (Unsub anytime in a click.) You also agree to our{" "}
          <a href="/terms-of-use" className="underline">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="/privacy-policy" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </section>
  );
};

export default NewsletterSignup;
