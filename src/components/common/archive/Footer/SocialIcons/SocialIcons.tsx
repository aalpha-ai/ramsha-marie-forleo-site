import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const SocialIcons: React.FC = () => {
  const iconSize = 24;

  return (
    <div className="flex space-x-4">
      <a href="#" className="text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
        <Instagram size={iconSize} />
      </a>
      <a href="#" className="text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
        <Facebook size={iconSize} />
      </a>
      <a href="#" className="text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
        <Twitter size={iconSize} />
      </a>
    </div>
  );
};

export default SocialIcons;