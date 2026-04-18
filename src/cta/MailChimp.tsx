import React from 'react';

import { Section } from '../layout/Section';

const BeehiivFormContainer = () => (
  <Section yPadding="py-6">
    <div className="flex flex-col sm:flex-row items-center justify-between w-full px-8 py-5 bg-pea-300 dark:bg-pea-700 rounded-2xl gap-4">
      <div className="flex items-center gap-3">
        <span className="text-2xl">🌿</span>
        <span className="text-xl font-bold text-pea-900 dark:text-pea-100">Stay Rooted</span>
      </div>
      <p className="text-pea-900 dark:text-pea-100 text-sm text-center sm:text-left sm:flex-1 sm:mx-6">
        Seasonal updates, nature inspirations, and project updates — straight to your inbox.
      </p>
      <div className="flex flex-col items-center gap-1">
        <a
          href="https://garden-steward.beehiiv.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-2.5 bg-pea-700 hover:bg-pea-900 dark:bg-pea-500 dark:hover:bg-pea-300 text-pea-100 dark:text-pea-900 font-semibold rounded-lg transition-colors whitespace-nowrap"
        >
          Join the Newsletter
        </a>
        <p className="text-pea-700 dark:text-pea-300 text-xs">No spam. Unsubscribe any time.</p>
      </div>
    </div>
  </Section>
);

export default BeehiivFormContainer;
