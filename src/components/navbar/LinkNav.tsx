import Link from "next/link";
import React from "react";
type LinkType = {
  link: string;
  title: string;
};

const LinkNav = ({ link, title }: LinkType) => {
  return (
    <Link href={`${link}`}>
      <p className="text-2xl font-normal px-4 py-2 text-secondary-400 hover:text-primary-900 transition-all hover:font-bold">{title}</p>
    </Link>
  );
};

export default LinkNav;
