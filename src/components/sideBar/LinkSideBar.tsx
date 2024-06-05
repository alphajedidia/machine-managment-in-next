import Link from "next/link";
import { usePathname } from "next/navigation";
type LinkType = {
  link: string;
  title: string;
  icon: React.ReactNode;
  route: string;
};
const LinkSideBar = ({ link, title, icon, route}: LinkType) => {
  const pathActive = usePathname();
  const colorClass =
    pathActive === route
      ? "bg-primary-500 text-secondary-400"
      : "text-primary-100 hover:bg-gray-100 hover:bg-primary-500 hover:text-secondary-400";
  return (
    <Link href={`${link}`}>
      <li
        className={`flex items-center text-xl mt-2 px-2 py-3 rounded-full group ${colorClass}`}
      >
        {icon}
        <span className="ms-3">{title}</span>
      </li>
    </Link>
  );
};
export default LinkSideBar;
