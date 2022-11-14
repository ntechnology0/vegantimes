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
    domains: ["imagedelivery.net", "faces-img.xcdn.link"],
  },
  env: {
    S3_ACCESS_KEY: process.env.S3_ACCESS_KEY || "",
    S3_SECRET_KEY: process.env.S3_SECRET_KEY || "",
    S3_ENDPOINT: process.env.S3_ENDPOINT || "",
    S3_REGION: process.env.S3_REGION || "",
    S3_BUCKET: process.env.S3_BUCKET || "",
  },
}

module.exports = withBlitz(config)
