'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index () {
    const { ctx } = this
    ctx.body = 'hi, egg'
  }

  async node () {
    const { ctx } = this
    ctx.body = this.app.config.appPrefix
  }
}

module.exports = HomeController
