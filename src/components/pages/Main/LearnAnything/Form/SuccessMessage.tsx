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

      {/* Well done! heading */}
      <motion.h1 
        className="text-4xl md:text-6xl font-header mb-8 relative"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Well done!
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
        className="text-lg md:text-xl text-gray-700 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p>
          A welcome email is on its way from me to your inbox and it contains a link to your free hypnosis
        </p>
        <p>
          If you believe there's a problem, write{' '}
          <a href="mailto:info@glowingfemme.com" className="text-[#C68B5F] hover:underline">
            info@glowingfemme.com
          </a>
          {' '}and we'll take care of you as quickly as possible.
        </p>
      </motion.div>

      {/* Signature */}
      <motion.div
        className="mt-12 space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-xl">With love,</p>
      </motion.div>
    </motion.div>
  );
};

export default SuccessMessage; 