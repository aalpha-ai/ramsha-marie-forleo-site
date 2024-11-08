import Link from 'next/link';
import Image from 'next/image'

//======================================
export const LogoLink = () => {
  return (
    <Image
      src="/default-logo.svg"
      alt="logo"
      width={50}  // Replace with actual width
      height={50} // Replace with actual height
      className="object-contain max-w-full" // Added pl-0 and pr-40
    />
  );
};
