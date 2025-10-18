import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <nav className="w-full bg-black border-b-1 border-gray-800 px-6 py-2 flex justify-center gap-2 md:gap-6 text-xl sticky top-0 z-50">
      <NavbarItem text="Home" link="/" />
      <NavbarItem text="Resume" link="/resume" />
      <NavbarItem text="Projects" link="/projects" />
    </nav>
  );
}
