---
title: 开发规范
---

开发组件之前请在仓库[Projects Components Development Status](https://github.com/zzuu666/antue/projects/1) TODO 中确认要开发的组件，发邮件至[antue-dev@outlook.com](mailto:antue-dev@outlook.com)认领组件，避免重复开发。

### 写在前面
> Antue 的定位是一个用 Vue 实现的**纯粹**的 Antd 组件库。所谓纯粹是指，参照 [Antd 官方文档](https://ant.design/docs/react/introduce-cn) 完全实现其样式与API。

Antue 完全复用 Antd 的 CSS 样式文件以及字体文件。我们所要做的就是将 React 组件优雅地翻译成 Vue 组件。

> 这并不是简单的复制、粘贴。

在开发过程中需要阅读 [Antd 源码](https://github.com/ant-design/ant-design) 可以学到如何开发高复用度的 Vue 组件，何时使用、如何实现舒适的过度动画，复杂业务组件的成熟解决方案，了解一些冷僻却强大的API...

### 目录结构

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

### 开发流程
1. 在 Todo List 中确认自己所开发的组件，发邮件至[zzuu666@outlook.com](mailto:zzuu666@outlook.com)，量力而行，`做最符合自己能力的事情才会沉浸其中`。
2. 参照 [Antd 源码](https://github.com/ant-design/ant-design) 建议 `git clone git@github.com:ant-design/ant-design.git --depth=10` 其中 `--depth=10` 是拉取最近 10 个 commit。
3. `git clone git@github.com:zzuu666/antd-vue.git` 并新开一个属于你的分支 `dev-{组件名}-{开发者名}`。
3. 在 components 下增加与`antd/components`相同名字的文件夹，并在这个文件夹下创建 `style` 文件夹，以及将 `antd/components/component/style/index.less `、`antd/components/component/style/mixin.less `、`antd/components/component/style/index.tsx` 复制到你所创建的 `style` 文件夹下，并把 `.tsx` 改为 `.js`, **类似的其余文件请参考 `button` 组件**。
4. 在 examples 下犹如你开发一个 Vue 应用一样配置 `routers` 下的 `index.js` 以及在此目录下创建一个与组件名相同的文件夹，好的这就是你的开发环境。



