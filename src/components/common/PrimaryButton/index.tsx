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
  afterIcon?: LucideIcon;
  href?: string;
  onClick?: () => void;
}> = ({ text, disabled, isSubmittingMessage, isSubmitting, bgColor, className, icon, afterIcon, href, onClick }) => {

  return (
    href ? 
      <Link href={href}>
        <motion.div
          className="group relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Button icon={icon} afterIcon={afterIcon} text={text} isSubmitting={isSubmitting} isSubmittingMessage={isSubmittingMessage} bgColor={bgColor} disabled={disabled} className={className} onClick={onClick}/>
        </motion.div>
      </Link>
    : 
      <motion.div
        className="group relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Button icon={icon} afterIcon={afterIcon} text={text} isSubmitting={isSubmitting} isSubmittingMessage={isSubmittingMessage} bgColor={bgColor} disabled={disabled} className={className} onClick={onClick}/>
      </motion.div>
  )
};

export default PrimaryButton;
