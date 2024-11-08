'use client'

import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { LogoLink } from './LogoLink';
import Header from './Header';
import Link from 'next/link';

const headerLinks = [
  { name: 'Features', href: '/header-demo/#features' },
  { name: 'Pricing', href: '/header-demo/#pricing' },
  { name: 'FAQs', href: '/header-demo/#faqs' },
];
const icons = [
  {
    name: 'Twitter',
    icon: <FaXTwitter size="14" />,
    href: 'https://x.com',
  },
  {
    name: 'GitHub',
    icon: <FaGithub size="14" />,
    href: 'https://github.com',
  },
];
const HeaderLink = (props: { href: string; name: string }) => {
  return <Link href={props.href} className="text-white hover:text-gray-300">{props.name}</Link>;
};
export const HeaderDemo = ({
  variant = 'default',
  sticky = false,
}: {
  variant: 'default' | 'centered';
  sticky?: boolean;
}) => (
  <Header
    Logo={<LogoLink />}
    variant={variant}
    sticky={sticky}
    desktopItems={
      <>
        {/* {headerLinks.map((link, i) => (
          <HeaderLink key={i} href={link.href} name={link.name} />
        ))} */}
        {/* <ThemeToggle /> */}
      </>
    }
    mobileItems={({ setIsOpen }) => (
      <>
        {/* {headerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block py-2"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))} */}
        {/* <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
          {icons.map((icon) => (
            <Button
              key={icon.name}
              size="icon"
              className="rounded-full"
              variant="outline"
              asChild
              onClick={() => setIsOpen(false)}
            >
              <Link href={icon.href}>{icon.icon}</Link>
            </Button>
          ))}
          <ThemeToggle />
        </div> */}
      </>
    )}
  />
);
