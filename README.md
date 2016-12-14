# Z-blog

本仓库是一个简单的个人博客，前端采用React栈，服务端使用Node，该博客还在完成中，由于个人能力还很有限，所以可能会出现一些问题，请大家多多指教~

## 项目运行


**第一步：安装**

1 把仓库克隆到本地并进入仓库根目录
```
git clone https://github.com/fdzqz/Z-blog.git
cd Z-blog
```

2 安装项目依赖项
```
npm i
```
3 如果没有全局安装过webpack，请使用下面命令安装
```
npm i -g webpack
```

**第二步：使用**

1 对文件进行编译和打包
```
npm run pro
```

2 没有安装mongodb的请自行安装，安装后打开命令行工具进入mongodb文件根目录的bin文件夹（如D:/mongodb/bin），输入下面的命令
```
mongod --dbpath D:/mongodb/data
```
3 现在就可以使用`npm start`启动服务器了

**第三步：访问**

1 在浏览器输入`localhost:3000`访问这个个人博客了


## 技术选型
- 前端：React + React-router + Redux + Webpack + ES6 + Fetch
- 后台：Express + MongoDB

## 项目目录
- README.md：项目说明。
- package.json：包信息详情。
- webpack.config.dev.js：webpack开发环境打包文件，使用`npm run dev`打开。
- webpack.config.pro.js：webpack生产环境打包文件，使用`npm run pro`打开。
- .babelrc：babel配置文件。
- app.js：项目入口 文件。
- config：配置文件。
- book：完成项目过程中写的博文。

- M
  - lib：数据库模型数据定义。
  - models：数据库模型操作方法。

- V
  - app：存放构建前的前端文件。
  - public：存放生产环境的前端构建文件。
  - build：存放开发环境的前端构建文件。

- C
  - middlewares：存放中间件。
  - routes：在index.js里写页面路由，其它写接口路由。


## 开发环境
- 文件配置（webpack，babel）
    - 学会使用webpack-dev-server，在开发时使用
- 依赖安装（一些依赖的功能）

## 页面功能
- 博文列表页（首页）
- 博文详细页
- 简历页
- 后台管理
    - 博文展示
    - 博文编辑
    - 博文增加
- 登录注册页

## 前端开发

## 开发思路

- 开发
  - 前后端同时进行，写完一张页面的前端功能后便写它的后台功能。

- 前端
  - 在app使用redux架构，把前端应用架构好。
  - 后台路由分开写。

- 后台
  - 数据库采用mongodb，数据和方法要分开。
  - 路由编写：在app.js写routes(app) - 在routes/index.js中做页面分发 - 后面每一个路由为一个文件模块。
  - 登录账号写死，评论账号使用多说。


