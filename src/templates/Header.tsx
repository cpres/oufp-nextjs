import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Header = () => {
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
    <Section yPadding="py-6" xClass="header">
      <NavbarTwoColumns logo={<Logo xl />} slateGradient={800}>
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
              <Link href="/earth-day-fundraise">
                <a
                  onClick={closeMenu}
                  className="block border-b border-pea-300 px-4 py-3 font-medium text-pea-900 hover:bg-pea-300"
                >
                  Earth Day Fundraiser
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
                  className="block px-4 py-3 font-medium text-pea-900 hover:bg-pea-300"
                >
                  Housing
                </a>
              </Link>
            </div>
          )}
        </li>
      </NavbarTwoColumns>
    </Section>
  );
};

export { Header };
