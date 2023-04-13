import { GetStaticProps } from 'next';

import { Meta } from '../layout/Meta';
import { Footer } from '../templates/Footer';
import { Hero } from '../templates/Hero';
import { VerticalFeatures } from '../templates/VerticalFeatures';
import { AppConfig } from '../utils/AppConfig';

export interface HPProps {
  volunteerdays: Array<object>;
}

export function Homepage({ volunteerdays }: HPProps) {
  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <VerticalFeatures volunteerdays={volunteerdays} />
      <Footer />
    </div>
  );
}

export default Homepage;

export const getStaticProps: GetStaticProps<HPProps> = async ({ params }) => {
  const slug = params ? params.slug : 'gravity-garden';
  const res = await fetch(
    `${process.env.STEWARD_API}/api/volunteer-days/garden/${slug}`
  );

  const jsonData = await res.json();
  if (!jsonData) {
    return {
      notFound: true,
    };
  }
  const now = new Date();
  const filtered = jsonData.filter(
    (vd: any) => new Date(vd.startDatetime) > now
  );

  return {
    props: {
      volunteerdays: filtered,
    },
  };
};
