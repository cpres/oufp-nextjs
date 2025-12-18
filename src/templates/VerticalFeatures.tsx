import Link from 'next/link';

import { Button } from '../button/Button';
import MailchimpFormContainer from '../cta/MailChimp';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import VolunteerDays from '../feature/VolunteerDays';
import { Section } from '../layout/Section';

export interface VDayProps {
  volunteerdays: Array<object>;
}

const VerticalFeatures = ({ volunteerdays }: VDayProps) => (
  <Section
    title="Oakland Urban Farming Project"
    description="Building community through farming, beautification and education."
  >
    <MailchimpFormContainer />

    <VolunteerDays volunteerdays={volunteerdays} name="Gravity Garden" />

    <VerticalFeatureRow
      title="Gravity Garden"
      description="Since 2019, we've been cultivating community in Oakland's Ivy Hill neighborhood. Discover hands-on gardening techniques, contribute to our community pantry with fresh produce, and build meaningful connections with your neighbors. Whether you want to volunteer, expand your knowledge, or simply enjoy working in the garden—we welcome you to grow alongside us!"
      image="/assets/images/volunteer-square.webp"
      imageAlt="Gravity Garden"
      button={
        <Link href="https://steward.garden/gardens/gravity-garden">
          <a target="_blank" rel="noopener noreferrer">
            <Button>Head to Gravity Garden</Button>
          </a>
        </Link>
      }
    />
    <VerticalFeatureRow
      title="Learn & Harvest"
      description="On our volunteer days we teach practical farming and gardening skills like 
      mulching, composting, planting techniques, garden maintenance. One of the most important 
      garden maintenance efforts is harvesting our fruits and vegetables at the appropriate time."
      image="/assets/images/learn-square.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Protect Our Elders"
      description="The elder tree, Sambucus, is an indigenous tree to California, and is a highly versatile and beautiful tree. We're working to protect these trees from invasive species like cape ivy and help them thrive. In June we expect to see elderflowers, incredible in teas, and we all know about the glories of elderberry syrup for our immune system. Let's work together to make these incredible trees thrive and be useful to our community."
      image="/assets/images/elderberry-branch-berries.png"
      imageAlt="Protect Our Elders - Elderberry branch with berries"
      button={
        <Link href="https://steward.garden/gardens/protect-our-elders">
          <a target="_blank" rel="noopener noreferrer">
            <Button>Learn More About Protect Our Elders</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { VerticalFeatures };
