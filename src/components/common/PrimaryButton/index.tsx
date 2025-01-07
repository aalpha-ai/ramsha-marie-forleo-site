'use client'

import { motion } from "framer-motion";
import React from "react";
import Button from "./Button";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

const PrimaryButton: React.FC<{
  text: string;
  bgColor?: string;    
  disabled?: boolean;
  isSubmittingMessage?: string;
  isSubmitting?: boolean;
  className?: string;
  icon?: LucideIcon;
  href?: string;
}> = ({ text, disabled, isSubmittingMessage, isSubmitting, bgColor, className, icon, href }) => {
  return (
    href ? 
      <Link href={href}>
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
          <Button icon={icon} text={text} isSubmitting={isSubmitting} isSubmittingMessage={isSubmittingMessage} bgColor={bgColor} disabled={disabled} className={className}/>
        </motion.div>
      </Link>
    : 
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
        <Button icon={icon} text={text} isSubmitting={isSubmitting} isSubmittingMessage={isSubmittingMessage} bgColor={bgColor} disabled={disabled} className={className}/>
      </motion.div>
  )
};

export default PrimaryButton;
