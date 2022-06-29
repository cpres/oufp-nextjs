import MailchimpFormContainer from '../cta/MailChimp';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Oakland Urban Farming Project"
    description="Building community through farming, beautification and education."
  >
    <MailchimpFormContainer />

    <VerticalFeatureRow
      title="Volunteer Events"
      description="Oakland Urban Farming Project is always looking for more ways to create a greater sense of community and a stronger connection to the Earth for our volunteers. Whether you're looking to give back, learn more about urban gardening, meet new friends, or fit a great outdoor workout into your schedule, we have events and projects for you!"
      image="/assets/images/volunteer-square.webp"
      imageAlt="Volunteer"
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
      title="Food Pantry"
      description="Originally put in place at the beginning of the pandemic as a table, we have gone and upgraded to a vertical pantry with a tiled floor. People across the community both donate, and take what they need daily. If you're looking for an easy way to support the community look no further than donating food here"
      image="/assets/images/pantry-square.webp"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
