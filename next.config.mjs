/** @type {import('next').NextConfig} */

import { withCloudflare } from "@cloudflare/next-on-pages";
const nextConfig = withCloudflare({
  reactStrictMode: true,
});

export default nextConfig;
