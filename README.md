<div align="center">
  <img src="./icon.svg">
</div>

## Antd-Vue
[![Build Status](https://travis-ci.org/zzuu666/antue.svg?branch=master)](https://travis-ci.org/zzuu666/antue)

这里是 [Ant-Design](https://ant.design/index-cn) 的 [Vue](https://vuejs.org/) **完全**实现，开发和服务于企业级后台产品。

## 开发指南
### clone代码库
``` bash
git clone git@github.com:zzuu666/antd-vue.git
cd antd-vue
npm install # 如果你用 npm 
yarn # 如果你用 yarn
npm run dev
```

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

## Doing List
组件名|负责人|进度
---|---|---
Button按钮|zzuu666|
Grid栅格| zzuu666
Menu导航菜单| zzuu666
Spin加载中 | Yangmutong | 0%
Icon图标 | zzuu666 | done

## Todo List
+ Layout布局
+ Affix固钉
+ Breadcrumb面包屑
+ Dropdown下拉菜单
+ Pagination分页
+ Steps步骤条
+ AutoComplete自动完成
+ Cascader级联选择
+ Checkbox多选框
+ DatePicker日期选择框
+ Form表单
+ InputNumber数字输入框
+ Input输入框
+ Mention提及
+ Rate评分
+ Radio单选框
+ Select选择器
+ Slider滑动输入条
+ Switch开关
+ TreeSelect树选择
+ TimePicker时间选择框
+ Transfer穿梭框
+ Upload上传
+ Avatar头像
+ Badge徽标数
+ Calendar日历
+ Card卡片
+ Carousel走马灯
+ Collapse折叠面板
+ Popover气泡卡片
+ Tooltip文字提示
+ Table表格
+ Tabs标签页
+ Tag标签
+ Timeline时间轴
+ Tree树形控件
+ Alert警告提示
+ Modal对话框
+ Message全局提示
+ Notification通知提醒框
+ Progress进度条
+ Popconfirm气泡确认框
+ Anchor锚点
+ BackTop回到顶部
+ LocaleProvider国际化

