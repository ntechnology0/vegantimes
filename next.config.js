// @ts-check
const { withBlitz } = require("@blitzjs/next")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["imagedelivery.net"],
  },
  env: {
    SWELL_STORE_ID: process.env.SWELL_STORE_ID,
    SWELL_PUBLIC_KEY: process.env.SWELL_PUBLIC_KEY,
  },
}

module.exports = withBlitz(config)
