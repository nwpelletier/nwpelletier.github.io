import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row items-stretch w-full gap-6 mt-10 md:mt-20 h-auto md:h-48 lg:h-56">
        <div className="flex-shrink-0 shadow-lg rounded-xl shadow-gray-600 overflow-hidden">
          <img
            src="/np-photo-bw.jpg"
            alt="Profile"
            className="h-56 md:h-full w-auto rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col flex-grow justify-between">
          <div>
            <h1 className=" text-3xl md:text-5xl font-bold text-gray-800">
              Nick Pelletier
            </h1>
            <h3 className="text-xl pl-0.5 font-semibold text-gray-600">
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
          <div className="flex flex-row gap-10 md:gap-40 pl-0.5 mt-4 text-gray-500 justify-between items-end">
            <div className="flex flex-row flex-shrink-0 gap-6">
              <a
                href="https://www.linkedin.com/in/nwpelletier/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="linkedin-icon.png"
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
                  src="github-icon.png"
                  className="inline h-9 w-9 mr-2 hover:opacity-70 hover:scale-105 transition-all duration-200"
                />
              </a>
            </div>
            <div>
              <a
                href="/Nicholas_Pelletier.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block group whitespace-nowrap"
              >
                Resume
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <p className="text-lg tracking-thinner text-justify">
          Fullstack developer. I'm always looking to learn
          new tech and apply it to creative projects. I have
          a background in film/audio production, and enjoy
          bridging the gap between creative and technical
          problem solving.
        </p>
      </div>
      <ProjectCard
        title="CERASP"
        information="Lightweight, mobile-friendly website for CERASP, emphasizing ease-of-use and clear navigation for all users."
        tech="React, Node.js, Strapi"
        link="https://cerasp.vercel.app/"
        linkText="Visit Site"
        images={["/cerasp-1.png", "/cerasp-2.png"]}
      />
      <ProjectCard
        title="EDU-VRAI"
        information="VR immersive learning lab for John Abbott College, featuring interactive 3D models and environments."
        tech="Unity, VR, C#, Blender, Photoshop, Wordpress"
        link="https://vrai-dev.johnabbott.qc.ca/"
        linkText="Visit Site"
        images={["/eduvrai-1.png", "/eduvrai-2.png"]}
      />
      <ProjectCard
        title="Syllabase"
        information="WORK IN PROGRESS - searchable database of Piano Repertoire in the 'RCM' and 'ABRSM' syllabi.  This is a personal project that will help compare both systems."
        tech="Angular, Nest.js, PostgreSQL"
        link="---"
        linkText="Coming soon!"
        images={["/syllabase-1.png", "/syllabase-2.png"]}
      />
      <ProjectCard
        title="WhisperAds"
        information="Chrome extension that gives you persistent control over Twitch ad volume, allowing you to mute, dim, or normalize ad volume compared to streams."
        tech="JS, CSS, HTML, Chrome Extensions"
        link="https://chromewebstore.google.com/search/WhisperAds"
        linkText="View Extension"
        images={["/whisperads-1.png", "/whisperads-2.png"]}
      />
    </div>
  );
}
