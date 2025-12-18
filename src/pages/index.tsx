import { GetStaticProps } from 'next';

import ThemeToggle from '../components/ThemeToggle';
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
    <div className="antialiased text-gray-600 dark:text-gray-200 bg-white dark:bg-darkGreen-950 transition-colors duration-200">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <div className="relative">
        <ThemeToggle />
        <VerticalFeatures volunteerdays={volunteerdays} />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;

export const getStaticProps: GetStaticProps<HPProps> = async ({ params }) => {
  const slug = params ? params.slug : 'gravity-garden';

  // Ensure environment variable is available
  const stewardApi = process.env.STEWARD_API;
  if (!stewardApi) {
    console.error('STEWARD_API environment variable is not set');
    return {
      props: {
        volunteerdays: [],
      },
    };
  }

  try {
    const url = `${stewardApi}/api/volunteer-days/garden/${slug}`;
    console.log('Fetching from:', url);

    const res = await fetch(url);

    if (!res.ok) {
      console.error(`API request failed: ${res.status} ${res.statusText}`);
      return {
        props: {
          volunteerdays: [],
        },
      };
    }

    const jsonData = await res.json();
    if (!jsonData) {
      return {
        notFound: true,
      };
    }
    const now = new Date();
    const filtered = jsonData.length
      ? jsonData.filter((vd: any) => new Date(vd.startDatetime) > now)
      : [];

    return {
      props: {
        volunteerdays: filtered,
      },
    };
  } catch (error) {
    console.error('Error fetching volunteer days:', error);
    return {
      props: {
        volunteerdays: [],
      },
    };
  }
};
