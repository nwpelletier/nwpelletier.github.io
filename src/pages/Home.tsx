import ProjectCard from "../components/ProjectCard";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <>
      <AboutMe />
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
        // link="---"
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
    </>
  );
}
