import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100 dark:bg-darkGreen-900" image="null">
    <Section>
      <CenteredFooter logo={<Logo />} iconList={<></>}>
        {/* Add a div with flex and flex-col for mobile, and optionally flex-row for larger screens */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/history">
              <a>History</a>
            </Link>
          </li>
          <li>
            <Link href="/donate">
              <a>Donate</a>
            </Link>
          </li>
          <li>
            <Link href="/housing">
              <a>Housing</a>
            </Link>
          </li>
          <li>
            <Link href="/protect-our-elders">
              <a>Protect Our Elders</a>
            </Link>
          </li>
        </div>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
