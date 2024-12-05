import * as React from "react";

export const PersonalGrowthArticle: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-14 py-16 w-full max-w-[1400px] gap-8">
        {/* Left Content */}
        <div className="flex flex-col max-w-[600px]">
          <span className="text-[#D4502B] text-xs font-bold tracking-[2.16px] uppercase">
            Spiritual Growth
          </span>
          
          <h1 className="font-display text-[2.5rem] md:text-[3.5rem] leading-[1.2] mt-4 mb-6 text-neutral-800">
            Embracing Divine Feminine Energy: Your Path to Spiritual Abundance
          </h1>
          
          <span className="text-xs tracking-widest uppercase text-neutral-500">
            October 29, 2024
          </span>
          
          <div className="flex gap-6 mt-4 mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15L17 21H7L12 15Z" fill="currentColor"/>
              </svg>
              <span className="text-xs tracking-widest uppercase">Meditation</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
              </svg>
              <span className="text-xs tracking-widest uppercase">Healing</span>
            </div>
          </div>
          
          <button className="bg-[#E7D7D7] text-black font-bold py-3 px-12 rounded-full w-fit hover:bg-[#d8c3c3] transition-colors">
            Begin Your Journey
          </button>
        </div>

        {/* Right Image */}
        <div className="relative flex-1">
          <img
            src="/ramsha-pics/webp/glowingfemmej3.webp"
            alt="Peaceful meditation session for spiritual growth"
            className="w-full h-auto rounded-lg object-cover"
          />
          <div className="absolute top-4 right-4 bg-[#2C3338] text-white text-xs px-3 py-1 rounded">
            Featured
          </div>
        </div>
      </div>
    </div>
  );
};
