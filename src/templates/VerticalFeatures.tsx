import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Oakland Urban Farming Project"
    description="Building community through farming, beautification and education."
  >
    <VerticalFeatureRow
      title="Volunteer Events"
      description="Oakland Urban Farming Project is always looking for more ways to create a greater sense of community and a stronger connection to the Earth for our volunteers. Whether you're looking to give back, learn more about urban gardening, meet new friends, or fit a great outdoor workout into your schedule, we have events and projects for you!"
      image="/assets/images/volunteer-square.webp"
      imageAlt="Volunteer"
    />
    <VerticalFeatureRow
      title="Learn & Harvest"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/learn-square.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Food Pantry"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/pantry-square.webp"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
