import { ProjectCard, type Project } from "./ProjectCard"

const PROJECTS: Project[] = [
  {
    title: "Design System Dashboard",
    description:
      "A component-driven dashboard for managing a company design system with live previews and guidelines.",
    tech: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com/design-system",
    repoUrl: "https://github.com/username/design-system-dashboard",
  },
  {
    title: "SaaS Analytics Platform",
    description:
      "Interactive analytics dashboards with real-time data visualizations and customizable reporting.",
    tech: ["Next.js", "D3.js", "PostgreSQL"],
    liveUrl: "https://example.com/saas-analytics",
    repoUrl: "https://github.com/username/saas-analytics",
  },
  {
    title: "E-commerce Storefront",
    description:
      "A performant storefront with advanced search, persistent cart, and server-side rendering for SEO.",
    tech: ["Remix", "Prisma", "Stripe"],
    liveUrl: "https://example.com/storefront",
    repoUrl: "https://github.com/username/ecommerce-storefront",
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-6 py-24"
    >
      <div className="mb-12 flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Selected work
        </h2>
        <p className="max-w-2xl text-neutral-600">
          A snapshot of the products and experiments I've been building recently.
          Each project blends thoughtful UX with scalable engineering.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
