import Script from 'next/script';

import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import { PageTitleBanner } from '../templates/PageTitleBanner';

const Donate = () => (
  <>
    <Header />
    <Script src="https://widgets.givebutter.com/latest.umd.cjs?acct=Lscxchi3SB8UkBgS&p=other" />
    <Section yPadding="py-4">
      <PageTitleBanner
        title="OUFP Donations"
        description="Building a better world through land stewardship"
      />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src="/assets/images/feb24-volunteers-circle.jpg"
            alt="Descriptive Alt Text"
            className="p-3"
          />
          <p className="p-3">
            Welcome to Oakland Urban Farming, where we&apos;re transforming our
            community through regenerative agriculture. Our budding food forest
            not only provides fresh produce but also serves as an educational
            hub, teaching about gardening and environmental stewardship. Through
            regular volunteer days and a free pantry, we&apos;re ensuring access
            to healthy food for all. Your donation helps us continue this vital
            work. Help us in cultivating a healthier, more vibrant Oakland
            today!
          </p>
        </div>
        <div className="space-y-3 md:w-1/2">
          <div className="flex justify-center">
            <givebutter-widget id="j2R9aj"></givebutter-widget>
          </div>
          <p className="px-3 text-sm text-pea-900 md:text-center">
            Givebutter may ask for an optional tip to support their platform.
            Tipping is absolutely not required.
          </p>
        </div>
      </div>
    </Section>
    <Footer />
  </>
);

export default Donate;
