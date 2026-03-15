import Script from 'next/script';

import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import { PageTitleBanner } from '../templates/PageTitleBanner';

const EarthDayFundraise = () => (
  <>
    <Header />
    <Script src="https://widgets.givebutter.com/latest.umd.cjs?acct=Lscxchi3SB8UkBgS&p=other" />
    <Section yPadding="py-4">
      <PageTitleBanner
        title="Earth Day Fundraiser 2026"
        description="Support our Earth Day community celebration at Gravity Garden."
      />
      <img
        src="/assets/images/earthday-2025-event.png"
        alt="Earth Day event at Gravity Garden"
        className="w-full rounded-lg"
      />

      <div className="flex flex-col md:flex-row">
        <div className="space-y-4 p-3 md:w-1/2">
          <p>
            The Oakland Urban Farming Project is turning Earth Day into a full
            community celebration - and we need your support to make it happen!
          </p>

          <p>
            At the heart of Oakland&apos;s Ivy Hill neighborhood, the{' '}
            <strong>Gravity Garden</strong> is more than a garden. It&apos;s a
            food forest, a gathering place, and a living example of what
            communities can build together. We run a{' '}
            <strong>free pantry</strong> stocked with fresh produce for
            neighbors in need, host{' '}
            <strong>volunteer days and workshops</strong>, and create public art
            that makes our streets more beautiful and connected - like our
            painted street mural linking our two garden spaces.
          </p>

          <p>
            <strong>This Earth Day, we&apos;re going bigger than ever.</strong>{' '}
            We&apos;re building our <strong>community cob oven</strong> - a
            handcrafted earthen oven made from reclaimed and natural materials -
            and we&apos;re celebrating its completion with a community event
            featuring pizza-making, bread baking, live music, and neighbors
            coming together.
          </p>

          <p>🌱 Sponsor our event and your business will be:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>
              Listed on our event flyer, distributed across the neighborhood and
              online
            </li>
            <li>
              Shouted out on the mic at our official kickoff when we welcome the
              community
            </li>
            <li>
              Recognized as a partner in Oakland community wellness, food
              justice, and neighborhood beautification
            </li>
          </ul>

          <p>
            We&apos;re raising $3,000 to cover event supplies, materials, food,
            and programming that makes this day free and accessible for
            everyone, while also supporting our planting, building, restoration,
            and beautification projects throughout the city.
          </p>

          <p>
            If building stronger, more beautiful, more nourished communities
            matters to your business - this is your moment to show up for
            Oakland.
          </p>

          <p>🌻 Come grow with us.</p>
        </div>

        <div className="flex justify-center p-3 md:w-1/2">
          <givebutter-widget id="gOr84L"></givebutter-widget>
        </div>
      </div>

      <img
        src="/assets/images/oufp_food_forest_animated.svg"
        alt="Oakland Urban Farming Project Earth Day 2026 illustrated banner"
        className="mt-8 w-full rounded-lg"
      />
    </Section>
    <Footer />
  </>
);

export default EarthDayFundraise;
