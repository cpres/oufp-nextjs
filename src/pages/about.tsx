import { GetStaticProps } from 'next';

export interface AboutProps {
  name: string;
}

export function About({ name }: AboutProps) {
  return (
    <div>
      <h1>Welcome, {name}</h1>
    </div>
  );
}

/*
- getStaticProps
- getStaticPaths
*/

export const getStaticProps: GetStaticProps<AboutProps> = async (ctx) => {
  console.log(ctx);
  return {
    props: {
      name: 'OUFP',
    },
  };
};

export default About;
