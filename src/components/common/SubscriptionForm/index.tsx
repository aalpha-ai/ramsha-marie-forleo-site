/**
 * This code was generated by Builder.io.
 */
import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, ArrowDown } from 'lucide-react';
import FormInput from "./Form/FormInput";
import SubmitButton from "./Form/SubmitButton";
import FormDisclaimer from "./Form/FormDisclaimer";
import SuccessMessage from './Form/SuccessMessage';

const SubscriptionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const firstName = formData.firstName;
      const lastName = formData.lastName;
      const email = formData.email;

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          source: 'learn_anything',
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
      setFormData({ firstName: '', lastName: '', email: '' });
      setIsSubmitted(true);
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return <SuccessMessage />
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center text-base text-black">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className="flex flex-col md:flex-row w-full">
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
