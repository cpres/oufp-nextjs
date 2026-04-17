import React, { useState } from 'react';

import { Section } from '../layout/Section';

const BeehiivFormContainer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section yPadding="py-6">
      <div className="text-center flex flex-col p-2 sm:text-left sm:items-center sm:justify-between sm:p-12 bg-primary-100 text-gray-900 dark:bg-pea-500 dark:text-black rounded-md">
        <div className="text-2xl font-semibold text-center mb-4">
          Join our Newsletter
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-6 py-2 bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-600 disabled:opacity-50"
          >
            {status === 'sending' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {status === 'success' && (
          <div className="mt-2 text-sm text-green-700">You&apos;re subscribed!</div>
        )}
        {status === 'error' && (
          <div className="mt-2 text-sm text-red-700">
            Something went wrong. Please try again.
          </div>
        )}
      </div>
    </Section>
  );
};

export default BeehiivFormContainer;
