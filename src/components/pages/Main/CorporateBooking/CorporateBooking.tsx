import React from 'react';
import { Calendar, Briefcase, ArrowRight, Award, Globe } from 'lucide-react';

const CorporateBooking = () => {
  return (
    <section className="relative py-20 text-ramsha-accent overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute rotate-45 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[800px] h-[800px] border-2 border-white/20 rounded-full" />
        <div className="absolute rotate-45 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[600px] h-[600px] border-2 border-white/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transform Your Corporate Events
          </h2>
          <p className="text-xl text-ramsha-accent mb-8">
            Elevate your next corporate event with impactful insights and actionable strategies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
            <Briefcase className="w-12 h-12 text-ramsha-tertiary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Executive Expertise</h3>
            <p className="text-ramsha-tertiary">Industry-proven strategies and transformative insights for your organization</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
            <Globe className="w-12 h-12 text-ramsha-tertiary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Perspective</h3>
            <p className="text-ramsha-tertiary">International business insights adapted for your market context</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
            <Award className="w-12 h-12 text-ramsha-tertiary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
            <p className="text-ramsha-tertiary">Trusted by leading organizations worldwide</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://forms.gle/KV7NUaHJiVbQ3Js67"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-ramsha-accent bg-ramsha-tertiary to-blue-500 rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Apply to Book
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <p className="mt-4 text-sm text-gray-400">
            Limited availability for exclusive engagements
          </p>
        </div>
      </div>
    </section>
  );
};

export default CorporateBooking;