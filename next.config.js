const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const getPlugins = webpack => [
  new webpack.IgnorePlugin({
    resourceRegExp: /^scrypt$/,
  }),
  new webpack.IgnorePlugin({
    resourceRegExp: /^\.\/locale$/,
    contextRegExp: /moment$/,
  }),
];

const rules = [
  {
    test: /\.(pdf)/,
    use: {
      loader: 'file-loader',
      options: {
        name: 'docs/[name].[ext]',
        publicPath: '/_next/static',
        outputPath: 'static',
      },
    },
  },
  {
    test: /\.(html)/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        publicPath: '/_next/static',
        outputPath: 'static',
      },
    },
  },
];

const securityHeaders = [
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
];

module.exports = withBundleAnalyzer({
  webpack: (config, { webpack }) => {
    config.plugins.push(...getPlugins(webpack));
    config.module.rules.push(...rules);
    config.resolve.symlinks = false;

    return config;
  },
  pageExtensions: ['page.ts', 'page.tsx'],
  webpack5: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        // Apply these headers to the index route.
        source: '/',
        headers: securityHeaders,
      },
    ];
  },
});
