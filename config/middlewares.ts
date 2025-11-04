export default ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            `https://${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`,
            env('AWS_CDN_URL'),
          ].filter(Boolean),
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            `https://${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`,
            env('AWS_CDN_URL'),
          ].filter(Boolean),
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
