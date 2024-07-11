module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ['localhost', 'game.lingti.com', 'lingti-1302055788.cos.ap-guangzhou.myqcloud.com', 'res.lingti666.com', 'assets.ruilisi.com'],
  },
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
    ];
  },
};