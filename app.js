module.exports = app => {
  // 自定义内容
  app.projectName = 'eggManual'

  /* hooks */

  // 配置文件即将加载
  app.configWillLoad(() => {})

  app.beforeStart(async () => {})

  app.ready(async () => {})

  app.beforeClose(async () => {})
}
