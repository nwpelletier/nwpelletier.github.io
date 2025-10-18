export default function AboutMe() {
  return (
    <div className="flex flex-col items-center sm:flex-row text-gray-200 shadow-sm gap-6 sm:my-20 my-10">
      <div className="sm:flex-shrink-0 border-1 border-gray-700 rounded-xl shadow-lg shadow-gray-800 h-60 w-auto sm:w-50 sm:h-auto overflow-hidden">
        <img
          src="/np-photo-tint.png"
          alt="Profile"
          className="h-60 sm:h-50 w-auto object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold whitespace-nowrap">
            Nick Pelletier
          </h1>
          <h3 className="text-xl pl-0.5 font-semibold">
            Web Developer
          </h3>{" "}
          <p className="pl-0.5 mt-4">Montreal, QC</p>
          <a
            href="mailto:nickwpelletier@gmail.com"
            className="pl-0.5"
          >
            nickw.pelletier@gmail.com
          </a>
        </div>{" "}
        <div className="flex flex-row gap-10 md:gap-40 pl-0.5 mt-2 items-end">
          <div className="flex flex-row flex-shrink-0 gap-4">
            <a
              href="https://www.linkedin.com/in/nwpelletier/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="linkedin-icon-light.png"
                className="inline h-10 w-10 mt-2 hover:opacity-70 hover:scale-105 transition-all duration-200"
              />
            </a>
            <a
              href="https://github.com/nwpelletier"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block group mt-0.5"
            >
              <img
                src="github-icon-light.png"
                className="inline h-9 w-9 mr-2 mt-2 hover:opacity-70 hover:scale-105 transition-all duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
