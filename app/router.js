'use strict'

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  // 路由分组
  require('./router/node')(app)
}
