---
title: 项目目录结构
---

``` bash
bulid/ # webpack打包配置相关
script/ # node 脚本
	|-- generate.js 根据 components docs 下 .md 文件生成对应 site 下的 Vue 组件
	|-- utils 工具方法
components
	|--  _util # 公用方法
	|--  style # 组件样式 复用ant-design一般情况下不做修改
	|--  button
		|-- dome # 用法相关文档
		|-- style # 组件样式 复用ant-design一般情况下不做修改
		|-- button.vue # button组件
		|-- index.js # 出口文件
		|-- index.zh-CN.md 组件中文文档
		|-- index.en-US.md 组件英文文档
	|-- ...
examples # 开发时预览界面
	|-- common # 公用组件
	|-- routers # 路由
		|-- button # button 组件开发页面
		|-- ...
		|-- index.js # vue-router 配置
	|-- App.vue # 根组件, 在其 data.menu 中配置左侧目录
docs # 除组件外的说明文档
	|-- dev #开发相关文档
		|-- dev-rules.zh-CN.md 开发规范中文文档
site # 文档网站
	|-- docs # 由脚本生成对应 /docs 文件夹
	|-- components # 由脚本生成对应 /components 文件夹
	|-- common # 网站公共文件
		|-- layout # 布局组件
		|-- theme # 渲染 markdown 以及页面的主题 CSS
		|-- menu.js # 配置主页导航栏文件 后续将做成主动生成
	|-- App.vue 
	|-- router.js # 自动生成的路由配置文件
	|-- index.js
	|-- index.html 
		 
```