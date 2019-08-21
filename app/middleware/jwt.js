const jsonwebtoken = require('jsonwebtoken')

module.exports = (options, app) => {
  return async (ctx, next) => {
    const token =
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bml0TmFtZSI6IuWchumAmumAn-mAkuaciemZkOWFrOWPuCIsInVzZXJfbmFtZSI6IjAwMDAwMDMyIiwicG9zaXRpb25zIjpbeyJuYW1lIjoi57uT566X57O757uf566h55CG57uE57uT566X57O757uf566h55CG57uE57uP55CGIiwiY29kZSI6IjEwMDJWMjEwMDAwMDAwMUFYNEVXIiwiam9iQ29kZSI6IkZVMDIwMTA2MDEifV0sInVuaXRzIjpbeyJuYW1lIjoi57uT566X57O757uf566h55CG57uEIiwidW5pdENvZGUiOiI5OTk5OTlGVTAyMDEwNiJ9XSwidXNlck5hbWUiOiLnlLPlsaDmsLjlr4wiLCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl0sIm1hYyI6IjhDLUVDLTRCLTkyLTA0LTlCIiwiY2xpZW50X2lkIjoiZGVtbyIsInNjb3BlIjpbIndyaXRlIiwicmVhZCJdLCJ1bml0Q29kZSI6Ijk5OTk5OSIsInVzZXJUeXBlIjoiMSIsImV4cCI6MTU2NjQxMjg2MCwianRpIjoiZjJiOTdiODktMGQwMi00ZTlhLTgyZTktODk5NGRlZTUyMDFlIn0.bfSuq8xzLZ8rC-Js7gTjRBC9HvYv72a-P26vjGu-gs3IBP_LYjFdEEVogShRfXgIHQrNcGxwd0N3ZwhNn3f0MxuzC5PiEgsNedzLQ2z0ZnbFdLgDk9__-Lcu1_mFQSLK-YMRYEphjXsGcJWeOXHoIOFJiSXGuJwMSP9FjEdHbJtKP97rqhGUNWdZsYO4Ai0Hk4fQXtPvBK560bO1IvWQ4ZHpywfaK9Xm0njkrhpyIF2GSo8XLiJtQnB0WpW2tVECotSVD195B7-13LWnKyaMeXNbBUeC6NjT-yEPctIYuUyS7qB5nhGo5OHnBSbKO3HVJLlxf7lEj1p1ogTnXjB0Jg'
    const decoded = jsonwebtoken.decode(token)
    if (options && app && decoded) {
      await next()
    } else {
      ctx.body = '401'
    }
  }
}
