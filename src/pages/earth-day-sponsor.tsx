import Script from 'next/script';

import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import { PageTitleBanner } from '../templates/PageTitleBanner';

const EarthDaySponsor = () => (
  <>
    <Header />
    <Script src="https://widgets.givebutter.com/latest.umd.cjs?acct=Lscxchi3SB8UkBgS&p=other" />
    <Section yPadding="py-4">
      <PageTitleBanner
        title="Earth Day Sponsorship 2026"
        description="Partner with OUFP for the 2026 Earth Day Festival."
      />
      <img
        src="/assets/images/earthday-2025-event.png"
        alt="Earth Day event at Gravity Garden"
        className="w-full rounded-lg"
      />

      <div className="flex flex-col gap-4 md:flex-row md:flex-nowrap md:items-start md:gap-6">
        <div className="space-y-4 p-3 md:w-3/5">
          <p>
            Local businesses are essential to the fabric of our neighborhoods,
            and partnering with OUFP is a meaningful way to invest in community
            that supports you.
          </p>

          <p>
            By sponsoring our Earth Day Festival, your business will be
            recognized as a community ally while demonstrating a commitment to
            sustainability, local access, and neighborhood well-being.
          </p>

          <p>By sponsoring, your business will:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>Be recognized as a community ally</li>
            <li>
              Demonstrate your commitment to sustainability, local access, and
              neighborhood well-being
            </li>
            <li>Gain visibility with local residents</li>
            <li>Inspire engagement and build authentic connections</li>
            <li>Invest in the neighborhood ecosystem</li>
          </ul>

          <p>
            We invite you to join us in celebrating Earth Day and supporting the
            work of the Oakland Urban Farming Project.
          </p>
        </div>

        <div className="space-y-3 p-3 md:w-2/5">
          <div className="flex justify-center md:justify-end">
            <givebutter-widget id="gOr84L"></givebutter-widget>
          </div>
          <p className="text-sm text-pea-900 md:text-right">
            Givebutter may ask for an optional tip to support their platform.
            Tipping is absolutely not required.
          </p>
        </div>
      </div>

      <div className="space-y-3 p-3">
        <h3 className="text-2xl font-bold text-pea-900">Partnership Options</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-pea-100 p-4">
            <h4 className="text-xl font-bold text-pea-900">
              Harest Hero - $500
            </h4>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Prominent logo placement on event flyer</li>
              <li>Dedicated social media post</li>
              <li>Prominent logo placement on partner sign at event</li>
              <li>Verbal recognition in event speech</li>
              <li>Opportunity to table at event</li>
            </ul>
          </div>
          <div className="rounded-lg bg-pea-100 p-4">
            <h4 className="text-xl font-bold text-pea-900">
              Celery Steward - $250
            </h4>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Logo placement on digital event flyer</li>
              <li>Recognition in event-related social media post</li>
              <li>Logo placement on partner sign at event</li>
              <li>Verbal recognition in event speech</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="p-3">
        Interested in supporting the Earth Day Festival with a financial or
        in-kind donation?{' '}
        <a
          href="mailto:volunteer@oufp.org"
          className="font-semibold underline hover:no-underline"
        >
          Get in touch with us
        </a>{' '}
        to find a partnership option tailored to your business.
      </p>

      <img
        src="/assets/images/earthday-2025-water.png"
        alt="Earth Day community event at Gravity Garden"
        className="w-full rounded-lg"
      />

      <img
        src="/assets/images/oufp_food_forest_animated.svg"
        alt="Oakland Urban Farming Project Earth Day 2026 illustrated banner"
        className="mt-8 w-full rounded-lg"
      />
    </Section>
    <Footer />
  </>
);

export default EarthDaySponsor;
