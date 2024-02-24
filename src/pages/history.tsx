import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
// import { Footer } from './Footer';
const History = () => (
  <>
    <Header />
    <Section
      title="History of OUFP"
      description="Since establishing in 2021 we have continuously worked to be a beacon of light in our community"
    >
      <div className="text-lg leading-loose">
        <p className="mt-5">
          The Oakland Urban Farming Project (OUFP) was born in 2021, rooted in
          the collective efforts of a few friends in the Ivy Hill neighborhood
          of Oakland, California. It all started when Cameron Preston
          established Gravity Garden in 2019 on a triangle-shaped plot behind
          Dave&apos;s Market. His dedication quickly caught the eye of community
          members Rajiv Thairani, Jon Braswell, and Lance Hackney, who joined
          forces to set up a food pantry table during the peak of the pandemic
          in 2020. This initiative not only provided essential support to the
          community but also marked the space as a communal area, fostering a
          sense of camaraderie focused on community support and beautification.
        </p>
        <div className="flex flex-col md:flex-row md:items-start">
          <p className="mt-5 md:w-1/2">
            With a new sense of teamwork, we set our sights on the hill across
            the street from the original garden space. Working with the
            landowner to garden on their property, in late 2020, while still in
            final negotiations, we gathered our list of interested community
            members and had a brainstorming day of what people would like to see
            on the space. This early engagement helped shape the vision for the
            expansion and ensured that the project would meet the needs and
            desires of the community.
          </p>
          <img
            src="/assets/images/neighbors-2020.jpg"
            alt="Descriptive Alt Text"
            className="mt md:mt-0 md:ml-15 md:w-1/2 pl-10 pt-5 pb-5 pr-5"
          />
        </div>
        <p className="mt-5">
          Filled with inspiration from the community we pressed through with the
          land owner to finally break ground on the hill. The team managed to
          more than triple the garden&apos;s size by 2021. A Permaculture Design
          course team, led by Cameron, devised a plan to develop the hill
          garden, introducing swales and berms for effective water management.
          The project continued to grow in 2022 and 2023, attracting new members
          like muralist Sasha Dusky, who contributed her artistic talents
          starting with a Pumpkin Fundraiser sign, and Plur, a neighebor whose
          dedication transformed the original garden space.
        </p>
        <p className="mt-5">
          By late 2023, the two gardens merged into a cohesive unit, symbolized
          by a street mural designed by Sasha. In collaboration with the city of
          Oakland, OUFP realized this vision, culminating in the largest
          volunteer day to date. The community came together to paint the mural,
          significantly enhancing the neighborhood&apos;s landscape and
          solidifying the project&apos;s impact.
        </p>
        <img
          src="/assets/images/street-mural-aereal.jpg"
          alt="Street Mural Project Gravity Garden"
          className="md:p-20 pt-5"
        />
      </div>
    </Section>
    <Footer />
  </>
);

export default History;
