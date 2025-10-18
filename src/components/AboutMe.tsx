export default function AboutMe() {
  return (
    <div className="flex flex-col text-gray-200 shadow-sm">
      <div className="flex flex-col  md:flex-row items-stretch w-full gap-6 mt-10 md:mt-20 h-auto md:h-48 lg:h-56">
        <div className="md:flex-shrink-0 border-1 border-gray-800 rounded-xl shadow-lg shadow-gray-800 w-50 h-50 overflow-hidden">
          <img
            src="/np-photo-tint.png"
            alt="Profile"
            className="h-50 w-auto object-cover"
          />
        </div>

        <div className="flex flex-col flex-grow">
          <div>
            <h1 className=" text-3xl md:text-5xl font-bold whitespace-nowrap">
              Nick Pelletier
            </h1>
            <h3 className="text-xl pl-0.5 font-semibold">
              Web Developer
            </h3>{" "}
            <p className="pl-0.5 mt-2">Montreal, QC</p>
            <a
              href="mailto:nickwpelletier@gmail.com"
              className="pl-0.5"
            >
              nickw.pelletier@gmail.com
            </a>
          </div>{" "}
          <div className="flex flex-row gap-10 md:gap-40 pl-0.5 mt-4justify-between items-end">
            <div className="flex flex-row flex-shrink-0 gap-6">
              <a
                href="https://www.linkedin.com/in/nwpelletier/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="linkedin-icon-light.png"
                  className="inline h-10 w-10 hover:opacity-70 hover:scale-105 transition-all duration-200"
                />
              </a>
              <a
                href="https://github.com/nwpelletier"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block group"
              >
                <img
                  src="github-icon-light.png"
                  className="inline h-9 w-9 mr-2 hover:opacity-70 hover:scale-105 transition-all duration-200"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
