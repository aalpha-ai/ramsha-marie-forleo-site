'use client';
/**
 * This code was generated by Builder.io.
 */
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation, { navItems } from "./Navigation";
import FreeTrainingButton from "./FreeTrainingButton";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false); // Reset on pathname change
    
    // Wait for everything to load
    window.onload = () => {
      setIsLoaded(true);
    };

    // Fallback if window.onload doesn't trigger
    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return (
    <header className="bg-ramsha-primary sticky top-0 z-50 flex flex-col border-b border-zinc-400 w-full max-lg:py-5">
      <div className="grid grid-cols-12 items-center px-7 w-full max-md:px-5 max-md:max-w-full">
        <Link href="/" className="col-span-3">
          <motion.h1 
            key={pathname}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut",
              opacity: { duration: 0.6 },
              x: { duration: 0.6 }
            }}
            className="uppercase text-3xl lg:text-2xl xl:text-3xl font-seasons text-ramsha-tertiary whitespace-nowrap font-display opacity-0"
          >
            Glowing Femme
          </motion.h1>
        </Link>

        <motion.div 
          key={`nav-${pathname}`}
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-ramsha-accent col-span-7 flex justify-center items-center max-lg:hidden"
        >
          <Navigation />
        </motion.div>

        <motion.div 
          key={`button-${pathname}`}
          initial={{ opacity: 0, x: 20 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-1 col-start-12 flex justify-end items-center max-lg:hidden"
        >
          <FreeTrainingButton />
        </motion.div>

        <motion.div 
          key={`mobile-${pathname}`}
          className="lg:hidden col-span-2 col-start-11 flex justify-end"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Sheet>
            <SheetTrigger>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <AlignJustify className="h-6 w-6 text-ramsha-accent" />
              </motion.div>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full p-0 bg-[#FDF7F4] mt-[65px] !duration-300 !transition-transform"
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex justify-center md:justify-between items-center px-6 py-4 bg-ramsha-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="flex items-center gap-1 hidden md:flex">
                    <span className="text-base">How to Get Your Prayers Answered Instantly</span>
                    <motion.span 
                      className="px-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                  <FreeTrainingButton />
                </motion.div>

                <motion.div 
                  className="px-6 py-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <nav className="flex flex-col">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href || `/${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                        className="py-4 border-b border-[#00000033] text-base"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3,
                          delay: index * 0.1 + 0.2,
                          ease: "easeOut"
                        }}
                        whileHover={{ x: 10 }}
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </nav>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
