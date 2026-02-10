module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '256kb',
      formLimit: '256kb',
      textLimit: '256kb',
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
