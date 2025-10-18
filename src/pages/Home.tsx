import ProjectCard from "../components/ProjectCard";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <>
      <AboutMe />
      <div className="lg:grid lg:grid-cols-2 xl:m-0 gap-8">
        <ProjectCard
          title="CERASP"
          information="Website redesign with a focus on easy navigation, quick data fetching, and a mobile friendly approach.  Strapi was selected as a headless CMS to allow the client to access, edit and add media and content."
          tech={["React", "Node.js", "Strapi"]}
          link="https://cerasp.vercel.app/"
          linkText="Visit Site"
        />
        <ProjectCard
          title="EDU-VRAI"
          information="Maintenance of the Wordpress site, and design/implementation of interactive lab equipment in a Virtual Reality environment.  Extensive practice of OOP principles when working on equipment and their sub-components.  Additionally, ensured that the lab VR experience was synchronized for multiplayer."
          tech={["Unity", "VR", "C#", "Wordpress"]}
          link="https://vrai-dev.johnabbott.qc.ca/"
          linkText="Visit Site"
        />
        <ProjectCard
          title="Syllabase"
          information="Hobby project that compiles major Piano Syllabus data (RCM, ABRSM, etc).  The aim is to draw comparisons of relative difficulty of repertoire, and draw analytics on variety of selections.  Fullstack design allows me to build my own database and present the content how I feel students and teachers would want to browse."
          tech={["Angular", "Nest.js", "PostgreSQL"]}
          linkText="Coming soon!"
        />
        <ProjectCard
          title="WhisperAds"
          information="I created this plugin after noticing that ads on many websites often play at volumes very different from the user's current audio level. The plugin lets users adjust ad volume in advance, and these settings persist between browsing sessions."
          tech={["JS", "CSS", "HTML", "Chrome Extensions"]}
          link="https://chromewebstore.google.com/search/WhisperAds"
          linkText="View Extension"
        />
      </div>
    </>
  );
}
