import { Section } from '../layout/Section';
import { Banner } from '../templates/Banner';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import { PageTitleBanner } from '../templates/PageTitleBanner';
// import { Footer } from './Footer';
const Housing = () => (
  <>
    <Header />
    <Section yPadding="py-4">
      <PageTitleBanner
        title="Oakland Urban Housing Project"
        description="Exploring ways of using farming as an avenue for ending homelessness in Oakland"
      />
    </Section>
    <Banner />
    <Footer />
  </>
);

export default Housing;
