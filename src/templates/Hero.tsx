import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background
    color="bg-gray-100 bg-center"
    image="bg-[url('../../public/assets/images/earthday-team.jpg')]"
  >
    <Section yPadding="py-6" xClass="min-700">
      <NavbarTwoColumns logo={<Logo xl />} slateGradient={50}>
        <li>
          <Link href="/donate" passHref>
            <a rel="noopener noreferrer" className="hover:underline">
              Donate
            </a>
          </Link>
        </li>

        <li>
          <Link href="https://instagram.com/gravitygarden" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.facebook.com/groups/372073233910983/"
            passHref
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { Hero };
