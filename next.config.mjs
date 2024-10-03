/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: "build", // Change 'build' to your desired folder name
  // output: "export", // For static exports (if you're exporting a static site)
  output: "standalone", // For static"

  // Enable hostname for remote access image
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "graphicsfamily.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
