import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100" image="null">
    <Section>
      <CenteredFooter logo={<Logo />} iconList={<></>}>
        <li>
          <Link href="/">
            <a>Home</a>
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
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
