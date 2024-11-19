import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="flex justify-center items-center self-stretch my-auto min-w-[240px] w-[245px]">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/96c9c147e8b4532dd729dbfa0f96752f43ef48d1da98d673ff88ce89d05fa297?placeholderIfAbsent=true&apiKey=3445d620e72b4cd99c6f91e1d18e316a"
        alt="Company Logo"
        className="object-contain self-stretch my-auto"
        width={245} // Set width based on your max width
        height={245 / 9.8} // Calculate height based on aspect ratio
        quality={90} // Optional: set quality for optimization
      />
    </div>
  );
};

export default Logo;