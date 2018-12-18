# miniprogram

> A MPVue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 初期架构设想  design by fuxuli
UI :iview-weapp

交互:
   mpvue（主要）

   mpvue-entry：(集中式页面配置，自动生成各页面的入口文件，优化目录结构，支持新增页面热更新）

   mpvue-router-patch（在 mpvue 中使用 vue-router 兼容的路由写法）

数据请求：flyio（类axios）

ps:趟坑之路实属不易，若觉有用，请点star,若对项目有更好的建议，尽请联系
