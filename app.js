/**
 * 程序主入口
 */
const path = require('path'),
      express = require('express'),
      session = require('express-session'),
      MongoStore = require('connect-mongo')(session),
      favicon = require('express-favicon'),
      config = require('config-lite'),
      routes = require('./routes'),
      app = express()

// 设置模板目录
// app.set('views', path.join(__dirname, 'views'))
// 设置模板引擎为 ejs
// app.set('view engine', ejs)

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')))
// app.use(favicon(path.join(__dirname, './public/image/favicon.ico')))

// session 中间件
app.use(session({
    // cookie中保存session id的字段名称
    name: config.session.key,
    secret: config.session.secret,
    cookie: {
        // 过期时间，过期后cookie中的session id自动删除
        maxAge: config.session.maxAge
    }，
    store: new MongoStore({
        // 将session存储到mongodb
        url: config.mongodb
    })
}))

// 处理表单及文件上传的中间件
app.use(require('express-formidable')({
    uploadDir: path.join(__dirname, 'public/img/form-img'),
    keepExtensions: true
}))

// 路由
routes(app)

// 如果该模块被require，module.parent指第一个require此模块的文件
if (module.parent) {
    module.export = app
} else {
    // 监听端口，启动程序
    app.listen(config.port, () => {
        console.log(`server listening on port ${config.port}`)
    })
}



