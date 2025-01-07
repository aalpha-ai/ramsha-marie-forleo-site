import * as React from "react"
import {
  DropdownMenu as ShadcnDropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { NavItem } from "@/components/common/Header/Navigation";

interface DropdownMenuProps {
  items: NavItem[];
  trigger?: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ 
  items,
  trigger = <span>Menu</span>
}) => {
  return (
    <ShadcnDropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        {items.map((item, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link
              href={item.href}
              className="w-full cursor-pointer"
            >
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </ShadcnDropdownMenu>
  )
}

export default DropdownMenu 