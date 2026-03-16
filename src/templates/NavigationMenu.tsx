import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement | null>(null);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        event.target instanceof Node &&
        !menuRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <li ref={menuRef} className="relative">
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="inline-flex items-center gap-2 rounded-md border border-pea-700 bg-pea-300 px-3 py-2 text-sm font-semibold text-pea-900 hover:bg-pea-100"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
        Menu
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 z-50 mt-2 w-64 rounded-md border border-pea-300 bg-pea-100 shadow-lg">
          <Link href="/donate">
            <a
              onClick={closeMenu}
              className="block border-b border-pea-300 px-4 py-3 font-medium text-pea-900 hover:bg-pea-300"
            >
              Donate
            </a>
          </Link>
          <Link href="/earth-day-sponsor">
            <a
              onClick={closeMenu}
              className="block border-b border-pea-300 px-4 py-3 font-medium text-pea-900 hover:bg-pea-300"
            >
              Earth Day Sponsorship
            </a>
          </Link>
          <Link href="/education-with-tea">
            <a
              onClick={closeMenu}
              className="block border-b border-pea-300 px-4 py-3 font-medium text-pea-900 hover:bg-pea-300"
            >
              Education with Tea
            </a>
          </Link>
          <Link href="/protect-our-elders">
            <a
              onClick={closeMenu}
              className="block border-b border-pea-300 px-4 py-3 font-medium text-pea-900 hover:bg-pea-300"
            >
              Protect Our Elders
            </a>
          </Link>
          <Link href="/history">
            <a
              onClick={closeMenu}
              className="block border-b border-pea-300 px-4 py-3 font-medium text-pea-900 hover:bg-pea-300"
            >
              History
            </a>
          </Link>
          <Link href="/housing">
            <a
              onClick={closeMenu}
              className="block border-b border-pea-300 px-4 py-3 font-medium text-pea-900 hover:bg-pea-300"
            >
              Housing
            </a>
          </Link>

          <div className="flex items-center justify-center gap-3 px-4 py-3">
            <a
              href="https://instagram.com/gravitygarden"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-pea-900 hover:bg-pea-300"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm-.5 2A3.25 3.25 0 0 0 4 7.25v9.5A3.25 3.25 0 0 0 7.25 20h9.5A3.25 3.25 0 0 0 20 16.75v-9.5A3.25 3.25 0 0 0 16.75 4h-9.5Zm10.25 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/groups/372073233910983/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-pea-900 hover:bg-pea-300"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.2c0-.9.3-1.5 1.6-1.5h1.7V5.1c-.8-.1-1.7-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V11H8v3h2.1v8h3.4Z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </li>
  );
};

export { NavigationMenu };
