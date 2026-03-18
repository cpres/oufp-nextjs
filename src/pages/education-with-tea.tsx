import Link from 'next/link';

import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import { PageTitleBanner } from '../templates/PageTitleBanner';

const EducationWithTea = () => (
  <>
    <Header />
    <Section yPadding="py-4">
      <PageTitleBanner
        title="Student Program at James Madison Elementary"
        description="Helping students grow healthier futures through school gardening."
      />

      <div className="mx-auto max-w-4xl space-y-5 px-3 text-lg leading-relaxed text-pea-900">
        <p>
          Oakland Urban Farming Project&apos;s collaboration with Madison
          Elementary School in San Leandro is a new initiative for the district,
          built on six months of prior work led by instructor Tea Parker-Essig
          with students in nearby Dublin, California.
        </p>

        <p>
          The OUFP Students program gets young people outside and into the
          garden to support physical and mental health, strengthen social
          relationships, and improve academic success. Research shows that youth
          who grow plants in school gardens are more likely to choose fruits,
          vegetables, and healthier overall meals.
        </p>

        <p>
          Madison Elementary is a Title 1 school with a student body that is
          primarily Asian (54%) and Hispanic (23%), with 69% of students coming
          from low-income households. Students participating in the OUFP
          Students program are also members of Madison&apos;s after-school Boys
          &amp; Girls Club.
        </p>

        <p>
          Gardening lessons are taught jointly by OUFP Students instructor Tea
          Parker-Essig and Madison Elementary teacher Debi Sabo. Classes cover
          plant nutrition, human nutrition, entomology, evolutionary biology,
          botanical taxonomy, the history of agriculture, current California
          farming practices, and pollination science, all designed to be
          accessible and engaging for young students.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 md:items-start">
          <div>
            <p className="font-semibold">Sample lesson titles include:</p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>&quot;What Do Plants Eat? Soil, Sun, &amp; Air&quot;</li>
              <li>
                &quot;We Are What We Eat: Plant Health &amp; Our Health&quot;
              </li>
              <li>
                &quot;Pests versus Guests: Even Bad Bugs Can Be Good!&quot;
              </li>
              <li>&quot;Plants Have Families: Where Are They From?&quot;</li>
              <li>
                &quot;Pollinator Power! The Secrets Flowers Can Tell You&quot;
              </li>
            </ul>
          </div>
          <img
            src="/assets/images/education-with-tea-team.png"
            alt="OUFP education with tea team members in the school garden"
            className="w-full rounded-lg md:justify-self-end"
          />
        </div>

        <p>
          Donations to the Sudents campaign directly support the OUFP Students program
          by covering supplies (seeds, starts, pots, soil, tools, and more) and
          gardening teacher compensation. Gifts also help us secure an
          additional $2,000 matching grant. Please mention "Sutdents Program" in the <b>Add note/comment<b> field when using the GiveButter donation form.
        </p>

        <p>
          You can support this work through our{' '}
          <Link href="/donate">
            <a className="font-semibold underline hover:no-underline">
              donation page
            </a>
          </Link>
          .
        </p>

        <p className="text-base">
          Madison Elementary statistics source:{' '}
          <a
            href="https://www.greatschools.org/california/san-leandro/295-Madison-Elementary-School/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            GreatSchools
          </a>
          .
        </p>
      </div>
    </Section>
    <Footer />
  </>
);

export default EducationWithTea;
