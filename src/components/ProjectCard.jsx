function ProjectCard({ image, tech, title, description, github, live }) {
  return (
    <div
      className="
        group
        relative
        rounded-xl
        bg-[var(--color-bg-secondary)]
        border border-[var(--color-border)]
        overflow-hidden
        h-full
        flex flex-col
        transition-all duration-300
        hover:border-[var(--color-accent)]
        hover:shadow-lg
        hover:translate-y-[-5px]
      "
    >
      {/* IMAGE CONTAINER */}
      <div className="relative overflow-hidden aspect-video border-b border-[var(--color-border)]">
        <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* CONTENT */}
        <div className="mb-4 flex-1">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">
            {title}
          </h3>

          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {tech.map((t, i) => (
              <span key={i} className="text-xs font-medium text-[var(--color-accent)] px-2 py-1 rounded bg-[var(--color-accent)]/10">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 pt-4 border-t border-[var(--color-border)] mt-auto">
          {live !== "#" && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                    flex items-center gap-2 text-sm font-medium text-[var(--color-text-primary)] 
                    hover:text-[var(--color-accent)] transition-colors
                "
            >
              Live Demo <span>→</span>
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                    flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors
                "
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
