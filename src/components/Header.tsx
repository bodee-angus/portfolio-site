import { Button } from "./ui/button";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="cursor-pointer" onClick={() => scrollToSection('hero')}>
          <span className="font-medium text-lg">BoDee Angus</span>
        </div>

        <nav className="hidden md:flex items-center space-x-2">
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-200 ease-out"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-200 ease-out"
          >
            About
          </button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="default"
            size="sm"
            className="bg-black hover:bg-gray-800 ml-4 transition-all duration-200 ease-out hover:scale-[0.98]"
          >
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
}