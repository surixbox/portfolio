function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-[var(--color-border)] py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-white mb-2">Suryakiran U</h3>
            <p className="text-[var(--color-text-secondary)]">Frontend-Focused Full-Stack Developer</p>
          </div>

          <div className="flex gap-8 text-[var(--color-text-secondary)] text-sm">
            <a href="https://github.com/suribox" className="hover:text-[var(--color-accent)] transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/devpytech" className="hover:text-[var(--color-accent)] transition-colors">LinkedIn</a>
            <a href="mailto:devpytech@gmail.com" className="hover:text-[var(--color-accent)] transition-colors">Email</a>
          </div>

        </div>

        <div className="border-t border-[var(--color-border)] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[var(--color-text-tertiary)]">
          <p>© 2026 Suryakiran U. All Rights Reserved.</p>
          <p>Building Clean, Responsive Web Applications</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
