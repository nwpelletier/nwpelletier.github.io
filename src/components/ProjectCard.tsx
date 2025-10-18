import { motion } from "framer-motion";
import "./ProjectCard.css";

type ProjectCardProps = {
  title: string;
  information: string;
  tech: string[];
  link?: string;
  linkText?: string;
  images?: string[];
};

const ProjectCard = ({
  title,
  information,
  tech,
  link,
  linkText,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="border-1 border-gray-700 rounded-xl shadow-lg shadow-gray-800/50 text-gray-200 font-normal"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left/Text Section */}
      <div className="w-full flex flex-col items-start p-8">
        <h1 className="text-3xl p-3 font-bold border-2 border-gray-700">
          {title}
        </h1>

        <p className="tracking-wide mt-4">TECHNOLOGIES</p>
        <div className="flex flex-wrap text-xs">
          {tech.map((item, index) => (
            <div
              className="rounded-full bg-gray-900 border-1 border-gray-700 m-2 py-1 px-4"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="project-card-separator"></div>
        <p className="text-sm">{information}</p>
        {link && linkText && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-sm bg-transparent px-4 py-2 mt-5 ml-5 shadow-sm shadow-gray-600 rounded-3xl hover:bg-gray-400 hover:text-white transition-all duration-200">
              {linkText}
            </p>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
