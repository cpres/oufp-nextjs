import { useEffect, useState } from 'react';

/** First instant of April 20, 2026 in America/Los_Angeles (PDT, UTC−7). Banner hides then. */
const EARTH_DAY_BANNER_END_MS = Date.parse('2026-04-20T07:00:00.000Z');

const EVENT_URL = 'https://partiful.com/e/S7Kfm7qCBui2MVlNrf9V';

const EarthDayEventBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(Date.now() < EARTH_DAY_BANNER_END_MS);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-32 z-20 px-3 sm:top-40 sm:px-6 md:top-48 lg:top-64 xl:top-72"
      role="region"
      aria-label="Earth Day event announcement"
    >
      <div className="pointer-events-auto mx-auto max-w-[min(100%,1024px)] rounded-xl border border-white/15 bg-darkGreen-900/45 px-4 py-5 text-white shadow-2xl backdrop-blur-md dark:border-darkGreen-600/30 dark:bg-darkGreen-950/45 sm:px-8 sm:py-8">
        <div className="flex flex-col items-stretch gap-4 sm:gap-6">
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-wide text-darkGreen-200 sm:text-sm">
              Gravity Garden
            </p>
            <h2 className="mt-1.5 text-[1.35rem] font-bold leading-snug sm:mt-2 sm:text-3xl md:text-4xl">
              Our annual Earth Day celebration at Gravity Garden is almost here!
            </h2>
            <p className="mt-2.5 text-sm font-medium leading-snug text-darkGreen-50 sm:mt-3 sm:text-lg">
              Earth Day Block Party · Sunday, April 19 · 12pm–4pm PT
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-darkGreen-100 sm:mt-4 sm:text-base sm:text-lg">
              In a time when coming together feels more important than ever,
              we&apos;re gathering our community for a day of fun, food, music,
              and activities — and a chance to dream up the better world we know
              is possible. <span aria-hidden="true">🌱</span>
            </p>
          </div>
          <div className="flex w-full justify-center sm:w-auto sm:justify-start">
            <a
              href={EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-darkGreen-900 sm:w-auto sm:px-8 sm:text-lg"
            >
              View Event Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EarthDayEventBanner };
