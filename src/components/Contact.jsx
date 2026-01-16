function Contact() {
  return (
    <section id="contacts" className="py-24">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-24 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-xl font-medium mb-6 text-[color:var(--accent)]">
              #contacts
            </h2>

            <p className="text-[color:var(--muted)] max-w-xl leading-relaxed">
              I’m actively looking for internship and entry-level opportunities.
              If you have a project, role, or just want to connect — feel free
              to reach out. I usually reply fast.
            </p>
          </div>

          {/* CONTACT CARD */}
          <div
            className="
              relative
              border
              border-white/10
              bg-[#1f2933]
              p-6
              w-full
              max-w-sm
              transition
              duration-300
              hover:border-[color:var(--accent)]
              hover:bg-white/[0.03]
            "
          >
            <p className="text-sm text-white mb-4 tracking-wide">
              Message me here
            </p>

            <div className="flex flex-col gap-3 text-sm">

              {/* <a
                href="https://www.instagram.com/ft.suri?igsh=MTczYzN6cDJpdmF0NQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[color:var(--accent)] transition"
              >
                <span className="text-base">🫶🏻🥹❤️‍🩹</span>
                ft.suri
              </a> */}
              

              <a
                href="mailto:devpytech@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[color:var(--accent)] transition"
              >
                <span className="text-base">📧</span>
                devpytech@gmail.com
              </a>

              <a
                href="https://github.com/surixbox"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[color:var(--accent)] transition"
              >
                <span className="text-base">🐙</span>
                github.com/surixbox
              </a>

              <a
                href="https://www.linkedin.com/in/devpytech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[color:var(--accent)] transition"
              >
                <span className="text-base">💼</span>
                linkedin.com/in/devpytech
              </a>
            </div>

            {/* subtle accent line */}
            <div className="absolute -bottom-px left-6 w-12 h-px bg-[color:var(--accent)] opacity-60" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
