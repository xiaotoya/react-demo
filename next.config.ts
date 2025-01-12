import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/:path*', // 匹配所有以/api开头的请求
        destination: `http://localhost:8080/:path*`,
      },
      // 你可以添加更多的代理规则
    ];
  },
};

export default nextConfig;
