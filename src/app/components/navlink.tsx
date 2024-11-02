import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

type NavLinkProps = {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  exact = false,
  children,
  className = "sidebar--link",
  activeClassName = "sidebar--active",
}) => {
  const pathname = usePathname();

  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const combinedClassName = `${className} ${
    isActive ? activeClassName : ""
  }`.trim();

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
};

export default NavLink;
