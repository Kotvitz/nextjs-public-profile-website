export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-semibold text-lg">
          Full Name
        </div>

        <nav className="space-x-6 text-sm">
          <a href="#home" className="hover:text-blue-700">
            Home
          </a>
          <a href="#about" className="hover:text-blue-700">
            O mnie
          </a>
          <a href="#program" className="hover:text-blue-700">
            Program
          </a>
          <a href="#activities" className="hover:text-blue-700">
            Działalność
          </a>
          <a href="#contact" className="hover:text-blue-700">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
