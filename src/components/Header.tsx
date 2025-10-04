import { Button } from "./ui/button";

export function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-medium text-lg">BoDee Angus</a>

        <nav className="hidden md:flex items-center space-x-2">
          <a href="#projects" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg">
            Projects
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg">
            About
          </a>
          <Button asChild size="sm" className="bg-black text-white hover:bg-gray-800 ml-4 transition-all duration-200 ease-out hover:scale-[0.98]">
            <a href="#contact">Contact</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}