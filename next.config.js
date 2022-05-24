const withPWA = require("next-pwa");

module.exports = withPWA({
  assetPrefix: '/todo-timer',
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  reactStrinctMode: true,
});