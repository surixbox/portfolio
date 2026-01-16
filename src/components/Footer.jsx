function Footer() {
  return (
    <footer className="border-t border-white/20 mt-24 pt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <strong className="block text-white">
            Suryakiran
          </strong>
          <p className="text-sm text-gray-400">
            Frontend-Focused Full-Stack Developer
          </p>
        </div>

        {/* MEDIA */}
        <div className="text-center md:text-right">
          <span className="block text-xs text-gray-400 mb-2">
            Media
          </span>

          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://github.com/surixbox"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-xl text-gray-400 hover:text-purple-400 hover:-translate-y-0.5 transition"
            >
              🐙
            </a>

            <a
              href="https://www.linkedin.com/in/devpytech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-xl text-gray-400 hover:text-purple-400 hover:-translate-y-0.5 transition"
            >
              💼
            </a>

            <a
              href="mailto:devpytech@gmail.com"
              aria-label="Email"
              className="text-xl text-gray-400 hover:text-purple-400 hover:-translate-y-0.5 transition"
            >
              📧
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <p className="text-center text-xs text-gray-500 mt-6">
        © 2026 Suryakiran U — Built with clean code
      </p>
    </footer>
  );
}

export default Footer;
