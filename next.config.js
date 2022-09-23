let {createVanillaExtractPlugin} = require('@vanilla-extract/next-plugin');
let createTM = require('next-transpile-modules');

let withVanillaExtract = createVanillaExtractPlugin()
let withTM = createTM(['@ds-pack/components'])

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  webpack(config) {
    // Changed in >= 12.3.2-canary-2, was oneOf[7]
    // configuration[0].module.rules[2].oneOf[8].include.or[1]
    if (config?.module?.rules?.[2]?.oneOf?.[8]?.include?.or) {
      config.module.rules[2].oneOf[8].include.or =
        config.module.rules[2].oneOf[8].include.or.filter(Boolean)
    }
    if (config?.module?.rules?.[2]?.oneOf?.[8]?.issuer?.or) {
      config.module.rules[2].oneOf[8].issuer.or =
        config.module.rules[2].oneOf[8].issuer.or.filter(Boolean)
    }
    return config
  },
}

// module.exports = nextConfig
// module.exports = withVanillaExtract(nextConfig)
module.exports = withTM( withVanillaExtract( nextConfig))
