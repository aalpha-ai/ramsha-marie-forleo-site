import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { MobileHeader } from './MobileHeader';
import { cn } from '@/lib/utils';

const headerVariants = cva('mx-auto', {
  variants: {
    variant: {
      default: 'max-w-7xl',
      centered:
        'max-w-4xl rounded-full mt-2 border shadow-lg dark:border-zinc-900',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface HeaderProps extends VariantProps<typeof headerVariants> {
  sticky?: boolean;
  Logo: React.ReactNode;
  mobileItems: ({
    setIsOpen,
  }: {
    setIsOpen: (open: boolean) => void;
  }) => React.ReactNode | React.ReactNode;
  desktopItems: React.ReactNode;
}

const Header = ({
  Logo,
  sticky,
  variant,
  mobileItems,
  desktopItems,
}: HeaderProps) => {
  return (
    <header
      className={cn(
        'w-full backdrop-blur',
        sticky && variant == 'centered' && 'md:sticky top-3',
        sticky && variant == 'default' && 'md:sticky top-0'
      )}
    >
      <div className={cn('hidden md:block', headerVariants({ variant }))}>
        <div className="flex items-center justify-between px-6 pb-2 pt-3 w-full">
          {Logo}
          <nav className="flex items-center space-x-6 text-sm font-medium">{desktopItems}</nav>
        </div>
      </div>
      <MobileHeader Logo={Logo}>{mobileItems}</MobileHeader>
    </header>
  );
};

export default Header;
