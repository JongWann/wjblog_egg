'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1518055019583_5115';

  // add your config here
  config.middleware = [];

  config.mongoose = {
    url: 'mongodb://novel:123456@127.0.0.1:27017/novel',
    options: {},
  };

  config.view = {
    mapping: {
      '.ejs': 'ejs',
    },
  };

  config.logger = {
    consoleLevel: 'DEBUG',
  };

  config.security = {
    csrf: {
      enable: false,
      // if useSession set to true, the secret will keep in session instead of cookie
      useSession: true,
      // skip check JSON requests if ignoreJSON set to true
      ignoreJSON: false,
      // csrf token's cookie name
      cookieName: 'csrfToken',
      // csrf token's session name
      sessionName: 'csrfToken',
      // request csrf token's name in header
      headerName: 'x-csrf-token',
      // request csrf token's name in body
      bodyName: '_csrf',
      queryName: '_csrf',
    },
  };
  return config;
};
