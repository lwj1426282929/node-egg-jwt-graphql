'use strict'

module.exports = appInfo => {
  const config = {}

  /**
   * @member Config#
   * @property {String} KEY - description
   */
  config.appPrefix = appInfo.name

  return config
}
