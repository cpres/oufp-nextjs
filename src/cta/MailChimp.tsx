import React from 'react';

import { Section } from '../layout/Section';

const BeehiivFormContainer = () => (
  <Section yPadding="py-6">
    <div className="flex flex-col items-center text-center p-10 bg-[#e8e4d9] rounded-2xl max-w-sm mx-auto gap-3">
      <span className="text-3xl">🌿</span>
      <div className="text-2xl font-bold text-[#2d5a3d]">Stay Rooted</div>
      <p className="text-gray-600 text-sm">
        Seasonal updates, nature inspirations, and project updates — straight to your inbox.
      </p>
      <a
        href="https://garden-steward.beehiiv.com/subscribe"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 px-8 py-3 bg-[#5a7a5a] hover:bg-[#4a6a4a] text-white font-semibold rounded-lg transition-colors"
      >
        Join the Newsletter
      </a>
      <p className="text-gray-400 text-xs">No spam. Unsubscribe any time.</p>
    </div>
  </Section>
);

export default BeehiivFormContainer;
