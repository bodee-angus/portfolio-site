import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 py-6 text-sm text-neutral-500">
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
        >
          <Github className="size-5" />
        </a>
        <a
          aria-label="LinkedIn"
          className="transition-colors hover:text-neutral-900"
          href="https://linkedin.com/in/username"
        >
          <Linkedin className="size-5" />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  )
}
