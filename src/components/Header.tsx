const NAV_ITEMS = [
  { label: "Home", target: "hero" },
  { label: "Projects", target: "projects" },
  { label: "About", target: "about" },
  { label: "Contact", target: "contact" },
]

function scrollToSection(id: string) {
  const element = document.getElementById(id)

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          className="text-lg font-semibold tracking-tight text-neutral-900 transition-colors hover:text-neutral-600"
          href="#hero"
          onClick={(event) => {
            event.preventDefault()
            scrollToSection("hero")
          }}
        >
          Your Name
        </a>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-6 text-sm font-medium text-neutral-600">
            {NAV_ITEMS.map((item) => (
              <li key={item.target}>
                <a
                  className="transition-colors hover:text-neutral-900"
                  href={`#${item.target}`}
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection(item.target)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export { scrollToSection }
