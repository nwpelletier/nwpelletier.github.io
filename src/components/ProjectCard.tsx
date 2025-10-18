import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  information: string;
  tech: string;
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
  images,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="my-4 lg:my-8 border-1 border-gray-800 shadow-lg shadow-gray-800/50 overflow-hidden lg:h-96 flex flex-col rounded-xl lg:flex-row"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left/Text Section */}
      <div className="lg:w-1/3 w-full bg-black/50 flex flex-col pl-5 pr-5 py-10 gap-2 justify-center items-start md:pl-12">
        <h1 className="text-3xl tracking-wider font-bold">
          {title}
        </h1>
        <p className="text-sm">{information}</p>
        <p className="text-sm">{tech}</p>
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

      {/* Right/Image Section */}
      <div className="lg:w-2/3 w-full bg-black/50 flex flex-row flex-wrap justify-center items-center p-4 gap-1 overflow-auto">
        {images?.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title} image ${index + 1}`}
            className="max-w-[40%] max-h-[90%] m-2 object-cover rounded-lg border-1 border-gray-600"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
