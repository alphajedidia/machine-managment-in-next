import Link from "next/link";
import React from "react";
type LinkType = {
  link: string;
  title: string;
  isActive? : Boolean;
};

const LinkNav = ({ link, title,isActive }: LinkType) => {
  return (
    <Link href={`${link}`}>
      <p className = {`text-2xl px-1  text-secondary-400 hover:text-secondary-600  transition-all hover:font-bold ${isActive && "font-bold text-secondary-600 scale-105 "}`}>{title}</p>
    </Link>
  );
};

export default LinkNav;
