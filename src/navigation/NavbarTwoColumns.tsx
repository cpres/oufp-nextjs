import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
  slateGradient: number;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div
    className="flex flex-wrap justify-between items-center custom-navbar"
    style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
  >
    <div>
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <nav>
      <ul className="navbar flex items-center p-5 text-xl font-medium text-darkGreen-900">
        {props.children}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
