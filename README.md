### 基于webpack@3的React脚手架
```html
## 技术栈
React+Redux+Antd
```

###版本环境
```html
node 6.0+(v8.11.1)
npm 3.0+(v5.6.0)
```

### 安装依赖
* Run 'yarn'

### 开发环境
* Run 'yarn dev'

### 部署环境
* Run 'yarn build'

### 项目结构
```html
|--public  此文件下打包盒测试会copy
  |--index.html  全局入口

|--src     源文件
  |--assets         静态资源
  |--constants      常量
  |--pages          页面
    |--App          顶层布局页面
    ...
    |--Home         首页

  |--routers        顶层路由配置
  |--services       服务
  |--store          根store文件夹
  |--styles         此文件夹和node_modules不被CSS Module编译
  |--utils          工具文件夹
    |--Base.js      基础方法库
    |--Request.js   封装fetch请求

  |--index.js       全局入口js

|--package.json
|--README.md
```
