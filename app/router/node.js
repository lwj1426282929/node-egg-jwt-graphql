'use strict'

module.exports = app => {
  const { router, controller } = app

  router.get('/node/v1', controller.home.node)
}
