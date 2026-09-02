/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statik export: Cloudflare Workers static assets ile calisir
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
