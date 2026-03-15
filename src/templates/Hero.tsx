import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { NavigationMenu } from './NavigationMenu';

const Hero = () => (
  <Background
    color="bg-gray-100 bg-center"
    image="bg-[url('../../public/assets/images/earthday-team.jpg')]"
  >
    <Section yPadding="py-6" xClass="min-700">
      <NavbarTwoColumns logo={<Logo xl />} slateGradient={50}>
        <NavigationMenu />
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { Hero };
