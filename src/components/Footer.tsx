import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer
      id="contact"
      className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-12 text-sm text-neutral-500"
    >
      <h2 className="text-base font-semibold text-neutral-900">Let's work together</h2>
      <p className="text-center text-neutral-600">
        Have a project in mind or want to collaborate? Reach out through any of
        the channels below.
      </p>
      <div className="flex items-center gap-4">
        <a
          aria-label="Email"
          className="transition-colors hover:text-neutral-900"
          href="mailto:hello@example.com"
        >
          <Mail className="size-5" />
        </a>
        <a
          aria-label="GitHub"
          className="transition-colors hover:text-neutral-900"
          href="https://github.com/username"
          rel="noreferrer"
          target="_blank"
        >
          <Github className="size-5" />
        </a>
        <a
          aria-label="LinkedIn"
          className="transition-colors hover:text-neutral-900"
          href="https://linkedin.com/in/username"
          rel="noreferrer"
          target="_blank"
        >
          <Linkedin className="size-5" />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  )
}
