export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-6 py-24"
    >
      <div className="grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            About me
          </h2>
          <p className="text-neutral-600">
            I'm a product-focused developer with a background in design. I love
            building accessible experiences and finding the balance between
            delightful interactions and measurable outcomes.
          </p>
          <p className="text-neutral-600">
            Over the last few years I've worked with startups and agencies to
            launch marketing sites, SaaS platforms, and internal tooling. I enjoy
            partnering closely with designers, product managers, and engineers to
            craft solutions that scale.
          </p>
          <p className="text-neutral-600">
            When I'm not at the keyboard you can find me exploring local coffee
            shops, learning new animation techniques, or mentoring emerging
            developers.
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <h3 className="text-lg font-semibold text-neutral-900">Skills & tools</h3>
          <dl className="grid gap-4 text-sm text-neutral-600 sm:grid-cols-2">
            <div>
              <dt className="font-medium text-neutral-900">Languages</dt>
              <dd>TypeScript, JavaScript, HTML, CSS</dd>
            </div>
            <div>
              <dt className="font-medium text-neutral-900">Frameworks</dt>
              <dd>React, Next.js, Remix, Astro</dd>
            </div>
            <div>
              <dt className="font-medium text-neutral-900">Styling</dt>
              <dd>Tailwind CSS, CSS Modules, Styled Components</dd>
            </div>
            <div>
              <dt className="font-medium text-neutral-900">Workflow</dt>
              <dd>Design systems, Accessibility, Design handoff</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
