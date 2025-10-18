import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type NavbarItemProps = {
  text: string;
  link: string;
};

const NavbarItem: React.FC<NavbarItemProps> = ({
  text,
  link,
}) => {
  const location = useLocation();
  const isActive =
    link === "/"
      ? location.pathname === "/"
      : location.pathname
          .toLowerCase()
          .startsWith(link.toLowerCase());
  return (
    <Link
      to={link}
      className={`py-1 px-6 rounded-4xl transition-all duration-200 ${
        isActive
          ? "text-white bg-gray-900"
          : "text-gray-400 hover:shadow-md hover:bg-gray-900 hover:text-gray-200"
      }`}
    >
      {text}
    </Link>
  );
};

export default NavbarItem;
