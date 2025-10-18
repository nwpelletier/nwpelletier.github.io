const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full py-4 text-center mt-20 z-1">
      <p className="text-sm text-white">
        &copy; {new Date().getFullYear()} Nick Pelletier.
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
