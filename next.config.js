module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  env: {
    REACT_APP_API_DOMAIN: process.env.REACT_APP_API_DOMAIN,
  },
};
