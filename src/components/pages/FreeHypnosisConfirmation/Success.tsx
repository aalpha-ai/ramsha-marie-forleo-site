import React from "react";
import ImageSection from "../FreeHypnosisLeadMagnet/ImageSection";

const Success: React.FC = () => {
  return (
    <section className="container mx-auto max-w-5xl">
      <div className="flex flex-col items-center text-center px-8 py-12">
        <h2 className="text-4xl font-montserrat-bold mb-16">
          {'>> Check Your Inbox for Your Free Gift <<'}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <ImageSection />
            {/* <div className="absolute top-4 right-4 bg-[#D6E856] text-black font-bold py-4 px-6 rounded-full rotate-12">
              FREE<br/>DOWNLOAD!
            </div> */}
          </div>

          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-2">
              <p className="text-2xl font-montserrat-bold">
                Open your welcome email <span className="font-montserrat">from me</span>
              </p>
              <p className="text-2xl">
                [subject: "Bismillah! Here's your Free Hypnosis Audio download"]
              </p>
            </div>

            <p className="text-xl">
              Don't forget to add me to your contacts so you never miss an important update or special surprise!
            </p>

            <p className="text-2xl italic font-bold">
              XOXO, Ramsha
            </p>

            <p className="text-gray-600 text-sm max-w-md">
              Can't find your welcome email? We're here to help if you have a problem – just write info@glowingfemme.com and we'll take care of you right away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success; 