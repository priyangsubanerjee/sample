/** @type {import('next').NextConfig} */

import { withCloudflare } from "@cloudflare/next-on-pages";

export default withCloudflare({
  reactStrictMode: true,
});
