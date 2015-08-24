# reacjs + reflux 最佳实践
* 前端架构:
     + reactjs 创建组件
     + reflux模型
     + webpack打包
     + 百度echarts
     + grunt配置轻量任务
     + less语法糖
     + ES6 + babel解析器

## getting start

### 本地开发
 * `npm install`
 * `grunt serve`
   + grunt serve会启动本地开发服务器 webpack-dev-server
   + webpack-dev-server方便使用热替换,程序一修改,界面马上改变
   + 所以本地开发路径为:[http://localhost:8000/webpack-dev-server/](http://localhost:8000/webpack-dev-server/) 不要奇怪
 * `grunt test` 跑测试

### 线上模式
 * `npm install`
 * `grunt test`
 * `grunt build`
  + 在dist 目录生产静态的文件,挂载到nignix 就行了

### 参考资料
 * reactjs
   + [reactjs](http://facebook.github.io/react/)是以组件为基础,基于虚拟DOM和单向数据流的前端javascript库
   + [reactjs 中文网](http://reactjs.cn/)

 * flux结构
  + [flux](https://github.com/facebook/flux)是一种前端架构,区别于传统前端MVC
  + [reflux](https://github.com/reflux/refluxjs)是flux结构的一种具体实现

 * webpack
  + [webpack](https://webpack.github.io/)是模块加载器,其允许把npm包,图片和css整体打包到前端

 * 百度echarts
  + [echarts](http://echarts.baidu.com/) 是百度开发的基于zRender库的开源图表库
