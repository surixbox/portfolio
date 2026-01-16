function ProjectCard({ image, tech, title, desc, github, live }) {
  return (
    <div
      className="
        group
        relative
        rounded-xl
        bg-white/5
        backdrop-blur-md
        border border-white/10
        p-5
        flex flex-col gap-4
        transition-all duration-300
        hover:-translate-y-2
        hover:border-purple-400/40
        hover:bg-white/8
      "
    >
      {/* SUBTLE GLOW ON HOVER */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-xl
          opacity-0
          group-hover:opacity-100
          transition
          bg-[radial-gradient(circle_at_50%_0%,rgba(192,132,252,0.15),transparent_60%)]
        "
      />

      {/* IMAGE */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="
            w-full h-[180px] object-cover
            grayscale
            transition duration-300
            group-hover:grayscale-0
            group-hover:scale-[1.03]
          "
        />
      </div>

      {/* TECH */}
      <p className="text-xs text-purple-400 tracking-wide">
        {tech}
      </p>

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-400 leading-relaxed">
        {desc}
      </p>

      {/* ACTIONS */}
      <div className="mt-2 flex gap-6">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:text-purple-400 transition"
          >
            Live →
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:text-purple-400 transition"
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
