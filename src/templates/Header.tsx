import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { NavigationMenu } from './NavigationMenu';

const Header = () => (
  <Section yPadding="py-6" xClass="header">
    <NavbarTwoColumns logo={<Logo xl />} slateGradient={800}>
      <NavigationMenu />
    </NavbarTwoColumns>
  </Section>
);

export { Header };
