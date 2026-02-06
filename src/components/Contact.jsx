function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--color-bg-primary)] border-t border-[var(--color-border)]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* TEXT INFO */}
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed">
              I’m actively looking for internship and entry-level opportunities. Feel free to contact me for projects, collaborations, or job opportunities.
            </p>

            <div className="space-y-8">
              <a href="mailto:devpytech@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-widest font-semibold">Email</p>
                  <p className="text-white group-hover:text-[var(--color-accent)] transition-colors">devpytech@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-widest font-semibold">Location</p>
                  <p className="text-[var(--color-text-secondary)]">Kerala / Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="https://github.com/suribox" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-accent)] transition-all">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/devpytech" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-accent)] transition-all">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="bg-[var(--color-bg-secondary)] p-8 rounded-2xl border border-[var(--color-border)]">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Your Name</label>
                <input type="text" className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all" placeholder="John Doe" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Email Address</label>
                <input type="email" className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Subject</label>
                <input type="text" className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all" placeholder="Project Inquiry" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Message</label>
                <textarea rows="4" className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all" placeholder="Tell me about your project..."></textarea>
              </div>

              <button className="w-full py-3.5 rounded-lg font-bold text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-blue-500/20">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
