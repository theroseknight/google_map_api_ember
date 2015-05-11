/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'google-maps-api-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy:{
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' https://*.googleapis.com http://*.googleapis.com https://*.gstatic.com", // Allow scripts from https://cdn.mxpnl.com
      'font-src': "'self' https://*.gstatic.com http://fonts.gstatic.com/s/benchnine/v4/qZpi6ZVZg3L2RL_xoBLxWegdm0LZdjqr5-oayXSOefg.woff2 http://fonts.gstatic.com/s/benchnine/v4/qZpi6ZVZg3L2RL_xoBLxWT0LW-43aMEzIO6XUTLjad8.woff2", // Allow fonts to be loaded from http://fonts.gstatic.com
      'connect-src': "'self' localhost:3000 https://*.googleapis.com", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
      'img-src': "'self' https://*.googleapis.com https://*.gstatic.com",
      'style-src': "'self' 'unsafe-eval' 'unsafe-inline' https://*.googleapis.com http://*.gstatic.com http://fonts.googleapis.com/css?family=BenchNine:700", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
      'media-src': "'self'"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
