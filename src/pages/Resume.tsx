import "./Resume.css";

const Resume = () => {
  // Reusable Skill component
  const Skill = ({ name }: { name: string }) => (
    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
      {name}
    </span>
  );

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg my-8">
      {/* Header */}
      <div className="mb-8 ">
        <h1 className="text-4xl font-bold mb-2 ">
          Nick Pelletier
        </h1>
        <p className="text-gray-500">
          Full Stack Developer
        </p>
        <p className="text-gray-500">
          Email: nickw.pelletier@gmail.com | Phone: (438)
          680-1479 | Location: Montreal, QC
        </p>
        <a
          href="/Nicholas_Pelletier_Resume_October_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block bg-gray-500 text-white px-4 py-2 rounded-4xl hover:bg-gray-600 transition-all duration-200"
        >
          Resume PDF
        </a>
      </div>
      {/* Work Experience */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Work Experience
        </h2>

        {/* Job 1 */}
        <div className="mb-10">
          <p className="font-bold">
            Software and Web Developer
          </p>
          <p className="text-gray-500 font-semibold text-sm mb-2">
            CERASP, Montreal - Since 2024
          </p>
          <ul className="resume__bullet--spacing list-disc pl-5 text-sm md:text-base  text-gray-500">
            <li>
              Designed and implemented a responsive,
              multilingual website using React and Strapi
              (headless CMS), enabling non-technical users
              to update and manage content efficiently.
            </li>
            <li>
              Developed custom components and integrated
              dynamic page rendering to support
              institutional branding and flexible content
              delivery.
            </li>
            <li>
              Ensured cross-platform compatibility and
              performance optimization through lightweight
              layouts and mobile-first design principles.
            </li>
            <li>
              Contributed to Unity VR projects by optimizing
              user interaction mechanics and refining
              simulation behavior for real-time performance
              and clarity.
            </li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="mb-10">
          <p className="font-bold">
            Sound Recording Technician
          </p>
          <p className="text-gray-500 font-semibold text-sm mb-2">
            McGill University, Montreal - 2020 - 2022
          </p>
          <ul className="resume__bullet--spacing list-disc text-sm md:text-base pl-5 text-gray-500">
            <li>
              Provided technical expertise for audio
              recording sessions in studio and live
              environments, ensuring high-fidelity capture
              of music, dialogue, and ambient sound.
            </li>
            <li>
              Operated and maintained professional recording
              equipment (e.g., Pro Tools systems,
              analog/digital consoles, microphones, and
              outboard gear).
            </li>
            <li>
              Supported post-production workflows including
              editing, mixing, and file management,
              collaborating closely with faculty,
              researchers, and student artists.
            </li>
          </ul>
        </div>

        {/* Job 3 */}
        <div>
          <p className="font-bold">Production Assistant</p>
          <p className="text-gray-500 font-semibold text-sm mb-2">
            Industrial Light and Magic (ILM), Vancouver -
            2016 - 2018
          </p>
          <ul className="resume__bullet--spacing list-disc text-sm md:text-base pl-5 text-gray-500">
            <li>
              Supported visual effects teams by managing
              asset tracking, documentation, and
              interdepartmental communication for
              high-profile film productions.
            </li>
            <li>
              Facilitated dailies, review sessions, and
              schedule coordination to ensure smooth
              workflow between artists, supervisors, and
              production staff.
            </li>
            <li>
              Developed a strong understanding of VFX
              pipelines, contributing to efficient version
              control, render queue management, and delivery
              organization.
            </li>
            <li>
              Maintained composure in a fast-paced,
              high-stakes environment, balancing creative
              collaboration with administrative precision.
            </li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Education
        </h2>
        <div className="mb-2">
          <p className="font-bold">
            AEC - Fullstack Developer
          </p>
          <p className="text-gray-500">
            John Abbott College | 2023
          </p>
        </div>{" "}
        <div className="mb-2">
          <p className="font-bold">
            Master, Sound Recording
          </p>
          <p className="text-gray-500">
            McGill University | 2021
          </p>
        </div>
        <div>
          <p className="font-bold">Bachelor, Music</p>
          <p className="text-gray-500">
            University of Ottawa | 2013
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Frontend:
        </h2>
        <div className="flex flex-wrap gap-2 mb-10">
          <Skill name="HTML & CSS" />
          <Skill name="Javascript" />
          <Skill name="TypeScript" />
          <Skill name="TailwindCSS" />
          <Skill name="React" />
          <Skill name="Angular" />
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          Backend:
        </h2>
        <div className="flex flex-wrap gap-2 mb-10">
          <Skill name="Node.js" />
          <Skill name="NestJS" />
          <Skill name="REST APIs" />
        </div>
        <h2 className="text-2xl font-semibold mb-4">
          Database/Development:
        </h2>
        <div className="flex flex-wrap gap-2 mb-10">
          <Skill name="MySQL" />
          <Skill name="PostgreSQL" />
          <Skill name="MongoDB" />
          <Skill name="C#" />
          <Skill name="Java" />
          <Skill name="Unity" />
        </div>
        <h2 className="text-2xl font-semibold mb-4">
          Other
        </h2>
        <div className="flex flex-wrap gap-2">
          <Skill name="Adobe Photoshop" />
          <Skill name="Adobe Premiere" />
          <Skill name="Pro Tools" />
          <Skill name="Reaper" />
          <Skill name="MIDI" />
        </div>
      </div>

      {/* Additional Sections */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Additional
        </h2>
        <p className="text-gray-500">
          Languages: English, French | Other Interests: Game
          Development and Prototyping, Piano, Classical
          Music
        </p>
      </div>
    </div>
  );
};

export default Resume;
