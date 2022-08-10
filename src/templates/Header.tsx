import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Header = () => (
  <Section yPadding="py-6" xClass="header">
    <NavbarTwoColumns logo={<Logo xl />} slateGradient={800}>
      <li>
        <Link href="https://instagram.com/gravitygarden" passHref>
          <a target="_blank" rel="noopener noreferrer" className="dark-text">
            Instagram
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://www.facebook.com/groups/372073233910983/" passHref>
          <a target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </Link>
      </li>
    </NavbarTwoColumns>
    <style jsx>
      {`
        .header :global(a) {
          @apply text-primary-500;
        }
      `}
    </style>
  </Section>
);

export { Header };
