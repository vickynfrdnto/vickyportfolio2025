import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleLinkClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth',
          });
        }

        // Tutup menu mobile setelah klik
        setMenuOpen(false);
      }
    };

    // Pasang event listener ke semua anchor link dalam menu
    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach((link) => link.addEventListener('click', handleLinkClick));

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleLinkClick));
    };
  }, []);

  return (
    <header className="fixed w-full z-50 bg-slate-900 bg-opacity-80 backdrop-blur">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">VICKYNFRDNTO</div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="hamburger flex flex-col justify-center items-center w-8 h-8">
              <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map(section => (
              <a key={section} href={`#${section.toLowerCase()}`} className="hover:text-blue-400 transition">
                {section}
              </a>
            ))}
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden absolute left-0 w-full bg-slate-800 bg-opacity-95 nav-menu transition">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map(section => (
                <a key={section} href={`#${section.toLowerCase()}`} className="px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 transition">
                  {section}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;