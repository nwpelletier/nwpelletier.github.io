import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <nav className="navbar w-full bg-black/85 border-b-1 border-gray-700 text-gray-700 px-6 py-2 flex justify-center gap-2 md:gap-6 text-xl z-2">
      <NavbarItem text="Home" link="/" />
      <NavbarItem text="Resume" link="/resume" />
      {/* <NavbarItem text="Projects" link="/projects" /> */}
    </nav>
  );
}
