import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-pea-500 dark:bg-pea-500" image="null">
    <Section xClass="max-w-none">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-2 z-20 flex items-start justify-center sm:top-0 md:-top-2">
          <img
            src="/assets/images/pollinators_footer_v8.svg"
            alt="Animated pollinators"
            className="h-auto w-full max-w-none max-h-[440px] object-contain sm:w-[150%] lg:w-[184%]"
          />
        </div>

        <CenteredFooter
          logo={<Logo />}
          iconList={
            <>
              <a
                href="https://instagram.com/gravitygarden"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm-.5 2A3.25 3.25 0 0 0 4 7.25v9.5A3.25 3.25 0 0 0 7.25 20h9.5A3.25 3.25 0 0 0 20 16.75v-9.5A3.25 3.25 0 0 0 16.75 4h-9.5Zm10.25 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/groups/372073233910983/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.2c0-.9.3-1.5 1.6-1.5h1.7V5.1c-.8-.1-1.7-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V11H8v3h2.1v8h3.4Z" />
                </svg>
              </a>
            </>
          }
        >
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
            <li>
              <Link href="/">
                <a className="footer-nav-link">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/history">
                <a className="footer-nav-link">History</a>
              </Link>
            </li>
            <li>
              <Link href="/donate">
                <a className="footer-nav-link">Donate</a>
              </Link>
            </li>
            <li>
              <Link href="/housing">
                <a className="footer-nav-link">Housing</a>
              </Link>
            </li>
            <li>
              <Link href="/protect-our-elders">
                <a className="footer-nav-link">Protect Our Elders</a>
              </Link>
            </li>
          </div>
        </CenteredFooter>

        <style jsx>{`
          :global(.footer-nav-link) {
            position: relative;
            display: inline-block;
          }

          :global(.footer-nav-link::after) {
            content: '';
            position: absolute;
            left: 0;
            bottom: -3px;
            width: 100%;
            height: 2px;
            background-color: #d9e7bf;
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 220ms ease;
          }

          :global(.footer-nav-link:hover::after),
          :global(.footer-nav-link:focus-visible::after) {
            transform: scaleX(1);
          }
        `}</style>
      </div>
    </Section>
  </Background>
);

export { Footer };
