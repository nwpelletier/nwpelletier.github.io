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
    <div className="my-4 shadow-lg shadow-gray-400 border border-gray-200 overflow-hidden lg:h-96 flex flex-col lg:flex-row rounded-lg">
      <div className="flex-[1] lg:h-full w-full lg:w-1/2 rounded-lg overflow-hidden flex flex-col pl-5 pr-5 py-10 gap-2 bg-white justify-center items-start md:pl-12">
        <h1 className="text-3xl tracking-wider font-bold">
          {title}
        </h1>
        <p className="text-sm text-gray-400">
          {information}
        </p>
        <p className="text-sm text-gray-500">{tech}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-sm text-gray-200 bg-gray-500 p-2 border border-gray-400 rounded-4xl hover:bg-gray-600 transition-all duration-200">
            {linkText}
          </p>
        </a>
      </div>
      <div className="flex-[1] lg:h-full w-full lg:w-1/2 flex flex-row flex-wrap justify-center items-center bg-gray-200 p-4 gap-1 overflow-auto">
        {images?.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title} image ${index + 1}`}
            className="max-w-[40%] max-h-[80%] m-2 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
