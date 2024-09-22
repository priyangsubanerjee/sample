/** @type {import('next').NextConfig} */
const { withCloudflare } = require("@cloudflare/next-on-pages");
module.exports = withCloudflare({
  reactStrictMode: true,
});
