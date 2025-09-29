import { scrollToSection } from "./Header"

function scrollToProjects() {
  scrollToSection("projects")
}

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-5xl flex-col items-start gap-10 px-6 pb-24 pt-28 text-neutral-900"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        Hi, I'm Your Name
      </p>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          Crafting thoughtful web experiences with modern tools and a focus on
          usability.
        </h1>
        <p className="max-w-2xl text-lg text-neutral-600">
          I'm a front-end engineer who loves building performant, accessible
          interfaces. I enjoy collaborating with teams to transform complex
          problems into intuitive products.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
          onClick={scrollToProjects}
          type="button"
        >
          View Projects
        </button>
        <a
          className="text-sm font-medium text-neutral-700 underline-offset-4 transition hover:underline"
          href="#contact"
          onClick={(event) => {
            event.preventDefault()
            scrollToSection("contact")
          }}
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}

export { scrollToProjects }
