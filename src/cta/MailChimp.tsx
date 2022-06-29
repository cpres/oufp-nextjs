import React from 'react';

import MailchimpSubscribe from 'react-mailchimp-subscribe';

import { Section } from '../layout/Section';

const postUrl = `https://oufp.us14.list-manage.com/subscribe/post?u=9275a74144a182d86c250e30b&amp;id=2edaacb8a1`;
// const SimpleForm = () => <MailchimpSubscribe url={postUrl}/>

const MailchimpFormContainer = () => {
  return (
    <Section yPadding="py-6">
      <MailchimpSubscribe
        url={postUrl}
        render={({ status, message }) => (
          <div className="basic-form text-center flex flex-col p-2 sm:text-left sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
            <div className="text-xl font-semibold">
              <div className="text-2xl text-gray-900 text-center">
                Join our email newsletter!
              </div>
              <MailchimpSubscribe url={postUrl} />
            </div>
            {status === 'sending' && (
              <div style={{ color: 'blue' }} className="text-sm">
                sending...
              </div>
            )}
            {status === 'error' && (
              <div
                style={{ color: 'red' }}
                className="text-sm"
                dangerouslySetInnerHTML={{
                  __html:
                    typeof message === 'string'
                      ? message
                      : "I'm sorry looks like that's not working right now. Use the Contact form in the meantime to let us know!",
                }}
              />
            )}
            {status === 'success' && (
              <div style={{ color: 'green' }} className="text-sm">
                Subscribed !
              </div>
            )}
          </div>
        )}
      />
    </Section>
  );
};

export default MailchimpFormContainer;
