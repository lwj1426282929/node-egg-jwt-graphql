// function asd () {}

module.exports = app => {
  // 自定义内容
  app.projectName = 'eggManual'

  // 配置文件即将加载
  app.configWillLoad(() => {
  })

  app.beforeStart(async () => {
    // 应用会等待这个函数执行完成才启动
  })

  app.ready(async () => {



    
  })

  app.beforeClose(async () => {
    // console.log('==app beforeClose==')
  })
}
