import React from 'react';
import { Flame, Sparkles, Rocket, Crown, ArrowRight } from 'lucide-react';

const RichReciever = () => {
  return (
    <section className="relative text-black bg-white overflow-hidden">
      <div className="min-h-screen via-black">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <Flame className="w-12 h-12 animate-pulse text-ramsha-tertiary" />
              </div>
              <h1 className="text-5xl font-bold mb-6 bg-clip-text">
                Rich Receiver
              </h1>
              <p className="text-xl italic text-ramsha-tertiary">Ignite Your Divine Feminine Power</p>
            </div>

            {/* Main Content */}
            <div className="bg-ramsha-accent backdrop-blur-lg rounded-2xl p-8 mb-12 border border-amber-500/20 text-black">
              <div className="flex items-center gap-4 mb-6">
                <Sparkles className="w-6 h-6 text-ramsha-tertiary" />
                <h2 className="text-2xl font-semibold">Transform Your Destiny</h2>
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                Unlock the frequency of overflow and become the woman who makes history. Rich Receiver is not just a program—it's a soul activation designed for trailblazing CEOs ready to alter their destiny.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 p-6 rounded-xl border border-amber-500/10">
                  <Crown className="w-8 h-8 mb-4 text-ramsha-tertiary" />
                  <h3 className="text-xl font-semibold mb-3">Divine Alignment</h3>
                  <p className="">Grow intimate with the Infinite Source and manifest your heart's desires effortlessly.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-amber-500/10">
                  <Rocket className="w-8 h-8 mb-4 text-ramsha-tertiary" />
                  <h3 className="text-xl font-semibold mb-3">Rapid Transformation</h3>
                  <p className="">Bypass decades of growth in your marriage, business, and life with our proven method.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="p-[1px] rounded-xl">
                <div className="bg-ramsha-accent rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Begin Your Divine Journey</h3>
                  <p className="text-lg mb-6">
                    Access the micro-training now for just $55 and discover the method that's transforming lives worldwide.
                  </p>
                  <div className="text-center">
                    <a
                      href="https://buy.stripe.com/7sIg1O0Ti5qz34scPn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 text-lg font-semibold text-ramsha-accent bg-ramsha-tertiary to-blue-500 rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    >
                      <Flame className="w-5 h-5 mr-2" />
                      Claim Your Rich Receiver Training
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                {/* <a
                  href="https://buy.stripe.com/7sIg1O0Ti5qz34scPn"
                  className="inline-block bg-ramsha-tertiary px-8 py-4 rounded-lg font-semibold text-ramsha-accent hover:from-amber-400 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
                >
                  Claim Your Rich Receiver Training
                </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RichReciever;
