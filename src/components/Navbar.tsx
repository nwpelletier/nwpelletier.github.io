import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <nav className="w-full bg-white text-gray-700 px-6 py-4 flex justify-center gap-2 md:gap-6 text-xl sticky top-0 z-50">
      <NavbarItem text="Home" link="/" />
      <NavbarItem text="Resume" link="/resume" />
      {/* <NavbarItem text="Projects" link="/projects" /> */}
    </nav>
  );
}
