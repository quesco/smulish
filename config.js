var config = {
  development: {
    server: {
      port: 3000,
    },
    database: {
      url: 'mongodb://localhost/smulish_dev'
    }
  },
  testing: {
    server: {
      port: 3001
    },
    database: {
      url: 'mongodb://localhost/smulish_test'
    }
  },
  production: {
    server: {
      port: 8080
    },
    database: {
      url: 'mongodb://localhost/smulish'
    }
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];
