import { motion } from "framer-motion";
import React from "react";
import Button from "./Button";

const PrimaryButton: React.FC<{
  text: string;
  bgColor?: string;    
  disabled?: boolean;
  isSubmittingMessage?: string;
  isSubmitting?: boolean;
  className?: string;
}> = ({ text, disabled, isSubmittingMessage, isSubmitting, bgColor, className }) => {
  return (
    <motion.div
      className="group relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: '-100%' }}
        animate={isSubmitting ? { x: '100%' } : {}}
        transition={{ 
          duration: 1,
          repeat: isSubmitting ? Infinity : 0,
          ease: "linear"
        }}
      />
      <Button text={text} isSubmitting={isSubmitting} isSubmittingMessage={isSubmittingMessage} bgColor={bgColor} disabled={disabled} className={className}/>
    </motion.div>
  )
};

export default PrimaryButton;
