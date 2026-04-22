/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1elzbunB8PFI6MV5zUJWXba1sV3_Hrd1G/view?usp=drive_link",
        permanent: true,
      },
      {
        source: "/fe-resume",
        destination:
          "https://drive.google.com/file/d/1p5EiMmBzp2fbrSOlPXeFvgA-3GCIMeGI/view?usp=drive_link",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
