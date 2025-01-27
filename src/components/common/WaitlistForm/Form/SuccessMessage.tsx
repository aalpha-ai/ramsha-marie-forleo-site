import { motion } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';
import Image from 'next/image';

const SuccessMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center max-w-3xl mx-auto px-4 py-8"
    >
      {/* Floating mail icon */}
      <motion.div
        className="text-[#C68B5F] mb-8"
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
        <Mail className="w-16 h-16" />
      </motion.div>

      {/* Success heading */}
      <motion.h1 
        className="text-4xl md:text-6xl font-header mb-8 relative"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        You're on the list!
        <motion.div
          className="absolute -right-8 -top-4"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </motion.div>
      </motion.h1>

      {/* Message text */}
      <motion.div
        className="text-lg md:text-xl space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p>
          Thank you for joining the waitlist! We'll be in touch soon with more details about the program.
        </p>
        <p>
          In the meantime, check your inbox for a confirmation email. If you don't see it, please check your spam folder.
        </p>
        <p>
          If you have any questions, feel free to reach out at{' '}
          <a href="mailto:teamgf@glowingfemme.com" className="text-[#C68B5F] hover:underline">
            teamgf@glowingfemme.com
          </a>
        </p>
      </motion.div>

      {/* Signature */}
      <motion.div
        className="mt-12 space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-xl">With gratitude,</p>
        <p className="text-xl">The Glowing Femme Team</p>
      </motion.div>
    </motion.div>
  );
};

export default SuccessMessage; 