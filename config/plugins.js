module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('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'),
        },
        settings: {
          defaultFrom: 'medinalakerealty@aol.com',
          defaultReplyTo: 'medinalakerealty@aol.com',
        },
      },
    },
    // ...
  });