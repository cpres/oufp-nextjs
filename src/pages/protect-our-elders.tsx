import { InstagramEmbed } from 'react-social-media-embed';

import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';

const Elders = () => (
  <>
    <Header />
    <Section title="Protect Our Elders" description="Honoring the elder trees.">
      <p className="p-3">
        The elder tree, Sambucus, is an indigenous tree to California, and is a
        highly versatile and beautiful tree. So why not make sure it thrives
        here!
      </p>
      <p className="p-3">
        We are beginning our protection volunteer efforts in partnership with
        the Friends of Sausal Creek, a few minutes north of first garden, the
        Gravity Garden. There are multiple groupings of trees along the top part
        of the trail that are being overwhelmed by cape ivy. Elders also
        appreciate being pruned back to allow for healthier growth.
      </p>
      <p className="p-3">
        Now back to the versatile nature of these splendid trees. In June we
        will expect to see elderflowers, incredible in teas and much more. We
        all know about the glories of elderberry syrup for our immune system, it
        comes from these incredible trees, and they appreciate being harvested!
        Lets work together to make these incredible trees thrive and be useful
        to our community.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CoDe-L1D-Bl/"
          width={328}
        />
      </div>
    </Section>
    <Footer />
  </>
);

export default Elders;
