export type Project = {
  title: string
  description: string
  tech: string[]
  liveUrl?: string
  repoUrl?: string
}

export function ProjectCard({ title, description, tech, liveUrl, repoUrl }: Project) {
  return (
    <article className="flex h-full flex-col justify-between rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        <p className="text-sm text-neutral-600">{description}</p>
        <ul className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-neutral-500">
          {tech.map((item) => (
            <li
              className="rounded-full border border-neutral-200 px-3 py-1"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex items-center gap-4 text-sm font-medium">
        {liveUrl && (
          <a
            className="text-blue-600 transition hover:text-blue-700"
            href={liveUrl}
            rel="noreferrer"
            target="_blank"
          >
            View live
          </a>
        )}
        {repoUrl && (
          <a
            className="text-neutral-600 transition hover:text-neutral-900"
            href={repoUrl}
            rel="noreferrer"
            target="_blank"
          >
            Source code
          </a>
        )}
      </div>
    </article>
  )
}
