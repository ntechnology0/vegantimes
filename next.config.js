// @ts-check
const { withBlitz } = require("@blitzjs/next")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  compiler: {
    styledComponents: true,
  },
}

module.exports = withBlitz(config)
