import React, { FormEvent, useState } from 'react';

import { Section } from '../layout/Section';

// The Garden Steward newsletter Worker (newsletter-engine/tracking-worker). It sends a
// thank-you email with a confirm button and a link into journal.steward.garden.
const ENDPOINT =
  process.env.NEXT_PUBLIC_NEWSLETTER_URL ||
  'https://garden-steward-newsletter-tracking.cameron-a78.workers.dev';

type State = 'idle' | 'sending' | 'sent' | 'error';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [state, setState] = useState<State>('idle');
  const [message, setMessage] = useState('');

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setState('sending');
    setMessage('');
    try {
      const res = await fetch(`${ENDPOINT}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'oufp', website }),
      });
      const body = await res.json().catch(() => ({}));
      setState(res.ok && body.ok ? 'sent' : 'error');
      setMessage(body.message || 'Something went wrong. Please try again.');
    } catch {
      setState('error');
      setMessage(
        "We couldn't reach the newsletter just now. Please try again."
      );
    }
  };

  return (
    <Section yPadding="py-6">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full px-8 py-5 bg-pea-300 dark:bg-pea-700 rounded-2xl gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🌿</span>
          <span className="text-xl font-bold text-pea-900 dark:text-pea-100 whitespace-nowrap">
            Stay Rooted
          </span>
        </div>
        <p className="text-pea-900 dark:text-pea-100 text-sm text-center lg:text-left lg:flex-1 lg:mx-6">
          Seasonal updates, nature inspirations, and project updates — straight
          to your inbox.
        </p>
        {state === 'sent' ? (
          <p
            className="text-pea-900 dark:text-pea-100 text-sm font-semibold text-center lg:text-left max-w-xs"
            role="status"
          >
            {message} Meanwhile, wander into the{' '}
            <a href="https://journal.steward.garden" className="underline">
              journal
            </a>
            .
          </p>
        ) : (
          <div className="flex flex-col items-center gap-1 w-full lg:w-auto">
            <form
              onSubmit={submit}
              className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto"
            >
              <label htmlFor="oufp-newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="oufp-newsletter-email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={state === 'sending'}
                className="px-4 py-2.5 rounded-lg text-pea-900 bg-white border border-pea-500 focus:outline-none focus:ring-2 focus:ring-pea-700 min-w-0 sm:w-64"
              />
              {/* Hidden from people; bots fill it in and are quietly ignored */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="absolute -left-[10000px] w-px h-px overflow-hidden"
              />
              <button
                type="submit"
                disabled={state === 'sending'}
                className="px-7 py-2.5 bg-pea-700 hover:bg-pea-900 dark:bg-pea-500 dark:hover:bg-pea-300 text-pea-100 dark:text-pea-900 font-semibold rounded-lg transition-colors whitespace-nowrap disabled:opacity-70"
              >
                {state === 'sending' ? 'Joining…' : 'Join the Newsletter'}
              </button>
            </form>
            {state === 'error' ? (
              <p
                className="text-red-800 dark:text-red-200 text-xs font-semibold"
                role="status"
              >
                {message}
              </p>
            ) : (
              <p className="text-pea-700 dark:text-pea-300 text-xs">
                We&apos;ll email you a link to confirm. No spam.
              </p>
            )}
          </div>
        )}
      </div>
    </Section>
  );
};

export default NewsletterSignup;
